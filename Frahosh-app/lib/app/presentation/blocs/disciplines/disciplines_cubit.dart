import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

part 'disciplines_state.dart';

class DisciplinesCubit extends Cubit<DisciplinesState> {
  DisciplinesCubit() : super(DisciplinesLoading()) {
    _load();
  }

  void _load() {
    API.disciplines().then((value) {
      emit(DisciplinesGeneral((value.data?['data'] as List)
          .map((e) => DisciplineObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(DisciplinesError());
    });
  }
}

class DisciplineObject {
  final String title;
  final String date;
  final String desc;
  DisciplineObject.fromMap(Map map)
      : title = map['title_discipline'].toString(),
        date = map['date_discipline'].toString(),
        desc = map['description_discipline'].toString();

  String get formattedDate => dateFormat(date);
}
