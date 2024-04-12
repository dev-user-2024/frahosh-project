part of 'heart_writes_cubit.dart';

@immutable
abstract class HeartWritesState {}

class HeartWritesLoading extends HeartWritesState {}

class HeartWritesError extends HeartWritesState {}

class HeartWritesGeneral extends HeartWritesState {
  final UnmodifiableListView<HeartWriteGroupObject> heartWrites;
  HeartWritesGeneral(List<HeartWriteGroupObject> heartWrites)
      : heartWrites = UnmodifiableListView(heartWrites);
}
