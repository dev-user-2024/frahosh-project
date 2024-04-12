import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';

class ProfilePcychoinfoPretestPage extends StatelessWidget {
  const ProfilePcychoinfoPretestPage({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
           decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: GradiantColors.bgFrameGradient,
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
              ),
            ),
          child: Column(
            children: [
              // appbar

              toApp(context: context, title: "آزمون‌های قبلی"),
             
               // main
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: Column(
                              children: [
                                const SizedBox(
                                  height: 30,
                                ),
                                Row(
                                  children: [
                                    Text(
                                      "۵ مهر ۱۴۰۰",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),

                                const SizedBox(
                                  height: 30,
                                ),

                                Row(
                                  children: [
                                    Text(
                                      "۱- اولین روز حضور در کلاس چه حسی داشتی؟",
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
                                                title: "خوشحال بودم",
                                                isActivePast: true,
                                                onTap: () {}, context: context),
                                          ),
                                          SizedBox(
                                            height: size.height / 40,
                                          ),
                                          Align(
                                            alignment: Alignment.centerRight,
                                            child: toCheckBox(
                                                title:  "نگران بودم",
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
                                                title: "ناراحت بودم",
                                                isActive: false,
                                                onTap: () {}, context: context),
                                          ),
                                          SizedBox(
                                            height: size.height / 40,
                                          ),
                                          Align(
                                            alignment: Alignment.centerRight,
                                            child: toCheckBox(
                                                title:  "هیچکدام",
                                                isActive: false,
                                                onTap: () {}, context: context),
                                          ),
                                        ],
                                      ),),
                                  ],
                                ),
                                const SizedBox(
                                  height: 30,
                                ),

                                Row(
                                  children: [
                                    Text(
                                      "۱- اولین روز حضور در کلاس چه حسی داشتی؟",
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
                                                title: "خوشحال بودم",
                                                onTap: () {}, context: context),
                                          ),
                                          SizedBox(
                                            height: size.height / 40,
                                          ),
                                          Align(
                                            alignment: Alignment.centerRight,
                                            child: toCheckBox(
                                                title:  "نگران بودم",
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
                                                title: "ناراحت بودم",
                                                isActivePast: true,
                                                onTap: () {}, context: context),
                                          ),
                                          SizedBox(
                                            height: size.height / 40,
                                          ),
                                          Align(
                                            alignment: Alignment.centerRight,
                                            child: toCheckBox(
                                                title:  "هیچکدام",
                                                isActive: false,
                                                onTap: () {}, context: context),
                                          ),
                                        ],
                                      ),),
                                  ],
                                ),
                                SizedBox(
                                  height: size.height / 20,
                                ),
                                Container(
                                  width: size.width,
                                  height: 181,
                                  decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    border:
                                        Border.all(color: SolidColors.blue, width: 0.1),
                                    borderRadius: BorderRadius.circular(12),
                                    boxShadow: const [
                                      BoxShadow(
                                        color: SolidColors.calculatorBox,
                                        blurRadius: 1,
                                        offset: Offset(0, 0), // Shadow position
                                      ),
                                    ],
                                  ),
                                  child: Padding(
                                    padding: const EdgeInsets.all(16),
                                    child: Column(
                                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        const Text(
                                          "تحلیل روانشناس:",
                                          style: TextStyle(fontSize: 14,color: SolidColors.textTitleGray),
                                        ),
                                        Text(
                                            """دانش‌آموز از آمدن به مدرسه نگران است. با توجه به نمرات سال
                    قبل دلیل نگرانی او می‌تواند ادامه روند درسی او باشد.
                    پیشنهاد من تشویق او و عدم مرور نمرات قبلی به طور موقت است.""",
                                            style: textTheme.bodyText1),
                                      ],
                                    ),
                                  ),
                                ),
                                const SizedBox(
                                  height: 100,
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
