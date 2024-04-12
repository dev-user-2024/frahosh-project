import 'package:farahoosh/app/presentation/blocs/percents/percents_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:pie_chart/pie_chart.dart';

import '../../modules/widgets/textField/TextFieldwidget.dart';

class PercentPage extends StatelessWidget {
  PercentPage({super.key});

  final PercentsCubit _cubit = PercentsCubit();
  // final CalendarCubit _calendarCubit = CalendarCubit();

  final gradientList = <List<Color>>[
    [
      const Color.fromARGB(255, 17, 170, 99),
      const Color.fromARGB(255, 233, 250, 242),
    ],
    [
      const Color.fromARGB(255, 255, 242, 241),
      const Color.fromARGB(255, 241, 166, 160),
    ],
    [
      const Color.fromARGB(255, 233, 233, 233),
      const Color.fromARGB(255, 151, 151, 151),
    ]
  ];

  // late List<GDPData> _chartData;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
          body: Container(
        color: SolidColors.backgroundColor,
        child: Column(
          children: [
            toApp(context: context, title: 'درصد گیری'),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text(
                                "تعداد پاسخ‌های درست",
                                style: TextStyle(
                                    fontFamily: "IRANSansXV",
                                    fontSize: 16,
                                    color: SolidColors.textTitleBlac,
                                    fontWeight: FontWeight.bold),
                              ),
                              Container(
                                  height: 58,
                                  width: size.width / 2.2,
                                  decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  child: TextFieldWidget(
                                    labelText: "",
                                    controller: _cubit.correctsController,
                                    onChanged: (p0) {
                                      _cubit.update();
                                    },
                                    borderSideColor: SolidColors.black,
                                  )),
                            ],
                          ),

                          const SizedBox(
                            height: 20,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text(
                                "تعداد پاسخ‌های غلط",
                                style: TextStyle(
                                    fontFamily: "IRANSansXV",
                                    fontSize: 16,
                                    color: SolidColors.textTitleBlac,
                                    fontWeight: FontWeight.bold),
                              ),
                              Container(
                                  height: 58,
                                  width: size.width / 2.2,
                                  decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  child: TextFieldWidget(
                                    labelText: "",
                                    controller: _cubit.incorrectsController,
                                    onChanged: (p0) {
                                      _cubit.update();
                                    },
                                    borderSideColor: SolidColors.black,
                                  )),
                            ],
                          ),

