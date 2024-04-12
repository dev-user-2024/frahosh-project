import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/const/routepage.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';

 

class TicketSent extends StatelessWidget {
  const TicketSent({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'اول مفاهیم',
      'دوم مفاهیم',
      'سوم مفاهیم',
    ];
    String? selectedItem = 'اول مفاهیم';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      body: Container(
        color: SolidColors.backgroundColor,
        child: Column(children: [
          toApp(context: context, title: "تیکت‌های ارسال شده"),
          Expanded(
            child: Stack(children: [ 
              SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      // crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        const SizedBox(height: 20,),
                        Row(
                          children: [
                            Text(
                              'وضعیت',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                        const SizedBox(height: 10,),
                        Container(
                          height: 60,
                          width: size.width,
                          decoration: BoxDecoration(
                              borderRadius: const BorderRadius.all(
                                Radius.circular(15),
                              ),
                              border: Border.all(
                                  width: 0.3, color: SolidColors.black),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            hintText: "  پاسخ داده شده",
                            enabled: false,
                            hintColor: SolidColors.green,
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Row(
                          children: [
                            Text(
                              'عنوان تیکت',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                        const SizedBox(height: 10,),
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            hintText: "محاسبه توان منفی",
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Row(
                          children: [
                            Text(
                              'تاریخ ارسال تیکت',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                        const SizedBox(height: 10,),
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            hintText: "30 تیر 1401",
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'درس',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.symmetric(vertical: 10),
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child:
                                dropdownButton(selectedItem, items, textTheme),
                          ),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'اولیوت',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.symmetric(vertical: 10),
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child:
                                dropdownButton(selectedItem, items, textTheme),
                          ),
                        ),
                        const SizedBox(
                          height: 30,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'متن پیام',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        Container(
                            width: size.width,
                            // ignore: prefer_const_constructors
                            decoration: BoxDecoration(
                                borderRadius: const BorderRadius.all(
                                  Radius.circular(15),
                                ),
                                color: SolidColors.backgroundColor),
                            child: const TextFieldWidget(
                              hintText: "عدد 12 به توان منفی 2 رو چطور می تونم حساب کنم؟",
                              minLines: 6,
                              borderSideColor: SolidColors.black,
                            )),
                        const SizedBox(
                          height: 40,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'فایل های مرتبط',
                              style: textTheme.headline1,
                            ),
                        Container(
                            width: size.width/2,
                            // ignore: prefer_const_constructors
                          decoration: BoxDecoration(
                              borderRadius: const BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                            child: const Center(
                              child: Padding(
                                padding: EdgeInsets.all(8.0),
                                child: TextFieldWidget(
                                  hintText: "myimg.jpeg",
                                  hintColor: SolidColors.green,
                                  textAlign: TextAlign.end,
                                  enabled: false,
                                  borderSideColor: SolidColors.black,
                                ),
                              ),
                            )),

                          ],
                        ),
                        const SizedBox(
                          height: 60,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'پاسخ',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        Container(
                            width: size.width,
                            // ignore: prefer_const_constructors
                            decoration: BoxDecoration(
                                borderRadius: const BorderRadius.all(
                                  Radius.circular(15),
                                ),
                                color: SolidColors.backgroundColor),
                            child: const TextFieldWidget(
                              hintText: "توان منفی نیز با کمی تغییرات، تعریف مشابهی با توان مثبت دارد. اما در حالت کلی می‌توان گفت که توان منفی در واقع مخالف توان مثبت است. راه حل تشریحی در قسمت فایل‌های مرتبط پیوست شده.",
                              minLines: 6,
                              borderSideColor: SolidColors.black,
                            )),
                        const SizedBox(
                          height: 40,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'فایل های مرتبط',
                              style: textTheme.headline1,
                            ),
                        Container(
                            width: size.width/2,
                            // ignore: prefer_const_constructors
                          decoration: BoxDecoration(
                              borderRadius: const BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                            child: const Center(
                              child: Padding(
                                padding: EdgeInsets.all(8.0),
                                child: TextFieldWidget(
                                  hintText: "solution.pdf",
                                  hintColor: SolidColors.green,
                                  textAlign: TextAlign.end,
                                  enabled: false,
                                  borderSideColor: SolidColors.black,
                                ),
                              ),
                            )),

                          ],
                        ),
                        const SizedBox(
                          height: 30,
                        ),
                        SizedBox(
                          width: size.width,
                          child: const ButtonWidget(
                              title: 'ارسال مجدد تیکت', mainColor: true).toClick(
                                onTap: () {
                                  Navigator.of(context)
                                      .pushNamed(RouterPage.ticketpage4);
                                },),
                        ),
                        const SizedBox(
                          height: 100,
                        ),
                      ],
                    ),
                  ),
                ),
             
            ]),
          ),
        ]),
      ),
    ));
  }

}
