import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import '../../../api.dart';

part 'leitner_state.dart';

class LeitnerCubit extends Cubit<LeitnerState> {
  final String _id;
  LeitnerCubit(this._id) : super(LeitnerLoading()) {
    load();
  }

  String get id => _id;

  void load() {
    if (state is! LeitnerLoading) {
      emit(LeitnerLoading());
    }
    API.leitners(_id).then((value) {
      final v = (_split((value.data?['data'] as List))
          .entries
          .map<LeitnerObject>((e) => LeitnerObject.fromMap(e.key, e.value))
          .toList());
      emit(LeitnerGeneral(v, v.isEmpty ? null : 0));
    }).catchError((_) {
      emit(LeitnerError());
    });
  }

  void select(String id) {
    emit(LeitnerGeneral(
        (state as LeitnerGeneral).leitners,
        (state as LeitnerGeneral)
            .leitners
            .indexWhere((element) => element.id == id)));
  }

  Map<String, Map> _split(List list) {
    Map<String, Map>? finalRes = {};
    for (var i in list) {
      if (finalRes[i['leitner_id'].toString()] == null) {
        finalRes[i['leitner_id'].toString()] = {};
      }

      finalRes[i['leitner_id'].toString()]![i['position'].toString()] =
          i['title'].toString();
    }
    return finalRes;
  }
}

class LeitnerObject {
  final String id;
  final String front;
  final String back;

  LeitnerObject.fromMap(this.id, Map map)
      : front = map['front'].toString(),
        back = map['back'].toString();
}
