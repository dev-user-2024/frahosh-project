import 'package:farahoosh/app/presentation/blocs/settings/settings_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/signup/signup_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/routepage.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';
import '../../modules/widgets/linePath.dart';
import '../../../../gen/assets.gen.dart';

class Signup extends StatelessWidget {
  final SignupCubit _signupCubit = SignupCubit();

  final GlobalKey<FormState> _formKey = GlobalKey();

  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _lastNameController = TextEditingController();
  final TextEditingController _nationalIDController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();

  Signup({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        resizeToAvoidBottomInset: false,
        backgroundColor: SolidColors.backgroundColor,
        body: Form(
          key: _formKey,
          child: Column(
            children: [
              // top
              SizedBox(
                width: 428,
                height: 236,
                child: Stack(
                  children: [
                    ClipPath(
                      clipper: LinePathLogin(),
                      child: Container(
                        width: size.width,
                        height: size.height,
                        decoration: const BoxDecoration(
                          gradient: LinearGradient(
                            colors: GradiantColors.gradiendOnboarding,
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 0),
                      child: Center(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          children: [
                            Image.asset(
                              Assets.images.logo.path,
                              scale: 2,
                            ),
                            Text(
                              "ایجاد حساب کاربری",
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                      ),
                    )
                  ],
                ),
              ),

              // main
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Container(
                        width: size.width,
                        // height: size.height/1.6,
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: Column(
                          children: [
                            SizedBox(
                              height: size.height / 60,
                            ),
                            SizedBox(
                                width: size.width,
                                child: TextFieldWidget(
                                  controller: _firstNameController,
                                  labelText: "نام",
                                  borderSideColor: SolidColors.black,
                                )),
                            SizedBox(
                              height: size.height / 42,
                            ),
                            SizedBox(
                                width: size.width,
                                child: TextFieldWidget(
                                  labelText: "نام خانوادگی",
                                  controller: _lastNameController,
                                  borderSideColor: SolidColors.black,
                                )),
                            SizedBox(
                              height: size.height / 42,
                            ),
                            SizedBox(
                                width: size.width,
                                child: TextFieldWidget(
                                  labelText: "کد ملی",
                                  controller: _nationalIDController,
                                  validator: (value) => RegExp(r'[0-9]{10}')
                                          .hasMatch(value.toString())
                                      ? null
                                      : 'فرمت کد ملی اشتباه است',
                                  borderSideColor: SolidColors.black,
                                )),
                            SizedBox(
                              height: size.height / 42,
                            ),
                            SizedBox(
                                width: size.width,
                                child: TextFieldWidget(
                                  labelText: "کلمه عبور",
                                  obscureText: true,
                                  controller: _passwordController,
                                  validator: (value) => RegExp(
                                              r'(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
                                          .hasMatch(value.toString())
                                      ? null
                                      : 'پسوورد باید شامل حرف بزرگ و کوچک انگلیسی و عدد و کاراکتر خاص باشد',
                                  borderSideColor: SolidColors.black,
                                )),
                            SizedBox(
                              height: size.height / 42,
                            ),
                            SizedBox(
                                width: size.width,
                                child: TextFieldWidget(
                                  labelText: "آدرس ایمیل",
                                  controller: _emailController,
                                  borderSideColor: SolidColors.black,
                                  validator: (value) =>
                                      RegExp(r'[\w-\.]+@([\w-]+\.)+[\w-]{2,4}')
                                              .hasMatch(value.toString())
                                          ? null
                                          : 'فرمت ایمیل اشتباه است',
                                )),
                            SizedBox(
                              height: size.height / 30,
                            ),
                            "ایجاد حساب"
                                .toText(
                                    color: SolidColors.white,
                                    fontWeight: FontWeight.bold)
                                .toSymmetric(V: 14)
                                .toClick(
                                    onTap: () {
                                      if (_formKey.currentState?.validate() ??
                                          false) {
                                        _signupCubit.signup(
                                            context,
                                            _firstNameController.text,
                                            _lastNameController.text,
                                            _nationalIDController.text,
                                            _passwordController.text,
                                            _emailController.text);
                                      }

                                      // showReceiveCodePageBottomSheet(
                                      //     context, size, textTheme);
                                    },
                                    isOption: true)
                                .toSymmetric(),
                          ],
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.only(bottom: size.height / 100),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "حساب کاربری داری؟",
                                style: textTheme.bodyText1,
                              ),
                              const SizedBox(
                                width: 6,
                              ),
                              InkWell(
                                onTap: () {
                                  Navigator.of(context)
                                      .pushReplacementNamed(RouterPage.login);
                                },
                                child:  Text(
                                  "بزن بریم",
                                  style: TextStyle(color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
