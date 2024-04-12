part of 'faracoin_guide_cubit.dart';

@immutable
abstract class FaracoinGuideState {}

class FaracoinGuideGeneral extends FaracoinGuideState {
  final String videoLink;
  final String text;

  FaracoinGuideGeneral(this.videoLink, this.text);
}

class FaracoinGuideLoading extends FaracoinGuideState {}

class FaracoinGuideError extends FaracoinGuideState {}
