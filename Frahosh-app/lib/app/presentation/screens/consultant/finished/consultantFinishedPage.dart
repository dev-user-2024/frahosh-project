import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/consultant/consultant_chat/consultant_HistoryChat.dart';
import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/const/urlimages.dart';
import '../../../modules/widgets/boxes/InfoConsultantBox.dart';
import '../../../modules/widgets/boxes/videoBox.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../modules/widgets/ratingstar.dart';

class ConsultantFinishedPage extends StatelessWidget {
  const ConsultantFinishedPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    bool isVoise = false;
    bool isText = true;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "مشاوره انجام شده"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  //        padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    children: [
                      InfoConsultant(
                        size: size,
                        date: '15 شهریور 1401',
                        hours: 'ساعت 4 عصر',
                        consultantName: 'علی حسینی',
                        time: '15 دقیقه',
                        cost: '125 هزار تومان',
                        relationship: 'تصویری',
                      ),
                      isVoise == true ? 
                          Column(
                            children: [
                              const SizedBox(height: 20,),
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                          child: Container(
                            height: 6,
                            width: size.width,
                            decoration:  BoxDecoration(
                              borderRadius:BorderRadius.circular(20),
                            ),
                            child: const LinearProgressIndicator(
                              value: 0.8,
                              color: Color.fromARGB(255, 224, 224, 224),
                              backgroundColor: SolidColors.blue,
                              minHeight: 2,
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.symmetric(
                             vertical: 0,horizontal: 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: const [
                              Text(
                                '01:30:00',
                                textDirection: TextDirection.rtl,
                                style: TextStyle(
                                  fontSize: 10,
                                  color: SolidColors.grey,
                                  fontFamily: 'IRANSansXV',
                                  fontWeight: FontWeight.w400,
                                ),
                              ),
                              Text(
                                '00:27:16',
                                textDirection: TextDirection.rtl,
                                style: TextStyle(
                                  fontSize: 10,
                                  color: SolidColors.grey,
                                  fontFamily: 'IRANSansXV',
                                  fontWeight: FontWeight.w400,
                                ),
                              ),
                            ],
                          ),
                        ),
                             
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
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceBetween,
                                          children: [
                                            DataImages.musicPlaylist
                                                .toPNGImage(size: 20),
                                            SizedBox(
                                              width: 21,
                                              height: 21,
                                              child: Stack(
                                                children: [
                                                  DataImages.refreshRight
                                                      .toPNGImage(size: 21),
                                                  const Center(
                                                      child: Text(
                                                    "۳۰",
                                                    style: TextStyle(
                                                        fontFamily:
                                                            "IRANSansXV",
                                                        fontSize: 9,
                                                        color: SolidColors
                                                            .textTitleBlac,
                                                        fontWeight:
                                                            FontWeight.bold),
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
                                                        fontWeight:
                                                            FontWeight.bold),
                                                  ))
                                                ],
                                              ),
                                            ),
                                            DataImages.heartImage
                                                .toPNGImage(size: 20),
                                          ],
                                        ).toSymmetric(H: 25.0)
                                      ],
                                    ),
                                  ),
                                ],
                              ).toOnly(B: 30.0, R: 20.0),
                            ],
                          ) : isText == true ?
                          Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: SizedBox(
                          width: size.width,
                          child: const ButtonWidget(title: 'مشاهده چت', mainColor: true).toClick(onTap: (() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                 const ConsultantHistoryChat())));
                          })),
                        ),
                      ):
                      VideoBox(
                        size: size,
                        image: Image.asset(
                          Assets.images.rectangle160.path,
                          fit: BoxFit.fill,
                        ),
                      ),  
                      Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 20, vertical: 40),
                        child: SizedBox(
                          width: size.width,
                          child: Column(children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  'لطفا امتیاز و نظرت رو ثبت کن',
                                  textDirection: TextDirection.rtl,
                                  style: Theme.of(context).textTheme.subtitle1,
                                ),
                                ratingstar(),
                              ],
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            Center(
                              child: Container(
                                  width: size.width,
                                  decoration: const BoxDecoration(
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(15)),
                                  ),
                                  child: const TextFieldWidget(
                                    labelText: "",
                                    minLines: 5,
                                    borderSideColor: SolidColors.black,
                                  )),
                            ),
                          ]),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: SizedBox(
                          width: size.width,
                          child: const ButtonWidget(title: 'ثبت', mainColor: true),
                        ),
                      ),
                      const SizedBox(height: 100,),
                    ],
                  ),
                ),
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
