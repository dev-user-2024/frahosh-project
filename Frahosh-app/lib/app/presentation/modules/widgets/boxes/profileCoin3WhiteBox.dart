import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../const/datacolors.dart';

class ProfileCoin3WhiteBox extends StatelessWidget {
  final String title;
  final Size size;
  final TextTheme textTheme;
  const ProfileCoin3WhiteBox({
    super.key,
    required this.title,
    required this.size,
    required this.textTheme,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: 
             SolidColors.white,
        border: Border.all(
            color: SolidColors.white,
            width: 0.3),
        borderRadius: BorderRadius.circular(15),
         boxShadow: [
      BoxShadow(
        color: SolidColors.black.withOpacity(0.1),
        spreadRadius: 1,
        blurRadius: 1,
        offset: const Offset(0, 0), // changes position of shadow
      ),
    ],
      ),
      child: Container(
          alignment: Alignment.center,
          child: Padding(
            padding:  EdgeInsets.only(left: 20,right: 20,top: size.height/30,bottom: size.height/30,),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      title,
                      style: textTheme.bodyText1
                    ),
                    Image.asset(Assets.icons.arrowLeft.path,color: SolidColors.black,),
                  ],
                ),
              ],
            ),
          )),
    );
  }
}
