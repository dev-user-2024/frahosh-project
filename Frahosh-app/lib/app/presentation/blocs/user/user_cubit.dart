import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/modules/encryption.dart';
import 'package:meta/meta.dart';
import 'package:restart_app/restart_app.dart';

part 'user_state.dart';

class UserCubit extends Cubit<UserState> {
  UserCubit() : super(const UserInitial());

  void updateUserData(Map map) => emit(UserGeneral.fromMap(map));

  void logout() {
    if (state is UserGeneral) {
      emit(const UserInitial());
      API.logout().then((value) {
        ENC.deleteTokenData().then((value) => Restart.restartApp());
      });
    }
  }
}
