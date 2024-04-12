import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class Survey2 extends StatelessWidget {
  const Survey2({super.key});

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

              toApp(context: context, title: "ارزشیابی معلم زبان انگلیسی"),
              // main
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          Container(
                            color: SolidColors.backgroundColor,
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: Column(
                              children: [
                                SizedBox(
                                  height: size.height / 30,
                                ),
                                Row(
                                  children: [
                                    Text(
                                      "1- معلم زبان انگلیسی چقدر به مباحث درسی تسلط داشته است؟",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                                SizedBox(
                                  height: size.height / 30,
                                ),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    SizedBox(
                                      width: size.width / 2,
                                      height: size.height / 12,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: [
                                          Align(
                                            alignment: Alignment.centerRight,
                                            child: toCheckBox(
                                                title: 'خیلی زیاد',
                                                isActive: true,
                                                onTap: () {}, context: context),
                                          ),
                                          SizedBox(
                                            height: size.height / 40,
                                          ),
                                          Align(
                                          alignment: Alignment.centerRight,
                                          child: toCheckBox(
                                              title: 'متوسط',
                                              isActive: false,
                                              onTap: () {}, context: context),
                                          ),
                                        ],
                                      ),
                                    ),
                                    SizedBox(
                                      width: size.width / 2.6,
                                      height: size.height / 12,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: [
                                          Align(
                                          alignment: Alignment.centerRight,
                                          child: toCheckBox(
                                              title: 'زیاد',
                                              isActive: false,
                                              onTap: () {}, context: context),
                                          ),
                                          SizedBox(
                                            height: size.height / 40,
                                          ),
                                          Align(
                                          alignment: Alignment.centerRight,
                                          child: toCheckBox(
                                              title: 'کم',
                                              isActive: false,
                                              onTap: () {}, context: context),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                SizedBox(
                                  height: size.height / 26,
                                ),
                                Row(
                                  children: [
                                    Text(
                                      "2- مهم ترین ویژگی مثبت کلاس زبان انگلیسی چه بوده است؟",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                                SizedBox(
                                  height: size.height / 30,
                                ),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    SizedBox(
                                      width: size.width / 2,
                                      height: size.height / 12,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: [
                                          Align(
                                            alignment: Alignment.centerRight,
                                            child: toCheckBox(
                                                title: 'مشارکت زیاد دانش‌آموزان',
                                                isActive: false,
                                                onTap: () {}, context: context),
                                          ),
                                          SizedBox(
                                            height: size.height / 40,
                                          ),
                                          Align(
                                          alignment: Alignment.centerRight,
                                          child: toCheckBox(
                                              title: 'تمرین‌های مرتبط با درس',
                                              isActive: false,
                                              onTap: () {}, context: context),
                                          ),
                                        ],
                                      ),
                                    ),
                                    SizedBox(
                                      width: size.width / 2.6,
                                      height: size.height / 12,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        children: [
                                          Align(
                                          alignment: Alignment.centerRight,
                                          child: toCheckBox(
                                              title: 'تدریس خوب',
                                              isActive: true,
                                              onTap: () {}, context: context),
                                          ),
                                          SizedBox(
                                            height: size.height / 40,
                                          ),
                                          Align(
                                          alignment: Alignment.centerRight,
                                          child: toCheckBox(
                                              title: 'اخلاق معلم',
                                              isActive: false,
                                              onTap: () {}, context: context),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(
                                  height: 60,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    SizedBox(
                                      width: size.width / 2.5,
                                      height: 50,
                                      child: const ButtonWidget(
                                        title: "ذخیره",
                                        mainColor: true,
                                      ),
                                    ),
                                    SizedBox(
                                      width: size.width / 2.5,
                                      height: 50,
                                      child: InkWell(
                                        child: const ButtonWidget(
                                          title: "لغو",
                                          mainColor: false,
                                        ),
                                        onTap: () {
                                          Navigator.of(context).pop();
                                        },
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(
                                  height: 150,
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                                height: 150,
                              ),
                        ],
                      ),
                    ),
                    NavBar(size: size)
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
