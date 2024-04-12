import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

part 'test_analysis_state.dart';

class TestAnalysisCubit extends Cubit<TestAnalysisState> {
  TestAnalysisCubit() : super(TestAnalysisLoading()) {
    load();
  }

  void load() {
    if (state is! TestAnalysisLoading) {
      emit(TestAnalysisLoading());
    }
    API.testAnalysisList().then((value) {
      emit(TestAnalysisGeneral((value.data?['data'] as List)
          .map((e) => TestAnalysisObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(TestAnalysisError());
    });
  }
}

class TestAnalysisObject {
  final String id;
  final String month;
  final String year;

  TestAnalysisObject.fromMap(Map map)
      : id = map['id'].toString(),
        month = map['month'].toString(),
        year = map['year'].toString();

  String get period {
    final y = int.tryParse(year) ?? 1400;
    final m = int.tryParse(month) ?? 1;
    if (m > 6) {
      return '$y-${y + 1}';
    }
    return '${y - 1}-$y';
  }
}
