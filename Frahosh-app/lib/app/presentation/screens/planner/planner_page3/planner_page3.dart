import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../modules/widgets/dropdownButton.dart';

class PlannerPage3 extends StatelessWidget {
  const PlannerPage3({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'پیام‌های مشاور',
      'پیام‌های معاون',
      'پیام‌های معلم',
    ];
    String? selectedItem = 'پیام‌های مشاور';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "5 اردیبهشت 1401"),
          Expanded(
            child: Stack(children: [
              SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Column(children: [
                  const SizedBox(
                    height: 20,
                  ),
                  dropdownButton(selectedItem, items, textTheme),
                  const SizedBox(
                    height: 40,
                  ),
                  Container(
                    //    height: size.height,
                    width: size.width,
                    margin: const EdgeInsets.symmetric(vertical: 20),
                    decoration: BoxDecoration(
                        borderRadius: const BorderRadius.all(Radius.circular(15)),
                        border: Border.all(color: SolidColors.blue, width: 0.3),
                        color: SolidColors.white),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 13, vertical: 14),
                      child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('سارا علیزاده :',
                                textDirection: TextDirection.rtl,
                                style: textTheme.subtitle1),
                            const SizedBox(
                              height: 10,
                            ),
                            Text(
                              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.',
                              textDirection: TextDirection.rtl,
                              style: textTheme.bodyText1,
                            )
                          ]),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    //    height: size.height,
                    width: size.width,
                    margin: const EdgeInsets.symmetric(vertical: 20),
                    decoration: BoxDecoration(
                        borderRadius: const BorderRadius.all(Radius.circular(15)),
                        border: Border.all(color: SolidColors.blue, width: 0.3),
                        color: SolidColors.white),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 13, vertical: 14),
                      child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('سارا علیزاده :',
                                textDirection: TextDirection.rtl,
                                style: textTheme.subtitle1),
                            const SizedBox(
                              height: 10,
                            ),
                            Text(
                              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.',
                              textDirection: TextDirection.rtl,
                              style: textTheme.bodyText1,
                            )
                          ]),
                    ),
                  ),
                  const SizedBox(
                    height: 40,
                  ),
                  dropdownButton(selectedItem, items, textTheme),
                  const SizedBox(height: 150,),
                ]),
              ),
              NavBar(size: size),
            ]),
          ),
        ],
      ),
    ));
  }

}
