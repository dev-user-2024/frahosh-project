import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';
import 'package:shamsi_date/shamsi_date.dart';

part 'homeworks_state.dart';

class HomeworksCubit extends Cubit<HomeworksState> {
  HomeworksCubit() : super(HomeworksLoading()) {
    _load();
  }

  void _load() {
    API.homeworks().then((value) {
      emit(HomeworksGeneral((value.data?['data'] as List)
          .map((e) => HomeworkObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(HomeworksError());
    });
  }
}

class HomeworkObject {
  final String id;
  final String startDate;
  final String expireDate;
  final String title;

  HomeworkObject.fromMap(Map map)
      : id = map[''].toString(),
        startDate = map['question_homework'].toString(),
        title = map['title_homeword'].toString(),
        expireDate = map['expired_date'].toString();

  double get percent {
    try {
      final qList = startDate.split('/').map((e) => int.parse(e)).toList();
      final eList = expireDate.split('/').map((e) => int.parse(e)).toList();

      final daysToQ =
          Jalali.now().distanceTo(Jalali(qList[0], qList[1], qList[2]));
      final daysTo =
          Jalali.now().distanceTo(Jalali(eList[0], eList[1], eList[2]));
      final avaDays = Jalali(qList[0], qList[1], qList[2])
          .distanceTo(Jalali(eList[0], eList[1], eList[2]));

      if (daysToQ > 0) {
        return 0;
      }
      if (avaDays < 1) {
        return 1;
      }
      return (avaDays - daysTo) / avaDays;
    } catch (_) {
      return 1;
    }
  }
}
