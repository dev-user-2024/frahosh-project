import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/const/urlimages.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

Future<dynamic> getConsultantBottomSheet(
    BuildContext context, Size size, TextTheme textTheme) {
  return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: ((context) {
        return Padding(
          padding:
              EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
          child: Container(
            height: size.height / 1.8,
            decoration: const BoxDecoration(
                color: SolidColors.backgroundColor,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                )),
            child: Center(
              child: Column(
                children: [
                  // main
                  Expanded(
                    child: Stack(
                      children: [
                        Column(
                          children: [
                            const SizedBox(
                                    height: 10,
                                  ),
                             Image.asset(
                                    Assets.images.line60.path,
                                  ),
                         DataImages.approveBadge.toPNGImage(size: 200),
                                  const SizedBox(
                                    height: 10,
                                  ),
                            Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 36),
                              child: Column(
                                children: [
                                  
                                  SizedBox(
                                    height: size.height / 44,
                                  ),
                                  Container(
                                    height: 150,
                                    decoration: BoxDecoration(
                                      color: SolidColors.white,
                                      borderRadius: BorderRadius.circular(15),
                                      border: Border.all(color: SolidColors.blue,width: 0.2),
                                    ),
                                    child: Padding(
                                      padding: const EdgeInsets.symmetric(vertical: 15),
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                        children: [
                                          Padding(
                                            padding: const EdgeInsets.symmetric(horizontal: 20),
                                            child: Row(
                                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                              children: [
                                              Text("زمان مشاوره",style: textTheme.bodyText1,),
                                              Row(
                                                children: [
                                                  Text("16:00",style: textTheme.bodyText1,),
                                                  const SizedBox(width: 20,),
                                                  Text("۱۴۰۱/06/15",style: textTheme.bodyText1,),
                                                ],
                                              ),
                                            ],),
                                          ),
                                          Padding(
                                            padding: const EdgeInsets.symmetric(horizontal: 20),
                                            child: Row(
                                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                              children: [
                                              Text("نام مشاور",style: textTheme.bodyText1,),
                                              Text("علی حسینی",style: textTheme.bodyText1,),
                                            ],),
                                          ),
                                          Padding(
                                            padding: const EdgeInsets.symmetric(horizontal: 20),
                                            child: Row(
                                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                              children: [
                                              Text("هزینه مشاوره",style: textTheme.bodyText1,),
                                              Text("125٬۰۰۰ تومان",style: textTheme.bodyText1,),
                                            ],),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ),
                                  SizedBox(
                                    height: size.height / 34,
                                  ),
                                  SizedBox(
                                    width: size.width,
                                    height: 45,
                                    child: InkWell(
                                      child: const ButtonWidget(
                                        title: "تایید و پرداخت",
                                        mainColor: true,
                                      ),
                                      onTap: () {
                                      },
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      }));
}