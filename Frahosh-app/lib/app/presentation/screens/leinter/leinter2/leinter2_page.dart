import 'package:farahoosh/app/presentation/blocs/leitner/leitner_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/new_leitner/new_leitner_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/dropdownButton.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/leinter/leinter2/showLeinter2BottomSheet.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../blocs/settings/settings_cubit.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../leinter3/leinter3_page.dart';

class Leinter2 extends StatelessWidget {
  const Leinter2(this.title, this._cubit, {super.key});

  final LeitnerCubit _cubit;
  final String title;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: BlocBuilder<LeitnerCubit, LeitnerState>(
          bloc: _cubit,
          builder: (context, state) {
            if (state is LeitnerLoading) return const Text('loading');
            if (state is LeitnerError) return const Text('error');
            return Column(
              children: [
                // appbar
                toApp(context: context, title: title),

                // new cart blu button
                Expanded(child: 
                Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          const SizedBox(height: 20,),
                InkWell(
                  child: Padding(
                    padding: EdgeInsets.only(
                        top: 8, left: size.width / 2, bottom: 25, right: 20),
                    child:
                        const ButtonWidget(title: "+ ثبت کارت جدید", mainColor: true),
                  ),
                  onTap: () {
                    Navigator.of(context)
                        .push<bool>(MaterialPageRoute(
                            builder: ((context) =>
                                Leinter3(NewLeitnerCubit(_cubit.id)))))
                        .then((value) {
                      if (value ?? false) {
                        _cubit.load();
                      }
                    });
                  },
                ),

                // title chose cart
                Padding(
                  padding: const EdgeInsets.only(top: 10, left: 20, right: 25),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text(
                        "کارت رو انتخاب کن",
                        style: textTheme.bodyText1,
                      ),
                    ],
                  ),
                ),

                // DropdownButtonFormField
                Padding(
                  padding: const EdgeInsets.only(
                      top: 8, left: 20, bottom: 25, right: 20),
                  child: Container(
                    height: 58,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      //  border: Border.all(color: SolidColors.blu, width: 1),
                    ),
                    child: dropdownButton2(
                        (state as LeitnerGeneral).selectedID,
                        state.leitners.map((e) => e.id).toList(),
                        textTheme,
                        _cubit),
                  ),
                ),

                Padding(
                  padding: const EdgeInsets.only(top: 10, left: 20, right: 25),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text(
                        "روی کارت",
                        style: textTheme.bodyText1,
                      ),
                    ],
                  ),
                ),
                // lienter input box
                Padding(
                  padding: const EdgeInsets.only(top: 10, left: 20, right: 20),
                  child: Container(
                    decoration: BoxDecoration(
                      color: SolidColors.backgroundColor,
                      border: Border.all(color: SolidColors.black, width: 0.3),
                      borderRadius: BorderRadius.circular(12),
                      boxShadow: const [
                        BoxShadow(
                          color: SolidColors.calculatorBox,
                          blurRadius: 1,
                          offset: Offset(0, 0), // Shadow position
                        ),
                      ],
                    ),
                    child: TextFormField(
                      enabled: true,
                      // obscureText: false,
                      minLines: 6,
                      maxLines: 6,
                      keyboardType: TextInputType.multiline,
                      decoration: InputDecoration(
                        hintText: state.selectedFront,
                        labelStyle:
                            const TextStyle(fontSize: 14, color: Colors.black),
                        enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: const BorderSide(
                                color: SolidColors.black, width: 0.3)),
                        focusedErrorBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: const BorderSide(
                                color: SolidColors.black, width: 0.3)),
                        errorBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: const BorderSide(
                                color: SolidColors.black, width: 0.3)),
                        focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: const BorderSide(
                                color: SolidColors.black, width: 0.3)),
                      ),
                    ),
                  ),
                ),

                // show cart blu button
                InkWell(
                  child: const Padding(
                    padding: EdgeInsets.only(
                        top: 40, left: 20, bottom: 30, right: 20),
                    child: ButtonWidget(title: "نمایش پشت کارت", mainColor: true),
                  ),
                  onTap: () {
                    showLeinter2BottomSheet(
                        context, size, textTheme, state.selectedBack);
                  },
                ),

                // the end title
                Padding(
                  padding: const EdgeInsets.only(top: 10, left: 20, right: 25),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text(
                        "موقعیت جدید کارت",
                        style: textTheme.bodyText1,
                      ),
                    ],
                  ),
                ),
                // the end text field
                Padding(
                  padding: const EdgeInsets.only(top: 10, left: 20, right: 20),
                  child: Container(
                    decoration: BoxDecoration(
                      color: SolidColors.white,
                      borderRadius: BorderRadius.circular(15),
                    ),
                    child:  TextFieldWidget(
                      hintText: "خانه اول-بخش چهارم",
                      borderSideColor: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
                    ),
                  ),
                ),
                
                const SizedBox(height: 150,)

                        ],
                      ),
                    ),
                    NavBar(size: size)
                  ],
                ))
              ],
            );
          },
        ),
      ),
    );
  }

}
