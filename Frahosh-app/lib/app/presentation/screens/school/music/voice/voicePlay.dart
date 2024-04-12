import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';

class VoicePlay extends StatelessWidget {
  const VoicePlay({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            // appbar
            toApp(context: context, title: "صدا"),

            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 30,
                          ),

                          // information video
                          Stack(
                            children: [
                              SizedBox(
                                  width: size.width,
                                  height: 300,
                                  child: Stack(
                                    children: [
                                      SizedBox(
                                          width: size.width,
                                          height: 288,
                                          child: DataImages.lozengeBlueImage
                                              .toPNGImage()
                                              ),
                                      SizedBox(
                                              width: size.width,
                                              height: 45,
                                        child: Stack(
                                          children: [
                                            Container(
                                              width: size.width,
                                              height: 45,
                                              decoration: const BoxDecoration(
                                                gradient: LinearGradient(
                                                  colors:
                                                      GradiantColors.musicGradient,
                                                  begin: Alignment.topCenter,
                                                  end: Alignment.bottomCenter,
                                                ),
                                                borderRadius: BorderRadius.only(
                                                  topRight: Radius.circular(15),
                                                  topLeft: Radius.circular(15),
                                                ),                                         
                                              ),
                                            ),
                                            Column(
                                                    mainAxisAlignment: MainAxisAlignment.center,
                                                    children: [
                                                      Row(
                                                  children: [
                                                    Expanded(
                                                      child: const Text(
                                                        "2 مهر 1401",
                                                        style: TextStyle(
                                                          fontSize: 12,
                                                          color: SolidColors
                                                              .textTitleWhite,
                                                        ),
                                                          maxLines: 1,
                                                      ).toOnly(
                                                        R: 12.0,
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                                    ],
                                                  ),
                                                
                                              
                                          ],
                                        ),
                                      ),
                                      Padding(
                                        padding:
                                            const EdgeInsets.only(top: 240),
                                        child: SizedBox(
                                              width: size.width,
                                              height: 45,
                                          child: Stack(
                                            children: [
                                              Container(
                                                width: size.width,
                                                height: 45,
                                                decoration: const BoxDecoration(
                                                  gradient: LinearGradient(
                                                    colors:
                                                        GradiantColors.musicGradient,
                                                    end: Alignment.topCenter,
                                                    begin: Alignment.bottomCenter,
                                                  ),
                                                ),
                                              ),

                                                    Column(
                                                      mainAxisAlignment: MainAxisAlignment.center,
                                                      children: [
                                                        Row(
                                                children: [
                                                  const Text(
                                                        "صحبتی درباره اهداف آموزشی سال تحصیلی 1401-1402",
                                                        style: TextStyle(
                                                          fontSize: 12,
                                                          color: SolidColors
                                                              .textTitleWhite,
                                                        ),
                                                  ).toOnly(
                                                        R: 12.0,
                                                  ),
                                                ],
                                                        ),
                                                      ],
                                                    ),
                                            ],
                                          ),
                                        ),
                                      ),
                                    ],
                                  )),
                            ],
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Column(
                            children: [
                              toVerticalSpaces,
                              Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  SizedBox(
                                    height: 50,
                                    width: 290,
                                    child: Stack(
                                      children: [
                                        Center(
                                          child: Container(
                                            height: 35,
                                            width: 290,
                                            decoration: BoxDecoration(
                                              // color: SolidColors.blue,
                                              border: Border.all(
                                                  color: SolidColors.blue),
                                              borderRadius:
                                                  BorderRadius.circular(40),
                                            ),
                                          ),
                                        ),

                                        // play button
                                        Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          children: [
                                            Stack(
                                              children: [
                                                Container(
                                                  height: 50,
                                                  width: 50,
                                                  decoration: BoxDecoration(
                                                    color: SolidColors.blue,
                                                    border: Border.all(
                                                        color:
                                                            SolidColors.white),
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                            100),
                                                  ),
                                                ),
                                                Center(
                                                  child: Padding(
                                                    padding:
                                                        const EdgeInsets.only(
                                                            right: 15.5),
                                                    child: DataImages.playIcon
                                                        .toPNGImage(size: 15),
                                                  ),
                                                ),
                                              ],
                                            ),
                                          ],
                                        ),
                                        
                                        Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                          children: [
                                            DataImages.musicPlaylist.toPNGImage(size: 20),
                                              SizedBox(
                                              width: 21,
                                              height: 21,
                                              child: Stack(
                                                children: [
                                            DataImages.refreshRight.toPNGImage(size: 21),
                                                  const Center(
                                                      child: Text(
                                                    "۳۰",
                                                    style: TextStyle(
                                                        fontFamily:
                                                            "IRANSansXV",
                                                        fontSize: 9,
                                                        color: SolidColors
                                                            .textTitleBlac,
                                                            fontWeight: FontWeight.bold
                                                            ),
                                                  ))
                                                ],
                                              ),
                                            ),
                                            Container(),
                                            SizedBox(
                                              width: 21,
                                              height: 21,
                                              child: Stack(
                                                children: [
                                                  DataImages.refreshLeft
                                                      .toPNGImage(size: 21),
                                                  const Center(
                                                      child: Text(
                                                    "۱۰",
                                                    style: TextStyle(
                                                        fontFamily:
                                                            "IRANSansXV",
                                                        fontSize: 9,
                                                        color: SolidColors
                                                            .textTitleBlac,
                                                            fontWeight: FontWeight.bold
                                                            ),
                                                  ))
                                                ],
                                              ),
                                            ),
                                            DataImages.heartImage.toPNGImage(size: 20),
                                          ],
                                        ).toSymmetric(H: 25.0)
                                     
                                      ],
                                    ),
                                  ),
                                ],
                              ).toOnly(B: 30.0, R: 20.0),
                            ],
                          ),





                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.only(top: 10, right: 5),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "توضیحات",
                                  style: textTheme.bodyText1,
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ), 
                          Container(
                            width: size.width,
                            height: size.height / 4.5,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: Padding(
                              padding: const EdgeInsets.all(20),
                              child: Column(
                                children: [
                                  Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text(
                                        "مریم نادریان- مدیر مدرسه",
                                        style: textTheme.bodyText2,
                                      ),
                                    ],
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  Text(
                                   "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
                                    style: textTheme.bodyText1,
                                  ),
                                ],
                              ),
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
            )
          ],
        ),
      ),
    );
  }
}
