import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/differentColorBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:farahoosh/app/presentation/screens/planner/planner_page2/planner_page2.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../../../gen/assets.gen.dart';

class PlannerPage extends StatelessWidget {
  const PlannerPage({super.key});

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

              toApp(context: context, title: "دفتر برنامه‌ریزی"),

              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                        child: Center(
                          child: Column(
                            children: [
                              DifferentColorsBox(
                                widget: Image.asset(
                                  Assets.images.plannerCalender.path,
                                  scale: 1,
                                ),
                                color: GradiantColors.blueGradiantColor,
                                size: size,
                                textTheme: textTheme,
                                title: "برنامه",
                              ).toClick(
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => PlannerPage2())));
                                },
                              ),
                              const SizedBox(
                                height: 25,
                              ),
                              DifferentColorsBox(
                                widget: Image.asset(
                                  Assets.images.plannerAnalysis.path,
                                  scale: 1,
                                ),
                                color: GradiantColors.greenGradiantColor,
                                size: size,
                                textTheme: textTheme,
                                title: "تحلیل",
                              ).toClick(onTap: (() {
                                Navigator.of(context).push(MaterialPageRoute(
                                    builder: ((context) =>
                                        const PlannerPage4())));
                              })),
                              const SizedBox(
                                height: 25,
                              ),
                              DifferentColorsBox(
                                widget: Image.asset(
                                  Assets.images.plannerHeartBook.path,
                                  scale: 1,
                                ),
                                color: GradiantColors.pinkGradiantColor,
                                size: size,
                                textTheme: textTheme,
                                title: "دل نوشته",
                              ).toClick(onTap: (() {
                                Navigator.of(context).push(MaterialPageRoute(
                                    builder: ((context) => PlannerPage5())));
                              })),
                              const SizedBox(
                                height: 150,
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
                    NavBar(size: size)
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
