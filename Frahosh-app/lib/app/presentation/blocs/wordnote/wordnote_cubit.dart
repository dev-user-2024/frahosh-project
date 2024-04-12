import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'wordnote_state.dart';

class WordnoteCubit extends Cubit<WordnoteState> {
  final String _id;
  WordnoteCubit(this._id) : super(WordnoteLoading()) {
    _load();
  }
  void _load() {
    API.wordnote(_id).then((value) {
      emit(WordnoteGeneral.fromMap(value.data?['data'][0]));
    }).catchError((_) {
      emit(WordnoteError());
    });
  }
}
