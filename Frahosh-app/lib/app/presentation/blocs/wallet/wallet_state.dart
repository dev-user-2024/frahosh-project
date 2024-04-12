part of 'wallet_cubit.dart';

@immutable
abstract class WalletState {}

class WalletLoading extends WalletState {}

class WalletGeneral extends WalletState {
  final int balance;
  WalletGeneral(this.balance);

  String get formattedBalance => countFormat(balance);
}

class WalletInitial extends WalletGeneral {
  WalletInitial() : super(0);
}
