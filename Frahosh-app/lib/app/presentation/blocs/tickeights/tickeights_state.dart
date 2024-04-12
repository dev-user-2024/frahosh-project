part of 'tickeights_cubit.dart';

@immutable
abstract class TickeightsState {}

class TickeightsLoading extends TickeightsState {}

class TickeightsError extends TickeightsState {}

class TickeightsGeneral extends TickeightsState {
  final UnmodifiableListView<TickeightObject> tickeights;

  TickeightsGeneral(List<TickeightObject> tickeights)
      : tickeights = UnmodifiableListView(tickeights);
}
