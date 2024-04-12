import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/signup/signup_%20fingerprint.dart';
import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/const/urlimages.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

Future<dynamic> getChargeBottomSheet(
    BuildContext context, Size size, TextTheme textTheme) {
  return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: ((context) {
        return Padding(
          padding:
              EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
          child: Container(
            height: size.height / 2,
            decoration: const BoxDecoration(
                color: SolidColors.backgroundColor,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                )),
            child: Center(
              child: Column(
                children: [
                  // main
                  Expanded(
                    child: Stack(
                      children: [
                        Column(
                          children: [
                            const SizedBox(
                                    height: 10,
                                  ),
                             Image.asset(
                                    Assets.images.line60.path,
                                  ),
                         DataImages.creditCard.toPNGImage(size: 200),
                                  const SizedBox(
                                    height: 40,
                                  ),
                            Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 36),
                              child: Column(
                                children: [
                                  
                                  SizedBox(
                                    height: size.height / 24,
                                  ),
                                  Text(
                                    "برای ورود به این بخش اول باید کیف پولت رو شارژ کنی!",
                                    style: textTheme.bodyText1,
                                  ),
                                  SizedBox(
                                    height: size.height / 24,
                                  ),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      SizedBox(
                                        width: size.width / 2.6,
                                        height: 45,
                                        child: InkWell(
                                          child: const ButtonWidget(
                                            title: "بزن بریم!",
                                            mainColor: true,
                                          ),
                                          onTap: () {
                                            showFingerPrintPageBottomSheet(context, size, textTheme);
                                          },
                                        ),
                                      ),
                                      SizedBox(
                                        width: size.width / 2.6,
                                        height: 45,
                                        child: InkWell(
                                          child: const ButtonWidget(
                                            title: "فعلا نه!",
                                            mainColor: false,
                                          ),
                                          onTap: () {
                                           Navigator.of(context).pop();
                                          },
                                        ),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      }));
}