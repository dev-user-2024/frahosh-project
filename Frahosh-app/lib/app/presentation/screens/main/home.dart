import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/podcast/podcast_1/podcast_page1.dart';
import 'package:farahoosh/app/presentation/modules/const/routepage.dart';
import 'package:farahoosh/app/presentation/screens/testanalysis/testAnalysis/testanalysis.dart';
import 'package:flutter/material.dart';
import '../../modules/const/urlimages.dart';
import '../../modules/widgets/boxes/bluBoxTwoText.dart';
import '../../modules/widgets/boxes/informationBox.dart';
import '../Weeklyschedule/weeklyschedule.dart';

class HomeInnerScreen extends StatelessWidget {
  const HomeInnerScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: Column(
        children: [
          // first blu box
          Padding(
            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
            child: InkWell(
              child: BluBoxTwoText(
                image: DataImages.sms.toPNGImage(size: 100),
                size: size,
                textTheme: textTheme,
                text1: "درخواست تیکت پشتیبانی",
                text2: "بپرس و زود جوابتو بگیر",
              ),
                  onTap: () {
                    Navigator.of(context).pushNamed(RouterPage.ticketpage1);
                  },
            ),
          ),

          // line 1
          Padding(
            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                InkWell(
                  child: InformationBox(
                    image: DataImages.bluHome.toPNGImage(size: 100),
                    size: size,
                    textTheme: textTheme,
                    title: "مدرسه",
                  ),
                  onTap: () {
                    Navigator.of(context).pushNamed(RouterPage.school);
                  },
                ),
                InkWell(
                  child: InformationBox(
                    image: DataImages.handHome.toPNGImage(size: 100),
                    size: size,
                    textTheme: textTheme,
                    title: "مشاوره",
                  ),
                  onTap: () {
                    Navigator.of(context).pushNamed(RouterPage.consultant1);
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
                    image: DataImages.book.toPNGImage(size: 100),
                    size: size,
                    textTheme: textTheme,
                    title: "دفتر برنامه ریزی",
                  ),
                  onTap: () {
                    Navigator.of(context).pushNamed(RouterPage.planner);
                  },
                ),
                InkWell(
                  child: InformationBox(
                    image: DataImages.box.toPNGImage(size: 100),
                    size: size,
                    textTheme: textTheme,
                    title: "ابزارک ها",
                  ),
                  onTap: () {
                    Navigator.of(context).pushNamed(RouterPage.tools);
                  },
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
                InkWell(
                  child: InformationBox(
                    image: DataImages.program.toPNGImage(size: 100),
                    size: size,
                    textTheme: textTheme,
                    title: "برنامه ی هفتگی",
                  ),
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: ((context) => const Weeklyschedule())));
                  },
                ),
                InkWell(
                  child: InformationBox(
                    image: DataImages.solutionPage.toPNGImage(size: 100),
                    size: size,
                    textTheme: textTheme,
                    title: "حل سوالات درسی",
                  ),
                  onTap: () {
                    Navigator.of(context).pushNamed(RouterPage.questionSolving);
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
                InkWell(
                  child: InformationBox(
                    image: DataImages.exampeper.toPNGImage(size: 100),
                    size: size,
                    textTheme: textTheme,
                    title: "تحلیل آزمون",
                  ),
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: ((context) => TestAnalysis())));
                  },
                ),
                InkWell(
                  child: InformationBox(
                    image: DataImages.podecast.toPNGImage(size: 100),
                    size: size,
                    textTheme: textTheme,
                    title: "پادکست",
                  ),
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: ((context) => PodcastPage1())));
                  },
                ),
              ],
            ),
          ),

          // Second blu box
          Padding(
            padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
            child: BluBoxTwoText(
              image: DataImages.robotHello.toPNGImage(size: 100),
              size: size,
              textTheme: textTheme,
              text1: "ربات چت تلگران",
              text2: "سوالی داری؟ بیا بپرس",
            ),
          ),
          const SizedBox(
            height: 100,
          )
        ],
      ),
    );
  }
}
