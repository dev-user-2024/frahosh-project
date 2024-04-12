import 'package:bloc/bloc.dart';
import 'package:math_expressions/math_expressions.dart';
import 'package:meta/meta.dart';

part 'differentiation_state.dart';

class DifferentiationCubit extends Cubit<DifferentiationState> {
  DifferentiationCubit() : super(const DifferentiationInitial());

  Parser p = Parser();

  void addToExp(String exp) {
    emit(DifferentiationGeneral('${state.exp}$exp'));
  }

  void backspace() {
    if (state.exp.isNotEmpty) {
      emit(
          DifferentiationGeneral(state.exp.substring(0, state.exp.length - 1)));
    }
  }

  void clear() {
    emit(const DifferentiationInitial());
  }

  void btnClicked() {
    if (state.exp.isNotEmpty) {
      try {
        Expression expression = p.parse(state.exp);
        emit(DifferentiationWithResult(
          state.exp,
          expression.derive('x').simplify().toString(),
          expression.derive('y').simplify().toString(),
          expression.derive('z').simplify().toString(),
        ));
      } catch (_) {
        emit(DifferentiationWithResult(state.exp, 'error', 'error', 'error'));
      }
    }
  }
}
