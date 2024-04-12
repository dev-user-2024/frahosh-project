import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../blocs/new_wordnote/new_wordnote_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/navbar/navbar.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';

class CreatWord extends StatelessWidget {
  CreatWord({Key? key}) : super(key: key);

  final NewWordnoteCubit _cubit = NewWordnoteCubit();

  final GlobalKey<FormState> _formKey = GlobalKey();
  final TextEditingController _englishController = TextEditingController();
  final TextEditingController _meanController = TextEditingController();
  final TextEditingController _exEngController = TextEditingController();
  final TextEditingController _exMeanController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(children: [
          toApp(context: context, title: "لغت جدید"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        Row(
                          children: [
                            Padding(
                              padding:
                                  const EdgeInsets.only(top: 20, bottom: 10),
                              child: Text(
                                'لغت',
                                style: textTheme.subtitle1,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(
                          width: 15,
                        ),
                        Container(
                            width: size.width,
                            decoration: BoxDecoration(
                              color: SolidColors.backgroundColor,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: TextFieldWidget(
                              hintText: "",
                              controller: _englishController,
                              validator: (value) {
                                if (value?.isEmpty ?? true) {
                                  return 'این قسمت نباید خالی باشد';
                                }
                                return null;
                              },
                              minLines: 2,
                              borderSideColor: SolidColors.black,
                            )),
                        Row(
                          children: [
                            Padding(
                              padding:
                                  const EdgeInsets.only(top: 20, bottom: 10),
                              child: Text(
                                'معنی',
                                style: textTheme.subtitle1,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(
                          width: 15,
                        ),
                        Container(
                            width: size.width,
                            decoration: BoxDecoration(
                              color: SolidColors.backgroundColor,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: TextFieldWidget(
                              hintText: "",
                              controller: _meanController,
                              validator: (value) {
                                if (value?.isEmpty ?? true) {
                                  return 'این قسمت نباید خالی باشد';
                                }
                                return null;
                              },
                              minLines: 2,
                              borderSideColor: SolidColors.black,
                            )),
                        Row(
                          children: [
                            Padding(
                              padding:
                                  const EdgeInsets.only(top: 20, bottom: 10),
                              child: Text(
                                'مثال',
                                style: textTheme.subtitle1,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(
                          width: 20,
                        ),
                        Container(
                            width: size.width,
                            decoration: BoxDecoration(
                              color: SolidColors.backgroundColor,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: TextFieldWidget(
                              hintText: "",
                              controller: _exEngController,
                              validator: (value) {
                                if (value?.isEmpty ?? true) {
                                  return 'این قسمت نباید خالی باشد';
                                }
                                return null;
                              },
                              minLines: 6,
                              borderSideColor: SolidColors.black,
                            )),
                        Row(
                          children: [
                            Padding(
                              padding:
                                  const EdgeInsets.only(top: 20, bottom: 10),
                              child: Text(
                                'معنی',
                                style: textTheme.subtitle1,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(
                          width: 20,
                        ),
                        Container(
                            width: size.width,
                            decoration: BoxDecoration(
                              color: SolidColors.backgroundColor,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: TextFieldWidget(
                              hintText: "",
                              controller: _exMeanController,
                              validator: (value) {
                                if (value?.isEmpty ?? true) {
                                  return 'این قسمت نباید خالی باشد';
                                }
                                return null;
                              },
                              minLines: 6,
                              borderSideColor: SolidColors.black,
                            )),
                        InkWell(
                          child: const Padding(
                            padding: EdgeInsets.only(
                                top: 40,),
                            child: ButtonWidget(title: "ذخیره", mainColor: true),
                          ),
                          onTap: () {
                            if (_formKey.currentState?.validate() ?? false) {
                              _cubit
                                  .addWordnote(
                                      _englishController.text,
                                      _meanController.text,
                                      _exEngController.text,
                                      _exMeanController.text)
                                  .then((value) {
                                if (value ?? false) {
                                  Navigator.of(context).pop(true);
                                }
                              }).catchError((_) {});
                            }
                          },
                        ),
                        const SizedBox(height: 150,)
                      ],
                    ),
                  ),
                ),
              
                NavBar(size: size),
              ]),
            ),
          ),
          
        ]),
      ),
    );
  }
}
