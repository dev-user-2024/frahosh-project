import 'dart:collection';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:farahoosh/app/presentation/screens/main/home.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../modules/const/urlimages.dart';
import '../../modules/widgets/navbar/navbar.dart';
import 'package:lite_rolling_switch/lite_rolling_switch.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage>
    with SingleTickerProviderStateMixin {
  final UnmodifiableListView<String> _titles = UnmodifiableListView(
      ["خوش اومدی", "کیف پول", "جست و جو", "تنظیمات", "پروفایل"]);

  late final TabController _tabController;

  @override
  void initState() {
    _tabController = TabController(
        length: 5,
        vsync: this,
        animationDuration: const Duration(milliseconds: 200));
    context.read<NavbarCubit>().controller = _tabController;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    bool darkMode = false;
    return SafeArea(
      child: Scaffold(
        drawer: Drawer(
          width: size.width / 1.85,
          child: Container(
            color: SolidColors.backgroundColor,
            width: size.width,
            height: size.height,
            child: Column(
              children: [
                Row(
                  // mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    DataImages.arrowRight.toSvgImage().toClick(onTap: () {
                      Navigator.of(context).pop();
                    }).toOnly(T: 30.0),
                    Container(),
                    Container(),
                  ],
                ),
                Column(
                  children: [
                    Row(
                      children: [
                        DataImages.messageQuestion.toPNGImage(size: 17),
                        const SizedBox(
                          width: 12,
                        ),
                        Text(
                          "نحوه کار با سامانه",
                          style: textTheme.bodyText1,
                        ),
                      ],
                    ).toOnly(R: 25.0, T: 50.0),
                    Row(
                      children: [
                        DataImages.calling.toPNGImage(size: 17),
                        const SizedBox(
                          width: 12,
                        ),
                        Text(
                          "راه‌های ارتباطی ما",
                          style: textTheme.bodyText1,
                        ).toClick(onTap: () {}),
                      ],
                    ).toOnly(R: 25.0, T: 25.0),
                    Row(
                      children: [
                        DataImages.aboutIcon.toPNGImage(size: 17),
                        const SizedBox(
                          width: 12,
                        ),
                        Text(
                          "درباره ما",
                          style: textTheme.bodyText1,
                        ),
                      ],
                    ).toOnly(R: 25.0, T: 25.0),
                    Row(
                      children: [
                        DataImages.send_2.toPNGImage(size: 17),
                        const SizedBox(
                          width: 12,
                        ),
                        Text(
                          "ارسال کد دعوت به دوستان",
                          style: textTheme.bodyText1,
                        ).toClick(onTap: () {
                          Navigator.of(context).push(MaterialPageRoute(
                              builder: ((context) =>
                                  const InvitationScreen())));
                        }),
                      ],
                    ).toOnly(R: 25.0, T: 25.0),
                  ],
                ),
                Expanded(
                    child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Row(
                      children: [
                        DataImages.logout.toPNGImage(size: 17),
                        const SizedBox(
                          width: 12,
                        ),
                        const Text(
                          "خروج",
                          style: TextStyle(
                            color: SolidColors.red,
                            fontSize: 16,
                            fontFamily: 'IRANSansXV',
                          ),
                        ),
                      ],
                    ).toOnly(R: 25.0, T: 25.0).toClick(
                      onTap: () {
                        context.read<UserCubit>().logout();
                      },
                    ),
                    const SizedBox().toVerticalSpaces,
                    const SizedBox().toDivider(
                      color: context
                          .watch<SettingsCubit>()
                          .state
                          .selectedPrimaryColor,
                    ),
                    const SizedBox().toVerticalSpaces,
                    const SizedBox().toVerticalSpaces,
                    const SizedBox().toVerticalSpaces,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        DataImages.sun
                            .toPNGImage(size: 28)
                            .toClick(onTap: () {})
                            .toOnly(L: 10.0),
                        SizedBox(
                          height: 30,
                          width: 70,

                          //rolling switch
                          // child: LiteRollingSwitch(
                          //   width: 70,
                          //   //initial value
                          //   value: false,
                          //   textOn: '',
                          //   textOff: '',
                          //   colorOn: SolidColors.red,
                          //   colorOff: SolidColors.green,
                          //   iconOff: Icons.done,
                          //   iconOn: Icons.done,
                          //   textSize: 12.0,
                          //   animationDuration: const Duration(milliseconds: 300),
                          //   onChanged: (bool state) {
                          //     //Use it to manage the different states
                          //     print('Current State of SWITCH IS: $state');
                          //   },
                          //   onDoubleTap: () {},
                          //   onSwipe: () {},
                          //   onTap: () {},
                          // ),
                         
                         // my rolling switch
                          child: Stack(
                            children: [
                              darkMode == false ?
                              Center(
                                child: Container(
                                  height: 23,
                                  width: 55,
                                  decoration: BoxDecoration(
                                    // color: SolidColors.blue,

                                    border: Border.all(color: SolidColors.blue),
                                    borderRadius: BorderRadius.circular(40),
                                  ),
                                ),
                              ) :
                              Center(
                                child: Container(
                                  height: 23,
                                  width: 55,
                                  decoration: BoxDecoration(
                                    // color: SolidColors.blue,

                                    border: Border.all(color: SolidColors.grey),
                                    borderRadius: BorderRadius.circular(40),
                                  ),
                                ),
                              ),
                              darkMode == false ?
                              Row(
                                 mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Container(
                                    height: 30,
                                    width: 30,
                                    decoration: BoxDecoration(
                                      color: SolidColors.blue,
                                      border:
                                          Border.all(color: SolidColors.white),
                                      borderRadius: BorderRadius.circular(100),
                                    ),
                                  ),
                                ],
                              ) :
                              Row(
                                 mainAxisAlignment: MainAxisAlignment.end,
                                children: [
                                  Container(
                                    height: 30,
                                    width: 30,
                                    decoration: BoxDecoration(
                                      color: SolidColors.grey,
                                      border:
                                          Border.all(color: SolidColors.white),
                                      borderRadius: BorderRadius.circular(100),
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                        DataImages.moon
                            .toPNGImage(size: 28)
                            .toClick(onTap: () {})
                            .toOnly(R: 10.0),
                      ],
                    ).toOnly(B: 30.0, R: 20.0),
                  ],
                )),
              ],
            ),
          ),
        ),
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [
              BlocBuilder<NavbarCubit, NavbarState>(
                buildWhen: (previous, current) =>
                    previous.activePage != current.activePage,
                builder: (context, state) => const SizedBox().toApp(
                    context: context,
                    title: _titles[state.activePage],
                    inMainScreen: true),
              ),
              //DataImages.nav.toJpgImage(),
              Expanded(
                child: Stack(
                  children: [
                    //main
                    TabBarView(
                        physics: const NeverScrollableScrollPhysics(),
                        controller: _tabController,
                        children: const [
                          HomeInnerScreen(),
                          WalletScreen(),
                          SearchPage(),
                          SettingScreen(),
                          ProfileMainPage()
                        ]),
                    NavBar(size: size),
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
