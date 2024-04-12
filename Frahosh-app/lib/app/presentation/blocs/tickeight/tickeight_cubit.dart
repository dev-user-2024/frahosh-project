import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import 'dart:collection';

import '../../../api.dart';

part 'tickeight_state.dart';

class TickeightCubit extends Cubit<TickeightState> {
  final String _id;
  TickeightCubit(this._id) : super(TickeightLoading()) {
    load();
  }

  String get id => _id;

  void load() {
    if (state is! TickeightLoading) {
      emit(TickeightLoading());
    }
    API.tickeight(_id).then((value) {
      emit(TickeightGeneral(
          (value.data?['data'] as List)
              .map((e) => TickeightObject.fromMap(e))
              .toList(),
          0,
          List<bool?>.filled(8, null)));
    }).catchError((_) {
      emit(TickeightError());
    });
  }

  void next() {
    if ((state as TickeightGeneral).selectedIndex <
        (state as TickeightGeneral).tickeights.length - 1) {
      emit(TickeightGeneral(
          (state as TickeightGeneral).tickeights,
          (state as TickeightGeneral).selectedIndex + 1,
          List<bool?>.filled(8, null)));
    }
  }

  void toggleWord() {
    if ((state as TickeightGeneral).stages.last == null) {
      emit(TickeightGeneral(
          (state as TickeightGeneral).tickeights,
          (state as TickeightGeneral).selectedIndex,
          (state as TickeightGeneral).stages,
          showEng: !(state as TickeightGeneral).showEng));
    }
  }

  void check(bool checkRes) {
    if ((state as TickeightGeneral).stages.last == null) {
      final st = [...(state as TickeightGeneral).stages];
      for (var i = 0; i < 8; i++) {
        if (st[i] == null) {
          st[i] = checkRes;
          break;
        }
      }
      emit(TickeightGeneral((state as TickeightGeneral).tickeights,
          (state as TickeightGeneral).selectedIndex, st));
    }
  }

  void pre() {
    if ((state as TickeightGeneral).selectedIndex != 0) {
      emit(TickeightGeneral(
          (state as TickeightGeneral).tickeights,
          (state as TickeightGeneral).selectedIndex - 1,
          List<bool?>.filled(8, null)));
    }
  }
}

class TickeightObject {
  final String id;
  final String eng;
  final String per;

  TickeightObject.fromMap(Map map)
      : id = map['id'].toString(),
        eng = map['word_english'].toString(),
        per = map['mean_word'].toString();
}
