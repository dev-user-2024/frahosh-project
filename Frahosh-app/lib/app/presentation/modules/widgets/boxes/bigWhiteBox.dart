import 'package:flutter/material.dart';
import '../../const/datacolors.dart';

class BigWhiteBox extends StatelessWidget {
  const BigWhiteBox({
    Key? key,
    required this.size,
    this.txt,
    required this.widget,
    required this.textTheme,
  }) : super(key: key);

  final Size size;
  final String? txt;
  final Widget widget;
  final TextTheme textTheme;

  @override
  Widget build(BuildContext context) {
    return Container(
      
      decoration: BoxDecoration(
        color: SolidColors.white,
        border: Border.all(color: SolidColors.white, width: 0.1),
        borderRadius: BorderRadius.circular(12),
        boxShadow: const [
          BoxShadow(
            color: SolidColors.calculatorBox,
            blurRadius: 1,
            offset: Offset(0, 0), // Shadow position
          ),
        ],
      ),
      child: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            widget,
            const SizedBox(width: 10,),
            Text(txt!,style: textTheme.headline1,),

          ],
        ),
      ),
    );
  }
}

