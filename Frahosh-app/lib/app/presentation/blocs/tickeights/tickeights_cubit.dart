import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:meta/meta.dart';

import '../../../api.dart';

part 'tickeights_state.dart';

class TickeightsCubit extends Cubit<TickeightsState> {
  TickeightsCubit() : super(TickeightsLoading()) {
    _load();
  }

  void _load() {
    if (state is! TickeightsLoading) {
      emit(TickeightsLoading());
    }
    API.tickeights().then((value) {
      emit(TickeightsGeneral(((value.data?['data'] as List)
          .map<TickeightObject>((e) => TickeightObject.fromMap(e))
          .toList())));
    }).catchError((_) {
      emit(TickeightsError());
    });
  }

  void addBox(String title) {
    API.addTickeight(title).then((value) {
      _load();
    }).catchError((_) {});
  }
}

class TickeightObject {
  final String id;
  final String title;

  TickeightObject.fromMap(Map map)
      : id = map['id'].toString(),
        title = map['title_tickeight'].toString();
}
