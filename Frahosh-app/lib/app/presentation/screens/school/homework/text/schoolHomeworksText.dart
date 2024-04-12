import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/buttons/buttonDownloadOrShare.dart';
import '../../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../modules/widgets/homework/questionHomeworkText.dart';

class SchoolHomeworksText extends StatelessWidget {
  const SchoolHomeworksText({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    bool done = true;
    bool doing = false;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "تکلیف درس عربی"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 20,
                        ),
                        SizedBox(
                          width: size.width,
                          child: Row(
                            children: [
                              Text('وضعیت :  ', style: textTheme.bodyText1),
                              Text(
                                done == true
                                    ? 'انجام شده'
                                    : doing == true
                                        ? ' درحال انجام '
                                        : 'انجام نشده',
                                style: TextStyle(
                                    fontSize: 14,
                                    color: done == true
                                        ? SolidColors.green
                                        : doing == true
                                            ? SolidColors.blue
                                            : SolidColors.grey,
                                    fontWeight: FontWeight.w500,
                                    fontFamily: 'IRANSansXV'),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        SizedBox(
                          width: size.width,
                          child: Row(
                            children: [
                              Text('مهلت ارسال :  ',
                                  style: textTheme.bodyText1),
                              const Text(
                                '5 مهر 1401',
                                style: TextStyle(
                                    fontSize: 14,
                                    color: SolidColors.black,
                                    fontWeight: FontWeight.w500,
                                    fontFamily: 'IRANSansXV'),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        SizedBox(
                          width: size.width,
                          child: Row(
                            children: [
                              Text(
                                'نمره :',
                                style: textTheme.bodyText1,
                              ),
                              Text(
                                ' ',
                                style: textTheme.bodyText1,
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(
                          height: 40,
                        ),
                        QuestionHomeworkText(
                          size: size,
                          textTheme: textTheme,
                          done: done,
                          questionNumber: 1,
                        ),
                        QuestionHomeworkText(
                          size: size,
                          textTheme: textTheme,
                          done: done,
                          questionNumber: 2,
                        ),
                        done == true
                            ? Padding(
                                padding:
                                    const EdgeInsets.only(top: 30, right: 4),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      "فایل‌های مرتبط",
                                      style: textTheme.bodyText1,
                                    ),
                                    Container(
                                      width: size.width / 1.7,
                                      height: 50,
                                      decoration: BoxDecoration(
                                        color: SolidColors.backgroundColor,
                                        border: Border.all(
                                            color: SolidColors.black,
                                            width: 0.2),
                                        borderRadius: BorderRadius.circular(10),
                                      ),
                                      child: Center(
                                        child: Padding(
                                          padding:
                                              const EdgeInsets.only(left: 20),
                                          child: Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.end,
                                            children: const [
                                              Text(
                                                "solution.pdf",
                                                style: TextStyle(
                                                    color: SolidColors
                                                        .textTitleBlue),
                                              ),
                                            ],
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              )
                            : Column(
                                children: [
                                  Padding(
                                    padding: const EdgeInsets.only(
                                        top: 30, right: 4, bottom: 30),
                                    child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      children: [
                                        Text(
                                          "فایل‌های مرتبط",
                                          style: textTheme.bodyText1,
                                        ),
                                        Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.end,
                                          children: [
                                            ButtonDownloadOrShare(
                                              size: size,
                                              textTheme: textTheme,
                                              title: "دانلود فایل PDF",
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ),
                                  InkWell(
                                    child: const Padding(
                                      padding: EdgeInsets.only(
                                        top: 20,
                                      ),
                                      child: ButtonWidget(
                                          title: "ارسال نهایی", mainColor: true),
                                    ),
                                    onTap: () {},
                                  ),
                                ],
                              ),
                        const SizedBox(
                          height: 150,
                        ),
                      ],
                    ),
                  ),
                ),
                NavBar(size: size)
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}