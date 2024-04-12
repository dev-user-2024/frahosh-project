import '../../../router/packages.dart';
import '../../const/datacolors.dart';

Widget widgetExamCalender(
      String text1, String text2,Color textColor, double hight, double width, context) {
    return Container(
      height: hight,
      width: width,
      decoration: BoxDecoration(
          borderRadius: const BorderRadius.all(Radius.circular(15)),
          border: Border.all(color: SolidColors.blue, width: 0.2),
          color: SolidColors.white),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center, 
      children: [
        Text(text1,
            style: const TextStyle(
                fontSize: 64,
                fontFamily: 'IRANSansXV',
                color: SolidColors.textTitleBlac)),
        const SizedBox(
          height: 20,
        ),
        Text(text2, style:  TextStyle(color: textColor,fontSize: 16),),
      ]),
    );
  }