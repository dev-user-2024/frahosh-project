import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'new_handout_state.dart';

class NewHandoutCubit extends Cubit<NewHandoutState> {
  NewHandoutCubit() : super(NewHandoutInitial());

  void addFile(String filePath) {
    if (state is! NewHandoutLoading) {
      emit(NewHandoutWithFile(filePath, state.selectedGrade));
    }
  }

  void setGrade(String grade) {
    if (state is! NewHandoutLoading) {
      if (state is NewHandoutWithFile) {
        emit(NewHandoutWithFile(
            (state as NewHandoutWithFile).filePath, int.tryParse(grade) ?? 0));
      } else {
        emit(NewHandoutWithoutFile(int.tryParse(grade) ?? 0));
      }
    }
  }

  Future<bool?> uploadHandout(String sitting, String lesson) async {
    if (state is NewHandoutWithFile) {
      final path = (state as NewHandoutWithFile).filePath;
      emit(NewHandoutLoading(state.selectedGrade));
      try {
        await API.uploadHandout(sitting, lesson, state.selectedGrade,
            filePath: path);
        return true;
      } catch (_) {
        emit(NewHandoutWithFile(path, state.selectedGrade));
        return false;
      }
    }
    return null;
  }
}
