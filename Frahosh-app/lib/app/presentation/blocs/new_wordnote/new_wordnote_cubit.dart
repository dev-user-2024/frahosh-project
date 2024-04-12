import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import '../../../api.dart';

part 'new_wordnote_state.dart';

class NewWordnoteCubit extends Cubit<NewWordnoteState> {
  NewWordnoteCubit() : super(NewWordnoteInitial());

  Future<bool?> addWordnote(
      String english, String mean, String exEng, String exMean) async {
    if (state is! NewWordnoteLoading) {
      emit(NewWordnoteLoading());
      try {
        await API.addWordnote(english, mean, exEng, exMean);
        return true;
      } catch (_) {
        emit(NewWordnoteInitial());
        return false;
      }
    }
    return null;
  }
}
