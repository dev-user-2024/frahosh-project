import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/navbar/navbar.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';
import '../../modules/widgets/buttons/btn_previous.dart';
import '../../modules/widgets/dropdownButton.dart';

class GambegamPage extends StatelessWidget {
  String dropdownvalue1 = 'هفته اول';

  var items1 = ['هفته اول', 'هفته دوم', 'هفته سوم', 'هفته چهارم '];

  GambegamPage({super.key});
  @override
  Widget build(BuildContext context) {
    List<String> items1 = <String>[
      'ریاضی',
      'شیمی',
      'جغرافیا',
    ];
    String? selectedItem1 = 'ریاضی';
    List<String> items = <String>[
      'اول مفاهیم',
      'دوم مفاهیم',
      'سوم مفاهیم',
    ];
    String? selectedItem = 'اول مفاهیم';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    bool isShow = true;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [

            toApp(context: context, title: "گام به گام"),
            Expanded(
              child: Stack(children: [
                SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const SizedBox(height: 20,),
                        Text(
                          'درس ',
                          style: textTheme.subtitle1,
                        ),
                        const SizedBox(height: 10,),
                        Container(
                          height: 58,
                          width: size.width,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20),
                            //  border: Border.all(color: SolidColors.blu, width: 1),
                          ),
                          child: dropdownButton(selectedItem, items, textTheme),
                        ),
                        const SizedBox(
                          height: 40,
                        ),
                        Text(
                          'فصل ',
                          style: textTheme.subtitle1,
                        ),
                        const SizedBox(height: 10,),
                        Container(
                          height: 58,
                          width: size.width,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20),
                            //  border: Border.all(color: SolidColors.blu, width: 1),
                          ),
                          child:
                              dropdownButton(selectedItem1, items1, textTheme),
                        ),
                        isShow == false ? Container() : Column(
                          children: [
                            
                        const SizedBox(
                          height: 40,
                        ),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'شماره صفحه',
                              style: textTheme.subtitle1,
                            ),
                          ],
                        ), 
                        const SizedBox(
                          height: 10,
                        ),
                        Center(
                          child: Container(
                              height: 50,
                              width: size.width,
                              decoration: BoxDecoration(
                                  borderRadius: const BorderRadius.all(
                                      Radius.circular(15)),
                                  border: Border.all(
                                      color: SolidColors.grey, width: 0.5)),
                              child: const TextFieldWidget(
                                labelText: "",
                                borderSideColor: SolidColors.grey,
                              )),
                        ),
                          ],
                        ),
                        const SizedBox(
                          height: 60,
                        ),
                        SizedBox(
                          width: size.width,
                          height: 48,
                          child: const ButtonWidget(title: 'نمایش', mainColor: true),
                        ),

                        isShow == false ? Container() : Column(
                          children: [
                            
                        const SizedBox(
                          height: 50,
                        ),
                        previousButton(context,context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor),
                        const SizedBox(
                          height: 20,
                        ),
                        Container(
                          height: 807,
                          width: size.width,
                          decoration: BoxDecoration(
                              borderRadius:
                                  const BorderRadius.all(Radius.circular(15)),
                              border: Border.all(
                                  color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor, width: 0.3),
                              color: SolidColors.white),
                        ),
                        const SizedBox(
                          height: 130,
                        )
                          ],
                        )

                      ],
                    ),
                  ),
                ),
                NavBar(size:size),
              ]),
            ),
          ]),
        ),
      ),
    );
  }

  

 

}
