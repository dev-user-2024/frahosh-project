import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/buttons/buttonWidget.dart';

class ProfilePcychoinfoNewtestPage extends StatelessWidget {
  const ProfilePcychoinfoNewtestPage({super.key});

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

              toApp(context: context, title: "آزمون جدید"),
              // main
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          Container(
                            decoration: const BoxDecoration(
                              gradient: LinearGradient(
                                colors: GradiantColors.bgFrameGradient,
                                begin: Alignment.topCenter,
                                end: Alignment.bottomCenter,
                              ),
                            ),
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: Column(
                              children: [
                                SizedBox(
                                  height: size.height / 30,
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
                                                isActive: true,
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
                                SizedBox(
                                  height: size.height / 26,
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
                                                isActive: false,
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
                                                isActive: true,
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

                                // button save and dont save
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
