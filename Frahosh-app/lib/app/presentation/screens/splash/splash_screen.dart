import 'package:farahoosh/app/presentation/blocs/splash/splash_cubit.dart';
import 'package:flutter/material.dart';
import '../../modules/const/datacolors.dart';
import '../../../../gen/assets.gen.dart';

class SplashScreen extends StatefulWidget {
  SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  final SplashCubit _cubit = SplashCubit();

  @override
  void initState() {
    super.initState();
    Future.delayed(
      const Duration(seconds: 1),
      () => _cubit.redirect(context),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      decoration: const BoxDecoration(
        //  borderRadius: BorderRadius.all(Radius.circular(24)),
        gradient: LinearGradient(
          colors: GradiantColors.gradiendOnboarding,
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
        ),
      ),
      child: Center(
        child: Image.asset(
          Assets.images.logo.path,
          scale: 1,
        ),
      ),
    ));
  }
}
