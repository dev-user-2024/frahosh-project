import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';
import 'package:shamsi_date/shamsi_date.dart';

part 'new_test_analysis_state.dart';

class NewTestAnalysisCubit extends Cubit<NewTestAnalysisState> {
  NewTestAnalysisCubit() : super(NewTestAnalysisInitial());

  void addFile(String path) {
    emit(NewTestAnalysisWithFile(path, state.month));
  }

  void changeMonth(String month) {
    if (state is NewTestAnalysisWithFile) {
      emit(NewTestAnalysisWithFile(
          (state as NewTestAnalysisWithFile).filePath, month));
    } else if (state is NewTestAnalysisWithoutFile) {
      emit(NewTestAnalysisWithoutFile(month));
    }
  }

  Future<bool?> uploadTestAnalysis(String descryption) async {
    if (state is NewTestAnalysisWithFile) {
      final path = (state as NewTestAnalysisWithFile).filePath;
      emit(NewTestAnalysisLoading(state.month));
      try {
        await API.uploadTestAnalysis(descryption, getMonthNumber(state.month),
            filePath: path);
        return true;
      } catch (_) {
        print(_);
        emit(NewTestAnalysisWithFile(path, state.month));
        return false;
      }
    }
    return null;
  }
}
