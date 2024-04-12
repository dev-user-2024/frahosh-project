part of 'wordnote_cubit.dart';

@immutable
abstract class WordnoteState {}

class WordnoteLoading extends WordnoteState {}

class WordnoteError extends WordnoteState {}

class WordnoteGeneral extends WordnoteState {
  final String english;
  final String mean;
  final String exEng;
  final String exMean;
  WordnoteGeneral.fromMap(Map map)
      : english = map['word_english'].toString(),
        mean = map['mean_word'].toString(),
        exEng = map['example_english'].toString(),
        exMean = map['mean_example'].toString();
}
