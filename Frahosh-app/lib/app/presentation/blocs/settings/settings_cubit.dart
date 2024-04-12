import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/presentation/modules/encryption.dart';
import 'package:farahoosh/app/presentation/router/packages.dart';
import 'package:local_auth/local_auth.dart';

part 'settings_state.dart';

class SettingsCubit extends Cubit<SettingsState> {
  SettingsCubit() : super(const SettingsInitial());

  void updateSettingsFromStorage() => emit(SettingsGeneral(
        _getPrimaryColor(ENC.getFromBox('app_color')),
        double.tryParse(ENC.getFromBox('text_size_progress').toString()) ??
            state.textSizeProgess,
        ENC.getFromBox('mute') == 'true',
        ENC.getFromBox('no_notifications') == 'true',
        ENC.getFromBox('dark_mode') == 'true',
        ENC.getFromBox('fingerprint_en') == 'true',
        ENC.getFromBox('password_en') == 'true',
      ));

  AppPrimaryColor _getPrimaryColor(String? data) {
    switch (data) {
      case 'blue':
        return AppPrimaryColor.blue;
      case 'atom':
        return AppPrimaryColor.atom;
      case 'spring':
        return AppPrimaryColor.spring;
      case 'silver':
        return AppPrimaryColor.silver;
      case 'grass':
        return AppPrimaryColor.grass;
      case 'purple':
        return AppPrimaryColor.purple;
      case 'moonlight':
        return AppPrimaryColor.moonlight;
      case 'sunshine':
        return AppPrimaryColor.sunshine;
      default:
        return AppPrimaryColor.blue;
    }
  }

  set appColor(AppPrimaryColor color) {
    emit(state.copyWith(color: color));
    ENC.writeToBox('app_color', color.name);
  }

  set textSizeProgess(double data) {
    emit(state.copyWith(textSizeProgess: data));
    ENC.writeToBox('text_size_progress', data.toString());
  }

  void toggleMute() {
    final data = !state.mute;
    emit(state.copyWith(mute: data));
    ENC.writeToBox('mute', data.toString());
  }

  void toggleNoNotifications() {
    final data = !state.noNotifications;
    emit(state.copyWith(noNotifications: data));
    ENC.writeToBox('no_notifications', data.toString());
  }

  void toggleDarkMode() {
    final data = !state.darkMode;
    emit(state.copyWith(darkMode: data));
    ENC.writeToBox('dark_mode', data.toString());
  }

  void enableFingerprint(String email, String password) {
    if (!state.fingerprintEnabled) {
      ENC.localAuth('تایید اثرانگشت').then((value) {
        if (value) {
          ENC.saveFingerprintData(email, password).then((value) {
            emit(state.copyWith(fingerprintEnabled: true));
            ENC.writeToBox('fingerprint_en', true.toString());
          });
        }
      });
    }
  }

  void disableFingerprint() {
    if (state.fingerprintEnabled) {
      ENC.localAuth('تایید اثرانگشت').then((value) {
        if (value) {
          return ENC.deleteFingerData().then((_) {
            // dialog disabled
            emit(state.copyWith(fingerprintEnabled: false));
            ENC.writeToBox('fingerprint_en', false.toString());
          });
        }
      });
    }
  }

  void togglePassword() {
    final data = !state.passwordEnabled;
    emit(state.copyWith(passwordEnabled: data));
    ENC.writeToBox('password_en', data.toString());
  }
}

enum AppPrimaryColor {
  blue,
  atom,
  spring,
  silver,
  grass,
  purple,
  moonlight,
  sunshine
}
