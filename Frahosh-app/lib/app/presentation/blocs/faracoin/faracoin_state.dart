part of 'faracoin_cubit.dart';

@immutable
abstract class FaracoinState {}

class FaracoinLoading extends FaracoinState {}

class FaracoinGeneral extends FaracoinState {
  final int balance;
  FaracoinGeneral(this.balance);

  String get formattedBalance => countFormat(balance);
}

class FaracoinInitial extends FaracoinGeneral {
  FaracoinInitial() : super(0);
}