                          const SizedBox(
                            height: 20,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text(
                                "تعداد پاسخ‌های سفید",
                                style: TextStyle(
                                    fontFamily: "IRANSansXV",
                                    fontSize: 16,
                                    color: SolidColors.textTitleBlac,
                                    fontWeight: FontWeight.bold),
                              ),
                              Container(
                                  height: 58,
                                  width: size.width / 2.2,
                                  decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  child: TextFieldWidget(
                                    labelText: "",
                                    controller: _cubit.emptiesController,
                                    onChanged: (p0) {
                                      _cubit.update();
                                    },
                                    borderSideColor: SolidColors.black,
                                  )),
                            ],
                          ),

                          const SizedBox(
                            height: 40,
                          ),
                          Align(
                            alignment: Alignment.centerRight,
                            child: BlocBuilder<PercentsCubit, PercentsState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                return toCheckBox(
                                    title: 'آزمون نمره منفی دارد',
                                    isActive: state.negative,
                                    onTap: () {
                                      _cubit.toggleNegative();
                                    },
                                    context: context);
                              },
                            ),
                          ),

                          const SizedBox(
                            height: 50,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              SizedBox(
                                height: 85,
                                width: size.width / 2.3,
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text(
                                      "درصد(نمره خام)",
                                      style: TextStyle(
                                          fontFamily: "IRANSansXV",
                                          fontSize: 16,
                                          color: SolidColors.textTitleBlac,
                                          fontWeight: FontWeight.bold),
                                    ),
                                    Container(
                                      height: 50,
                                      width: size.width / 2.2,
                                      decoration: BoxDecoration(
                                        border: Border.all(
                                            color: SolidColors.blue,
                                            width: 0.2),
                                        color: SolidColors.white,
                                        borderRadius: BorderRadius.circular(12),
                                      ),
                                      child: BlocBuilder<PercentsCubit,
                                          PercentsState>(
                                        bloc: _cubit,
                                        builder: (context, state) => Center(
                                          child: Text(
                                            (state.percent * 100)
                                                .toStringAsFixed(2),
                                            textDirection: TextDirection.ltr,
                                            style: const TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 16,
                                                color:
                                                    SolidColors.textTitleBlac,
                                                fontWeight: FontWeight.bold),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              SizedBox(
                                height: 85,
                                width: size.width / 2.3,
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text(
                                      "درصد(تعداد کل سوالات)",
                                      style: TextStyle(
                                          fontFamily: "IRANSansXV",
                                          fontSize: 16,
                                          color: SolidColors.textTitleBlac,
                                          fontWeight: FontWeight.bold),
                                    ),
                                    Container(
                                      height: 50,
                                      width: size.width / 2.2,
                                      decoration: BoxDecoration(
                                        border: Border.all(
                                            color: SolidColors.blue,
                                            width: 0.2),
                                        color: SolidColors.white,
                                        borderRadius: BorderRadius.circular(12),
                                      ),
                                      child: BlocBuilder<PercentsCubit,
                                          PercentsState>(
                                        bloc: _cubit,
                                        builder: (context, state) => Center(
                                          child: Text(
                                            state.allQ.toInt().toString(),
                                            style: const TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 16,
                                                color:
                                                    SolidColors.textTitleBlac,
                                                fontWeight: FontWeight.bold),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),

                          const SizedBox(
                            height: 50,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              SizedBox(
                                height: 115,
                                width: size.width / 4,
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text(
                                      "درست",
                                      style: TextStyle(
                                          fontFamily: "IRANSansXV",
                                          fontSize: 16,
                                          color: SolidColors.textTitleBlac,
                                          fontWeight: FontWeight.bold),
                                    ),
                                    Container(
                                      height: 80,
                                      width: size.width / 3.6,
                                      decoration: BoxDecoration(
                                        border: Border.all(
                                            color: SolidColors.blue,
                                            width: 0.2),
                                        color: SolidColors.white,
                                        borderRadius: BorderRadius.circular(12),
                                      ),
                                      child: BlocBuilder<PercentsCubit,
                                          PercentsState>(
                                        bloc: _cubit,
                                        builder: (context, state) => Center(
                                          child: Text(
                                            state.corr.toInt().toString(),
                                            style: const TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 16,
                                                color:
                                                    SolidColors.textTitleBlac,
                                                fontWeight: FontWeight.bold),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              SizedBox(
                                height: 115,
                                width: size.width / 4,
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text(
                                      "غلط",
                                      style: TextStyle(
                                          fontFamily: "IRANSansXV",
                                          fontSize: 16,
                                          color: SolidColors.textTitleBlac,
                                          fontWeight: FontWeight.bold),
                                    ),
                                    Container(
                                      height: 80,
                                      width: size.width / 3.6,
                                      decoration: BoxDecoration(
                                        border: Border.all(
                                            color: SolidColors.blue,
                                            width: 0.2),
                                        color: SolidColors.white,
                                        borderRadius: BorderRadius.circular(12),
                                      ),
                                      child: BlocBuilder<PercentsCubit,
                                          PercentsState>(
                                        bloc: _cubit,
                                        builder: (context, state) => Center(
                                          child: Text(
                                            state.incorr.toInt().toString(),
                                            style: const TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 16,
                                                color:
                                                    SolidColors.textTitleBlac,
                                                fontWeight: FontWeight.bold),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              SizedBox(
                                height: 115,
                                width: size.width / 4,
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text(
                                      "سفید",
                                      style: TextStyle(
                                          fontFamily: "IRANSansXV",
                                          fontSize: 16,
                                          color: SolidColors.textTitleBlac,
                                          fontWeight: FontWeight.bold),
                                    ),
                                    Container(
                                      height: 80,
                                      width: size.width / 3.6,
                                      decoration: BoxDecoration(
                                        border: Border.all(
                                            color: SolidColors.blue,
                                            width: 0.2),
                                        color: SolidColors.white,
                                        borderRadius: BorderRadius.circular(12),
                                      ),
                                      child: BlocBuilder<PercentsCubit,
                                          PercentsState>(
                                        bloc: _cubit,
                                        builder: (context, state) => Center(
                                          child: Text(
                                            state.empty.toInt().toString(),
                                            style: const TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 16,
                                                color:
                                                    SolidColors.textTitleBlac,
                                                fontWeight: FontWeight.bold),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),

                          // pie chart and this information
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              SizedBox(
                                height: size.height / 4,
                                width: 100,
                                child: Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Row(
                                      children: [
                                        Container(
                                          width: 24,
                                          height: 24,
                                          decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(6),
                                            gradient: const RadialGradient(
                                              colors: [
                                                Color.fromARGB(
                                                    255, 233, 250, 242),
                                                Color.fromARGB(255, 17, 170, 99)
                                              ],
                                              radius: 0.75,
                                            ),
                                          ),
                                        ),
                                        const SizedBox(
                                          width: 10,
                                        ),
                                        const Text(
                                          "درست",
                                          style: TextStyle(
                                              fontFamily: "IRANSansXV",
                                              fontSize: 14,
                                              color: SolidColors.textTitleBlac,
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 10,
                                    ),
                                    Row(
                                      children: [
                                        Container(
                                          width: 24,
                                          height: 24,
                                          decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(6),
                                            gradient: const RadialGradient(
                                              colors: [
                                                Color.fromARGB(
                                                    255, 255, 242, 241),
                                                Color.fromARGB(255, 212, 15, 0),
                                              ],
                                              radius: 0.75,
                                            ),
                                          ),
                                        ),
                                        const SizedBox(
                                          width: 10,
                                        ),
                                        const Text(
                                          "غلط",
                                          style: TextStyle(
                                              fontFamily: "IRANSansXV",
                                              fontSize: 14,
                                              color: SolidColors.textTitleBlac,
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 10,
                                    ),
                                    Row(
                                      children: [
                                        Container(
                                          width: 24,
                                          height: 24,
                                          decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(6),
                                            gradient: const RadialGradient(
                                              colors: [
                                                Color.fromARGB(
                                                    255, 233, 233, 233),
                                                Color.fromARGB(
                                                    255, 130, 130, 130),
                                              ],
                                              radius: 0.75,
                                            ),
                                          ),
                                        ),
                                        const SizedBox(
                                          width: 10,
                                        ),
                                        const Text(
                                          "سفید",
                                          style: TextStyle(
                                              fontFamily: "IRANSansXV",
                                              fontSize: 14,
                                              color: SolidColors.textTitleBlac,
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(left: 30),
                                child: SizedBox(
                                    height: size.height / 4,
                                    child: BlocBuilder<PercentsCubit,
                                        PercentsState>(
                                      bloc: _cubit,
                                      builder: (context, state) {
                                        if (state.corr == 0 &&
                                            state.incorr == 0 &&
                                            state.empty == 0) {
                                          return const SizedBox();
                                        }
                                        return PieChart(
                                          dataMap: {
                                            'درست': state.corr,
                                            'غلط': state.incorr,
                                            'سفید': state.empty,
                                          },
                                          animationDuration: const Duration(
                                              milliseconds: 1000),
                                          chartLegendSpacing: 0,
                                          chartRadius: MediaQuery.of(context)
                                                  .size
                                                  .width /
                                              3.2,
                                          gradientList: gradientList,
                                          initialAngleInDegree: 0,
                                          chartType: ChartType.disc,
                                          ringStrokeWidth: 32,
                                          emptyColor: SolidColors.black,
                                          legendOptions: const LegendOptions(
                                            // showLegendsInRow: false,
                                            // legendPosition: LegendPosition.left,
                                            showLegends: false,
                                            // legendShape: BoxShape.rectangle,
                                            // legendTextStyle: TextStyle(
                                            //   fontWeight: FontWeight.bold,
                                            // ),
                                          ),
                                          chartValuesOptions:
                                              const ChartValuesOptions(
                                            showChartValueBackground: false,
                                            showChartValues: false,
                                            showChartValuesInPercentage: false,
                                            showChartValuesOutside: false,
                                            decimalPlaces: 1,
                                          ),
                                        );
                                      },
                                    )),
                              ),
                            ],
                          ),

                          const SizedBox(
                            height: 100,
                          )
                        ],
                      ),
                    ),
                  ),
                  NavBar(size: size),
                ],
              ),
            ),
          ],
        ),
      )),
    );
  }
}
