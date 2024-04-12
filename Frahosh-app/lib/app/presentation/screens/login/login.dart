import 'package:farahoosh/app/presentation/blocs/login/login_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/routepage.dart';
import 'package:farahoosh/app/presentation/modules/encryption.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/const/urlimages.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/linePath.dart';
import '../../../../gen/assets.gen.dart';


// userName: ebrahimi.mohammad56@gmail.com
// password: 123456

class Login extends StatelessWidget {
  final LoginCubit _loginCubit = LoginCubit();
  final GlobalKey<FormState> _formKey = GlobalKey();

  final TextEditingController _usernameController = TextEditingController()
    ..text = ENC.getFromBox('user_email') ?? '';
  final TextEditingController _passwordController = TextEditingController();

  Login({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        resizeToAvoidBottomInset: false,
        backgroundColor: SolidColors.backgroundColor,
        body: Form(
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
                              "ورود",
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
                    Container(
                      width: size.width,
                      height: size.height,
                      padding: const EdgeInsets.symmetric(horizontal: 36),
                      child: Form(
                        key: _formKey,
                        child: Column(
                          children: [
                            SizedBox(
                              height: size.height / 60,
                            ),
                            SizedBox(
                                width: size.width,
                                child: TextFieldWidget(
                                  validator: (value) =>
                                      RegExp(r'[\w-\.]+@([\w-]+\.)+[\w-]{2,4}')
                                              .hasMatch(value.toString())
                                          ? null
                                          : ' فرمت ایمیل اشتباه است',
                                  controller: _usernameController,
                                  borderSideColor: SolidColors.black,
                                  hintText: "نام کاربری",
                                  prefixIcon:
                                      // Image.asset(Assets.icons.man.path),
                                      const Icon(CupertinoIcons.person),
                                )),
                            SizedBox(
                              height: size.height / 30,
                            ),
                            SizedBox(
                                width: size.width,
                                child: TextFieldWidget(
                                  controller: _passwordController,
                                  validator: (value) =>
                                      value?.isNotEmpty ?? false
                                          ? null
                                          : 'کلمه عبور وارد نشده',
                                  borderSideColor: SolidColors.black,
                                  hintText: "رمز عبور",
                                  obscureText: true,
                                  prefixIcon:
                                      // Image.asset(Assets.icons.clock.path),
                                      const Icon(Icons.lock_outline),
                                )),
                            SizedBox(
                              height: size.height / 24,
                            ),
                            Align(
                              alignment: Alignment.centerRight,
                              child: BlocBuilder<LoginCubit, LoginState>(
                                bloc: _loginCubit,
                                buildWhen: (previous, current) =>
                                    previous.remember != current.remember,
                                builder: (context, state) => toCheckBox(
                                    title: 'مرا به خاطر بسپار',
                                    isActive: state.remember,
                                    onTap: _loginCubit.toggleRemember, context: context),
                              ),
                            ),
                            SizedBox(
                              height: size.height / 26,
                            ),
                            InkWell(
                              child: const ButtonWidget(
                                title: "ورود",
                                mainColor: true,
                              ),
                              onTap: () {
                                if (_formKey.currentState?.validate() ??
                                    false) {
                                  _loginCubit.login(
                                      context,
                                      _usernameController.text,
                                      _passwordController.text);
                                }
                              },
                            ),
                            SizedBox(
                              height: size.height / 28,
                            ),
                            const Center(
                              child: Text(
                                "رمزت رو فراموش کردی؟",
                                style: TextStyle(color: Colors.blue),
                              ),
                            ),
                            SizedBox(
                              height: size.height / 22,
                            ),
                            Center(
                              child: Image.asset(
                                Assets.images.line1.path,
                                scale: 0.1,
                              ),
                            ),
                            SizedBox(
                              height: size.height / 22,
                            ),
                            Center(
                              child: DataImages.fingerImage
                                  .toPNGImage(size: 40)
                                  .toClick(
                                      onTap: (() =>
                                          _loginCubit.fingerLogin(context))),
                            ),
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
                                "حساب کاربری نداری؟",
                                style: textTheme.bodyText1,
                              ),
                              const SizedBox(
                                width: 6,
                              ),
                              InkWell(
                                onTap: () {
                                  Navigator.of(context)
                                      .pushReplacementNamed(RouterPage.signup);
                                },
                                child:  Text(
                                  "بریم بسازیم",
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
