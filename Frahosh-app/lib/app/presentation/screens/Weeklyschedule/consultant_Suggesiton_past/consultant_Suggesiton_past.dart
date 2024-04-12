import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../modules/widgets/Schedule_page/planeMySchedule.dart';
import '../../../modules/widgets/chart/chart_Circular.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/getcalendar.dart';
import '../../../modules/widgets/navbar/navbar.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';

class ConsultantSuggesitonPast extends StatelessWidget {
  List<String> items = <String>[
    'ریاضی',
    'فیزیک',
  ];

  String selectedItem = 'ریاضی';

  bool ispressed = true;

  ConsultantSuggesitonPast({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "برنامه پیشنهادی مشاور"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    // crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const SizedBox(
                        height: 20,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            width: size.width / 2.35,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child:
                                dropdownButton(selectedItem, items, textTheme),
                          ),
                          Container(
                            width: size.width / 2.35,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child:
                                dropdownButton(selectedItem, items, textTheme),
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      // getcalendar(
                      //   dateNumber: '1',
                      //   dateString: 'شنبه',
                      // ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'برنامه روز شنبه 8 مرداد',
                            style: textTheme.subtitle1,
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      PlaneMySchedule(
                        size: size,
                        hintText: "اتمام تمرین‌های ریاضی",
                        lineThroughText: true,
                        doneCheckBox: true,
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      PlaneMySchedule(
                        size: size,
                        hintText: "رسم نمودارهای کلاس دوشنبه",
                        doneCheckBox: true,
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      PlaneMySchedule(
                        size: size,
                        hintText: "تمرین روخوانی فارسی",
                        lineThroughText: true,
                        doneCheckBox: true,
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      PlaneMySchedule(
                        size: size,
                        hintText: "مطالعه کلمه‌ها و معنی‌های درس فارسی",
                        lineThroughText: true,
                        doneCheckBox: true,
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      PlaneMySchedule(
                        size: size,
                        hintText: "انجام آزمایش‌های علوم",
                        lineThroughText: true,
                        doneCheckBox: true,
                      ),
                      const SizedBox(
                        height: 20,
                      ),

                      chart_Circular(context),
                      const SizedBox(
                        height: 50,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'دلایل عدم تحقق برنامه',
                            style: textTheme.subtitle1,
                          ),
                          const Icon(
                            Icons.add_circle_outline,
                            color: SolidColors.black,
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      Container(
                        height: 60,
                        width: size.width,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(15),
                          color: SolidColors.white,
                        ),
                        child: const TextFieldWidget(
                          hintText: "سرماخوردگی",
                          borderSideColor: SolidColors.blue,
                        ),
                      ),
                      const SizedBox(
                        height: 40,
                      ),

                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text(
                            'توصیه مشاور',
                            style: textTheme.subtitle1,
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      Container(
                        width: size.width,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(15),
                          color: SolidColors.white,
                        ),
                        child: const TextFieldWidget(
                          hintText: """با آرزوی سلامتی شما
برای جبران برنامه انجام نشده، نمودار درس جدید و درس قبلی
را باهم رسم کرده و جلسه بعدی به معلم ریاضی تحویل دهید.""",
                          minLines: 4,
                          borderSideColor: SolidColors.blue,
                        ),
                      ),
                      const SizedBox(
                        height: 40,
                      ),
                    ],
                  ),
                ),
            
                NavBar(size: size),
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
