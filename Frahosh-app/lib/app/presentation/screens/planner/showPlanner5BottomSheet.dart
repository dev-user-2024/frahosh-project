import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../blocs/heart_writes/heart_writes_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';

Future<dynamic> showPlanner5BottomSheet(BuildContext context, Size size,
    TextTheme textTheme, HeartWritesCubit HeartWritesCubit) {
  // final GlobalKey<FormState> formKey = GlobalKey();
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
            height: size.height / 3.5,
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
                        
                        const SizedBox(
                          height: 40,
                        ),
                        Form(
                          // key: formKey,
                          child: TextFieldWidget(
                            hintText: "عنوان دل نوشته",
                            validator: (value) => value?.isNotEmpty ?? false
                                ? null
                                : 'عنوان دل نوشته نمیتواند خالی باشد',
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
                                  // if (formKey.currentState?.validate() ??
                                  //     false) {
                                    HeartWritesCubit.addBox(controller.text);
                                    Navigator.pop(context);
                                  }
                                // },
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
