import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

part 'test_groups_state.dart';

class TestGroupsCubit extends Cubit<TestGroupsState> {
  TestGroupsCubit() : super(TestGroupsLoading()) {
    load();
  }
  void load() {
    API.testGroups().then((value) {
      emit(TestGroupsGeneral((value.data?['data'] as List)
          .map((e) => TestGroupObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(TestGroupsError());
    });
  }
}

class TestGroupObject {
  final String id;
  final String title;
  final String date;
  final String status;
  final String time;
  final String duration;
  final bool negativeGrade;

  TestGroupObject.fromMap(Map map)
      : id = map['test_id'].toString(),
        title = map['title_test'].toString(),
        date = map['date_register'].toString(),
        status = map['status'].toString(),
        time = map['time_test'].toString(),
        duration = map['test_duration'].toString(),
        negativeGrade = map['negative_point'].toString() != '0';

  String get formattedDate => dateFormat(date);
}
