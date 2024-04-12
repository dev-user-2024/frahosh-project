import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profileEduinfo2_Page/profileEduinfo2_Page.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../modules/widgets/boxes/profileCoin3WhiteBox.dart';

class ProfileEduinfoPage extends StatelessWidget {
  const ProfileEduinfoPage({super.key});

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
              toApp(context: context, title: "اطلاعات درسی"),
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
                                top: 8,
                                left: size.width / 1.9,
                                bottom: 25,
                                right: 20),
                            child: InkWell(
                              child: const ButtonWidget(
                                  title: "+ ثبت کارنامه جدید", mainColor: true),
                              onTap: () {},
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
                                  "کارنامه‌های قبلی",
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
                            child: ProfileCoin3WhiteBox(
                              size: size,
                              textTheme: textTheme,
                              title: "ششم-ابتدایی",
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
                              title: "پنجم-ابتدایی",
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
                              title: "چهارم-ابتدایی",
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
                              title: "سوم-ابتدایی",
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
                              title: "دوم-ابتدایی",
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
                              title: "اول-ابتدایی",
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
