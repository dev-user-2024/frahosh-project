import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/school/messenger/chat/schoolChat.dart';
import 'package:flutter/material.dart';

import '../../../modules/widgets/chart/formUser.dart';

class Messenger extends StatelessWidget {
  const Messenger({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "پیام من و مدرسه "),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 20,
                    ),
                    child: Column(
                      children: [
                        const SizedBox(height: 20,),
                        Container(
                          height: size.height,
                          width: size.width,
                          margin: const EdgeInsets.symmetric(vertical: 20),
                          child: ListView.builder(
                            itemCount: 2,
                            itemBuilder: (context, index) {
                              return FormUser(
                              size: size, 
                              textTheme: textTheme,
                              name: 'مدیر مدرسه',
                              numberOfSms: 12,
                              date: '2 آبان',
                              time: '8:05',
                              image: DataImages.aliHoseyni
                              .toPNGImage(),
                              ).toClick(onTap: (() {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: ((context) =>
                                                 const SchoolChat())));
                              }));
                            },
                          ),
                        ),
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