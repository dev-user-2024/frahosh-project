part of 'differentiation_bottom_sheet_cubit.dart';

@immutable
abstract class DifferentiationBottomSheetState {
  final bool abType;
  final bool upCase;

  const DifferentiationBottomSheetState(this.abType, this.upCase);

  String trueExp(String exp) => abType
      ? upCase
          ? exp.toUpperCase()
          : exp
      : exp;
}

class DifferentiationBottomSheetGeneral
    extends DifferentiationBottomSheetState {
  const DifferentiationBottomSheetGeneral(super.abType, super.upCase);
}

class DifferentiationBottomSheetInitial
    extends DifferentiationBottomSheetGeneral {
  const DifferentiationBottomSheetInitial() : super(true, false);
}
