import 'package:blur/blur.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/modules/widgets/textField/searchTextField.dart';
import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../modules/const/datacolors.dart';

class PodcastPage4 extends StatelessWidget {
  const PodcastPage4({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "لیست پخش"),
            Expanded(
              child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 20, 20, 10),
                  child: SearchTextField(
                    hintText: 'پادکست مورد نظرت رو جست و جو کن...',
                  ),
                ),
                Expanded(
                  child: Stack(
                    children: [
                      SingleChildScrollView(
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                          child: Column(
                            children: [
                              _epizode(size, textTheme).toClick(onTap: (() {
                                // Navigator.of(context).push(MaterialPageRoute(
                                //   builder: ((context) =>  PodcastPage5())));
                              })),
                              const SizedBox(
                                height: 25,
                              ),
                              _epizode(size, textTheme).toClick(onTap: (() {
                                // Navigator.of(context).push(MaterialPageRoute(
                                //   builder: ((context) =>  PodcastPage5())));
                              })),
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
                ),
              ]),
            ),
          ]),
        ),
      ),
    );
  }

  Container _epizode(Size size, TextTheme textTheme) {
    return Container(
      height: 90,
      width: size.width,
      color: SolidColors.backgroundColor,
      child: Container(
        height: 82,
        width: size.width,
        color: SolidColors.backgroundColor,
        child: Row(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: SizedBox(
                width: 82,
                height: 82,
                child: Stack(
                  children: [
                    Center(child: DataImages.podcast.toPNGImage()),
                    Center(
                      child: Container(
                        width: 80,
                        height: 80,
                        decoration: BoxDecoration(
                            color: const Color.fromARGB(0, 0, 0, 0),
                            borderRadius: BorderRadius.circular(100)),
                        child: Center(child: Container()).blurred(
                          colorOpacity: 0.1,
                          borderRadius: BorderRadius.circular(15),
                          //color: SolidColors.blurBlu,
                          blurColor: SolidColors.white,
                        ),
                      ),
                    ),
                    Center(
                      child: Padding(
                        padding: const EdgeInsets.only(left: 6),
                        child: Image.asset(Assets.icons.polygon1.path),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.only(top: 15),
                  child: Text('اپیزود 34- جمله‌سازی با گذشته استمراری',
                      textDirection: TextDirection.rtl,
                      style: textTheme.bodyText1),
                ),
                const SizedBox(
                  height: 10,
                ),
                Text('20 شهریور 1401',
                    textDirection: TextDirection.rtl,
                    style: textTheme.bodyText2),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
