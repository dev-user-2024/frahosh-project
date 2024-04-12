import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'leitner_box_state.dart';

class LeitnerBoxCubit extends Cubit<LeitnerBoxState> {
  LeitnerBoxCubit() : super(LeitnerBoxesLoading()) {
    _load();
  }

  void _load() {
    if (state is! LeitnerBoxesLoading) {
      emit(LeitnerBoxesLoading());
    }
    API.leitnerBoxes().then((value) {
      emit(LeitnerBoxesGeneral(((value.data?['data'] as List)
          .map<LeitnerBoxObject>((e) => LeitnerBoxObject.fromMap(e))
          .toList())));
    }).catchError((_) {
      emit(LeitnerBoxesError());
    });
  }

  void addBox(String title) {
    API.addLeitnerBox(title).then((value) {
      _load();
    }).catchError((_) {});
  }
}

class LeitnerBoxObject {
  final String id;
  final String title;

  LeitnerBoxObject.fromMap(Map map)
      : id = map['id'].toString(),
        title = map['title_leitner'].toString();
}
