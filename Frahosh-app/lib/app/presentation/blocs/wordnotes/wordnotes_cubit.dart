import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/screens/word/wordnote.dart';
import 'package:meta/meta.dart';

part 'wordnotes_state.dart';

class WordnotesCubit extends Cubit<WordnotesState> {
  WordnotesCubit() : super(WordnotesLoading()) {
    load();
  }

  void load() {
    if (state is! WordnotesLoading) {
      emit(WordnotesLoading());
    }
    API.wordnotes().then((value) {
      emit(WordnotesGeneral((value.data?['data'] as List)
          .map((e) => WordnoteObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(WordnotesError());
    });
  }
}

class WordnoteObject {
  final String id;
  final String englishWord;

  WordnoteObject.fromMap(Map map)
      : id = map['id'].toString(),
        englishWord = map['word_english'].toString();
}
