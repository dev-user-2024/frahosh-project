import 'package:farahoosh/app/presentation/blocs/settings/settings_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/const/datacolors.dart';

class ChooseColor extends StatelessWidget {
  const ChooseColor({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(children: [
          toApp(context: context, title: "انتخاب رنگ پوسته"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    children: [
                      const SizedBox(height: 10,),
                      Row(
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(top: 20, bottom: 10),
                            child: Text(
                              'رنگ پوسته مورد نظرت رو انتخاب کن',
                              style: textTheme.headline1,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 25,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          SizedBox(
                            width: size.width / 3,
                            child: Column(
                              children: [
                                Container(
                                  width: 90,
                                  height: 90,
                                  decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(20),
                                      color: SolidColors.blue),
                                ).toClick(
                                  onTap: () {
                                    context.read<SettingsCubit>().appColor =
                                        AppPrimaryColor.blue;
                                    Navigator.pop(context);
                                  },
                                ),
                                const SizedBox(
                                  height: 10,
                                ),
                                Text(
                                  'پیش فرض فراهوش',
                                  style: textTheme.subtitle1,
                                ),
                              ],
                            ),
                          ),
                          SizedBox(
                            width: size.width / 3,
                            child: Column(
                              children: [
                                Container(
                                  width: 90,
                                  height: 90,
                                  decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(20),
                                      color: Colors.orange),
                                ).toClick(
                                  onTap: () {
                                    context.read<SettingsCubit>().appColor =
                                        AppPrimaryColor.atom;
                                    Navigator.pop(context);
                                  },
                                ),
                                const SizedBox(
                                  height: 10,
                                ),
                                Text(
                                  'پاییز زیبا',
                                  style: textTheme.subtitle1,
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 30,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Column(
                            children: [
                              Container(
                                width: 90,
                                height: 90,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                    color: Colors.pinkAccent),
                              ).toClick(
                                onTap: () {
                                  context.read<SettingsCubit>().appColor =
                                      AppPrimaryColor.spring;
                                  Navigator.pop(context);
                                },
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              Text(
                                'شکوفه‌ی بهار',
                                style: textTheme.subtitle1,
                              ),
                            ],
                          ),
                          Column(
                            children: [
                              Container(
                                width: 90,
                                height: 90,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                    color: SolidColors.grey),
                              ).toClick(
                                onTap: () {
                                  context.read<SettingsCubit>().appColor =
                                      AppPrimaryColor.silver;
                                  Navigator.pop(context);
                                },
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              Text(
                                'نقره',
                                style: textTheme.subtitle1,
                              ),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 30,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Column(
                            children: [
                              Container(
                                width: 90,
                                height: 90,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                    color: SolidColors.green),
                              ).toClick(
                                onTap: () {
                                  context.read<SettingsCubit>().appColor =
                                      AppPrimaryColor.grass;
                                  Navigator.pop(context);
                                },
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              Text(
                                'سبزه‌زار',
                                style: textTheme.subtitle1,
                              ),
                            ],
                          ),
                          Column(
                            children: [
                              Container(
                                width: 90,
                                height: 90,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                    color: Colors.deepPurple),
                              ).toClick(
                                onTap: () {
                                  context.read<SettingsCubit>().appColor =
                                      AppPrimaryColor.purple;
                                  Navigator.pop(context);
                                },
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              Text(
                                'بنفشه',
                                style: textTheme.subtitle1,
                              ),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 30,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Column(
                            children: [
                              Container(
                                width: 90,
                                height: 90,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                    color: const Color.fromARGB(255, 0, 6, 85)),
                              ).toClick(
                                onTap: () {
                                  context.read<SettingsCubit>().appColor =
                                      AppPrimaryColor.moonlight;
                                  Navigator.pop(context);
                                },
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              Text(
                                'مهتاب',
                                style: textTheme.subtitle1,
                              ),
                            ],
                          ),
                          Column(
                            children: [
                              Container(
                                width: 90,
                                height: 90,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                    color: Colors.yellow),
                              ).toClick(
                                onTap: () {
                                  context.read<SettingsCubit>().appColor =
                                      AppPrimaryColor.sunshine;
                                  Navigator.pop(context);
                                },
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              Text(
                                'آفتاب',
                                style: textTheme.subtitle1,
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                NavBar(size: size)
              ]),
            ),
          ),
        ]),
      ),
    );
  }
}
