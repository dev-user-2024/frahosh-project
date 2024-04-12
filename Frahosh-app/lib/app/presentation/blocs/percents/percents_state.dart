part of 'percents_cubit.dart';

@immutable
abstract class PercentsState {
  final double corr;
  final double incorr;
  final double empty;
  final bool negative;

  const PercentsState(this.corr, this.incorr, this.empty, this.negative);

  double get allQ => corr + incorr + empty;
  double get percent => (corr - (negative ? incorr : 0)) / (max(allQ, 1));
}

class PercentsInitial extends PercentsState {
  const PercentsInitial() : super(0, 0, 0, false);
}

class PercentsGeneral extends PercentsState {
  const PercentsGeneral(super.corr, super.incorr, super.empty, super.negative);
}
