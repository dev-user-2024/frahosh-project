import 'package:flutter/cupertino.dart';
import '../../const/datacolors.dart';

class CalculatorButton extends StatelessWidget {
  final Widget? icon;
  final String? symbol;
  final bool isWidget;
  final Color? color;
  final Color? textColor;
  final Size size;
  final double widths;
  final double heights;
  final double radiosNumber;
  final double fontSize;
  final VoidCallback onTap;
  const CalculatorButton(
      {Key? key,
      required this.size,
      this.widths = 72,
      this.heights = 69,
      this.radiosNumber = 20,
      this.fontSize = 22,
      this.icon,
      this.textColor = SolidColors.black,
      this.symbol,
      this.isWidget = false,
      required this.color,
      required this.onTap})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: widths,
        height: heights,
        decoration: BoxDecoration(
          color: color,
          // border: Border.all(color: SolidColors.white, width: 1),
          borderRadius: BorderRadius.circular(radiosNumber),
          boxShadow: const [
            BoxShadow(
              color: SolidColors.calculatorBox,
              blurRadius: 2,
              offset: Offset(0, 0), // Shadow position
            ),
          ],
        ),
        child: isWidget == false
            ? icon
            : Center(
                child: Text(
                symbol!,
                style:  TextStyle(
                  color: textColor,
                  fontFamily: "IRANSansXV",
                  fontSize: fontSize,
                  fontWeight: FontWeight.bold,
                ),
              )),
      ),
    );
  }
}
