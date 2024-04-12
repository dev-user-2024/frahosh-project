part of 'login_cubit.dart';

@immutable
abstract class LoginState {
  final bool remember;
  const LoginState(this.remember);
}

class LoginInitial extends LoginState {
  const LoginInitial() : super(false);
}

class LoginGeneral extends LoginState {
  const LoginGeneral(super.remember);
}

class LoginLoading extends LoginState {
  const LoginLoading(super.remember);
}
