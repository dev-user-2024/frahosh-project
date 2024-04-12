import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../../modules/widgets/barChart.dart';
import '../../../../modules/widgets/chart.dart';

class TestMid extends StatelessWidget {
  const TestMid({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
            toApp(context: context, title: "نمودار میانه نمرات"),
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
                          height: 40,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Row(
                                children: [
                                  Text(
                                    'میانه: ',
                                    textDirection: TextDirection.rtl,
                                    style: textTheme.bodyText1,
                                  ),
                                  Text(
                                    '12',
                                    textDirection: TextDirection.rtl,
                                    style: textTheme.bodyText1,
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(height: 20,),
                    const SizedBox(
                          height: 230,
                          child: LineChartSample2(),
                        ),
                    ]),
                    const SizedBox(height: 100,),
                    Column(children: const [
                    SizedBox(height: 20,),
                      SizedBox(
                        height: 230,
                        child: barChart(),
                      ),
                    ]), 
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