import 'package:flutter/material.dart';
import 'package:pie_chart/pie_chart.dart';

import '../../const/datacolors.dart';

class CirculatorChart extends StatefulWidget {
  const CirculatorChart({Key? key}) : super(key: key);

  @override
  State<CirculatorChart> createState() => _CirculatorChartState();
}

class _CirculatorChartState extends State<CirculatorChart> {
  Map<String, double> dataMap = {
    "done": 70,
    "doing": 20,
    "notdone": 10,
  };


  final gradientList = <List<Color>>[
    [
      SolidColors.green,
      const Color(0xffE9FAF2),
    ],
    [
      SolidColors.blue,
      const Color(0xffEAF6FF),
    ],
    [
      SolidColors.grey,
      const Color(0xffDDDDDD),
    ]
  ];

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        SizedBox(
          height: size.height / 4,
          width: 150,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Row(
                children: [
                  Container(
                    width: 24,
                    height: 24,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(6),
                      gradient: const RadialGradient(
                        colors: [
                          Color.fromARGB(255, 233, 250, 242),
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
                    "انجام شده: 70%",
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
                      borderRadius: BorderRadius.circular(6),
                      gradient: const RadialGradient(
                        colors: [
                          Color.fromARGB(255, 255, 242, 241),
                          Color.fromARGB(255, 29, 155, 240),
                        ],
                        radius: 0.75,
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 10,
                  ),
                  const Text(
                    "در حال انجام: 20%",
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
                      borderRadius: BorderRadius.circular(6),
                      gradient: const RadialGradient(
                        colors: [
                          Color.fromARGB(255, 233, 233, 233),
                          Color.fromARGB(255, 130, 130, 130),
                        ],
                        radius: 0.75,
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 10,
                  ),
                  const Text(
                    "انجام نشده: 10%",
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
              child: PieChart(
                dataMap: dataMap,
                animationDuration: const Duration(milliseconds: 1000),
                chartLegendSpacing: 0,
                chartRadius: MediaQuery.of(context).size.width / 3.2,
                gradientList: gradientList,
                initialAngleInDegree: 100,
                chartType: ChartType.ring,
                ringStrokeWidth: 20,
                emptyColor: SolidColors.black,
                legendOptions: const LegendOptions(
                  showLegends: false,
                ),
                chartValuesOptions: const ChartValuesOptions(
                  showChartValueBackground: false,
                  showChartValues: false,
                  showChartValuesInPercentage: false,
                  showChartValuesOutside: false,
                  decimalPlaces: 1,
                ),
              )),
        ),
      ],
    );
  }
}
