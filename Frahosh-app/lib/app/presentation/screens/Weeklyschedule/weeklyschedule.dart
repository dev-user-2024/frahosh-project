import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../modules/const/routepage.dart';
import '../../modules/widgets/boxes/differentColorBox.dart';
import '../../modules/widgets/navbar/navbar.dart';

class Weeklyschedule extends StatelessWidget {
  const Weeklyschedule({Key? key}) : super(key: key);

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
            toApp(context: context, title: "برنامه هفتگی"),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Column(
                      children: [
                        // line 1
                        Column(
                          children: [
                            const SizedBox(height: 20,),
                            Center(
                              child: DifferentColorsBox(
                                widget:
                                    DataImages.programConsultant.toPNGImage(size: 100),
                                color: GradiantColors.greenGradiantColor,
                                size: size,
                                textTheme: textTheme,
                                title: "برنامه پیشنهادی مشاور",
                              ).toClick(onTap: (() {
                                Navigator.of(context).pushNamed(RouterPage.consultantSuggesiton);
                              })),
                            ),
                            const SizedBox(
                              height: 25,
                            ),
                            Center(
                              child: DifferentColorsBox(
                                widget: DataImages.noteBookRed
                                    .toPNGImage(size: 100),
                                color: GradiantColors.pinkGradiantColor,
                                size: size,
                                textTheme: textTheme,
                                title: "برنامه من",
                              ).toClick(onTap: (() {
                                Navigator.of(context).pushNamed(RouterPage.myschedule);
                              })),
                            ),
                            const SizedBox(
                              height: 25,
                            ),
                            Center(
                              child: DifferentColorsBox(
                                widget: DataImages.farahoshLogoBlue
                                    .toPNGImage(size: 100),
                                color: GradiantColors.blueGradiantColor,
                                size: size,
                                textTheme: textTheme,
                                title: "برنامه پیشنهادی فراهوش",
                              ).toClick(onTap: (() {
                                Navigator.of(context).pushNamed(RouterPage.farahooshSuggestion);
                              })),
                            ),
                            const SizedBox(
                              height: 100,
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                
                  NavBar(size: size),
                ],
              ),
            ),
          ],
        ),
      )),
    );
  }
}
