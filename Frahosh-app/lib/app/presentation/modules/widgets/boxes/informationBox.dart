import 'package:blur/blur.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:flutter/material.dart';
import '../linePath.dart';

class InformationBox extends StatelessWidget {
  const InformationBox({
    Key? key,
    required this.size,
    required this.image,
    required this.title,
    required this.textTheme,
  }) : super(key: key);

  final Size size;
  final String title;
  final Widget image;
  final TextTheme textTheme;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size.width / 2.6,
      height: size.width / 3,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.2),
            spreadRadius: 1,
            blurRadius: 1,
            offset: const Offset(0, 3), // changes position of shadow
          ),
        ],
      ),
      child: Stack(
        children: [
          Container(
            width: size.width / 2.6,
            height: size.width / 3,
            decoration: BoxDecoration(
              color: SolidColors.white,
              borderRadius: BorderRadius.circular(15),
              boxShadow: const [
                BoxShadow(
                  color: SolidColors.whiteBox,
                  blurRadius: 1,
                  spreadRadius: 1,
                  offset: Offset(
                    2,
                    2,
                  ),
                )
              ],
            ),
          ),
          Center(
            child: image,
          ),
          ClipPath(
            clipper: LinePathClass1(),
            child: Container(
              width: size.width / 2.6,
              height: size.width / 3,
              decoration: BoxDecoration(
                  
                // gradient: const LinearGradient(
                //   colors: GradiantColors.blueGradiantColor,
                //   begin: Alignment.topCenter,
                //   end: Alignment.bottomCenter,
                // ),
                borderRadius: BorderRadius.circular(15),
              ),
            ).blurred(
            colorOpacity: 0.1,
            borderRadius: const BorderRadius.horizontal(right: Radius.circular(15)),
            //color: SolidColors.blurBlu,
            blurColor: SolidColors.blue,
          ),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 7),
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(),
                  Text(
                    title,
                    style: textTheme.headline1,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
