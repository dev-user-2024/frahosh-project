part of 'tickeight_cubit.dart';

@immutable
abstract class TickeightState {}

class TickeightLoading extends TickeightState {}

class TickeightGeneral extends TickeightState {
  final UnmodifiableListView<TickeightObject> tickeights;
  final int selectedIndex;
  final UnmodifiableListView<bool?> stages;
  final bool showEng;

  TickeightGeneral(
      List<TickeightObject> tickeights, this.selectedIndex, List<bool?> stages,
      {this.showEng = true})
      : tickeights = UnmodifiableListView(tickeights),
        stages = UnmodifiableListView(stages);

  TickeightObject get selectedObj => tickeights[selectedIndex];
}

class TickeightError extends TickeightState {}
