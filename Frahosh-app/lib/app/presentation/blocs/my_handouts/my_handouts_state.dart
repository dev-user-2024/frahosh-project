part of 'my_handouts_cubit.dart';

@immutable
abstract class MyHandoutsState {}

class MyHandoutsLoading extends MyHandoutsState {}

class MyHandoutsError extends MyHandoutsState {}

class MyHandoutsGeneral extends MyHandoutsState {
  final UnmodifiableListView<HandoutObject> handouts;

  MyHandoutsGeneral(List<HandoutObject> handouts)
      : handouts = UnmodifiableListView(handouts);
}
