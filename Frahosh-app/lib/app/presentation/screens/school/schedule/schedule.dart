import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/bluBoxOneTex.dart';
import 'package:farahoosh/app/presentation/modules/widgets/buttons/calculatorButton.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';

class Schedule extends StatelessWidget {
  const Schedule({super.key});

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
              toApp(context: context, title: "برنامه مدرسه"),

              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          // first blu box
                          Padding(
                            padding: const EdgeInsets.all(20),
                            child: BluBoxOneText(
                              image:
                                  DataImages.program2.toPNGImage(size: 100),
                              size: size,
                              textTheme: textTheme,
                              text: "امروز :  دوشنبه، 9 آبان 1401",
                            ).toClick(onTap: (() {
                              Navigator.of(context).push(MaterialPageRoute(
                                  builder: ((context) => SchoolAbout())));
                            })),
                          ),
                          Column(
                            children: [
                              const SizedBox(
                                height: 50,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 7,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "روز/ساعت",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "8 - 9:15",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "9:30 - 11",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "11:15 - 12",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "12 - 13:30",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 15,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 7,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "شنبه",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "زبان انگلیسی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "زبان انگلیسی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "زبان انگلیسی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "زبان انگلیسی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 15,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 7,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "یکشنبه",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "ریاضی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "ریاضی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "ریاضی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "ریاضی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 15,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 7,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "دوشنبه",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "دین و زندگی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "دین و زندگی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "دین و زندگی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "دین و زندگی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 15,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 7,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "سه‌شنبه",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "جغرافیا",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "جغرافیا",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "جغرافیا",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "جغرافیا",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 15,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 7,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "چهارشنبه",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "اجتماعی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "اجتماعی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "اجتماعی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "اجتماعی",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 15,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 7,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "پنجشنبه",
                                      fontSize: 14,
                                      textColor: SolidColors.blue,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "قرآن",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "قرآن",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "قرآن",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                    CalculatorButton(
                                      size: size,
                                      widths: size.width / 5.5,
                                      heights: 40,
                                      isWidget: true,
                                      radiosNumber: 10,
                                      symbol: "قرآن",
                                      fontSize: 12,
                                      color: SolidColors.white,
                                      onTap: () {},
                                    ),
                                  ],
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
