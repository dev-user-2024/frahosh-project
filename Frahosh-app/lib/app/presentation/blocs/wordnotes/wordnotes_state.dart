part of 'wordnotes_cubit.dart';

@immutable
abstract class WordnotesState {}

class WordnotesLoading extends WordnotesState {}

class WordnotesGeneral extends WordnotesState {
  final UnmodifiableListView<WordnoteObject> wordnotes;
  WordnotesGeneral(List<WordnoteObject> wordnotes)
      : wordnotes = UnmodifiableListView(wordnotes);
}

class WordnotesError extends WordnotesState {}
