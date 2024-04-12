import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/differentColorBox.dart';
import 'package:farahoosh/app/presentation/screens/questionSolving/List/list.dart';
import 'package:farahoosh/app/presentation/screens/questionSolving/NewQuestion/newQuestion.dart';
import 'package:flutter/material.dart';
import '../../modules/const/datacolors.dart';
import '../../../../gen/assets.gen.dart';
import '../../modules/widgets/navbar/navbar.dart';

class QuestionSolvingPage extends StatelessWidget {
  const QuestionSolvingPage({super.key});

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
              toApp(context: context, title: "حل سوال درسی"),

              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                        child: Center(
                          child: Column(
                            children: [
                              InkWell(
                                child: DifferentColorsBox(
                                  widget: Image.asset(
                                    Assets.images.telescope.path,
                                    scale: 1,
                                  ),
                                  color: GradiantColors.pinkGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "سوال جدید",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(
                                      MaterialPageRoute(
                                          builder: ((context) =>
                                              const NewQuestionPage())));
                                },
                              ),
                              const SizedBox(
                                height: 25,
                              ),
                              InkWell(
                                child: DifferentColorsBox(
                                  widget: Image.asset(
                                    Assets.images.searchList.path,
                                    scale: 1,
                                  ),
                                  color: GradiantColors.greenGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "مشاهده لیست سوالات",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(
                                      MaterialPageRoute(
                                          builder: ((context) =>
                                              const ListPage())));
                                },
                              ),
                              const SizedBox(
                                height: 25,
                              ),
                              DifferentColorsBox(
                                widget: Image.asset(
                                  Assets.images.robotHello.path,
                                  scale: 1,
                                ),
                                color: GradiantColors.blueGradiantColor,
                                size: size,
                                textTheme: textTheme,
                                title: "ورود به ربات تلگرام",
                              ),
                              const SizedBox(
                                height: 120,
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
                    NavBar(size: size),
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
