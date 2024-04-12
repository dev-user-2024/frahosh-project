import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/matrix/computing/computing.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/dropdownButton.dart';
import '../../modules/widgets/navbar/navbar.dart';

class MatrixPage extends StatelessWidget {
  const MatrixPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      '1',
      '2',
      '3',
      '4',
    ];
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    bool createMatrix = true;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            toApp(context: context, title: "ماتریس"),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 36),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 20,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'تعداد سطر',
                              style: TextStyle(
                                  fontFamily: 'IRANSansXV',
                                  fontSize: 16,
                                  color: context
                                      .watch<SettingsCubit>()
                                      .state
                                      .selectedPrimaryColor),
                            ),

                              // DropdownButtonFormField
                              SizedBox(
                                  width: size.width / 1.9,
                                  height: 60,
                                  child: dropdownButton(
                                         "2",
                                          items,
                                          textTheme),
                                  ),
                          ],
                        ),
                        const SizedBox(
                          height: 29,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'تعداد ستون',
                              style: TextStyle(
                                  fontFamily: 'IRANSansXV',
                                  fontSize: 16,
                                  color: context
                                      .watch<SettingsCubit>()
                                      .state
                                      .selectedPrimaryColor),
                            ),
                            
                              // DropdownButtonFormField
                              SizedBox(
                                  width: size.width / 1.9,
                                  height: 60,
                                  child: dropdownButton(
                                         "2",
                                          items,
                                          textTheme),
                                  ),
                          ],
                        ),
                        const SizedBox(
                          height: 29,
                        ),
                        InkWell(
                          child: const ButtonWidget(
                            title: "ایجاد ماتریس",
                            mainColor: true,
                          ),
                          onTap: () {},
                        ),
                        createMatrix == true
                            ? Column(
                                children: [
                                  const SizedBox(
                                    height: 29,
                                  ),
                                  Column(
                                    children: [
                                      Row(
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: [
                                          
                                  Container(
                                    width: 55,
                                    height: 55,
                                    decoration: const BoxDecoration(
                                      borderRadius: BorderRadius.all(
                                          Radius.circular(10)),
                                      color: SolidColors.white,
                                    ),
                                    child: toTextField(
                                      color: context
                                              .watch<SettingsCubit>()
                                              .state
                                              .selectedPrimaryColor,
                                  textEditingController:
                                      TextEditingController(),
                                  hintText: ''),
                                  ),
                                  const SizedBox(width: 20,),     
                                        
                                  Container(
                                    width: 55,
                                    height: 55,
                                    decoration: const BoxDecoration(
                                      borderRadius: BorderRadius.all(
                                          Radius.circular(10)),
                                      color: SolidColors.white,
                                    ),
                                    child: toTextField(
                                      color: context
                                              .watch<SettingsCubit>()
                                              .state
                                              .selectedPrimaryColor,
                                  textEditingController:
                                      TextEditingController(),
                                  hintText: ''),
                                  ),
                                        ],
                                      ),
                                      const SizedBox(height: 20,),
                                      Row(
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: [
                                           
                                  Container(
                                    width: 55,
                                    height: 55,
                                    decoration: const BoxDecoration(
                                      borderRadius: BorderRadius.all(
                                          Radius.circular(10)),
                                      color: SolidColors.white,
                                    ),
                                    child: toTextField(
                                      color: context
                                              .watch<SettingsCubit>()
                                              .state
                                              .selectedPrimaryColor,
                                  textEditingController:
                                      TextEditingController(),
                                  hintText: ''),
                                  ),
                                  const SizedBox(width: 20,),     
                                        
                                  Container(
                                    width: 55,
                                    height: 55,
                                    decoration: const BoxDecoration(
                                      borderRadius: BorderRadius.all(
                                          Radius.circular(10)),
                                      color: SolidColors.white,
                                    ),
                                    child: toTextField(
                                      color: context
                                              .watch<SettingsCubit>()
                                              .state
                                              .selectedPrimaryColor,
                                  textEditingController:
                                      TextEditingController(),
                                  hintText: ''),
                                  ),
                                        ],
                                      ),
                                   
                                    ],
                                  ),
                                  const SizedBox(
                                    height: 29,
                                  ),
                                  InkWell(
                                    child: const ButtonWidget(
                                      title: "محاسبه دترمینال و معکوس",
                                      mainColor: true,
                                    ),
                                    onTap: () {
                                        Navigator.of(context).push(MaterialPageRoute(
                                  builder: ((context) => const Computing())));
                                    },
                                  ),
                                ],
                              )
                            : Container(),
                        const SizedBox(
                          height: 150,
                        ),
                      ],
                    ),
                  ),
                  NavBar(size: size),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
