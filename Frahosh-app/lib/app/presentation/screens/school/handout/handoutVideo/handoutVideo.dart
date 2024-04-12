import 'package:blur/blur.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../../../../../gen/assets.gen.dart';
import '../../../../modules/const/datacolors.dart';

class HandoutVideo extends StatelessWidget {
  const HandoutVideo({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Column(
          children: [
            toApp(context: context, title: "جلسه سوم ریاضی"),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          SizedBox(
                            width: size.width,
                            height: 225,
                            child: Stack(
                              children: [
                                Center(
                                    child: DataImages.schoolClass.toSvgImage(size: 100)),
                                Center(
                                  child: Container(
                                    width: 60,
                                    height: 60,
                                    decoration: BoxDecoration(
                                        color:
                                            const Color.fromARGB(0, 0, 0, 0),
                                        borderRadius:
                                            BorderRadius.circular(100)),
                                    child: Center(
                                      child: Container()
                                    ).blurred(
                                  colorOpacity: 0.1,
                                  borderRadius:  BorderRadius.circular(100),
                                  //color: SolidColors.blurBlu,
                                  blurColor: SolidColors.white,
                                ),
                                  ),
                                ),
                                Center(
                                  child: Padding(
                                          padding: const EdgeInsets.only(left: 6),
                                          child: Image.asset(
                                              Assets.icons.polygon1.path),
                                        ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 40,
                          ),
                            Padding(
                              padding: const EdgeInsets.only(right: 5),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Text(
                                    "20 مرداد 1401",
                                    style: textTheme.bodyText1,
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 150,)
                        ],
                      ),
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}