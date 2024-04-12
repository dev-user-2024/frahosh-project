part of 'verify_cubit.dart';

@immutable
abstract class VerifyState {
  final String verifyCode;
  const VerifyState(this.verifyCode);
}

class VerifyGeneralState extends VerifyState {
  const VerifyGeneralState(super.verifyCode);
}

class VerifyInitial extends VerifyGeneralState {
  const VerifyInitial() : super('');
}
