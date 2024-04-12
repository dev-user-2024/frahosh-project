import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profilePcychoinfoNewtest_Page/profilePcychoinfoNewtest_Page.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profilePcychoinfoPretest_Page/profilePcychoinfoPretest_Page.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../modules/widgets/boxes/profileCoin3WhiteBox.dart';

class ProfilePcychoinfoPage extends StatelessWidget {
  const ProfilePcychoinfoPage({super.key});

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
              toApp(context: context, title: "اطلاعات روانشناسی"),
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: EdgeInsets.only(
                                top: 8, left: size.width / 1.9, bottom: 25, right: 20),
                            child: InkWell(
                              child: const ButtonWidget(
                                  title: "+ شرکت در آزمون جدید", mainColor: true),
                                  onTap: () {
                                     Navigator.of(context).push(
                                    MaterialPageRoute(
                                        builder: ((context) =>
                                            const ProfilePcychoinfoNewtestPage())));
                                  },
                            ),
                    
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "آزمون‌های قبلی",
                                  style: textTheme.subtitle1,
                                ),
                                Container()
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: InkWell(
                              child: ProfileCoin3WhiteBox(
                                size: size,
                                textTheme: textTheme,
                                title: "۵ مهر ۱۴۰۰",
                              ),
                              onTap: () {
                                     Navigator.of(context).push(
                                    MaterialPageRoute(
                                        builder: ((context) =>
                                            const ProfilePcychoinfoPretestPage())));
                              },
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: ProfileCoin3WhiteBox(
                              size: size,
                              textTheme: textTheme,
                              title: "۳ مهر ۱۳۹۹",
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: ProfileCoin3WhiteBox(
                              size: size,
                              textTheme: textTheme,
                              title: "۴ مهر ۱۳۹۸",
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: ProfileCoin3WhiteBox(
                              size: size,
                              textTheme: textTheme,
                              title: "۷ مهر ۱۳۹۷",
                            ),
                          ),
                          const SizedBox(
                            height: 150,
                          ),
                        ],
                      ),
                    ),
                    
                    NavBar(size: size),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
