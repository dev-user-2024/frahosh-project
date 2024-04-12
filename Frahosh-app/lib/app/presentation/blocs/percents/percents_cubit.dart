import 'dart:math';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/presentation/router/packages.dart';
import 'package:meta/meta.dart';

part 'percents_state.dart';

class PercentsCubit extends Cubit<PercentsState> {
  final TextEditingController correctsController = TextEditingController();
  final TextEditingController incorrectsController = TextEditingController();
  final TextEditingController emptiesController = TextEditingController();
  PercentsCubit() : super(const PercentsInitial());

  void toggleNegative() {
    emit(PercentsGeneral(
        state.corr, state.incorr, state.empty, !state.negative));
  }

  void update() {
    var cor = 0;
    var incor = 0;
    var emp = 0;

    try {
      cor = int.parse(correctsController.text);
    } catch (_) {
      cor = 0;
    }
    try {
      incor = int.parse(incorrectsController.text);
    } catch (_) {
      incor = 0;
    }
    try {
      emp = int.parse(emptiesController.text);
    } catch (_) {
      emp = 0;
    }

    emit(PercentsGeneral(
        cor.toDouble(), incor.toDouble(), emp.toDouble(), state.negative));
  }
}
