import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../../modules/widgets/barChart.dart';
import '../../../../modules/widgets/chart.dart';

class ScoreDiagram extends StatelessWidget {
  const ScoreDiagram({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
            toApp(context: context, title: "نمودار نمرات درس ریاضی"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(children: [
                    Column(children: const [
                      SizedBox(height: 120,),
                    SizedBox(
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