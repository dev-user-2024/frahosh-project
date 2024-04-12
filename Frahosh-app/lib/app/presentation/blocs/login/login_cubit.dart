import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/modules/const/routepage.dart';
import 'package:farahoosh/app/presentation/modules/encryption.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/router/packages.dart';
import 'package:meta/meta.dart';
import 'package:restart_app/restart_app.dart';

part 'login_state.dart';

class LoginCubit extends Cubit<LoginState> {
  LoginCubit() : super(const LoginInitial());

  void toggleRemember() {
    if (state is! LoginLoading) {
      emit(LoginGeneral(!state.remember));
    }
  }

  void login(BuildContext context, String email, String password,
      {bool autoLogin = false}) {
    if (state is! LoginLoading) {
      emit(LoginLoading(state.remember));
      API.login(email, password).then((value) {
        if (state.remember && !autoLogin) {
          ENC.writeToBox('user_email', email);
        }
        ENC.saveToken(value.data?['Access_Token']).then((value) {
          Restart.restartApp();
        });
      }).catchError((_) {
        emit(LoginGeneral(state.remember));
        showDialog(
          context: context,
          builder: (context) => Dialog(),
        );
      });
    }
  }

  void fingerLogin(BuildContext context) {
    if (state is! LoginLoading) {
      if (ENC.getFromBox('fingerprint_en') != 'true') {
        // fingerprint not enabled
        showDialog(
          context: context,
          builder: (context) => Dialog(),
        );
        return;
      }
      ENC.localAuth('ورود به حساب').then((auth) {
        if (auth) {
          ENC.getFingerData().then((value) {
            return login(
                context, value['email'].toString(), value['pass'].toString(),
                autoLogin: true);
          }).catchError((_) {
            // no data for finger
            showDialog(
              context: context,
              builder: (context) => Dialog(),
            );
          });
        }
      });
    }
  }
}
