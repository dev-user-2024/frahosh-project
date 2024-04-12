part of 'leitner_box_cubit.dart';

@immutable
abstract class LeitnerBoxState {}

class LeitnerBoxesGeneral extends LeitnerBoxState {
  final UnmodifiableListView<LeitnerBoxObject> leitnerBoxes;

  LeitnerBoxesGeneral(List<LeitnerBoxObject> leitnerBoxes)
      : leitnerBoxes = UnmodifiableListView(leitnerBoxes);
}

class LeitnerBoxesLoading extends LeitnerBoxState {}

class LeitnerBoxesError extends LeitnerBoxState {}
