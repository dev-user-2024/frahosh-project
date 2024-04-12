import 'package:farahoosh/app/presentation/blocs/lesson_grades/lesseon_grades_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/courseGradesBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/score/diagram/scoreDiagram.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/const/datacolors.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../modules/widgets/dropdownButton.dart';

class ScoresPage extends StatelessWidget {
  ScoresPage({super.key});

  final LesseonGradesCubit _cubit = LesseonGradesCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            // appbar
            toApp(context: context, title: "نمرات"),

            // choose score title
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child:
                          BlocBuilder<LesseonGradesCubit, LesseonGradesState>(
                        bloc: _cubit,
                        builder: (context, state) {
                          if (state is LesseonGradesLoading) {
                            return Text('loading');
                          }
                          if (state is LesseonGradesError) {
                            return Text('error');
                          }
                          return Column(
                            children: [
                              Padding(
                                padding:
                                    const EdgeInsets.only(top: 10, right: 5),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "درس",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 20,
                              ),
                              Container(
                                height: 58,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                  //  border: Border.all(color: SolidColors.blu, width: 1),
                                ),
                                child: dropdownButton(
                                  (state as LesseonGradesGeneralWithoutGrades)
                                      .lessons[(state).selectedIndex]
                                      .title,
                                  state.lessons.map((e) => e.title).toList(),
                                  textTheme,
                                  onChanged: (p0) {
                                    if (p0 != null) {
                                      _cubit.selectLesson(p0);
                                    }
                                  },
                                ),
                              ),
                              const SizedBox(
                                height: 40,
                              ),
                              Column(
                                children: state.lessons
                                    .map(
                                      (e) => Container(
                                        width: double.infinity,
                                        margin:
                                            const EdgeInsets.only(bottom: 10),
                                        decoration: BoxDecoration(
                                          color: SolidColors.white,
                                          border: Border.all(
                                              color: SolidColors.white,
                                              width: 0.3),
                                          borderRadius:
                                              BorderRadius.circular(15),
                                          boxShadow: [
                                            BoxShadow(
                                              color: SolidColors.black
                                                  .withOpacity(0.1),
                                              spreadRadius: 1,
                                              blurRadius: 1,
                                              offset: const Offset(0,
                                                  1), // changes position of shadow
                                            ),
                                          ],
                                        ),
                                        child: Padding(
                                          padding: EdgeInsets.only(
                                            top: size.height / 27,
                                            bottom: size.height / 27,
                                          ),
                                          child: Column(
                                            children: [
                                              Padding(
                                                padding:
                                                    const EdgeInsets.symmetric(
                                                        horizontal: 20),
                                                child: Row(
                                                  mainAxisAlignment:
                                                      MainAxisAlignment
                                                          .spaceBetween,
                                                  children: [
                                                    Container(),
                                                    SizedBox(
                                                      width: size.width / 1.5,
                                                      child: Row(
                                                        mainAxisAlignment:
                                                            MainAxisAlignment
                                                                .spaceBetween,
                                                        children: [
                                                          Text(
                                                            "مشاهده نمودار درس ${e.title}",
                                                            style:
                                                                const TextStyle(
                                                              fontSize: 15,
                                                              decoration:
                                                                  TextDecoration
                                                                      .none,
                                                              color: SolidColors
                                                                  .black,
                                                            ),
                                                          ),
                                                          Image.asset(
                                                            Assets.icons
                                                                .arrowLeft.path,
                                                            color: SolidColors
                                                                .black,
                                                          ),
                                                        ],
                                                      ),
                                                    ),
                                                  ],
                                                ).toClick(onTap: (() {
                                                  Navigator.of(context).push(
                                                      MaterialPageRoute(
                                                          builder: ((context) =>
                                                              const ScoreDiagram())));
                                                })),
                                              )
                                            ],
                                          ),
                                        ),
                                      ),
                                    )
                                    .toList(),
                              ),
                              const SizedBox(
                                height: 25,
                              ),
                              Column(
                                children:
                                    state is LesseonGradesGeneralWithGrades
                                        ? state.grades
                                            .map((e) => CourseGradesBox(
                                                title: e.title,
                                                date: e.date,
                                                score: e.grade,
                                                size: size,
                                                textTheme: textTheme))
                                            .toList()
                                        : [Text('loading')],
                              ),
                              const SizedBox(height: 150,),
                            ],
                          );
                        },
                      ),
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
