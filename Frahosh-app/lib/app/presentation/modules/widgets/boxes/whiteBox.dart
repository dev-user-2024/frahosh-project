import 'package:flutter/material.dart';
import '../../const/datacolors.dart';

class WhiteBox extends StatelessWidget {
  const WhiteBox({
    Key? key,
    required this.size,
    this.txt,
    required this.textTheme,
  }) : super(key: key);

  final Size size;
  final String? txt;
  final TextTheme textTheme;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size.width / 2.4,
      height: size.height / 6,
      decoration: BoxDecoration(
        color: SolidColors.white,
        border: Border.all(color: SolidColors.blue, width: 0.2),
        borderRadius: BorderRadius.circular(12),
        boxShadow: const [
          BoxShadow(
            color: SolidColors.calculatorBox,
            blurRadius: 2,
            offset: Offset(0, 0), // Shadow position
          ),
        ],
      ),
      child: Center(
        child: Text(txt!,style: textTheme.headline1,),
      ),
    );
  }
}

