part of 'school_handouts_cubit.dart';

@immutable
abstract class SchoolHandoutsState {}

class SchoolHandoutsLoading extends SchoolHandoutsState {}

class SchoolHandoutsError extends SchoolHandoutsState {}

class SchoolHandoutsGeneral extends SchoolHandoutsState {
  final UnmodifiableListView<HandoutObject> handouts;

  SchoolHandoutsGeneral(List<HandoutObject> handouts)
      : handouts = UnmodifiableListView(handouts);
}
