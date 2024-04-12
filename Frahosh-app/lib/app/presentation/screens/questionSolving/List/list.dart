import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/courseInformationBox.dart';
import 'package:farahoosh/app/presentation/screens/questionSolving/Solved/solved.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';

class ListPage extends StatelessWidget {
  const ListPage({super.key});

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
              // appbar

              toApp(context: context, title: "لیست سوالات"),

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
                            InkWell(
                              child: CourseInformationBox(
                                size: size,
                                textTheme: textTheme,
                                title: "ریاضی",
                                date: "۲۰ مرداد ۱۴۰۱",
                                check: false,
                              ),
                              onTap: () {
                                Navigator.of(context).pushReplacement(
                                    MaterialPageRoute(
                                        builder: ((context) =>
                                            const SolvedPage())));
                              },
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            CourseInformationBox(
                              size: size,
                              textTheme: textTheme,
                              title: "زبان انگلیسی",
                              date: "۵ مرداد ۱۴۰۱",
                              check: false,
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            CourseInformationBox(
                              size: size,
                              textTheme: textTheme,
                              title: "قرآن",
                              date: "۱ مرداد ۱۴۰۱",
                              check: true,
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            CourseInformationBox(
                              size: size,
                              textTheme: textTheme,
                              title: "ریاضی",
                              date: "۳۰ تیر ۱۴۰۱",
                              check: true,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
