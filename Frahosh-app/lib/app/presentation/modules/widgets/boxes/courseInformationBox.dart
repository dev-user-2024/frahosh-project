import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../const/datacolors.dart';

class CourseInformationBox extends StatelessWidget {
  final String title;
  final String date;
  final bool check;
  final Size size;
  final TextTheme textTheme;
  const CourseInformationBox({
    super.key,
    required this.title,
    required this.date,
    required this.check,
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
        offset: const Offset(0, 1), // changes position of shadow
      ),
    ],
      ),
      child: Container(
          alignment: Alignment.center,
          child: Padding(
            padding:  EdgeInsets.only(left: 20,right: 20,top: size.height/27,bottom: size.height/27,),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      date,
                      style: const TextStyle(
                          fontSize: 16,
                          decoration: TextDecoration.none,
                          color: SolidColors.textTitleBlac),
                    ),
                    Text(
                      title,
                      style: const TextStyle(
                          fontSize: 15,
                          decoration: TextDecoration.none,
                          color: SolidColors.textTitleBlac,),
                    ),
                    Row(
                      children: [
                        Text(
                      check == true ?  "پاسخ داده شده": "در انتظار پاسخ",
                      style:  TextStyle(
                          fontSize: 16,
                          decoration: TextDecoration.none,
                          color: check == true ? SolidColors.textTitleGreen : SolidColors.textTitleGray
                          ),
                    ),
                    const SizedBox(width: 10,),
                        Image.asset(Assets.icons.arrowLeft.path,color: SolidColors.black,),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          )),
    );
  }
}
