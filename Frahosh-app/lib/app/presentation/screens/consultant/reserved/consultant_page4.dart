import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/consultant/consultant_chat/consultant_chat.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/boxes/InfoConsultantBox.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class ConsultantPage4 extends StatelessWidget {
  const ConsultantPage4({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "مشاوره رزرو شده"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                    //    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                  children: [
                    InfoConsultant(
                      size: size,
                      date: '15 شهریور 1401',
                      hours: 'ساعت 4 عصر',
                      consultantName: 'علی حسینی',
                      time: '15 دقیقه',
                      cost: '125 هزار تومان',
                      relationship: 'تصویری',
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 10),
                      child: SizedBox(
                        width: size.width,
                        child: const ButtonWidget(
                            title: 'شروع مشاوره تصویری', mainColor: true),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 10),
                      child: SizedBox(
                        width: size.width,
                        child: const ButtonWidget(
                            title: 'شروع مشاوره متنی', mainColor: true),
                      ).toClick(onTap: (() {
                        Navigator.of(context).push(MaterialPageRoute(
                            builder: ((context) => const ConsultantChat())));
                      })),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 10),
                      child: SizedBox(
                        width: size.width,
                        child: const ButtonWidget(
                            title: 'شروع مشاوره تلفنی', mainColor: true),
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
