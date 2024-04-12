import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/navbar/navbar.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class NewQuestionPage extends StatelessWidget {
  const NewQuestionPage({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'ریاضی',
      'فیزیک',
      'شیمی',
    ];
    String? selectedItem = 'ریاضی';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [
              // appbar
              toApp(context: context, title:  "سوال جدید"),
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: Column(
                          children: [
                            // choose question title
                            Padding(
                              padding: const EdgeInsets.only(
                                top: 10,
                              ),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Text(
                                    "درس",
                                    style: textTheme.bodyText1,
                                  ),
                                ],
                              ),
                            ),

                            // DropdownButtonFormField
                            Padding(
                              padding: const EdgeInsets.only(
                                  top: 20, bottom: 25),
                              child: Container(
                                decoration: BoxDecoration(
                                  gradient: const LinearGradient(
                                    colors: GradiantColors.bgFrameGradient,
                                    begin: Alignment.topCenter,
                                    end: Alignment.bottomCenter,
                                  ),
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                            ),

                            Padding(
                              padding: const EdgeInsets.only(
                                  top: 10, right: 5),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Text(
                                    "سوال",
                                    style: textTheme.bodyText1,
                                  ),
                                ],
                              ),
                            ),

                            Padding(
                              padding: const EdgeInsets.only(
                                  top: 20,),
                              child: Container(
                                decoration: BoxDecoration(
                                  gradient: const LinearGradient(
                                    colors: GradiantColors.bgFrameGradient,
                                    begin: Alignment.topCenter,
                                    end: Alignment.bottomCenter,
                                  ),
                                  border: Border.all(
                                      color: SolidColors.black, width: 0.3),
                                  borderRadius: BorderRadius.circular(12),
                                  boxShadow: const [
                                    BoxShadow(
                                      color: SolidColors.calculatorBox,
                                      blurRadius: 1,
                                      offset: Offset(0, 0), // Shadow position
                                    ),
                                  ],
                                ),
                                child: TextFormField(
                                  enabled: true,
                                  // obscureText: false,
                                  minLines: 7,
                                  maxLines: 7,
                                  keyboardType: TextInputType.multiline,
                                  decoration: InputDecoration(
                                    labelStyle: const TextStyle(
                                        fontSize: 14, color: Colors.black),
                                    enabledBorder: OutlineInputBorder(
                                        borderRadius: BorderRadius.circular(12),
                                        borderSide: const BorderSide(
                                            color: SolidColors.black,
                                            width: 0.1)),
                                    focusedBorder: OutlineInputBorder(
                                        borderRadius: BorderRadius.circular(12),
                                        borderSide: const BorderSide(
                                            color: SolidColors.black,
                                            width: 0.1)),
                                  ),
                                ),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(
                                  top: 30,right: 4,bottom: 30),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Text(
                                    "فایل‌های مرتبط",
                                    style: textTheme.bodyText1,
                                  ),
                                  Container(
                                    width: size.width / 2.3,
                                    height: 50,
                                    decoration: BoxDecoration(
                                      color: const Color.fromARGB(
                                          255, 29, 155, 240),
                                      border: Border.all(color: Colors.white),
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                    child: Center(
                                      child: Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: [
                                          Image.asset(
                                              Assets.icons.arrowTop.path),
                                          const SizedBox(
                                            width: 12,
                                          ),
                                          Text(
                                            "بارگزاری فایل",
                                            style: textTheme.subtitle2,
                                          ),
                                        ],
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),

                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                //  toCheckBox(title: '',isActive: false, onTap: () {}),
                                Container(),
                                Container(
                                    width: size.width / 1.3,
                                    decoration: BoxDecoration(
                                      color: SolidColors.white,
                                      borderRadius: BorderRadius.circular(12),
                                    ),
                                    child: const TextFieldWidget(
                                      labelText: "",
                                      borderSideColor: SolidColors.blue,
                                    )),
                              ],
                            ),

                            // button share question
                            InkWell(
                              child: const Padding(
                                padding: EdgeInsets.only(
                                    top: 40, bottom: 30),
                                child: ButtonWidget(
                                    title: "ارسال سوال", mainColor: true),
                              ),
                              onTap: () {},
                            ),
                            const SizedBox(height: 120,),
                          ],
                        ),
                      ),
                    ),
                    
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
