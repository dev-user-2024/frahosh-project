import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/const/urlimages.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';

class ConsultantChat extends StatelessWidget {
  const ConsultantChat({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "مشاوره متنی"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(
                children: [
                SingleChildScrollView(child: Column()),
                
                        Column(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            SizedBox(
                              width: size.width,
                              height: 150,
                              child: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      height: 60,
                                      width: 60,
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(20),
                                        color: SolidColors.blue,
                                      ),
                                     child: DataImages.send.toSvgImage(),
                                    ),
                                    Container(
                                        height: 60,
                                        width: size.width / 1.4,
                                        decoration: const BoxDecoration(
                                            borderRadius:
                                                BorderRadius.all(Radius.circular(15)),
                                            color: SolidColors.bluewhite),
                                        child: const TextFieldWidget(
                                          hintText: "پیام خود را تایپ کنید...",
                                          borderSideColor: SolidColors.blue,
                                        )),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                     
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
