import 'package:farahoosh/app/presentation/blocs/chronometer/chronometer_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/boxes/bigWhiteBox.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/dropdownButton.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';

class ChronometrPage extends StatelessWidget {
  final ChronometerCubit _chronometerCubit = ChronometerCubit();

  ChronometrPage({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'مستقیم',
      'غیر مستقیم',
    ];
    
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            // appbar
            toApp(context: context, title: "کرنومتر"),
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
                          child: InkWell(
                            child: SizedBox(
                              height: size.height / 6.6,
                              child: BlocBuilder<ChronometerCubit,
                                  ChronometerState>(
                                bloc: _chronometerCubit,
                                builder: (context, state) {
                                  return Directionality(
                                      textDirection: TextDirection.ltr,
                                      child: BigWhiteBox(
                                        txt: state.toString(),
                                        size: size,
                                        textTheme: textTheme,
                                        widget: Container(),
                                      ));
                                },
                              ),
                            ),
                            onTap: () {},
                          ),
                        ),
                        const SizedBox(
                          height: 60,
                        ),
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              InkWell(
                                child: Container(
                                    width: size.width / 4,
                                    height: 60,
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                    child: BlocBuilder<ChronometerCubit,
                                        ChronometerState>(
                                      bloc: _chronometerCubit,
                                      buildWhen: (previous, current) =>
                                          previous.runtimeType !=
                                          current.runtimeType,
                                      builder: (context, state) => ButtonWidget(
                                        title: state is ChronometerStoped
                                            ? "شروع"
                                            : 'توقف',
                                        mainColor: true,
                                      ),
                                    )),
                                onTap: () {
                                  _chronometerCubit.toggleStartAndStop();
                                },
                              ),
                              // DropdownButtonFormField
                              SizedBox(
                                  width: size.width / 3.4,
                                  height: 60,
                                  child: BlocBuilder<ChronometerCubit,
                                      ChronometerState>(
                                    bloc: _chronometerCubit,
                                    builder: (context, state) {
                                      return dropdownButton(
                                          state.directive
                                              ? 'مستقیم'
                                              : 'غیر مستقیم',
                                          items,
                                          textTheme);
                                    },
                                  )),

                              InkWell(
                                child: Container(
                                  width: size.width / 4,
                                  height: 60,
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  child: const ButtonWidget(
                                    title: "شروع مجدد",
                                    mainColor: true,
                                  ),
                                ),
                                onTap: () {
                                  _chronometerCubit.reset();
                                },
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(
                          height: 45,
                        ),
                        items.toString() != 'غیر مستقیم'
                            ? Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 22),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    SizedBox(
                                      height: 100,
                                      width: size.width / 4,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          const Text(
                                            "ثانیه",
                                            style: TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 16,
                                                color:
                                                    SolidColors.textTitleBlac,
                                                fontWeight: FontWeight.bold),
                                          ),
                                          Container(
                                              width: size.width / 3.6,
                                              decoration: BoxDecoration(
                                                color: SolidColors.white,
                                                borderRadius:
                                                    BorderRadius.circular(12),
                                              ),
                                              child: const TextFieldWidget(
                                                labelText: "",
                                                borderSideColor:
                                                    SolidColors.black,
                                              )),
                                        ],
                                      ),
                                    ),
                                    SizedBox(
                                      height: 100,
                                      width: size.width / 4,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          const Text(
                                            "دقیقه",
                                            style: TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 16,
                                                color:
                                                    SolidColors.textTitleBlac,
                                                fontWeight: FontWeight.bold),
                                          ),
                                          Container(
                                              width: size.width / 3.6,
                                              decoration: BoxDecoration(
                                                color: SolidColors.white,
                                                borderRadius:
                                                    BorderRadius.circular(12),
                                              ),
                                              child: const TextFieldWidget(
                                                labelText: "",
                                                borderSideColor:
                                                    SolidColors.black,
                                              )),
                                        ],
                                      ),
                                    ),
                                    SizedBox(
                                      height: 100,
                                      width: size.width / 4,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceBetween,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          const Text(
                                            "ساعت",
                                            style: TextStyle(
                                                fontFamily: "IRANSansXV",
                                                fontSize: 16,
                                                color:
                                                    SolidColors.textTitleBlac,
                                                fontWeight: FontWeight.bold),
                                          ),
                                          Container(
                                              width: size.width / 3.6,
                                              decoration: BoxDecoration(
                                                color: SolidColors.white,
                                                borderRadius:
                                                    BorderRadius.circular(12),
                                              ),
                                              child: const TextFieldWidget(
                                                labelText: "",
                                                borderSideColor:
                                                    SolidColors.black,
                                              )),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              )
                            : Container(),
                        const SizedBox(
                          height: 50,
                        ),
                        BlocBuilder<ChronometerCubit, ChronometerState>(
                          bloc: _chronometerCubit,
                          buildWhen: (previous, current) =>
                              previous.records.length != current.records.length,
                          builder: (context, state) {
                            return Column(
                              children: state.records
                                  .map<Widget>(
                                    (e) => Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 20, vertical: 10),
                                      child: InkWell(
                                        child: SizedBox(
                                          height: size.height / 7,
                                          child: Directionality(
                                            textDirection: TextDirection.ltr,
                                            child: BigWhiteBox(
                                              txt: e,
                                              size: size,
                                              textTheme: textTheme,
                                              widget: Container(),
                                            ),
                                          ),
                                        ),
                                        onTap: () {},
                                      ),
                                    ),
                                  )
                                  .toList(),
                            );
                          },
                        ),
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
    );
  }

  // DropdownButtonFormField<String> DropdownButton(
  //     String selectedItem, List<String> items, TextTheme textTheme) {
  //   return DropdownButtonFormField<String>(
  //     decoration: InputDecoration(
  //       enabledBorder: OutlineInputBorder(
  //         borderRadius: BorderRadius.circular(12),
  //         borderSide: const BorderSide(color: Colors.black, width: 0.3),
  //       ),
  //       focusedBorder: OutlineInputBorder(
  //         borderRadius: BorderRadius.circular(12),
  //         borderSide: const BorderSide(color: Colors.black, width: 0.3),
  //       ),
  //       filled: true,
  //       fillColor: SolidColors.backgroundColor,
  //     ),
  //     icon: Image.asset(Assets.icons.arrowButtom.path),
  //     dropdownColor: SolidColors.backgroundColor,
  //     value: selectedItem,
  //     items: items
  //         .map((item) => DropdownMenuItem<String>(
  //               value: item,
  //               child: Text(
  //                 item,
  //                 style: textTheme.bodyText1,
  //               ),
  //             ))
  //         .toList(),
  //     onChanged: (item) {},
  //   );
  // }
}
