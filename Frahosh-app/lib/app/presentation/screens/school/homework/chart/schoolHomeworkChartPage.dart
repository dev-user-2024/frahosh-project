import 'package:farahoosh/app/presentation/blocs/homeworks/homeworks_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../modules/widgets/chart/circular.dart';
import '../../../../modules/widgets/chart/homeworkPositionChart.dart';
import '../../../../modules/widgets/dropdownButton.dart';
import '../../../../modules/widgets/navbar/navbar.dart';

class SchoolHomeworkChart extends StatelessWidget {
  SchoolHomeworkChart({super.key});
  final HomeworksCubit _cubit = HomeworksCubit();
  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'انجام شده',
      'در حال انجام',
    ];
    String? selectedItem = 'انجام شده';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "تکالیف"),
            Expanded(
              child: Stack(children: [
                SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: BlocBuilder<HomeworksCubit, HomeworksState>(
                      bloc: _cubit,
                      builder: (context, state) {
                        if (state is HomeworksLoading) {
                          return Text('loading');
                        }
                        if (state is HomeworksError) {
                          return Text('error');
                        }
                        return Column(children: [
                          const SizedBox(
                            height: 10,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                'درصد انجام کل تکالیف',
                                style: textTheme.subtitle1,
                              ),
                            ],
                          ),
                          const CirculatorChart(),
                          const SizedBox(
                            height: 30,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Container(
                                width: size.width / 2.3,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          ...(state as HomeworksGeneral).homeworks.map(
                                (e) => Padding(
                                  padding: const EdgeInsets.only(bottom: 25),
                                  child: homeworkPositionChart(
                                          context, '', e.percent, e.title)
                                      .toClick(onTap: (() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                const SchoolHomeworksText())));
                                  })),
                                ),
                              ),
                              const SizedBox(height: 150,),
                        ]);
                      },
                    ),
                  ),
                ),
                NavBar(size: size),
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}
