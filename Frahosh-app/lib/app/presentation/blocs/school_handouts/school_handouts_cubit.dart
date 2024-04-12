import 'dart:collection';
import 'dart:math';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

import '../handout.dart';

part 'school_handouts_state.dart';

class SchoolHandoutsCubit extends Cubit<SchoolHandoutsState> {
  SchoolHandoutsCubit() : super(SchoolHandoutsLoading()) {
    _load();
  }

  void _load() {
    if (state is! SchoolHandoutsLoading) {
      emit(SchoolHandoutsLoading());
    }
    API.schoolHandouts().then((value) {
      emit(SchoolHandoutsGeneral((value.data?['data'] as List)
          .map((e) => HandoutObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(SchoolHandoutsError());
    });
  }
}
