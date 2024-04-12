import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/appBar/appbar.dart';
import '../../../../../gen/assets.gen.dart';

class SolvedPage extends StatefulWidget {
  const SolvedPage({super.key});

  @override
  State<SolvedPage> createState() => _SolvedPageState();
}

class _SolvedPageState extends State<SolvedPage> {
  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'ریاضی',
      'فیزیک',
      'شیمی',
    ];
    String? selectedItem = 'ریاضی';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [
                // appbar
             // toApp(context: context, title:  "حل سوال"),
                Appbar(
                    title: "حل سوال",
                    image: Image.asset(
                      Assets.icons.arrowLeftIos.path,
                      scale: 1,
                    ),
                    textTheme: textTheme),
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: Column(
                          children: [
                            Column(
                            children: [
                              Padding(
                                padding: const EdgeInsets.only(top: 10,right: 5),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "وضعیت",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                              ),
                        
                              Padding(
                                padding: const EdgeInsets.only(top: 10, right: 5),
                                child: SizedBox(
                                    height: 50,
                                    width: size.width,
                                    child: const TextFieldWidget(
                                      hintText: "پاسخ داده شده",
                                      borderSideColor: SolidColors.black,
                                      hintColor: SolidColors.textTitleGreen,
                        
                                    )),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(top: 30,right: 5),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "تاریخ ارسال سوال",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                              ),
                        
                              Padding(
                                padding: const EdgeInsets.only(top: 10, right: 5),
                                child: SizedBox(
                                    height: 50,
                                    width: size.width,
                                    child: const TextFieldWidget(
                                      hintText: "۳۰ تیر ۱۴۰۱",
                                      borderSideColor: SolidColors.black,
                        
                                    )),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(top: 30, right: 5),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "تاریخ دریافت پاسخ",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                              ),
                        
                              Padding(
                                padding: const EdgeInsets.only(top: 10, right: 5),
                                child: SizedBox(
                                    height: 50,
                                    width: size.width,
                                    child: const TextFieldWidget(
                                      hintText: "۳۰ تیر ۱۴۰۱",
                                      borderSideColor: SolidColors.black,
                        
                                    )),
                              ),
                        
                        
                        
                              // choose question title
                              Padding(
                                padding: const EdgeInsets.only(top: 30, right: 5),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "درس",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 25,),
                        
                              // DropdownButtonFormField
                              Container(
                                height: 58,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                  //  border: Border.all(color: SolidColors.blu, width: 1),
                                ),
                                child: DropdownButton(selectedItem, items, textTheme),
                              ),
                        
                              Padding(
                                padding: const EdgeInsets.only(top: 10, right: 5),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "سوال",
                                      style: textTheme.bodyText1,
                                    ),
                                  ],
                                ),
                              ),
                              //
                              const SizedBox(height: 20,), 
                              Container(
                                decoration: BoxDecoration(
                                  color: SolidColors.backgroundColor,
                                  border: Border.all(color: SolidColors.black, width: 0.1),
                                  borderRadius: BorderRadius.circular(12),
                                  boxShadow: const [
                                    BoxShadow(
                                      color: SolidColors.backgroundColor,
                                      blurRadius: 1,
                                      offset: Offset(0, 0), // Shadow position
                                    ),
                                  ],
                                ),
                                child: TextFormField(
                                  enabled: false,
                                  // obscureText: false,
                                  minLines: 7,
                                  maxLines: 10,
                                  keyboardType: TextInputType.multiline,
                                  decoration: InputDecoration(
                                    hintText: "  عدد ۱۲ به توان منفی ۲ رو چطور می تونم حساب کنم؟",
                                    labelStyle:
                                        const TextStyle(fontSize: 14, color: Colors.black),
                                    enabledBorder: OutlineInputBorder(
                                        borderRadius: BorderRadius.circular(12),
                                        borderSide: const BorderSide(
                                            color: SolidColors.black, width: 0.1)),
                                    focusedBorder: OutlineInputBorder(
                                        borderRadius: BorderRadius.circular(12),
                                        borderSide: const BorderSide(
                                            color: SolidColors.black, width: 0.1)),
                                  ),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(top: 30, right: 4),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      "فایل‌های مرتبط",
                                      style: textTheme.bodyText1,
                                    ),
                                    Container(
                                      width: size.width / 1.7,
                                      height: 50,
                                      decoration: BoxDecoration(
                                        color: SolidColors.backgroundColor,
                                        border: Border.all(color: SolidColors.black,width: 0.2),
                                        borderRadius: BorderRadius.circular(10),
                                      ),
                                      child: Center(
                                        child: Padding(
                                          padding: const EdgeInsets.only(left: 20),
                                          child: Row(
                                            mainAxisAlignment: MainAxisAlignment.end,
                                            children: const[
                                               Text("myimg.jpeg",style: TextStyle(color: SolidColors.textTitleBlue),),
                                            ],
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                        
                              const SizedBox(height: 70,),
                              Container(
                                decoration: BoxDecoration(
                                  color: SolidColors.backgroundColor,
                                  border: Border.all(color: SolidColors.black, width: 0.1),
                                  borderRadius: BorderRadius.circular(12),
                                  boxShadow: const [
                                    BoxShadow(
                                      color: SolidColors.calculatorBox,
                                      blurRadius: 1,
                                      offset: Offset(0, 0), // Shadow position
                                    ),
                                  ],
                                ),
                                child: Container(
                                   color: SolidColors.backgroundColor,
                                  child: TextFormField(
                                    
                                    enabled: true,
                                    // obscureText: false,
                                    minLines: 7,
                                    maxLines: 10,
                                    keyboardType: TextInputType.multiline,
                                    decoration: InputDecoration(
                                      hintText: """توان منفی نیز با کمی تغییرات، تعریف مشابهی با توان مثبت دارد. اما در حالت کلی می‌توان گفت که توان منفی در واقع مخالف توان مثبت است. راه حل تشریحی در قسمت فایل‌های مرتبط پیوست شده.""",
                                      labelStyle:
                                          const TextStyle(fontSize: 14, color: Colors.black),
                                      enabledBorder: OutlineInputBorder(
                                          borderRadius: BorderRadius.circular(12),
                                          borderSide: const BorderSide(
                                              color: SolidColors.black, width: 0.1)),
                                      focusedBorder: OutlineInputBorder(
                                          borderRadius: BorderRadius.circular(12),
                                          borderSide: const BorderSide(
                                              color: SolidColors.black, width: 0.1)),
                                    ),
                                  ),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(top: 30, right: 4),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      "فایل‌های مرتبط",
                                      style: textTheme.bodyText1,
                                    ),
                                    Container(
                                      width: size.width / 1.7,
                                      height: 50,
                                      decoration: BoxDecoration(
                                        color: SolidColors.backgroundColor,
                                        border: Border.all(color: SolidColors.black,width: 0.2),
                                        borderRadius: BorderRadius.circular(10),
                                      ),
                                      child: Center(
                                        child: Padding(
                                          padding: const EdgeInsets.only(left: 20),
                                          child: Row(
                                            mainAxisAlignment: MainAxisAlignment.end,
                                            children: const[
                                               Text("solution.pdf",style: TextStyle(color: SolidColors.textTitleBlue),),
                                            ],
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 50,),
                            ],
                          ),
                        
                          ],),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  DropdownButtonFormField<String> DropdownButton(
      String selectedItem, List<String> items, TextTheme textTheme) {
    return DropdownButtonFormField<String>(
      decoration: InputDecoration(
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Colors.black, width: 0.3),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Colors.black, width: 0.3),
        ),
        filled: true,
        fillColor: SolidColors.backgroundColor,
      ),
      icon: Image.asset(Assets.icons.arrowButtom.path),
      dropdownColor: SolidColors.backgroundColor,
      value: selectedItem,
      items: items
          .map((item) => DropdownMenuItem<String>(
                value: item,
                child: Text(
                  item,
                  style: textTheme.bodyText1,
                ),
              ))
          .toList(),
      onChanged: (item) => setState(() => selectedItem = item!),
    );
  }
}
