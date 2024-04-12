part of 'calculator_cubit.dart';

@immutable
abstract class CalculatorState {
  final CalType calType;
  const CalculatorState(this.calType);
}

class CalculatorGeneral extends CalculatorState {
  final String exp;
  final String result;
  const CalculatorGeneral(super.calType, this.exp, this.result);
}

class CalculatorInitial extends CalculatorGeneral {
  const CalculatorInitial(CalType calType) : super(calType, '', '0');
}

class CalculatorEqual extends CalculatorState {
  final String result;
  const CalculatorEqual(super.calType, this.result);
}

enum CalType { standard, advanced, variable }
