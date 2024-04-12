// todo => Extensions Strings

import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';

import '../../router/packages.dart';
import '../const/font.dart';

extension ExToText on String {
  Widget toText(
          {FontWeight fontWeight = FontWeight.normal,
          double fontSize = 16.0,
          Color color = SolidColors.black,
          TextAlign textAlign = TextAlign.center,
          TextDirection textDirection = TextDirection.rtl,
          String fontFamily = FontFamily.regular}) =>
      Text(
        this,
        textAlign: textAlign,
        textDirection: textDirection,
        style: TextStyle(
          fontWeight: fontWeight,
          color: color,
          fontSize: fontSize,
          fontFamily: fontFamily,
        ),
      );
}

extension ToHexColors on String {
  HexColor get toHex => HexColor(this);
}
