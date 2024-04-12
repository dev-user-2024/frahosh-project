import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';

class ClassBook1 extends StatelessWidget {
  const ClassBook1({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "دفتر کلاسی"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(height: 20,),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'تاریخ',
                              style: textTheme.bodyText1,
                            ),
                            Container(
                              height: 55,
                              width: size.width / 1.5,
                              decoration: BoxDecoration(
                                  borderRadius:
                                      const BorderRadius.all(Radius.circular(10)),
                                  border: Border.all(
                                      color: SolidColors.textTitleBlac,
                                      width: 0.2),
                                  color: SolidColors.backgroundColor),
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      '1401/08/10',
                                      style: textTheme.bodyText1,
                                    ),
                                    DataImages.calenderIcon.toPNGImage(size: 20),
                                  ],
                                ),
                              ),
                            )
                          ],
                        ),
                        const SizedBox(height: 20,),
                        _DescriptionScore(
                          size: size,
                           textTheme: textTheme,
                           description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
                           score: 19,
                           name: 'ریاضی',
                           )
                      ],
                    )),
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}

class _DescriptionScore extends StatelessWidget {
  const _DescriptionScore({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.score,
    required this.name,
    required this.description,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final double score;
  final String name;
  final String description;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: size.height,
      width: size.width,
      child: Padding(
            padding:
                const EdgeInsets.symmetric(vertical: 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '$name : $score',
                  style: textTheme.subtitle1,
                ),
                const SizedBox(
                  height: 20,
                ),
                Container(
                  //  height: 250,
                  width: size.width,

                  decoration: BoxDecoration(
                      borderRadius: const BorderRadius.all(
                          Radius.circular(15)),
                      border: Border.all(
                          color: SolidColors.blue,
                          width: 0.3),
                      color: SolidColors.white),
                  child: Padding(
                    padding: const EdgeInsets.all(14.0),
                    child: Column(
                      crossAxisAlignment:
                          CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'توضیحات',
                          style: TextStyle(
                              color:
                                  SolidColors.textTitleGray,
                              fontSize: 14),
                        ),
                        const SizedBox(
                          height: 14,
                        ),
                        Text(
                          description,
                          style: textTheme.subtitle1,
                        )
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
    );
  }
}
