import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../modules/widgets/barChart.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/chart.dart';

class PlannerPage4 extends StatelessWidget {
  const PlannerPage4({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'آذر',
      'دی',
      'بهمن',
    ];
    String? selectedItem = 'آذر';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "تحلیل"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(children: [
                    Column(children: [
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 20),
                        child: SizedBox(
                          height: 80,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'نمودار درصد تحقق ماهانه',
                                textDirection: TextDirection.rtl,
                                style: textTheme.bodyText1,
                              ),
                              SizedBox(
                                width: size.width / 2,
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      const SizedBox(
                        height: 230,
                        child: barChart(),
                      ),
                    ]),
                    const SizedBox(
                      height: 20,
                    ),
                    Container(
                      width: size.width,
                      decoration: BoxDecoration(
                          borderRadius:
                              const BorderRadius.all(Radius.circular(15)),
                          border:
                              Border.all(color: SolidColors.blue, width: 0.3),
                          color: SolidColors.white),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 13, vertical: 14),
                        child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('تحلیل و پیشنهاد:',
                                  textDirection: TextDirection.rtl,
                                  style: textTheme.bodyText1),
                              const SizedBox(
                                height: 10,
                              ),
                              Text(
                                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.',
                                textDirection: TextDirection.rtl,
                                style: textTheme.subtitle1,
                              )
                            ]),
                      ),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Column(children: [
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 20),
                        child: SizedBox(
                          height: 80,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'نمودار درصد تحقق هفتگی',
                                textDirection: TextDirection.rtl,
                                style: textTheme.bodyText1,
                              ),
                              SizedBox(
                                width: size.width / 2,
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      const SizedBox(
                        height: 230,
                        child: LineChartSample2(),
                      ),
                    ]),
                    const SizedBox(
                      height: 20,
                    ),
                    Container(
                      width: size.width,
                      decoration: BoxDecoration(
                          borderRadius:
                              const BorderRadius.all(Radius.circular(15)),
                          border:
                              Border.all(color: SolidColors.blue, width: 0.3),
                          color: SolidColors.white),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 13, vertical: 14),
                        child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('تحلیل و پیشنهاد:',
                                  textDirection: TextDirection.rtl,
                                  style: textTheme.bodyText1),
                              const SizedBox(
                                height: 10,
                              ),
                              Text(
                                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.',
                                textDirection: TextDirection.rtl,
                                style: textTheme.subtitle1,
                              )
                            ]),
                      ),
                    ),
                    const SizedBox(
                      height: 150,
                    )
                  ]),
                ),
                NavBar(size: size)
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
