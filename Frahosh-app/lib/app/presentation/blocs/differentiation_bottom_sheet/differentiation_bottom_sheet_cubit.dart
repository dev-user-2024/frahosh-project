import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'differentiation_bottom_sheet_state.dart';

class DifferentiationBottomSheetCubit
    extends Cubit<DifferentiationBottomSheetState> {
  DifferentiationBottomSheetCubit()
      : super(const DifferentiationBottomSheetInitial());

  void toPlusMinesMode() {
    if (state.abType) {
      emit(const DifferentiationBottomSheetGeneral(false, false));
    }
  }

  void toAbMode() {
    if (!state.abType) {
      emit(const DifferentiationBottomSheetGeneral(true, false));
    }
  }

  void toggleUpperCase() {
    emit(DifferentiationBottomSheetGeneral(true, !state.upCase));
  }
}
