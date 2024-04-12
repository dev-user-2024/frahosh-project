import 'package:farahoosh/app/presentation/blocs/new_ticket/new_ticket_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../blocs/settings/settings_cubit.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class NewTicket extends StatelessWidget {
  NewTicket({super.key});

  final NewTicketCubit _cubit = NewTicketCubit();
  final GlobalKey<FormState> _formKey = GlobalKey();

  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _textController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'اول مفاهیم',
      'دوم مفاهیم',
      'سوم مفاهیم',
    ];
    String? selectedItem = 'اول مفاهیم';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "ثبت تیکت جدید"),
            Expanded(
              child: Stack(children: [
                SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Form(
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
                                'عنوان تیکت',
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
                              labelText: "موضوع تیکت رو بنویس",
                              controller: _titleController,
                              validator: (value) {
                                return value?.isNotEmpty ?? false
                                    ? null
                                    : 'موضوع تیکت نباید خالی باشد';
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
                                'درس',
                                style: textTheme.headline1,
                              )
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 10),
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              child: dropdownButton(
                                  selectedItem, items, textTheme),
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                'اولیوت',
                                style: textTheme.headline1,
                              )
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 10),
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(20),
                              ),
                              child: dropdownButton(
                                  selectedItem, items, textTheme),
                            ),
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                'متن پیام',
                                style: textTheme.headline1,
                              )
                            ],
                          ),
                          const SizedBox(
                            height: 10,
                          ),
                          Container(
                              width: size.width,
                              // ignore: prefer_const_constructors
                              decoration: BoxDecoration(
                                  borderRadius: const BorderRadius.all(
                                    Radius.circular(15),
                                  ),
                                  color: SolidColors.backgroundColor),
                              child: TextFieldWidget(
                                labelText: "",
                                controller: _textController,
                                validator: (value) {
                                  return value?.isNotEmpty ?? false
                                      ? null
                                      : 'متن تیکت نباید خالی باشد';
                                },
                                minLines: 6,
                                borderSideColor: SolidColors.black,
                              )),
                          const SizedBox(
                            height: 40,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'فایل های مرتبط',
                                style: textTheme.headline1,
                              ),
                              BlocBuilder<NewTicketCubit, NewTicketState>(
                                bloc: _cubit,
                                builder: (context, state) => Container(
                                  width: size.width / 2.3,
                                  height: 50,
                                  decoration: BoxDecoration(
                                    color: (state is NewTicketWithoutFile)
                                        ? context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor
                                        : SolidColors.red,
                                    border: Border.all(color: Colors.white),
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  child: Center(
                                    child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        Image.asset(Assets.icons.arrowTop.path),
                                        const SizedBox(
                                          width: 12,
                                        ),
                                        Text(
                                          (state is NewTicketWithoutFile)
                                              ? "بارگزاری فایل"
                                              : "حذف فایل",
                                          style: textTheme.subtitle2,
                                        ),
                                      ],
                                    ),
                                  ),
                                ).toClick(
                                  onTap: () {
                                    if (state is NewTicketWithoutFile) {
                                      FilePicker.platform
                                          .pickFiles(type: FileType.image)
                                          .then((value) {
                                        if (value != null) {
                                          _cubit.addFile(
                                              value.files[0].path.toString());
                                        }
                                      });
                                    } else {
                                      _cubit.removeFile();
                                    }
                                  },
                                ),
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
                                      .uploadTicket(_titleController.text,
                                          _textController.text)
                                      .then((value) {
                                    if (value ?? false) {
                                      Navigator.of(context).pop(true);
                                    }
                                  });
                                }
                              },
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}
