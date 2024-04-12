import 'package:flutter/material.dart';
import '../../const/datacolors.dart';

class DifferentColorsBox extends StatelessWidget {
  const DifferentColorsBox({
    Key? key,
    required this.size,
     this.heights = 220,
     this.widths = 235,
    required this.widget,
    required this.title,
    required this.color,
    required this.textTheme,
  }) : super(key: key);

  final Size size;
  final double? heights;
  final double? widths;
  final String title;
  final Widget widget;
  final List<Color> color;
  final TextTheme textTheme;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: widths,
      height: heights,
      decoration: BoxDecoration(
        gradient:  LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: color
        ),
        borderRadius: BorderRadius.circular(15),
        boxShadow: const [
          BoxShadow(
            color: SolidColors.whiteBox,
            blurRadius: 1,
            spreadRadius: 1,
            offset: Offset(
              0,
              1,
            ),
          )
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            widget,
            Text(
              title,
              style: textTheme.headline1,
            ),
          ],
        ),
      ),
    );
  }
}
