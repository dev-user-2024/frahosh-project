import 'package:farahoosh/app/presentation/blocs/settings/settings_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/user/user_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../router/const.dart';
import '../../../router/packages.dart';

Future<dynamic> showFingerprintBottomSheet(
    BuildContext context, Size size, TextTheme textTheme) {
  final formKey = GlobalKey<FormState>();
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
            height: size.height / 2,
            decoration: const BoxDecoration(
                color: SolidColors.backgroundColor,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                )),
            child: Center(
              child: Column(
                children: [
                  const SizedBox(
                    height: 20,
                  ),
                  Align(
                    alignment: Alignment.center,
                    child: DataImages.line_60.toPNGImage(),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Align(
                    alignment: Alignment.center,
                    child: DataImages.changePass
                        .toJpgImage(size: 150, boxFit: BoxFit.cover, radius: 0),
                  ),
                  const SizedBox(
                    height: 40,
                  ),
                  Align(
                    child: Column(
                      children: [
                        SizedBox(
                            height: 50,
                            width: size.width,
                            child: Form(
                              key: formKey,
                              child: TextFieldWidget(
                                controller: controller,
                                obscureText: true,
                                labelText: 'رمز عبور حساب فعلی',
                                borderSideColor: SolidColors.black,
                              ),
                            )),
                        const SizedBox(
                          height: 30,
                        ),
                        Align(
                          alignment: Alignment.center,
                          child: Row(
                            children: [
                              Expanded(
                                child: 'ذخیره'
                                    .toText(
                                        color: SolidColors.white, fontSize: 20)
                                    .toSymmetric(V: 10.0)
                                    .toClick(
                                        onTap: () {
                                          if (formKey.currentState
                                                  ?.validate() ??
                                              false) {
                                            context
                                                .read<SettingsCubit>()
                                                .enableFingerprint(
                                                    context
                                                        .read<UserCubit>()
                                                        .state
                                                        .email,
                                                    controller.text);
                                            Navigator.pop(context);
                                          }
                                        },
                                        isOption: true),
                              ),
                              const SizedBox(
                                width: 20,
                              ),
                              Expanded(
                                child: 'لغو'
                                    .toText(
                                        color: SolidColors.blue, fontSize: 20)
                                    .toSymmetric(V: 10.0)
                                    .toClickOutline(
                                  onTap: () {
                                    Navigator.pop(context);
                                  },
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ).toSymmetric(H: 10.0)
                ],
              ),
            ),
          ),
        );
      }));
}
