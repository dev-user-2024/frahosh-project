import 'package:farahoosh/app/presentation/modules/const/routepage.dart';
import 'package:farahoosh/app/presentation/modules/encryption.dart';
import 'package:flutter/material.dart';

import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonBlu.dart';
import '../../../modules/widgets/colors.dart';
import '../../../modules/widgets/linePath.dart';
import '../../../../../gen/assets.gen.dart';
import '../../login/login.dart';

class OnBoarding4 extends StatelessWidget {
  const OnBoarding4({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Stack(
          children: [
            ClipPath(
              clipper: LinePathClass4(),
              child: Container(
                width: size.width,
                height: size.height / 1.9,
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    colors: GradiantColors.gradiendOnboarding,
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  ),
                ),
                child: Stack(
                  children: [
                    Positioned(
                        top: size.height / 6,
                        left: 40,
                        child: Image.asset(Assets.icons.star1.path)),
                    Positioned(
                        top: size.height / 20,
                        right: size.width / 6,
                        child: Image.asset(Assets.icons.star1.path)),
                    Positioned(
                        top: size.height / 2.9,
                        right: size.width / 4.4,
                        child: Image.asset(
                          Assets.icons.star1.path,
                          scale: 0.8,
                        )),
                  ],
                ),
              ),
            ),
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(
                    height: size.height / 20,
                  ),
                  Image.asset(
                    Assets.images.man4.path,
                    scale: 1.25,
                  ),
                  SizedBox(
                    height: size.height / 6,
                  ),
                  Text(
                    "با فراهوش",
                    style: textTheme.headline1,
                  ),
                  Text(
                    "طعم شیرین موفقیت رو بچش!",
                    style: textTheme.subtitle1,
                  ),
                  SizedBox(
                    height: size.height / 20,
                  ),
                  InkWell(
                    onTap: () {
                      ENC.writeToBox('ft', 'false');
                      Navigator.of(context)
                          .pushReplacementNamed(RouterPage.login);
                    },
                    child: const ButtonBlu(
                      text: "بزن بریم",
                    ),
                  ),
                  SizedBox(
                    height: size.height / 30,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
