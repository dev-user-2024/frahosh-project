import 'package:farahoosh/app/presentation/blocs/test_analysis/test_analysis_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/testanalysis/testanalysis_page3.dart';
import 'package:farahoosh/app/presentation/screens/testanalysis/viewReportCard/viewreportcard.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/barChart.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/chart.dart';

class TestAnalysis extends StatelessWidget {
  TestAnalysis({Key? key}) : super(key: key);

  final TestAnalysisCubit _cubit = TestAnalysisCubit();

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'اول مفاهیم',
      'دوم مفاهیم',
      'سوم مفاهیم',
    ];
    String? selectedItem = 'اول مفاهیم';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "تحلیل آزمون"),
          Expanded(
            child: Stack(children: [
              SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: BlocBuilder<TestAnalysisCubit, TestAnalysisState>(
                  bloc: _cubit,
                  builder: (context, state) {
                    if (state is TestAnalysisLoading) {
                      return Text('loading');
                    }
                    if (state is TestAnalysisError) {
                      return Text('error');
                    }
                    return Column(
                      children: [
                        const SizedBox(
                          height: 20,
                        ),
                        SizedBox(
                          width: size.width,
                          height: 48,
                          child: const ButtonWidget(
                              title: '+ ثبت توضیحات', mainColor: true),
                        ).toClick(onTap: (() {
                          Navigator.of(context)
                              .push<bool>(MaterialPageRoute(
                                  builder: ((context) => TestAnalysisPage3())))
                              .then((value) {
                            if (value ?? false) {
                              _cubit.load();
                            }
                          });
                        })),
                        const SizedBox(
                          height: 25,
                        ),
                        ...(state as TestAnalysisGeneral)
                            .cats
                            .entries
                            .map((e) => Padding(
                                  padding: const EdgeInsets.only(bottom: 20),
                                  child: Container(
                                    height: 82,
                                    width: size.width,
                                    decoration: BoxDecoration(
                                      borderRadius: const BorderRadius.all(
                                          Radius.circular(15)),
                                      border: Border.all(
                                          color: SolidColors.blue, width: 0.1),
                                      color: SolidColors.white,
                                    ),
                                    child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceEvenly,
                                      children: [
                                        Text(
                                          'مشاهده کارنامه‌های بارگزاری شده ${e.key}',
                                          style: textTheme.subtitle1,
                                        ),
                                        const SizedBox(
                                          width: 15,
                                        ),
                                        const Icon(
                                          Icons.west,
                                          color: SolidColors.textTitleBlac,
                                        ),
                                      ],
                                    ),
                                  ).toClick(onTap: (() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                ViewReportCard(e.value))));
                                  })),
                                )),
                        const SizedBox(
                          height: 25,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'توضیحات مشاور',
                              textDirection: TextDirection.rtl,
                              style: textTheme.subtitle1,
                            ),
                          ],
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        Center(
                          child: Container(
                              decoration: const BoxDecoration(
                                color: SolidColors.white,
                                borderRadius:
                                    BorderRadius.all(Radius.circular(15)),
                              ),
                              child: const TextFieldWidget(
                                hintText: '',
                                minLines: 8,
                                borderSideColor: SolidColors.blue,
                              )),
                        ),
                        const SizedBox(
                          height: 50,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'توضیحات اولیا',
                              textDirection: TextDirection.rtl,
                              style: textTheme.subtitle1,
                            ),
                          ],
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        Container(
                            width: size.width,
                            decoration: const BoxDecoration(
                              color: SolidColors.white,
                              borderRadius:
                                  BorderRadius.all(Radius.circular(15)),
                            ),
                            child: const TextFieldWidget(
                              hintText: '',
                              minLines: 8,
                              borderSideColor: SolidColors.blue,
                            )),
                        const SizedBox(
                          height: 50,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(bottom: 0),
                              child: Text(
                                'نمودار نمرات به تفکیک درس',
                                textDirection: TextDirection.rtl,
                                style: textTheme.subtitle1,
                              ),
                            ),
                            Container(
                              width: size.width / 2.3,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              child: dropdownButton(
                                  selectedItem, items, textTheme),
                            ),
                          ],
                        ),
                        const SizedBox(
                          height: 100,
                        ),
                        const SizedBox(
                          height: 200,
                          child: barChart(),
                        ),
                        const SizedBox(
                          height: 50,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(bottom: 0),
                              child: Text(
                                'نمودار تحلیل ماهانه',
                                textDirection: TextDirection.rtl,
                                style: textTheme.subtitle1,
                              ),
                            ),
                            Container(
                              width: size.width / 2.3,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              child: dropdownButton(
                                  selectedItem, items, textTheme),
                            ),
                          ],
                        ),
                        const SizedBox(
                          height: 50,
                        ),
                        const LineChartSample2(),
                        const SizedBox(
                          height: 50,
                        ),
                        Row(
                          children: [
                            Text(
                              'پیشنهادات و راهکارها',
                              textAlign: TextAlign.end,
                              textDirection: TextDirection.rtl,
                              style: textTheme.subtitle1,
                            ),
                          ],
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        Center(
                          child: Container(
                              decoration: const BoxDecoration(
                                color: SolidColors.white,
                                borderRadius:
                                    BorderRadius.all(Radius.circular(15)),
                              ),
                              child: const TextFieldWidget(
                                borderSideColor: SolidColors.blue,
                                minLines: 8,
                                hintText: '',
                              )),
                        ),
                        const SizedBox(
                          height: 100,
                        ),
                      ],
                    );
                  },
                ),
              ),
            ]),
          ),
        ],
      ),
    ));
  }
}
