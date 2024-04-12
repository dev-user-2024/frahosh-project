import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/differentColorBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/handout/mine/handoutMine.dart';
import 'package:farahoosh/app/presentation/screens/school/handout/others/handoutOthers.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';

class HandoutMain extends StatelessWidget {
  const HandoutMain({super.key});

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
              toApp(context: context, title: "جزوه"),

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
                                  widths: 263,
                                  heights: 275,
                                  widget: DataImages.handoutMine
                                      .toPNGImage(size: 120),
                                  color: GradiantColors.blueGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "جزوه‌های من",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => HandoutMine())));
                                },
                              ),
                              const SizedBox(
                                height: 55,
                              ),
                              InkWell(
                                child: DifferentColorsBox(
                                  widths: 263,
                                  heights: 275,
                                  widget: DataImages.handoutOthers
                                      .toPNGImage(size: 120),
                                  color: GradiantColors.pinkGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "جزوه‌های دوستان",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => HandoutOthers())));
                                },
                              ),
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
