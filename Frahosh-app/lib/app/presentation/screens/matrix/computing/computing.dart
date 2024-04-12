import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../blocs/settings/settings_cubit.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/navbar/navbar.dart';

class Computing extends StatelessWidget {
  const Computing({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
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
                         Column(
                                children: [
                                    Column(
                                          children: [
                                            Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment
                                                      .spaceBetween,
                                              children: [
                                                const Text(
                                                  'دترمینال',
                                                  style: TextStyle(
                                                      fontFamily: 'IRANSansXV',
                                                      fontSize: 16,
                                                      color: SolidColors.black),
                                                ),
                                                Container(
                                                  width: context.widths / 1.9,
                                                  height: 50,
                                                  decoration: BoxDecoration(
                                                      color: SolidColors.white,
                                                      borderRadius:
                                                          BorderRadius.circular(
                                                              10)),
                                                  child: toTextField(
                                                      isBlu: true,
                                                      textEditingController:
                                                          TextEditingController(),
                                                      hintText: ''),
                                                ),
                                              ],
                                            ),
                                            const SizedBox(
                                              height: 29,
                                            ),
                                            
                                                Row(
                                                  children: const[
                                                     Text(
                                                      'ماتریس معکوس',
                                                      style: TextStyle(
                                                          fontFamily: 'IRANSansXV',
                                                          fontSize: 16,
                                                          color: SolidColors.black),
                                                    ),
                                                  ],
                                                ),
                                                
                                            const SizedBox(
                                              height: 20,
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
                                          ],
                                        )
                                ],
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
            ),
          ],
        ),
      ),
    );
  }
}
