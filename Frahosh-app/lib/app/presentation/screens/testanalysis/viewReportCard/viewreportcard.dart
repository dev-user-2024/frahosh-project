import 'dart:collection';

import 'package:farahoosh/app/presentation/blocs/test_analysis/test_analysis_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../blocs/utils.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class ViewReportCard extends StatelessWidget {
  ViewReportCard(this.objects, {Key? key}) : super(key: key);
  final UnmodifiableListView<TestAnalysisObject> objects;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "مشاهده کارنامه‌ها"),
            Expanded(
              child: Stack(children: [
                SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        Container(
                          height: 500,
                          width: size.width,
                          margin: const EdgeInsets.symmetric(horizontal: 0),
                          // color: Colors.black,
                          child: Padding(
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 0, vertical: 20),
                              child: ListView(
                                children: objects
                                    .map((e) => viewreport(context, e))
                                    .toList(),
                              )),
                        ),
                      ],
                    ),
                  ),
                ),
              ]),
            ),
          ]),
        ),
      ),
    );
  }

  Widget viewreport(context, TestAnalysisObject object) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return Center(
      child: Container(
        height: 48,
        width: size.width,
        margin: const EdgeInsets.symmetric(vertical: 20),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            const SizedBox(
              height: 30,
            ),
            SizedBox(
              width: size.width / 1.7,
              height: 48,
              child: FittedBox(
                child: Text(
                  'کارنامه ${getMonthName(int.tryParse(object.month) ?? 1)} ماه سال تحصیلی ${object.period}',
                  style: textTheme.subtitle1,
                ),
              ),
            ),
            const SizedBox(
              width: 10,
            ),
            SizedBox(
              width: size.width / 4,
              height: 48,
              child: const ButtonWidget(title: 'مشاهده', mainColor: true),
            ),
          ],
        ),
      ),
    );
  }
}
