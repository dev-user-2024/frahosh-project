import 'package:farahoosh/app/presentation/blocs/new_tickeight/new_tickeight_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';

class Wordpage extends StatelessWidget {
  Wordpage(this._cubit, {Key? key}) : super(key: key);

  final NewTickeightCubit _cubit;

  final GlobalKey<FormState> _formKey = GlobalKey();
  final TextEditingController _engController = TextEditingController();
  final TextEditingController _perController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [
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
                          //  mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Padding(
                                  padding: const EdgeInsets.only(
                                      top: 20, bottom: 10),
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
                                  labelText: "",
                                  controller: _engController,
                                  validator: (value) {
                                    if (value?.isEmpty ?? true) {
                                      return 'این قسمت نباید خالی باشد';
                                    }
                                    return null;
                                  },
                                  minLines: 3,
                                  borderSideColor: SolidColors.black,
                                )),
                            const SizedBox(
                              height: 20,
                            ),
                            Row(
                              children: [
                                Padding(
                                  padding: const EdgeInsets.only(
                                      top: 20, bottom: 10),
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
                                height: 110,
                                width: size.width,
                                decoration: BoxDecoration(
                                  color: SolidColors.backgroundColor,
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: TextFieldWidget(
                                  labelText: "",
                                  minLines: 3,
                                  controller: _perController,
                                  validator: (value) {
                                    if (value?.isEmpty ?? true) {
                                      return 'این قسمت نباید خالی باشد';
                                    }
                                    return null;
                                  },
                                  borderSideColor: SolidColors.black,
                                )),
                            const SizedBox(
                              height: 30,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                SizedBox(
                                  width: size.width / 2.35,
                                  height: 50,
                                  child: const ButtonWidget(
                                    title: "ثبت",
                                    mainColor: true,
                                  ),
                                ).toClick(
                                  onTap: () {
                                    _cubit
                                        .addTickeight(_engController.text,
                                            _perController.text)
                                        .then((value) {
                                      if (value == true) {
                                        Navigator.of(context).pop(true);
                                      }
                                    });
                                  },
                                ),
                                const SizedBox(
                                  width: 20,
                                ),
                                SizedBox(
                                  width: size.width / 2.35,
                                  height: 50,
                                  child: const ButtonWidget(
                                    title: "لغو",
                                    mainColor: false,
                                  ),
                                ).toClick(onTap: (() {
                                  Navigator.of(context).pop();
                                })),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                  ]),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
