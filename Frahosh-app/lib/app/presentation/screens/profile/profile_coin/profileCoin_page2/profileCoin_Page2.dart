import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import 'package:flutter/material.dart';
import '../../../../modules/widgets/boxes/detailsBox.dart';

class ProfileCoinPage2 extends StatelessWidget {
  const ProfileCoinPage2({super.key});

  @override
  Widget build(BuildContext context) {
    String x = "۳";
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: SizedBox(
          width: context.widths,
          height: context.heights,

          child: Column(
            children: [
              toApp(context: context, title: "جزییات"),
              
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: DetailsBox(
                              plus: true,
                              size: size,
                              textTheme: textTheme,
                              title: "$x فراکوین",
                              time: "ساعت ۲۳:۱۵",
                              date: "۱۵ مرداد ۱۴۰۱",
                              description: "شرح: ارسال کد دعوت به دوست و فعالسازی موفق",
                              blu: false,
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: DetailsBox(
                              plus: false,
                              size: size,
                              textTheme: textTheme,
                              title: "$x فراکوین",
                              time: "ساعت ۰۹:۴۵",
                              date: "۱۲ مرداد ۱۴۰۱",
                              description: "شرح: ارسال کد دعوت به دوست و فعالسازی موفق",
                              blu: false,
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: DetailsBox(
                              plus: true,
                              size: size,
                              textTheme: textTheme,
                              title: "$x فراکوین",
                              time: "ساعت ۱۴:۲۵",
                              date: "۷ مرداد ۱۴۰۱",
                              description: "شرح: ارسال کد دعوت به دوست و فعالسازی موفق",
                              blu: false,
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: DetailsBox(
                              plus: true,
                              size: size,
                              textTheme: textTheme,
                              title: "$x فراکوین",
                              time: "ساعت ۱۷:۰۷",
                              date: "۵ مرداد ۱۴۰۱",
                              description: "شرح: ارسال کد دعوت به دوست و فعالسازی موفق",
                              blu: false,
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: DetailsBox(
                              plus: false,
                              size: size,
                              textTheme: textTheme,
                              title: "$x فراکوین",
                              time: "ساعت ۱۴:۴۵",
                              date: "1 مرداد ۱۴۰۱",
                              description: "شرح: ارسال کد دعوت به دوست و فعالسازی موفق",
                              blu: false,
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: DetailsBox(
                              plus: false,
                              size: size,
                              textTheme: textTheme,
                              title: "$x فراکوین",
                              time: "ساعت ۱۴:۴۵",
                              date: "1 مرداد ۱۴۰۱",
                              description: "شرح: ارسال کد دعوت به دوست و فعالسازی موفق",
                              blu: false,
                            ),
                          ),
                          const SizedBox(
                            height: 150,
                          ),
                        ],
                      ),
                    ),
                 
                    NavBar(size: size),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
