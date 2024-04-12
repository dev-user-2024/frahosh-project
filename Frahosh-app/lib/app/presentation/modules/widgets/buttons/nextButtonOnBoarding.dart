import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/cupertino.dart';
import '../../const/datacolors.dart';
import '../../const/urlimages.dart';
import '../colors.dart';

class NextButtonOnBoarding extends StatelessWidget {
  const NextButtonOnBoarding({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 50,
      height: 50,
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(100)),
        color: SolidColors.blue
      ),
      child: DataImages.arroeLeftWhite.toSvgImage()
    );
  }
}
