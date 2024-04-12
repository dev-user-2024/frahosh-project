part of 'differentiation_cubit.dart';

@immutable
abstract class DifferentiationState {
  final String exp;

  const DifferentiationState(this.exp);
}

class DifferentiationGeneral extends DifferentiationState {
  const DifferentiationGeneral(super.exp);
}

class DifferentiationInitial extends DifferentiationGeneral {
  const DifferentiationInitial() : super('');
}

class DifferentiationWithResult extends DifferentiationState {
  final String resultForX;
  final String resultForY;
  final String resultForZ;
  const DifferentiationWithResult(
      super.exp, this.resultForX, this.resultForY, this.resultForZ);
}
