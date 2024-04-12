import 'package:bloc/bloc.dart';
import 'package:flutter/services.dart';
import 'package:math_expressions/math_expressions.dart';
import 'package:meta/meta.dart';

part 'calculator_state.dart';

class CalculatorCubit extends Cubit<CalculatorState> {
  CalculatorCubit() : super(const CalculatorInitial(CalType.standard));

  final Parser _parser = Parser();

  void changeType(CalType calType) {
    emit(CalculatorInitial(calType));
  }

  void addToExp(String exp) {
    if (state is CalculatorGeneral) {
      final newExp = '${(state as CalculatorGeneral).exp}$exp';
      emit(CalculatorGeneral(state.calType, newExp, _parse(newExp)));
    }
  }

  void clear() => emit(CalculatorInitial(state.calType));
  void removeLast() {
    if (state is CalculatorGeneral) {
      if ((state as CalculatorGeneral).exp.isNotEmpty) {
        final exp = (state as CalculatorGeneral).exp;
        final newExp = exp.substring(0, exp.length - 1);
        emit(CalculatorGeneral(state.calType, newExp, _parse(newExp)));
      }
    } else {
      clear();
    }
  }

  void equal() {
    if (state is CalculatorGeneral) {
      emit(CalculatorEqual(state.calType, (state as CalculatorGeneral).result));
    }
  }

// Parser buildParser() {
//     final builder = ExpressionBuilder();
//     builder.group()
//       ..primitive((pattern('+-').optional() &
//               digit().plus() &
//               (char('.') & digit().plus()).optional() &
//               (pattern('eE') & pattern('+-').optional() & digit().plus())
//                   .optional())
//           .flatten('number expected')
//           .trim()
//           .map(num.tryParse))
//       ..wrapper(
//           char('(').trim(), char(')').trim(), (left, value, right) => value);
//     builder.group()..prefix(char('-').trim(), (op, a) => -a);
//     builder.group()..right(char('^').trim(), (a, op, b) => pow(a, b));
//     builder.group()
//       ..left(char('*').trim(), (a, op, b) => a * b)
//       ..left(char('/').trim(), (a, op, b) => a / b);
//     builder.group()
//       ..left(char('+').trim(), (a, op, b) => a + b)
//       ..left(char('-').trim(), (a, op, b) => a - b);
//     return builder.build().end();
//   }

//   double calcString(String text) {
//     final parser = buildParser();
//     final input = text;
//     final result = parser.parse(input);
//     if (result.isSuccess)
//       return result.value.toDouble();
//     else
//       return double.parse(text);
//   }

  String _parse(String exp) {
    try {
      return _parser
          .parse(exp)
          .evaluate(EvaluationType.REAL, ContextModel())
          .toString();
    } catch (_) {
      return 'error';
    }
  }
}
