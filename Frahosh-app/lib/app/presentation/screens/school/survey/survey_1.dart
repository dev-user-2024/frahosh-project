import 'package:farahoosh/app/presentation/blocs/survey_groups/survey_groups_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/testsDoneBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/survey/survey_2.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/const/datacolors.dart';

class Survey1 extends StatelessWidget {
  Survey1({super.key});

  final SurveyGroupsCubit _cubit = SurveyGroupsCubit();
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
            toApp(context: context, title: "نظرسنجی"),

            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(20,0,20,150),
                      child: BlocBuilder<SurveyGroupsCubit, SurveyGroupsState>(
                        bloc: _cubit,
                        builder: (context, state) {
                          if (state is SurveyGroupsLoading) {
                            return Text('loading');
                          }
                          if (state is SurveyGroupsError) {
                            return Text('error');
                          }
                          return Column(
                            children: [
                              const SizedBox(
                                height: 20,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.only(top: 10, right: 5),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "تکمیل نشده",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 25,
                              ),
                              ...(state as SurveyGroupsGeneral).groups.map(
                                    (e) => Padding(
                                      padding:
                                          const EdgeInsets.only(bottom: 25),
                                      child: InkWell(
                                        child: TestsDoneBox(
                                            title: e.title,
                                            date: e.formattedDate,
                                            size: size,
                                            textTheme: textTheme),
                                        onTap: () {
                                          Navigator.of(context).push(
                                              MaterialPageRoute(
                                                  builder: ((context) =>
                                                      const Survey2())));
                                        },
                                      ),
                                    ),
                                  ),
                            ],
                          );
                        },
                      ),
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
