part of 'settings_cubit.dart';

@immutable
abstract class SettingsState {
  final AppPrimaryColor color;
  final double textSizeProgess;
  final bool mute;
  final bool noNotifications;
  final bool darkMode;
  final bool fingerprintEnabled;
  final bool passwordEnabled;

  const SettingsState(
      this.color,
      this.textSizeProgess,
      this.mute,
      this.noNotifications,
      this.darkMode,
      this.fingerprintEnabled,
      this.passwordEnabled);

  double get normalTextSize => textSizeProgess * 28;

  Color get selectedPrimaryColor {
    switch (color) {
      case AppPrimaryColor.blue:
        return const Color(0xff1f9af0);
      case AppPrimaryColor.atom:
        return const Color(0xffff9802);
      case AppPrimaryColor.spring:
        return const Color(0xfffe3f82);
      case AppPrimaryColor.silver:
        return const Color(0xff6b6b6b);
      case AppPrimaryColor.grass:
        return const Color(0xff12a863);
      case AppPrimaryColor.purple:
        return const Color(0xff6739b6);
      case AppPrimaryColor.moonlight:
        return const Color(0xff000653);
      case AppPrimaryColor.sunshine:
        return const Color(0xffffe93d);
    }
  }
}

class SettingsInitial extends SettingsState {
  const SettingsInitial()
      : super(AppPrimaryColor.blue, .5, true, false, false, false, false);
}

class SettingsGeneral extends SettingsState {
  const SettingsGeneral(
    super.color,
    super.textSizeProgess,
    super.mute,
    super.noNotifications,
    super.darkMode,
    super.fingerprintEnabled,
    super.passwordEnabled,
  );
}

extension on SettingsState {
  SettingsGeneral copyWith(
          {AppPrimaryColor? color,
          double? textSizeProgess,
          bool? mute,
          bool? noNotifications,
          bool? darkMode,
          bool? fingerprintEnabled,
          bool? passwordEnabled}) =>
      SettingsGeneral(
          color ?? this.color,
          textSizeProgess ?? this.textSizeProgess,
          mute ?? this.mute,
          noNotifications ?? this.noNotifications,
          darkMode ?? this.darkMode,
          fingerprintEnabled ?? this.fingerprintEnabled,
          passwordEnabled ?? this.passwordEnabled);
}
