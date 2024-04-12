import 'package:farahoosh/app/presentation/blocs/leitner/leitner_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/new_leitner/new_leitner_cubit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/appBar/appbar.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../modules/widgets/colors.dart';
import '../../../../../gen/assets.gen.dart';

class Leinter3 extends StatelessWidget {
  final NewLeitnerCubit _cubit;
  Leinter3(this._cubit, {super.key});

  final GlobalKey<FormState> _formKey = GlobalKey();
  final TextEditingController _frontController = TextEditingController();
  final TextEditingController _backController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Form(
          key: _formKey,
          child: Column(
            children: [
              // appbar
              Appbar(
                  title: "ثبت کارت جدید",
                  image: Image.asset(
                    Assets.icons.arrowLeftIos.path,
                    scale: 1,
                  ),
                  textTheme: textTheme),

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
                    controller: _frontController,
                    validator: (value) {
                      if (value?.isEmpty ?? true) {
                        return 'این قسمت نباید خالی باشد';
                      }
                      return null;
                    },
                    // obscureText: false,
                    minLines: 6,
                    maxLines: 6,
                    keyboardType: TextInputType.multiline,
                    decoration: InputDecoration(
                      hintText: "معنی sky",
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

              Padding(
                padding: const EdgeInsets.only(top: 40, left: 20, right: 25),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Text(
                      "پشت کارت",
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
                    controller: _backController,
                    validator: (value) {
                      if (value?.isEmpty ?? true) {
                        return 'این قسمت نباید خالی باشد';
                      }
                      return null;
                    },
                    maxLines: 6,
                    keyboardType: TextInputType.multiline,
                    decoration: InputDecoration(
                      hintText: "آسمان",
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
                  padding:
                      EdgeInsets.only(top: 40, left: 20, bottom: 30, right: 20),
                  child: ButtonWidget(title: "ذخیره", mainColor: true),
                ),
                onTap: () {
                  if (_formKey.currentState?.validate() ?? false) {
                    _cubit
                        .addLeitner(_frontController.text, _backController.text)
                        .then((value) {
                      if (value ?? false) {
                        Navigator.of(context).pop(true);
                      }
                    }).catchError((_) {});
                  }
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
