import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/bluBoxOneTex.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:farahoosh/app/presentation/screens/school/handout/main/handoutMain.dart';
import 'package:farahoosh/app/presentation/screens/school/schedule/schedule.dart';
import 'package:flutter/material.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/boxes/informationBox.dart';

class SchoolPage extends StatelessWidget {
  const SchoolPage({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [
              // appbar
              toApp(context: context, title: "مدرسه"),

              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          // first blu box
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: BluBoxOneText(
                              image: DataImages.bluHome.toPNGImage(size: 110),
                              size: size,
                              textTheme: textTheme,
                              text: "درباره مدرسه",
                            ).toClick(onTap: (() {
                              Navigator.of(context).push(MaterialPageRoute(
                                  builder: ((context) => SchoolAbout())));
                            })),
                          ),

                          // line 1
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.bluCheckBoxSchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "آزمون",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                TestPage())));
                                  },
                                ),
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.diplomaSchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "نمرات",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                ScoresPage())));
                                  },
                                ),
                              ],
                            ),
                          ),
                          // line 2
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.meetingPlayerSchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "جلسه",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                const Sessions())));
                                  },
                                ),
                                InformationBox(
                                  image: DataImages.bluChairSchool
                                      .toPNGImage(size: 90),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "حضور و غیاب",
                                ),
                              ],
                            ),
                          ),
                          // line 3
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InformationBox(
                                  image: DataImages.homeWorkSchool
                                      .toPNGImage(size: 90),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "تکالیف",
                                ).toClick(onTap: (() {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) =>
                                          SchoolHomeworkChart())));
                                })),
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.greenNotebookSchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "جزوه",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                const HandoutMain())));
                                  },
                                ),
                              ],
                            ),
                          ),
                          // line 4
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InformationBox(
                                  image: DataImages.galerySchool
                                      .toPNGImage(size: 90),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "گالری تصاویر",
                                ).toClick(onTap: (() {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => PicsGallery1())));
                                })),
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.musicSchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "موسیقی",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                const Music())));
                                  },
                                ),
                              ],
                            ),
                          ),
                          // line 5
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InformationBox(
                                  image: DataImages.peperClassSchool
                                      .toPNGImage(size: 90),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "دفتر‌ کلاسی",
                                ).toClick(onTap: (() {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) =>
                                          const ClassBook1())));
                                })),
                                InformationBox(
                                  image: DataImages.disiplineSchool
                                      .toPNGImage(size: 90),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "موارد انضباطی",
                                ).toClick(onTap: (() {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => ClassBook2())));
                                })),
                              ],
                            ),
                          ),
                          // line 6
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InformationBox(
                                  image: DataImages.reportCardSchool
                                      .toPNGImage(size: 90),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "کارنامه",
                                ).toClick(onTap: (() {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) =>
                                          const ReportCard())));
                                })),
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.calendarSchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "برنامه مدرسه",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                const Schedule())));
                                  },
                                ),
                              ],
                            ),
                          ),
                          // line 7
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.tuitionSchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "شهریه",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) => Tuition())));
                                  },
                                ),
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.surveySchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "نظرسنجی",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) => Survey1())));
                                  },
                                ),
                              ],
                            ),
                          ),
                          // line 8
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                InformationBox(
                                  image: DataImages.notificationsSchool
                                      .toPNGImage(size: 90),
                                  size: size,
                                  textTheme: textTheme,
                                  title: "اطلاعیه مدرسه",
                                ).toClick(onTap: (() {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => Notifications())));
                                })),
                                InkWell(
                                  child: InformationBox(
                                    image: DataImages.messengerSchool
                                        .toPNGImage(size: 90),
                                    size: size,
                                    textTheme: textTheme,
                                    title: "پیام من و مدرسه",
                                  ),
                                  onTap: () {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                const Messenger())));
                                  },
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
            ],
          ),
        ),
      ),
    );
  }
}
