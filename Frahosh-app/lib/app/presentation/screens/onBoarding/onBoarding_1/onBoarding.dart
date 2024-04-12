import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/linePath.dart';
import '../../../modules/widgets/buttons/nextButtonOnBoarding.dart';
import '../../../../../gen/assets.gen.dart';
import '../onBoarding_2/onBoarding2.dart';

class OnBoarding1 extends StatelessWidget {
  const OnBoarding1({super.key});

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
              clipper: LinePathClass(),
              child: Container(
                width: size.width,
                height: size.height / 1.67,
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
                        top: size.height / 3,
                        left: 20,
                        child: Image.asset(Assets.icons.star1.path)),
                    Positioned(
                        top: size.height / 20,
                        right: size.width / 3,
                        child: Image.asset(Assets.icons.star1.path)),
                    Positioned(
                        top: size.height / 6,
                        right: 30,
                        child: Image.asset(Assets.icons.star1.path)),
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
                    height: size.height / 25,
                  ),
                  Image.asset(
                    Assets.images.man.path,
                    scale: 1.25,
                  ),
                  SizedBox(
                    height: size.height / 20,
                  ),
                  Text(
                    "با فراهوش",
                    style: textTheme.headline1,
                  ),
                  const SizedBox(
                    height: 6,
                  ),
                  Text(
                    "هدفمند پیش برو!",
                    style: textTheme.subtitle1,
                  ),
                  SizedBox(
                    height: size.height / 20,
                  ),
                  Container(
                    width: 50,
                    height: 50,
                    decoration:  const BoxDecoration(
                              borderRadius:
                                  BorderRadius.all(Radius.circular(100)),
                              color: SolidColors.blue),
                    child: InkWell(
                        onTap: () {
                          Navigator.of(context).pushReplacement(MaterialPageRoute(
                              builder: ((context) => const OnBoarding2())));
                        },
                        child: const NextButtonOnBoarding()),
                  ),
                  SizedBox(
                    height: size.height / 18,
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
