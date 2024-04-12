import 'package:flutter/material.dart';
import '../../../blocs/leitner_box/leitner_box_cubit.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../../gen/assets.gen.dart';

Future<dynamic> showLeinter1BottomSheet(BuildContext context, Size size,
    TextTheme textTheme, LeitnerBoxCubit leitnerBoxCubit) {
  final GlobalKey<FormState> formKey = GlobalKey();
  final controller = TextEditingController();
  return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: ((context) {
        return Padding(
          padding:
              EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
          child: Container(
            height: size.height / 1.8,
            decoration: const BoxDecoration(
                color: SolidColors.backgroundColor,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                )),
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 10,
                        ),
                        Image.asset(Assets.images.line60.path),

                        // green folder image
                        SizedBox(
                          width: 300,
                          height: 300,
                          child: Stack(
                            children: [
                              Image.asset(Assets.images.newFolderGreen.path),
                              Positioned(
                                  right: 100,
                                  bottom: 70,
                                  child: Image.asset(Assets.images.star4.path)),
                              Positioned(
                                  right: 100,
                                  bottom: 130,
                                  child: Image.asset(Assets.images.star5.path)),
                            ],
                          ),
                        ),

                        Form(
                          key: formKey,
                          child: TextFieldWidget(
                            hintText: "عنوان جعبه",
                            validator: (value) => value?.isNotEmpty ?? false
                                ? null
                                : 'عنوان جعبه نمیتواند خالی باشد',
                            borderSideColor: SolidColors.black,
                            controller: controller,
                          ),
                        ),
                        const SizedBox(
                          height: 30,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(
                              width: size.width / 2.35,
                              height: 50,
                              child: ButtonWidget(
                                title: "ایجاد",
                                mainColor: true,
                                onTap: () {
                                  if (formKey.currentState?.validate() ??
                                      false) {
                                    leitnerBoxCubit.addBox(controller.text);
                                    Navigator.pop(context);
                                  }
                                },
                              ),
                            ),
                            const SizedBox(
                              width: 20,
                            ),
                            SizedBox(
                              width: size.width / 2.35,
                              height: 50,
                              child: ButtonWidget(
                                title: "لغو",
                                mainColor: false,
                                onTap: () => Navigator.pop(context),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      }));
}
