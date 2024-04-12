import 'package:farahoosh/app/presentation/screens/setting/fingerprint_dialog/bottom_sheet.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../router/const.dart';
import '../../router/packages.dart';
import '../../router/screens.dart';
import 'chooseColor/chooseColor.dart';
import '../../router/extension.dart';

class SettingScreen extends StatelessWidget {
  const SettingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: Column(
        children: [
          toVerticalSpaces,
          Align(
            alignment: Alignment.topRight,
            child: Text(
              "انتخاب اندازه متن",
              style: textTheme.subtitle1,
            ),
          ),
          toVerticalSpaces,
          toVerticalSpaces,
          Align(
            child: BlocBuilder<SettingsCubit, SettingsState>(
              buildWhen: (previous, current) =>
                  previous.textSizeProgess != current.textSizeProgess,
              builder: (context, state) => toProgressor(
                progres: state.textSizeProgess,
                color:
                    context.watch<SettingsCubit>().state.selectedPrimaryColor,
              ),
            ),
          ),
          Align(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Align(
                  alignment: Alignment.topRight,
                  child: Text(
                    "بزرگ",
                    style: textTheme.subtitle1,
                  ),
                ),
                Align(
                  alignment: Alignment.topRight,
                  child: Text(
                    "متوسط",
                    style: textTheme.subtitle1,
                  ),
                ),
                Align(
                  alignment: Alignment.topRight,
                  child: Text(
                    "کوچک",
                    style: textTheme.subtitle1,
                  ),
                ),
              ],
            ).toOnly(T: 12.0),
          ),
          toVerticalSpaces,
          toDivider(
            color: context.watch<SettingsCubit>().state.selectedPrimaryColor,
          ),
          toVerticalSpaces,
          Align(
            alignment: Alignment.topRight,
            child: Text(
              "صدا واعلان",
              style: textTheme.headline1,
            ),
          ),
          toVerticalSpaces,
          toVerticalSpaces,
          Align(
              alignment: Alignment.centerRight,
              child: BlocBuilder<SettingsCubit, SettingsState>(
                buildWhen: (previous, current) => previous.mute != current.mute,
                builder: (context, state) => toCheckBox(
                    title: 'اعلان‌های برنامه بی صدا شود.',
                    isActive: state.mute,
                    onTap: () {
                      context.read<SettingsCubit>().toggleMute();
                    },
                    context: context),
              )),
          toVerticalSpaces,
          Align(
              alignment: Alignment.centerRight,
              child: BlocBuilder<SettingsCubit, SettingsState>(
                buildWhen: (previous, current) =>
                    previous.noNotifications != current.noNotifications,
                builder: (context, state) => toCheckBox(
                    title: 'اعلان‌های برنامه نمایش داده نشود.',
                    isActive: state.noNotifications,
                    onTap: () {
                      context.read<SettingsCubit>().toggleNoNotifications();
                    },
                    context: context),
              )),
          toVerticalSpaces,
          toVerticalSpaces,
          toDivider(
            color: context.watch<SettingsCubit>().state.selectedPrimaryColor,
          ),
          toVerticalSpaces,
          Align(
            alignment: Alignment.topRight,
            child: Text(
              'تعیین حالت نمایش',
              style: textTheme.headline1,
            ),
          ),
          toVerticalSpaces,
          toVerticalSpaces,
          Align(
              alignment: Alignment.centerRight,
              child: BlocBuilder<SettingsCubit, SettingsState>(
                buildWhen: (previous, current) =>
                    previous.darkMode != current.darkMode,
                builder: (context, state) => toCheckBox(
                    title: 'حالت تاریک',
                    isActive: state.darkMode,
                    onTap: () {
                      context.read<SettingsCubit>().toggleDarkMode();
                    },
                    context: context),
              )),
          toVerticalSpaces,
          toVerticalSpaces,
          Align(
            alignment: Alignment.centerRight,
            child: Row(
              children: [
                Text(
                  "انتخاب رنگ پوسته",
                  style: textTheme.bodyText1,
                ),
                const SizedBox(
                  width: 10,
                ),
                DataImages.arrowLeftIos.toPNGImage(size: 6),
              ],
            ).toClick(onTap: (() {
              Navigator.of(context).push(MaterialPageRoute(
                  builder: ((context) => const ChooseColor())));
            })),
          ),
          toVerticalSpaces,
          toVerticalSpaces,
          toDivider(
            color: context.watch<SettingsCubit>().state.selectedPrimaryColor,
          ),
          toVerticalSpaces,
          Align(
            alignment: Alignment.topRight,
            child: Text(
              'تعیین احرازهویت بخش‌های برنامه',
              style: textTheme.headline1,
            ),
          ),
          toVerticalSpaces,
          toVerticalSpaces,
          Align(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                SizedBox(
                  width: size.width / 4,
                  child: BlocBuilder<SettingsCubit, SettingsState>(
                      buildWhen: (previous, current) =>
                          previous.fingerprintEnabled !=
                          current.fingerprintEnabled,
                      builder: (context, state) => toSessionApp(
                          title: 'اثر انگشت',
                          hasIcon: false,
                          enabled: state.fingerprintEnabled,
                          onTap: () {
                            if (state.fingerprintEnabled) {
                              context
                                  .read<SettingsCubit>()
                                  .disableFingerprint();
                            } else {
                              showFingerprintBottomSheet(
                                  context, size, textTheme);
                            }
                            // SettingFingerPrintScreenBottomSheet(
                            //     context, size, textTheme);
                          })),
                ),
                SizedBox(
                  width: size.width / 3,
                  child: toSessionApp(
                      title: 'تشخیص چهره',
                      enabled: false,
                      hasIcon: false,
                      onTap: () {}),
                ),
                SizedBox(
                  width: size.width / 4,
                  child: toSessionApp(
                      title: 'رمز',
                      color: context
                          .watch<SettingsCubit>()
                          .state
                          .selectedPrimaryColor,
                      enabled: true,
                      onTap: () {
                        ChangePasswordScreenBottomSheet(
                            context, size, textTheme);
                      }),
                ),
              ],
            ),
          )
        ],
      ).toSymmetric(H: 20.0),
    );
  }
}
