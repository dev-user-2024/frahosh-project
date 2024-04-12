import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:farahoosh/app/presentation/screens/examcalender/examcalender.dart';
import 'package:farahoosh/app/presentation/screens/gambegam/gambegam_page1.dart';
import 'package:farahoosh/app/presentation/screens/word/wordnote.dart';
import 'package:flutter/material.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/boxes/informationBox.dart';
import '../../../../gen/assets.gen.dart';

class ToolsPage extends StatelessWidget {
  const ToolsPage({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            toApp(context: context, title: "ابزارک‌ها"),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Column(
                      children: [
                        // line 1
                        Padding(
                          padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              InkWell(
                                child: InformationBox(
                                  image: Image.asset(
                                    Assets.images.cornometr.path,
                                    scale: 1,
                                  ),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "کرنومتر",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) =>
                                          ChronometrPage())));
                                },
                              ),
                              InkWell(
                                child: InformationBox(
                                  image: Image.asset(
                                    Assets.images.handPercent.path,
                                    scale: 1,
                                  ),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "درصدگیری",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => PercentPage())));
                                },
                              ),
                            ],
                          ),
                        ),

                        // line 2
                        Padding(
                          padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              InkWell(
                                child: InformationBox(
                                  image: Image.asset(
                                    Assets.images.calculator.path,
                                    scale: 1,
                                  ),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "ماشین حساب",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) =>
                                          CalculatorPage())));
                                },
                              ),
                              InkWell(
                                child: InformationBox(
                                  image: Image.asset(
                                    Assets.images.moshtag.path,
                                    scale: 1,
                                  ),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "مشتق",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) =>
                                          DerivativePage())));
                                },
                              ),
                            ],
                          ),
                        ),

                        // line 3
                        Padding(
                          padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              InformationBox(
                                image: Image.asset(
                                  Assets.images.linter.path,
                                  scale: 1,
                                ),
                                size: size,
                                textTheme: textTheme,
                                title: "لایتنر",
                              ).toClick(
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => Leinter1())));
                                },
                              ),
                              InformationBox(
                                image: Image.asset(
                                  Assets.images.greenTik.path,
                                  scale: 1,
                                ),
                                size: size,
                                textTheme: textTheme,
                                title: "تیک ایت",
                              ).toClick(
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => TickitScreen())));
                                },
                              ),
                            ],
                          ),
                        ),
                        // line 4
                        Padding(
                          padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              InformationBox(
                                image: Image.asset(
                                  Assets.images.bluNotebook.path,
                                  scale: 1,
                                ),
                                size: size,
                                textTheme: textTheme,
                                title: "دفترچه لغت",
                              ).toClick(onTap: (() {
                                Navigator.of(context).push(MaterialPageRoute(
                                    builder: ((context) => WordNote())));
                              })),
                              InformationBox(
                                image: Image.asset(
                                  Assets.images.calendar.path,
                                  scale: 1,
                                ),
                                size: size,
                                textTheme: textTheme,
                                title: "روزشمار کنکور",
                              ).toClick(onTap: (() {
                                Navigator.of(context).push(MaterialPageRoute(
                                    builder: ((context) =>
                                        const ExamCalender())));
                              })),
                            ],
                          ),
                        ),
                        // line 5
                        Padding(
                          padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              InformationBox(
                                image: Image.asset(
                                  Assets.images.matrix.path,
                                  scale: 1,
                                ),
                                size: size,
                                textTheme: textTheme,
                                title: "ماتریس",
                              ).toClick(onTap: (() {
                                Navigator.of(context).push(MaterialPageRoute(
                                    builder: ((context) =>
                                        const MatrixPage())));
                              })),
                              InformationBox(
                                image: Image.asset(
                                  Assets.images.books.path,
                                  scale: 1,
                                ),
                                size: size,
                                textTheme: textTheme,
                                title: "گام به گام",
                              ).toClick(onTap: (() {
                                Navigator.of(context).push(MaterialPageRoute(
                                  builder: (context) => GambegamPage(),
                                ));
                              })),
                            ],
                          ),
                        ),
                        const SizedBox(
                          height: 100,
                        )
                      ],
                    ),
                  ),
                  NavBar(size: size),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
