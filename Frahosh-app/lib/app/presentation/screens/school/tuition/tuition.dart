import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:pie_chart/pie_chart.dart';

import '../../../modules/widgets/textField/TextFieldwidget.dart';

class Tuition extends StatelessWidget {

  Map<String, double> dataMap = {
    "درست": 50,
    "غلط": 16,
    "سفید": 12,
  };

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

  Tuition({super.key});

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
            toApp(context: context, title: "شهریه"),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          const SizedBox(height: 20,),
                          // pie chart and this information
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              SizedBox(
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
                                            borderRadius: BorderRadius.circular(6),
                                            gradient: const RadialGradient(
                                              colors: [
                                                Color.fromARGB(255, 255, 242, 241),
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
                                    child: PieChart(
                                      dataMap: dataMap,
                                      animationDuration:
                                          const Duration(milliseconds: 1000),
                                      chartLegendSpacing: 0,
                                      chartRadius:
                                          MediaQuery.of(context).size.width / 3.2,
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
                                      chartValuesOptions: const ChartValuesOptions(
                                        showChartValueBackground: false,
                                        showChartValues: true,
                                        showChartValuesInPercentage: true,
                                        showChartValuesOutside: false,
                                        decimalPlaces: 1,
                                      ),
                                    )),
                              ),
                              
                            ],
                          ),
                      
                          const SizedBox(height: 10,),
                          SizedBox(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children:  [
                                Container(
                                    width: size.width,
                                    decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    borderRadius: BorderRadius.circular(12),
                                    ),
                                    child: const TextFieldWidget(
                                      hintText: """مجموع مبالغ پرداخت شده: 3200000 تومان
مانده بدهی: 1800000 تومان""",
                                      minLines: 2,
                                      enabled: false,
                                      borderSideColor: SolidColors.blue,
                                    )),
                              ],
                            ),
                          ),
                          
                          const SizedBox(height: 40,),
                          SizedBox(
                            width: size.width,
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children:  [
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: const [
                                    Text(
                                      "اقساط سررسید شده",
                                      style: TextStyle(
                                          fontFamily: "IRANSansXV",
                                          fontSize: 16,
                                          color: SolidColors.textTitleBlac,
                                          fontWeight: FontWeight.bold),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 20,),
                                Container(
                                  height: 60,
                                    width: size.width,
                                    decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    borderRadius: BorderRadius.circular(12),
                                    border: Border.all(color: SolidColors.red,width: 0.2)
                                    ),
                                    child:  Padding(
                                      padding: const EdgeInsets.symmetric(horizontal: 20),
                                      child: Row(
                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                        children:  [
                                          Text("15 آبان 1401",style: textTheme.bodyText1,),
                                          Text("800000",style: textTheme.bodyText1,),
                                        ],
                                      ),
                                    )
                                    ),
                              ],
                            ),
                          ),
                          
                          const SizedBox(height: 40,),
                          SizedBox(
                            width: size.width,
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children:  [
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: const [
                                    Text(
                                      "اقساط پرداخت نشده",
                                      style: TextStyle(
                                          fontFamily: "IRANSansXV",
                                          fontSize: 16,
                                          color: SolidColors.textTitleBlac,
                                          fontWeight: FontWeight.bold),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 20,),
                                Container(
                                  height: 60,
                                    width: size.width,
                                    decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    borderRadius: BorderRadius.circular(12),
                                    border: Border.all(color: SolidColors.grey,width: 0.2)
                                    ),
                                    child:  Padding(
                                      padding: const EdgeInsets.symmetric(horizontal: 20),
                                      child: Row(
                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                        children:  [
                                          Text("15 آبان 1401",style: textTheme.bodyText1,),
                                          Text("800000",style: textTheme.bodyText1,),
                                        ],
                                      ),
                                    )
                                    ),
                              ],
                            ),
                          ),
                          
                          const SizedBox(height: 40,),
                          SizedBox(
                            width: size.width,
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children:  [
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: const [
                                    Text(
                                      "اقساط پرداخت شده",
                                      style: TextStyle(
                                          fontFamily: "IRANSansXV",
                                          fontSize: 16,
                                          color: SolidColors.textTitleBlac,
                                          fontWeight: FontWeight.bold),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 20,),
                                Container(
                                  height: 60,
                                    width: size.width,
                                    decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    borderRadius: BorderRadius.circular(12),
                                    border: Border.all(color: SolidColors.green,width: 0.2)
                                    ),
                                    child:  Padding(
                                      padding: const EdgeInsets.symmetric(horizontal: 20),
                                      child: Row(
                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                        children:  [
                                          Text("15 آبان 1401",style: textTheme.bodyText1,),
                                          Text("800000",style: textTheme.bodyText1,),
                                        ],
                                      ),
                                    )
                                    ),
                              ],
                            ),
                          ),
                          
                      
                          const SizedBox(height: 150,)
                         ],
                      ),
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            ),
          ],
        ),
      )),
    );
  }
}
