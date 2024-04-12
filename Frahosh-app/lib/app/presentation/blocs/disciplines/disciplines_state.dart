part of 'disciplines_cubit.dart';

@immutable
abstract class DisciplinesState {}

class DisciplinesLoading extends DisciplinesState {}

class DisciplinesError extends DisciplinesState {}

class DisciplinesGeneral extends DisciplinesState {
  final UnmodifiableListView<DisciplineObject> objects;
  DisciplinesGeneral(List<DisciplineObject> list)
      : objects = UnmodifiableListView(list);
}
