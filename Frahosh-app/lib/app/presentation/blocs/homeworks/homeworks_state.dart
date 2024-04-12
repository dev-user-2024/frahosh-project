part of 'homeworks_cubit.dart';

@immutable
abstract class HomeworksState {}

class HomeworksLoading extends HomeworksState {}

class HomeworksError extends HomeworksState {}

class HomeworksGeneral extends HomeworksState {
  final UnmodifiableListView<HomeworkObject> homeworks;
  HomeworksGeneral(List<HomeworkObject> list)
      : homeworks = UnmodifiableListView(list);
}
