part of 'test_analysis_cubit.dart';

@immutable
abstract class TestAnalysisState {}

class TestAnalysisLoading extends TestAnalysisState {}

class TestAnalysisError extends TestAnalysisState {}

class TestAnalysisGeneral extends TestAnalysisState {
  final UnmodifiableListView<TestAnalysisObject> objects;
  TestAnalysisGeneral(List<TestAnalysisObject> objects)
      : objects = UnmodifiableListView(objects);

  Map<String, UnmodifiableListView<TestAnalysisObject>> get cats {
    final Map<String, List<TestAnalysisObject>> map = {};
    for (var i in objects) {
      map[i.period] = [...map[i.period] ?? [], i];
    }
    return map.map((key, value) => MapEntry(key, UnmodifiableListView(value)));
  }
}
