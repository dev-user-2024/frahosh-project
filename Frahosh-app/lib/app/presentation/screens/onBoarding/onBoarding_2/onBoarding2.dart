import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/colors.dart';
import '../../../modules/widgets/linePath.dart';
import '../../../modules/widgets/buttons/nextButtonOnBoarding.dart';
import '../../../../../gen/assets.gen.dart';
import '../onBoarding_3/onBoarding3.dart';

class OnBoarding2 extends StatelessWidget {
  const OnBoarding2({super.key});

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
            clipper: LinePathClass2(),
            child: Container(
            width: size.width,
            height: size.height/1.67,
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
                  top: size.height/20,
                  left: 60,
                  child: Image.asset(Assets.icons.star1.path
                  )),
                Positioned(
                  top: size.height/2.6,
                  right: size.width/1.7,
                  child: Image.asset(Assets.icons.star1.path
                  )),
                Positioned(
                  top: size.height/4,
                  right: 60,
                  child: Image.asset(Assets.icons.star1.path
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
                  Assets.images.man2.path,
                  scale: 1,
                ),
                 SizedBox(
                  height: size.height / 6,
                ),
                Text(
                  "با فراهوش",
                  style: textTheme.headline1,
                ),
                Text(
                  "با برنامه پیش برو!",
                  style: textTheme.subtitle1,
                ),
                SizedBox(
                  height: size.height / 20,
                ),
                InkWell(
                      onTap: () {
                        Navigator.of(context).pushReplacement(MaterialPageRoute(
                            builder: ((context) => const OnBoarding3())));
                      },
                  child: const NextButtonOnBoarding()
                  ),
                SizedBox(
                  height: size.height / 20,
                ),
              ],
            ),
          ),
            
          ],),
      ),
    );
  }
}
