import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../gen/assets.gen.dart';

Future<dynamic> showFingerPrintPageBottomSheet(
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
                        Container(
                          width: size.width,
                          height: size.height,
                          padding: const EdgeInsets.symmetric(horizontal: 36),
                          child: Column(
                            children: [
                              const SizedBox(
                                height: 10,
                              ),
                              Image.asset(
                                Assets.images.line60.path,
                              ),
                              SizedBox(
                                height: size.height / 32,
                              ),
                              DataImages.shield.toPNGImage(size: 140),
                              SizedBox(
                                height: size.height / 24,
                              ),
                              Text(
                                "برای ورود به این بخش اثر انگشتت رو اسکن کن",
                                style: textTheme.bodyText1,
                              ),
                              SizedBox(
                                height: size.height / 24,
                              ),
                              DataImages.fingerImage.toPNGImage(size: 40),

                              SizedBox(
                                height: size.height / 24,
                              ),
                              SizedBox(
                                height: size.height / 24,
                              ),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  SizedBox(
                                    width: size.width / 1.3,
                                    height: 45,
                                    child: InkWell(
                                      child: const ButtonWidget(
                                        title: "لغو",
                                        mainColor: true,
                                      ),
                                      onTap: () {
                                         Navigator.of(context).pop();
                                      },
                                    ),
                                  ),
                                  
                                ],
                              ),
                              SizedBox(
                                height: size.height / 30,
                              ),
                            ],
                          ),
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

Widget build(BuildContext context) {
  Size size = MediaQuery.of(context).size;
  var textTheme = Theme.of(context).textTheme;
  return SafeArea(
    child: Scaffold(
      backgroundColor: SolidColors.white,
      body: Column(
        children: [
          // main
          Expanded(
            child: Stack(
              children: [
                Container(
                  width: size.width,
                  height: size.height,
                  padding: const EdgeInsets.symmetric(horizontal: 36),
                  child: Column(
                    children: [
                      SizedBox(
                        height: size.height / 32,
                      ),
                      Image.asset(
                        Assets.images.padlock.path,
                      ),
                      SizedBox(
                        height: size.height / 24,
                      ),
                      Text(
                        "کد تایید پنج رقمی که برات پیامک شده رو وارد کن",
                        style: textTheme.bodyText1,
                      ),
                      SizedBox(
                        height: size.height / 24,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          SizedBox(
                              width: 60,
                              height: 50,
                              child: TextFieldWidget(
                                borderSideColor: SolidColors.black,
                              )),
                          SizedBox(
                            width: 10,
                          ),
                          SizedBox(
                              width: 60,
                              height: 50,
                              child: TextFieldWidget(
                                borderSideColor: SolidColors.black,
                              )),
                          SizedBox(
                            width: 10,
                          ),
                          SizedBox(
                              width: 60,
                              height: 50,
                              child: TextFieldWidget(
                                borderSideColor: SolidColors.black,
                              )),
                          SizedBox(
                            width: 10,
                          ),
                          SizedBox(
                              width: 60,
                              height: 50,
                              child: TextFieldWidget(
                                borderSideColor: SolidColors.black,
                              )),
                          SizedBox(
                            width: 10,
                          ),
                          SizedBox(
                              width: 60,
                              height: 50,
                              child: TextFieldWidget(
                                borderSideColor: SolidColors.black,
                              )),
                          SizedBox(
                            width: 10,
                          ),
                        ],
                      ),
                      SizedBox(
                        height: size.height / 24,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SizedBox(
                            width: size.width / 3,
                            height: 50,
                            child: const ButtonWidget(
                              title: "تایید",
                              mainColor: true,
                            ),
                          ),
                          const SizedBox(
                            width: 20,
                          ),
                          SizedBox(
                            width: size.width / 3,
                            height: 50,
                            child: const ButtonWidget(
                              title: "لغو",
                              mainColor: false,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: size.height / 30,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            "پیامک رو دریافت نکردی؟",
                            style: textTheme.bodyText1,
                          ),
                          const SizedBox(
                            width: 6,
                          ),
                          const Text(
                            "ارسال مجدد",
                            style: TextStyle(color: Colors.blue),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    ),
  );
}
