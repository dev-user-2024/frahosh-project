import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/buttons/calculatorButton.dart';
import 'package:farahoosh/app/presentation/screens/consultant/consultantBottomSheet/consultant.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';


class ConsultantPage3 extends StatelessWidget{
  String dropdownvalue1 = 'هفته اول';

  var items1 = [
    'هفته اول',
    'هفته دوم',
    'هفته سوم',
    'هفته چهارم ',
  ];

  ConsultantPage3({super.key});
  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'اول مفاهیم',
      'دوم مفاهیم',
      'سوم مفاهیم',
    ];
    String? selectedItem = 'اول مفاهیم';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "رزرو مشاوره"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    children: [
                      Container(
                        height: 55,
                        width: size.width,
                        margin: const EdgeInsets.symmetric(vertical: 20),
                        decoration: BoxDecoration(
                          borderRadius: const BorderRadius.all(Radius.circular(15)),
                          border:
                              Border.all(color: SolidColors.blue, width: 0.2),
                          color: SolidColors.white,
                        ),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 13, vertical: 5),
                          child: Center(
                            child: Text(
                              'روز 15 شهریور 1401',
                              style: textTheme.subtitle1,
                            ),
                          ),
                        ),
                      ),
                      Container(
                        width: size.width,
                        // color: SolidColors.blue,
                        margin: const EdgeInsets.symmetric(vertical: 20),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'ساعت های صبح',
                              style: textTheme.headline1,
                            ),
                            const SizedBox(height: 20,),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [

                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۱۲",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۱۱",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۱۰",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۹",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۸",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                              ],
                            )
                            ,
                            const SizedBox(height: 20,),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                      Container(
                        height: 40,
                        width: size.width/3.6,
                        decoration: BoxDecoration(
                          borderRadius: const BorderRadius.all(Radius.circular(15)),
                          border:
                              Border.all(color: SolidColors.red, width: 0.2),
                          
                                    gradient: const LinearGradient(
                                      begin: Alignment.topCenter,
                                      end: Alignment.bottomCenter,
                                      colors: GradiantColors.pinkGradiantColor,
                                    ),
                                  ),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 13, vertical: 5),
                          child: Center(
                            child: Text(
                              'رزرو شده',
                              style: textTheme.subtitle1,
                            ),
                          ),
                        ),
                      ),
                              ],
                            ),
                            const SizedBox(height: 10,),
                            Padding(
                              padding: const EdgeInsets.only(left: 30),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                      Container(
                        height: 40,
                        width: size.width/2.5,
                        decoration: BoxDecoration(
                          borderRadius: const BorderRadius.all(Radius.circular(15)),
                          border:
                                Border.all(color: SolidColors.green, width: 0.2),
                          
                                      gradient: const LinearGradient(
                                        begin: Alignment.topCenter,
                                        end: Alignment.bottomCenter,
                                        colors: GradiantColors.greenGradiantColor,
                                      ),
                                    ),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(
                                horizontal: 13, vertical: 5),
                          child: Center(
                              child: Text(
                                'قابل رزرو',
                                style: textTheme.subtitle1,
                              ),
                          ),
                        ),
                      ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 10,),
                        
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                      Container(
                        height: 40,
                        width: size.width/5,
                        decoration: BoxDecoration(
                          borderRadius: const BorderRadius.all(Radius.circular(15)),
                          border:
                              Border.all(color: SolidColors.red, width: 0.2),
                          
                                    gradient: const LinearGradient(
                                      begin: Alignment.topCenter,
                                      end: Alignment.bottomCenter,
                                      colors: GradiantColors.pinkGradiantColor,
                                    ),
                                  ),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 13, vertical: 5),
                          child: Center(
                            child: Text(
                              'رزرو شده',
                              style: textTheme.subtitle1,
                            ),
                          ),
                        ),
                      ),
                              ],
                            ),
                        
                          ],
                        ),
                      ),
                      const SizedBox(height: 10,),
                      Container(
                        width: size.width,
                        // color: SolidColors.blue,
                        margin: const EdgeInsets.symmetric(vertical: 20),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'ساعت‌های عصر',
                              style: textTheme.headline1,
                            ),
                            const SizedBox(height: 20,),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [

                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۸",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۷",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۶",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۵",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                      CalculatorButton(
                        size: size,
                        widths: 35,
                        heights: 40,
                        isWidget: true,
                        radiosNumber: 10,
                        symbol: "۴",
                        textColor: SolidColors.blue,
                        color: SolidColors.white,
                        onTap: () {},
                      ),
                              ],
                            ),
                            const SizedBox(height: 20,),
                            Container(
                        height: 40,
                        width: size.width,
                        decoration: BoxDecoration(
                          borderRadius: const BorderRadius.all(Radius.circular(15)),
                          border:
                              Border.all(color: SolidColors.green, width: 0.2),
                          
                                 gradient: const LinearGradient(
                                   begin: Alignment.topCenter,
                                   end: Alignment.bottomCenter,
                                   colors: GradiantColors.greenGradiantColor,
                                 ),
                               ),
                        child: Center(
                            child: Text(
                            'قابل رزرو',
                            style: textTheme.subtitle1,
                            ),
                        ),
                      ),
                          ],
                        ),
                      ),
                      const SizedBox(
                        height: 42,
                      ),

                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                SizedBox(
                                    width: 120,
                                    child: Text(
                                      'از ساعت',
                                      style: textTheme.subtitle1,
                                    )),
                                Center(
                                  child: Container(
                                      width: size.width / 3.9,
                                      decoration: BoxDecoration(
                                          borderRadius: const BorderRadius.all(
                                              Radius.circular(15)),
                                          border: Border.all(
                                              color: SolidColors.grey,
                                              width: 0.5)),
                                      child: const TextFieldWidget(
                                        labelText: "",
                                        borderSideColor: SolidColors.grey,
                                      )),
                                ),

                                Text(':',style: textTheme.headline1,),
                                Center(
                                  child: Container(
                                      width: size.width / 3.9,
                                      decoration: BoxDecoration(
                                          borderRadius: const BorderRadius.all(
                                              Radius.circular(15)),
                                          border: Border.all(
                                              color: SolidColors.grey,
                                              width: 0.5)),
                                      child: const TextFieldWidget(
                                        labelText: "",
                                        borderSideColor: SolidColors.grey,
                                      )),
                                ),
                              ],
                            ),
                      const SizedBox(height: 20,),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text('به مدت', style: textTheme.subtitle1),
                                Container(
                                  width: size.width / 1.7,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                  ),
                                  child: dropdownButton(
                                      selectedItem, items, textTheme),
                                ),
                              ],
                            ),
                      const SizedBox(height: 20,),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text('نوع مشاوره', style: textTheme.subtitle1),
                                Container(
                                  width: size.width / 1.7,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                    //  border: Border.all(color: SolidColors.blu, width: 1),
                                  ),
                                  child: dropdownButton(
                                      selectedItem, items, textTheme),
                                ),
                              ],
                            ),
                          
                      const SizedBox(height: 10,),
                      Container(
                          margin:
                              const EdgeInsets.symmetric(vertical: 20),
                          height: 76,
                          width: size.width,
                          decoration: BoxDecoration(
                              borderRadius:
                                  const BorderRadius.all(Radius.circular(15)),
                              border: Border.all(
                                  color: SolidColors.blue, width: 0.2),
                              color: SolidColors.white),
                          child: Padding(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 13, vertical: 8),
                            child: Text(
                              'هزینه مشاوره تلفنی به مدت 15 دقیقه برابر است با ؛ 125 هزار تومان',
                              style: textTheme.subtitle1,
                              textDirection: TextDirection.rtl,
                            ),
                          )),
                      const SizedBox(height: 10,),
                      SizedBox(
                        width: size.width,
                        child:
                            const ButtonWidget(title: 'رزو پرداخت', mainColor: true).toClick(onTap: (() {
                              getConsultantBottomSheet(context, size, textTheme);
                            })),
                      ),
                      const SizedBox(height: 100,),
                    ],
                  ),
                ),
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
