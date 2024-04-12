import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

part 'survey_groups_state.dart';

class SurveyGroupsCubit extends Cubit<SurveyGroupsState> {
  SurveyGroupsCubit() : super(SurveyGroupsLoading()) {
    _load();
  }
  void _load() {
    API.surveyGroups().then((value) {
      emit(SurveyGroupsGeneral((value.data?['data'] as List)
          .map((e) => SurveyGroupObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(SurveyGroupsError());
    });
  }
}

class SurveyGroupObject {
  final String id;
  final String title;
  final String date;

  SurveyGroupObject.fromMap(Map map)
      : id = map['id'].toString(),
        title = map['title_group'].toString(),
        date = map['date_group'].toString().replaceAll('-', '/');

  String get formattedDate => dateFormat(date);
}
