import 'package:farahoosh/app/presentation/blocs/navbar/navbar_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/settings/settings_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../router/packages.dart';
import '../../const/datacolors.dart';
import '../../const/urlimages.dart';

class NavBar extends StatelessWidget {
  const NavBar({
    Key? key,
    required this.size,
  }) : super(key: key);

  final Size size;

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<NavbarCubit, NavbarState>(
      builder: (context, state) => SizedBox(
        width: size.width,
        height: size.height,
        child: Stack(
          children: [
            // navbar format
            Positioned(
                bottom: -12,
                right: -20,
                left: -20,
                child: SizedBox(
                    width: size.width,
                    child: DataImages.nav.toJpgImage(
                        color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor))),

            Positioned(
              bottom: 38,
              child: SizedBox(
                width: size.width,
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 30),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      InkWell(
                        child: SizedBox(
                            width: 24,
                            height: 24,
                            child: DataImages.home_2.toJpgImage()),
                        onTap: () =>
                            context.read<NavbarCubit>().goToPage(context, 0),
                      ),
                      InkWell(
                        child: SizedBox(
                            width: 24,
                            height: 24,
                            child: DataImages.wallet.toJpgImage()),
                        onTap: () =>
                            context.read<NavbarCubit>().goToPage(context, 1),
                      ),
                      Container(),
                      InkWell(
                        child: SizedBox(
                            width: 24,
                            height: 24,
                            child: DataImages.setting.toJpgImage()),
                        onTap: () =>
                            context.read<NavbarCubit>().goToPage(context, 3),
                      ),
                      InkWell(
                        child: SizedBox(
                            width: 18,
                            height: 24,
                            child: DataImages.profile_2
                                .toJpgImage(boxFit: BoxFit.cover)),
                        onTap: () =>
                            context.read<NavbarCubit>().goToPage(context, 4),
                      ),
                    ],
                  ),
                ),
              ),
            ),

            // nav search button
            Positioned(
              bottom: 80,
              child: SizedBox(
                width: size.width,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    InkWell(
                      child: Container(
                        width: 60,
                        height: 60,
                        decoration: BoxDecoration(
                          color: context
                              .watch<SettingsCubit>()
                              .state
                              .selectedPrimaryColor,
                          borderRadius: BorderRadius.circular(100),
                        ),
                        child: Image.asset(
                          Assets.icons.searchIcon.path,
                          color: SolidColors.white,
                          scale: 1,
                        ),
                      ),
                      onTap: () =>
                          context.read<NavbarCubit>().goToPage(context, 2),
                    ),
                  ],
                ),
              ),
            ),

            // indicator
            Positioned(
              bottom: 0,
              child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 26),
                  width: size.width,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        margin: const EdgeInsets.only(left: 5),
                        height: 4,
                        width: 30,
                        decoration: BoxDecoration(
                          color:
                              state.activePage == 0 ? SolidColors.white : null,
                          borderRadius: const BorderRadius.only(
                            topRight: Radius.circular(20),
                            topLeft: Radius.circular(20),
                          ),
                          boxShadow: state.activePage == 0
                              ? [
                                  BoxShadow(
                                    color: SolidColors.white.withOpacity(0.2),
                                    spreadRadius: 15,
                                    blurRadius: 20,
                                    offset: const Offset(0, -18),
                                  ),
                                ]
                              : null,
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(right: 6),
                        height: 4,
                        width: 30,
                        decoration: BoxDecoration(
                          color:
                              state.activePage == 1 ? SolidColors.white : null,
                          borderRadius: const BorderRadius.only(
                            topRight: Radius.circular(20),
                            topLeft: Radius.circular(20),
                          ),
                          boxShadow: state.activePage == 1
                              ? [
                                  BoxShadow(
                                    color: SolidColors.white.withOpacity(0.2),
                                    spreadRadius: 15,
                                    blurRadius: 20,
                                    offset: const Offset(0, -18),
                                  ),
                                ]
                              : null,
                        ),
                      ),
                      Container(
                        height: 4,
                        width: 30,
                        decoration: BoxDecoration(
                          color:
                              state.activePage == 2 ? SolidColors.white : null,
                          borderRadius: const BorderRadius.only(
                            topRight: Radius.circular(20),
                            topLeft: Radius.circular(20),
                          ),
                          boxShadow: state.activePage == 2
                              ? [
                                  BoxShadow(
                                    color: SolidColors.white.withOpacity(0.2),
                                    spreadRadius: 15,
                                    blurRadius: 20,
                                    offset: const Offset(0, -18),
                                  ),
                                ]
                              : null,
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(left: 6),
                        height: 4,
                        width: 30,
                        decoration: BoxDecoration(
                          color:
                              state.activePage == 3 ? SolidColors.white : null,
                          borderRadius: const BorderRadius.only(
                            topRight: Radius.circular(20),
                            topLeft: Radius.circular(20),
                          ),
                          boxShadow: state.activePage == 3
                              ? [
                                  BoxShadow(
                                    color: SolidColors.white.withOpacity(0.2),
                                    spreadRadius: 15,
                                    blurRadius: 20,
                                    offset: const Offset(0, -18),
                                  ),
                                ]
                              : null,
                        ),
                      ),
                      Container(
                        height: 4,
                        width: 30,
                        decoration: BoxDecoration(
                          color:
                              state.activePage == 4 ? SolidColors.white : null,
                          borderRadius: const BorderRadius.only(
                            topRight: Radius.circular(20),
                            topLeft: Radius.circular(20),
                          ),
                          boxShadow: state.activePage == 4
                              ? [
                                  BoxShadow(
                                    color: SolidColors.white.withOpacity(0.2),
                                    spreadRadius: 15,
                                    blurRadius: 20,
                                    offset: const Offset(0, -18),
                                  ),
                                ]
                              : null,
                        ),
                      ),
                    ],
                  )),
            ),
          ],
        ),
      ),
    );
  }
}
