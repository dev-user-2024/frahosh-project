part of 'new_test_analysis_cubit.dart';

@immutable
abstract class NewTestAnalysisState {
  final String month;

  const NewTestAnalysisState(this.month);
}

class NewTestAnalysisLoading extends NewTestAnalysisState {
  const NewTestAnalysisLoading(super.month);
}

class NewTestAnalysisWithFile extends NewTestAnalysisState {
  final String filePath;

  const NewTestAnalysisWithFile(this.filePath, super.month);
}

class NewTestAnalysisWithoutFile extends NewTestAnalysisState {
  const NewTestAnalysisWithoutFile(super.month);
}

class NewTestAnalysisInitial extends NewTestAnalysisWithoutFile {
  NewTestAnalysisInitial() : super(getMonthName(Jalali.now().month));
}
