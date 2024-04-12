import 'dart:collection';
import 'dart:math';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

import '../handout.dart';

part 'my_handouts_state.dart';

class MyHandoutsCubit extends Cubit<MyHandoutsState> {
  MyHandoutsCubit() : super(MyHandoutsLoading()) {
    load();
  }

  void load() {
    if (state is! MyHandoutsLoading) {
      emit(MyHandoutsLoading());
    }
    API.myHandouts().then((value) {
      emit(MyHandoutsGeneral((value.data?['data'] as List)
          .map((e) => HandoutObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(MyHandoutsError());
    });
  }
}
