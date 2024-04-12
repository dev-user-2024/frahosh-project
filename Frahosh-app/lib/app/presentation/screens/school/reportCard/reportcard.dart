import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonDownloadOrShare.dart';

class ReportCard extends StatelessWidget {
  const ReportCard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "کارنامه"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 20,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: const[
                            Text(
                              'آبان 1401',
                              style: TextStyle(
                                  color: SolidColors.blue, fontSize: 16),
                            )
                          ],
                        ),
                        SizedBox(
                          width: size.width,
                          child: Column(
                            children: [
                              _ScoreReport(size: size, textTheme: textTheme,title: 'ریاضی',score: 12,),
                              _ScoreReport(size: size, textTheme: textTheme,title: 'قرآن',score: 20,),
                            ],
                          ),
                        ),
                        const SizedBox(height: 20,),
                        Container(
                          height: 250,
                          width: size.width,
                          margin: const EdgeInsets.symmetric(vertical: 20),
                          decoration: BoxDecoration(
                              borderRadius:
                                  const BorderRadius.all(Radius.circular(15)),
                              border: Border.all(
                                  color: SolidColors.blue, width: 0.3),
                              color: SolidColors.white),
                          child: Padding(
                            padding: const EdgeInsets.all(14.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text(
                                  'توضیحات',
                                  style: TextStyle(
                                      color: SolidColors.textTitleGray,
                                      fontSize: 14),
                                ),
                                const SizedBox(
                                  height: 14,
                                ),
                                Text(
                                  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
                                  style: textTheme.subtitle1,
                                )
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(
                          height: 30,
                        ),
                        Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              ButtonDownloadOrShare(size: size, textTheme: textTheme,title: "دانلود فایل PDF",),
                              ButtonDownloadOrShare(size: size, textTheme: textTheme,title: "دانلود فایل JPEG",),
                            ]),
                          const SizedBox(height: 150,),
                      ],
                    )),
                    NavBar(size: size)
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}

class _ScoreReport extends StatelessWidget {
  const _ScoreReport({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.title,
    required this.score,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final String title;
  final double score;

  @override
  Widget build(BuildContext context) {
    return Column(
          children: [
            SizedBox(
              height: 48,
              width: size.width,
              child: Row(
                mainAxisAlignment:
                    MainAxisAlignment.spaceBetween,
                children: [
                   Text(
                    title,
                    style: const TextStyle(
                        color: SolidColors.textTitleGray,
                        fontSize: 16),
                  ),
                  Text(
                    score.toString(),
                    style: textTheme.subtitle1,
                  )
                ],
              ),
            ),
            Container(
              decoration: const BoxDecoration(
                  gradient: LinearGradient(
                      colors:
                          GradiantColors.blackBoxColor)),
              child: const Divider(
                height: 1,
              ),
            ),
          ],
        );
  }
}