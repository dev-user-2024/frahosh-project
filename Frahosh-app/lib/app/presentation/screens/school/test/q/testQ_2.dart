import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/modules/widgets/textField/TextFieldwidget.dart';
import 'package:farahoosh/app/presentation/screens/school/test/q/testQ_3.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/buttons/buttonWidget.dart';

class TestQ2 extends StatelessWidget {
  const TestQ2({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            // appbar
              toApp(context: context, title: "آزمون ریاضی"),

            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          const SizedBox(height: 20,),
                          Padding(
                            padding:
                                const EdgeInsets.only(top: 10, right: 5),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  "سوال 1 از 5",
                                  style: textTheme.bodyText1,
                                ),
                                Text(
                                  "  زمان پاسخگویی سوال: 10 دقیقه",
                                  style: textTheme.bodyText1,
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 20,),
                          Container(
                            width: size.width,
                            height: size.height/4,
                            decoration: BoxDecoration(
                              color: SolidColors.white,
                              borderRadius: BorderRadius.circular(15),
                              border: Border.all(color: SolidColors.blue,width: 0.2)
                            ),
                            child: const Text(""),
                          ),

                          const SizedBox(height: 30,),
                          
                          Container(
                            width: size.width,
                            decoration: BoxDecoration(
                              color: SolidColors.white,
                              borderRadius: BorderRadius.circular(15),
                              border: Border.all(color: SolidColors.blue,width: 0.2)
                            ),
                            child: const TextFieldWidget(
                              borderSideColor: SolidColors.blue,
                              minLines: 10,
                              maxLines: 15,
                              ),
                          ),
                          

                          const SizedBox(height: 30,),

                        InkWell(
                          child: const ButtonWidget(
                            title: "سوال بعدی",
                            mainColor: true,
                          ),
                          onTap: () {
                             Navigator.of(context).push(
                                    MaterialPageRoute(
                                        builder: ((context) =>
                                            const TestQ3())));
                          },
                        ),
                          const SizedBox(height: 150,),
                          ],
                      ),
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
