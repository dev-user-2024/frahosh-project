import 'dart:async';
import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/presentation/router/packages.dart';

part 'chronometer_state.dart';

class ChronometerCubit extends Cubit<ChronometerState> {
  final TextEditingController hourController = TextEditingController();
  final TextEditingController minController = TextEditingController();
  final TextEditingController secController = TextEditingController();

  final TextEditingController hourControllerInput = TextEditingController();
  final TextEditingController minControllerInput = TextEditingController();
  final TextEditingController secControllerInput = TextEditingController();

  ChronometerCubit() : super(ChronometerInitial());

  Timer? _timer;
  
  //   ChornometrType _getPrimaryColor(String? data) {
  //   switch (data) {
  //     case 'Direct':
  //       return ChornometrType.Direct;
  //     case 'indirect':
  //       return ChornometrType.indirect;
  //   }
  // }

  void toggleStartAndStop() {
    if (state is ChronometerStoped) {
      emit(ChronometerRecording(
          state.second, state.minute, state.houre, state.records, true));
      _timer = Timer.periodic(
        const Duration(seconds: 1),
        (timer) {
          bool updateMin = false;
          bool updateHoure = false;
          final se = state.second + 1;
          var min = state.minute;
          updateMin = se == 60;
          if (updateMin) {
            min++;
            updateHoure = min == 60;
          }
          emit(ChronometerRecording(updateMin ? 0 : se, updateHoure ? 0 : min,
              state.houre, state.records, true));
        },
      );
    } else {
      _timer?.cancel();
      emit(ChronometerStoped.fromState(state));
    }
  }



  void toggleStartAndStopInput() {
    if (state is ChronometerStoped) {
      emit(ChronometerRecording(
          state.second, state.minute, state.houre, state.records, true));
      _timer = Timer.periodic(
        const Duration(seconds: 1),
        (timer) {
          bool updateMin = false;
          bool updateHoure = false;
          final se = state.second - 1;
          var min = state.minute;
          updateMin = se == 60;
          if (updateMin) {
            min++;
            updateHoure = min == 60;
          }
          emit(ChronometerRecording(updateMin ? 0 : se, updateHoure ? 0 : min,
              state.houre, state.records, true));
        },
      );
    } else {
      _timer?.cancel();
      emit(ChronometerStoped.fromState(state));
    }
  }

  void modeChanged(bool dire) {
    if (dire && !state.directive) {
      emit(ChronometerInitial());
    } else if (!dire && state.directive) {
      emit(ChronometerInitial(directive: false));
    }
  }

  void reset() {
    _timer?.cancel();
    emit(ChronometerInitial());
  }
}

enum ChornometrType {
  Direct,
  indirect,
}
