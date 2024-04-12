import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';

import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class Sessions extends StatelessWidget {
  const Sessions({super.key});

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
            toApp(context: context, title: "جلسه"),

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
                          const SizedBox(
                            height: 20,
                          ),
                          Container(
                            width: size.width,
                            height: size.height / 4,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: Padding(
                              padding: const EdgeInsets.all(20),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      Row(
                                        children: [
                                          Text(
                                            "تاریخ:",
                                            style: textTheme.bodyText1,
                                          ),
                                          const SizedBox(
                                            width: 20,
                                          ),
                                          const Text(
                                            "4 مهر 1401",
                                            style: TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 12,
                                                color:
                                                    SolidColors.textTitleBlac),
                                          ),
                                        ],
                                      ),
                                      Row(
                                        children: [
                                          Text(
                                            "ساعت:",
                                            style: textTheme.bodyText1,
                                          ),
                                          const SizedBox(
                                            width: 20,
                                          ),
                                          const Text(
                                            "09:30 صبح",
                                            style: TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 12,
                                                color:
                                                    SolidColors.textTitleBlac),
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  Row(
                                    children: [
                                      Text(
                                        "برگزارکننده:",
                                        style: textTheme.bodyText1,
                                      ),
                                      const SizedBox(
                                        width: 20,
                                      ),
                                      const Text(
                                        "مدیر مدرسه- آقای نیازی و معاون مدرسه- آقای ملکی",
                                        style: TextStyle(
                                            fontFamily: "IRANSansXV",
                                            fontSize: 12,
                                            color: SolidColors.textTitleBlac),
                                      ),
                                    ],
                                  ),
                                  Row(
                                    children: [
                                      Text(
                                        "موضوع:",
                                        style: textTheme.bodyText1,
                                      ),
                                      const SizedBox(
                                        width: 20,
                                      ),
                                      const Text(
                                        "المپیاد ریاضی سال 1401",
                                        style: TextStyle(
                                            fontFamily: "IRANSansXV",
                                            fontSize: 12,
                                            color: SolidColors.textTitleBlac),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          InkWell(
                            child: const ButtonWidget(
                              title: "ورود به جلسه",
                              grey: true,
                            ),
                            onTap: () {
                              //  Navigator.of(context).push(
                              //         MaterialPageRoute(
                              //             builder: ((context) =>
                              //                 const ())));
                            },
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          Row(
                            children: const [
                              Text(
                                "* لینک ورود به جلسه در زمان مشخص شده فعال می‌گردد.",
                                style: TextStyle(
                                    fontFamily: "IRANSansXV",
                                    fontSize: 12,
                                    color: SolidColors.textTitleBlac),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          Row(
                            children:  [
                              Text(
                                "جلسات برگزار شده",
                                style: textTheme.bodyText1,
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 50,
                          ),
                          Container(
                            width: size.width,
                            height: 65,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: Center(
                              child: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "1401/03/20",
                                  style: textTheme.bodyText1,
                                ),
                                SizedBox(
                                  width: size.width/1.9,
                                  child: Text(
                                    "بازسازی آب خوری مدرسه",
                                    style: textTheme.bodyText1,
                                  ),
                                ),
                              ],
                            ),
                              ),
                            ),
                          ),
                          
                          const SizedBox(
                            height: 30,
                          ),
                          Container(
                            width: size.width,
                            height: 65,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: Center(
                              child: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "1401/03/20",
                                  style: textTheme.bodyText1,
                                ),
                                SizedBox(
                                  width: size.width/1.9,
                                  child: Text(
                                    "جشن قهرمانی تیم والیبال مدرسه",
                                    style: textTheme.bodyText1,
                                  ),
                                ),
                              ],
                            ),
                              ),
                            ),
                          ),
                          
                          const SizedBox(
                            height: 30,
                          ),
                          Container(
                            width: size.width,
                            height: 65,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: Center(
                              child: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "1401/03/20",
                                  style: textTheme.bodyText1,
                                ),
                                SizedBox(
                                  width: size.width/1.9,
                                  child: Text(
                                    "اهدا تقدیرنامه به برگزیدگان مسابقه فوتبال",
                                    style: textTheme.bodyText1,
                                  ),
                                ),
                              ],
                            ),
                              ),
                            ),
                          ),
                          
                          const SizedBox(
                            height: 30,
                          ),
                          Container(
                            width: size.width,
                            height: 65,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: Center(
                              child: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "1401/03/20",
                                  style: textTheme.bodyText1,
                                ),
                                SizedBox(
                                  width: size.width/1.9,
                                  child: Text(
                                    "اعلام شرایط‌ اردوی مشهد مقدس",
                                    style: textTheme.bodyText1,
                                  ),
                                ),
                              ],
                            ),
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 100,
                          ),

                          InkWell(
                            child: const ButtonWidget(
                              title: "ورود به جلسه",
                              mainColor: true,
                            ),
                            onTap: () {
                              //  Navigator.of(context).push(
                              //         MaterialPageRoute(
                              //             builder: ((context) =>
                              //                 const ())));
                            },
                          ),

                          const SizedBox(
                            height: 150,
                          ),
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
