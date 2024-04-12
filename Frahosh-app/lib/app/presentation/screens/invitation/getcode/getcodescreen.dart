import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/signup/signup_%20fingerprint.dart';
import 'package:flutter/material.dart';

import '../../../../../gen/assets.gen.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/const/urlimages.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

Future<dynamic> getCodeScreenPageBottomSheet(
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
            height: size.height / 1.8,
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
                         DataImages.circleYellow.toJpgImage(size: double.maxFinite,boxFit: BoxFit.cover),
                                 
                        Column(
                          children: [
                            const SizedBox(
                                    height: 10,
                                  ),
                             Image.asset(
                                    Assets.images.line60.path,
                                  ),
                                  SizedBox(
                                    height: size.height / 4.8,
                                  ),
                                 
                            Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 36),
                              child: Column(
                                children: [
                                  
                                  SizedBox(
                                    height: size.height / 24,
                                  ),
                                  Text(
                                    "کد دوستت رو وارد کن تا 5 سکه دریافت کنی!",
                                    style: textTheme.bodyText1,
                                  ),
                                  SizedBox(
                                    height: size.height / 24,
                                  ),
                                      const SizedBox(
                                          
                                          height: 58,
                                          child: TextFieldWidget(
                                            borderSideColor: SolidColors.black,
                                            hintText: "کد دریافتی",
                                          )),
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
                                            title: "ثبت",
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
                                            title: "لغو",
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