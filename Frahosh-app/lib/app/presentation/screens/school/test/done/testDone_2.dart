import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/test/done/testDone_3.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/buttons/buttonWidget.dart';

class TestDone2 extends StatelessWidget {
  const TestDone2({super.key});

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
              toApp(context: context, title: "برگه امتحان"),

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
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Text(
                                  "اطلاعات آزمون",
                                  style: textTheme.bodyText1,
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 30,),
                          Container(
                            width: size.width,
                            height: size.height/2.5,
                            decoration: BoxDecoration(
                              color: SolidColors.white,
                              borderRadius: BorderRadius.circular(15),
                              border: Border.all(color: SolidColors.blue,width: 0.2)
                            ),
                            child: const Text(""),
                          ),

                          const SizedBox(height: 30,),

                        InkWell(
                          child: const ButtonWidget(
                            title: "مشاهده",
                            mainColor: true,
                          ),
                          onTap: () {
                             Navigator.of(context).push(
                                    MaterialPageRoute(
                                        builder: ((context) =>
                                            const TestDone3())));
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
