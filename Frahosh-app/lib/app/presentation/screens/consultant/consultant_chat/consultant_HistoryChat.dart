import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/chart/chatPM.dart';

class ConsultantHistoryChat extends StatelessWidget {
  const ConsultantHistoryChat({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "مشاوره انجام شده"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                    child: Column(
                  children: [
                    const SizedBox(height: 20,),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          ChatPM(text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک",isMe: false, textTheme: textTheme, size: size),
                          ChatPM(text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",isMe: true, textTheme: textTheme, size: size),
                        ],
                      ),
                    )
                  ],
                )),
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}