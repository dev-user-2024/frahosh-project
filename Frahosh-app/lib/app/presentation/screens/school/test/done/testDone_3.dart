import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';

class TestDone3 extends StatelessWidget {
  const TestDone3({super.key});

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
            toApp(context: context, title: "برگه امتحان"),

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
                          Padding(
                            padding: const EdgeInsets.only(top: 10, right: 5),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Text(
                                  "اطلاعات آزمون",
                                  style: textTheme.bodyText1,
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Container(
                            width: size.width,
                            height: size.height / 2.5,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: const Text(""),
                          ),
                          const SizedBox(
                            height: 50,
                          ),
                          Padding(
                            padding: const EdgeInsets.only(right: 5),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "سوال 5 از 5",
                                  style: textTheme.bodyText1,
                                ),
                                Text(
                                  "  زمان پاسخگویی سوال: 20 دقیقه",
                                  style: textTheme.bodyText1,
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Container(
                            width: size.width,
                            height: size.height / 4,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: const Text(""),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Container(
                            width: size.width,
                            height: size.height / 3,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: const Text(""),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Container(
                            width: size.width,
                            height: 65,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: Center(
                              child: Padding(
                                padding: const EdgeInsets.only(right: 15),
                                child: Row(
                                  children: const [
                                    Text(
                                      "نمره گرفته شده از این سوال: 2",
                                      style: TextStyle(
                                        fontFamily: "IRANSansXV",
                                        fontSize: 14,
                                        color: SolidColors.textTitleBlac,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 150,
                          ),
                        ],
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
