import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../../gen/assets.gen.dart';

Future<dynamic> showLeinter2BottomSheet(
    BuildContext context, Size size, TextTheme textTheme, String text) {
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
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 10,
                        ),
                        Image.asset(Assets.images.line60.path),

                        // title text
                        Padding(
                          padding: const EdgeInsets.only(top: 30, right: 12),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                'پشت کارت',
                                style: textTheme.bodyText1,
                              ),
                            ],
                          ),
                        ),

                        // lienter bottom sheet input box
                        Padding(
                          padding:
                              const EdgeInsets.only(top: 15, left: 8, right: 8),
                          child: Container(
                            decoration: BoxDecoration(
                              color: SolidColors.backgroundColor,
                              border: Border.all(
                                  color: SolidColors.black, width: 0.3),
                              borderRadius: BorderRadius.circular(12),
                              boxShadow: const [
                                BoxShadow(
                                  color: SolidColors.calculatorBox,
                                  blurRadius: 1,
                                  offset: Offset(0, 0), // Shadow position
                                ),
                              ],
                            ),
                            child: TextFormField(
                              enabled: true,
                              // obscureText: false,
                              minLines: 10,
                              maxLines: 10,
                              keyboardType: TextInputType.multiline,
                              decoration: InputDecoration(
                                hintText: text,
                                labelStyle: const TextStyle(
                                    fontSize: 14, color: Colors.black),
                                enabledBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(12),
                                    borderSide: const BorderSide(
                                        color: SolidColors.black, width: 0.3)),
                                focusedErrorBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(12),
                                    borderSide: const BorderSide(
                                        color: SolidColors.black, width: 0.3)),
                                errorBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(12),
                                    borderSide: const BorderSide(
                                        color: SolidColors.black, width: 0.3)),
                                focusedBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(12),
                                    borderSide: const BorderSide(
                                        color: SolidColors.black, width: 0.3)),
                              ),
                            ),
                          ),
                        ),

                        const SizedBox(
                          height: 30,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(
                              width: size.width / 2.35,
                              height: 50,
                              child: const ButtonWidget(
                                title: "درست بود",
                                mainColor: true,
                              ),
                            ),
                            const SizedBox(
                              width: 20,
                            ),
                            SizedBox(
                              width: size.width / 2.35,
                              height: 50,
                              child: const ButtonWidget(
                                title: "اشتباه بود",
                                mainColor: false,
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
