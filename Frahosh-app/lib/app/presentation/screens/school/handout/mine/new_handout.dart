import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../../../../gen/assets.gen.dart';
import '../../../../blocs/new_handout/new_handout_cubit.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../modules/widgets/dropdownButton.dart';
import '../../../../modules/widgets/textField/TextFieldwidget.dart';

class NewHandout extends StatelessWidget {
  NewHandout({super.key});

  final NewHandoutCubit _cubit = NewHandoutCubit();
  final GlobalKey<FormState> _formKey = GlobalKey();

  final TextEditingController _sittingController = TextEditingController();
  final TextEditingController _lessonController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    List<int> items = <int>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "بارگزاری جزوه"),
            Expanded(
              child: Stack(children: [
                SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: BlocBuilder<NewHandoutCubit, NewHandoutState>(
                      bloc: _cubit,
                      builder: (context, state) {
                        return Form(
                          key: _formKey,
                          child: Column(
                            // crossAxisAlignment: CrossAxisAlignment.end,
                            children: [
                              const SizedBox(
                                height: 20,
                              ),
                              Row(
                                children: [
                                  Text(
                                    'عنوان جلسه',
                                    style: textTheme.headline1,
                                  )
                                ],
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              Container(
                                width: size.width,
                                decoration: const BoxDecoration(
                                    borderRadius: BorderRadius.all(
                                      Radius.circular(15),
                                    ),
                                    color: SolidColors.backgroundColor),
                                child: Center(
                                    child: TextFieldWidget(
                                  labelText: "عنوان جلسه رو بنویس",
                                  controller: _sittingController,
                                  validator: (value) {
                                    return value?.isNotEmpty ?? false
                                        ? null
                                        : 'عنوان جلسه نباید خالی باشد';
                                  },
                                  borderSideColor: SolidColors.black,
                                )),
                              ),
                              const SizedBox(
                                height: 20,
                              ),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Text(
                                    'پایه',
                                    style: textTheme.headline1,
                                  )
                                ],
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 10),
                                child: Container(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                  ),
                                  child: dropdownButton(
                                    state.selectedGrade.toString(),
                                    items.map((e) => e.toString()).toList(),
                                    textTheme,
                                    onChanged: (p0) {
                                      _cubit.setGrade(p0.toString());
                                    },
                                  ),
                                ),
                              ),
                              const SizedBox(
                                height: 30,
                              ),
                              Row(
                                children: [
                                  Text(
                                    'عنوان درس',
                                    style: textTheme.headline1,
                                  )
                                ],
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              Container(
                                width: size.width,
                                decoration: const BoxDecoration(
                                    borderRadius: BorderRadius.all(
                                      Radius.circular(15),
                                    ),
                                    color: SolidColors.backgroundColor),
                                child: Center(
                                    child: TextFieldWidget(
                                  labelText: "عنوان درس رو بنویس",
                                  controller: _lessonController,
                                  validator: (value) {
                                    return value?.isNotEmpty ?? false
                                        ? null
                                        : 'عنوان درس نباید خالی باشد';
                                  },
                                  borderSideColor: SolidColors.black,
                                )),
                              ),
                              const SizedBox(
                                height: 40,
                              ),
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Text(
                                    'فایل های مرتبط',
                                    style: textTheme.headline1,
                                  ),
                                  Container(
                                    width: size.width / 2.3,
                                    height: 50,
                                    decoration: BoxDecoration(
                                      color: (state is NewHandoutWithoutFile)
                                          ? const Color.fromARGB(
                                              255, 29, 155, 240)
                                          : SolidColors.red,
                                      border: Border.all(color: Colors.white),
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                    child: Center(
                                      child: Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: [
                                          Image.asset(
                                              Assets.icons.arrowTop.path),
                                          const SizedBox(
                                            width: 12,
                                          ),
                                          Text(
                                            (state is NewHandoutWithoutFile)
                                                ? "بارگزاری فایل"
                                                : "تغییر فایل",
                                            style: textTheme.subtitle2,
                                          ),
                                        ],
                                      ),
                                    ),
                                  ).toClick(
                                    onTap: () {
                                      FilePicker.platform.pickFiles(
                                          type: FileType.custom,
                                          allowedExtensions: [
                                            'pdf',
                                            'mp4',
                                            'mkv',
                                            'avi',
                                          ]).then((value) {
                                        if (value != null) {
                                          _cubit.addFile(
                                              value.files[0].path.toString());
                                        }
                                      });
                                    },
                                  ),
                                ],
                              ),
                              const SizedBox(
                                height: 30,
                              ),
                              SizedBox(
                                width: size.width,
                                child: const ButtonWidget(
                                        title: 'ارسال تیکت', mainColor: true)
                                    .toClick(
                                  onTap: () {
                                    if (_formKey.currentState?.validate() ??
                                        false) {
                                      _cubit
                                          .uploadHandout(
                                        _sittingController.text,
                                        _lessonController.text,
                                      )
                                          .then((value) {
                                        if (value ?? false) {
                                          Navigator.of(context).pop(true);
                                        }
                                      });
                                    }
                                  },
                                ),
                              ),
                              const SizedBox(height: 150,)
                            ],
                          ),
                        );
                      },
                    ),
                  ),
                ),
                NavBar(size: size)
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}
