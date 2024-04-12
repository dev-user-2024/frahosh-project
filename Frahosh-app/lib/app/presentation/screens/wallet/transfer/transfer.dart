import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/containercustome.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';

class TransferScreen extends StatelessWidget {
  const TransferScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [
              // appbar
              toApp(context: context, title: "انتقال اعتبار"),

              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      physics: const BouncingScrollPhysics(),
                      child: Column(
                        children: [
                          toVerticalSpaces,
                          Align(
                            child: Column(
                              children: [
                                // Create Cart
                                const ContainerCustome(),
                                // Options Wallet
                                toVerticalSpaces,
                                toVerticalSpaces,
                                toVerticalSpaces,
                                toVerticalSpaces,
                                Text("نام کاربری یا شماره موبایل دوستت رو وارد کن",style: textTheme.bodyText1,),
                                toVerticalSpaces,
                                SizedBox(
                                    width: size.width,
                                    child: const TextFieldWidget(
                                      borderSideColor: SolidColors.black,
                                      hintText: "09123456789",
                                      textAlign: TextAlign.end,
                                      suffixIcon: Icon(CupertinoIcons.person),
                                    )),
                                toVerticalSpaces,
                                toVerticalSpaces,
                                toVerticalSpaces,
                                Text("مبلغ مورد نظرت رو انتخاب یا وارد کن(تومان)",style: textTheme.bodyText1,),
                                toVerticalSpaces,
                                SizedBox(
                                    width: size.width,
                                    child: const TextFieldWidget(
                                      borderSideColor: SolidColors.black,
                                      hintText: "25٬000",
                                      textAlign: TextAlign.end,
                                      suffixIcon: Icon(CupertinoIcons.money_dollar),
                                    )),
                                toVerticalSpaces,
                                toVerticalSpaces,
                              Row(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children:  [
                                  
                                  SizedBox(
                                      width: size.width/5,
                                    height: 50,
                                    child: InkWell(
                                      child: const ButtonWidget(
                                        title: "100٬000",
                                        mainColor: false,
                                      ),
                                      onTap: () {
                                       
                                      },
                                    ),
                                  ),
                                  SizedBox(
                                      width: size.width/5,
                                    height: 50,
                                    child: InkWell(
                                      child: const ButtonWidget(
                                        title: "50٬000",
                                        mainColor: false,
                                      ),
                                      onTap: () {
                                       
                                      },
                                    ),
                                  ),
                                  SizedBox(
                                      width: size.width/5,
                                    height: 50,
                                    child: InkWell(
                                      child: const ButtonWidget(
                                        title: "30٬000",
                                        mainColor: false,
                                      ),
                                      onTap: () {
                                       
                                      },
                                    ),
                                  ),
                                  SizedBox(
                                      width: size.width/5,
                                    height: 50,
                                    child: InkWell(
                                      child: const ButtonWidget(
                                        title: "10٬000",
                                        mainColor: false,
                                      ),
                                      onTap: () {
                                       
                                      },
                                    ),
                                  ),
                                ],
                              ),
                                toVerticalSpaces,
                                toVerticalSpaces,
                                toVerticalSpaces,

                                  SizedBox(
                                    height: 50,
                                    child: InkWell(
                                      child: const ButtonWidget(
                                        title: "انجام انتقال",
                                        mainColor: true,
                                      ),
                                      onTap: () {
                                       
                                      },
                                    ),
                                  ),
                                  const SizedBox(height: 150,)
                              ],
                            ),
                          ).toSymmetric(H: 20.0),
                        ],
                      ),
                    ),
                    NavBar(size: size)
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
