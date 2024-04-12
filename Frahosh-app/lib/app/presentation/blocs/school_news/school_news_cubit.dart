import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

part 'school_news_state.dart';

class SchoolNewsCubit extends Cubit<SchoolNewsState> {
  SchoolNewsCubit() : super(SchoolNewsLoading()) {
    _load();
  }

  void _load() {
    API.schoolNews().then((value) {
      emit(SchoolNewsGeneral((value.data?['data'] as List)
          .map((e) => SchoolNewsObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(SchoolNewsError());
    });
  }
}

class SchoolNewsObject {
  final String title;
  final String date;
  final String shortDesc;
  final String desc;
  SchoolNewsObject.fromMap(Map map)
      : title = map['title_news'].toString(),
        date = map['date_register'].toString(),
        shortDesc = map['excerpt_news'].toString(),
        desc = map['content_news'].toString();

  String get formattedDate => dateFormat(date);
}
