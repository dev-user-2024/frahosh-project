import 'package:farahoosh/app/presentation/blocs/tickeights/tickeights_cubit.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../../gen/assets.gen.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import '../../../modules/const/urlimages.dart';
import '../../../router/packages.dart';
import '../../../router/widgets.dart';

class CreateCart extends StatelessWidget {
  const CreateCart({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ToPopUpPage(
      child: ScaffoldNotAppBar(
          child: AlertDialogCustom(
        height: 450,
        images: DataImages.folder.toJpgImage(size: 220, boxFit: BoxFit.cover),
        hintText: 'عنوان جعبه',
        okButton: 'ایجاد',
        textEditingController: TextEditingController(),
        onTapOkButton: () {},
        onTapNotButton: () {
          navigatorPop(context: context);
        },
      )),
    );
  }
}

Future<dynamic> showTickitBottomSheet(BuildContext context, Size size,
    TextTheme textTheme, TickeightsCubit tickeightsCubit) {
  final GlobalKey<FormState> _formKey = GlobalKey();
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
                          key: _formKey,
                          child: TextFieldWidget(
                            labelText: "عنوان جعبه",
                            controller: controller,
                            validator: (value) {
                              if (value?.isEmpty ?? true) {
                                return 'نام پوشه نباید خالی باشد';
                              }
                              return null;
                            },
                            borderSideColor: SolidColors.black,
                          ),
                        ),
                        const SizedBox(
                          height: 30,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            InkWell(
                              child: SizedBox(
                                width: size.width / 2.35,
                                height: 50,
                                child: const ButtonWidget(
                                  title: "ایجاد",
                                  mainColor: true,
                                ),
                              ),
                              onTap: () {
                                if (_formKey.currentState?.validate() ??
                                    false) {
                                  tickeightsCubit.addBox(controller.text);
                                  Navigator.pop(context);
                                }
                              },
                            ),
                            const SizedBox(
                              width: 20,
                            ),
                            InkWell(
                              child: SizedBox(
                                width: size.width / 2.35,
                                height: 50,
                                child: const ButtonWidget(
                                  title: "لغو",
                                  mainColor: false,
                                ),
                              ),
                              onTap: () {
                                Navigator.of(context).pop();
                              },
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
