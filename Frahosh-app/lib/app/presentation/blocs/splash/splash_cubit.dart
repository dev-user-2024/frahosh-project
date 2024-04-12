import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/faracoin/faracoin_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/intrest_podcasts/intrest_podcasts_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/settings/settings_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/user/user_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/wallet/wallet_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/routepage.dart';
import 'package:farahoosh/app/presentation/modules/encryption.dart';
import 'package:farahoosh/app/presentation/router/packages.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

part 'splash_state.dart';

class SplashCubit extends Cubit<SplashState> {
  SplashCubit() : super(SplashInitial());

  void _init(BuildContext context) {
    ENC.initBox().then((_) {
      context.read<SettingsCubit>().updateSettingsFromStorage();
      ENC.getToken().then((token) {
        if (token == null) {
          if (ENC.getFromBox('ft') == 'false') {
            _navigateToLogin(context);
          } else {
            _navigateToOnBoarding(context);
          }
        } else {
          API.profile(token: token).then((profileRes) {
            context
                .read<UserCubit>()
                .updateUserData(profileRes.data?['data'][0]);
            API.setToken(token);
            context.read<WalletCubit>().updateBalance();
            context.read<FaracoinCubit>().updateBalance();
            context.read<IntrestPodcastsCubit>().load();
            _navigateToMain(context);
          }).catchError((_) {
            _navigateToLogin(context);
          });
        }
      });
    });
  }

  void redirect(BuildContext context) {
    if (state is SplashInitial) {
      emit(SplashLoading());
      Connectivity connectivity = Connectivity();
      connectivity.checkConnectivity().then((value) {
        if (value == ConnectivityResult.none) {
          StreamSubscription? subscription;
          subscription = connectivity.onConnectivityChanged.listen(
            (event) {
              _init(context);
            },
            onDone: () {
              subscription?.cancel();
            },
          );
        } else {
          _init(context);
        }
      });
    }
  }

  void _navigateToOnBoarding(BuildContext context) =>
      Navigator.of(context).pushReplacementNamed(RouterPage.onBoarding_1);
  void _navigateToLogin(BuildContext context) =>
      Navigator.of(context).pushReplacementNamed(RouterPage.login);
  void _navigateToMain(BuildContext context) =>
      Navigator.of(context).pushReplacementNamed(RouterPage.main);
}
