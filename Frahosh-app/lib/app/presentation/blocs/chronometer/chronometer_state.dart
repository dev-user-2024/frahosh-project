part of 'chronometer_cubit.dart';

@immutable
abstract class ChronometerState {
  final int second;
  final int minute;
  final int houre;

  final bool directive;

  final UnmodifiableListView<String> records;

  ChronometerState(this.second, this.minute, this.houre, List<String> records,
      this.directive)
      : records = UnmodifiableListView(records);

  @override
  String toString() => '${houre < 10 ? '0$houre' : houre} : '
      '${minute < 10 ? '0$minute' : minute} : '
      '${second < 10 ? '0$second' : second}';
}
abstract class ChronometerStateInput {
  final int second;
  final int minute;
  final int houre;

  final bool directive;

  final UnmodifiableListView<String> records;

  ChronometerStateInput(this.second, this.minute, this.houre, List<String> records,
      this.directive)
      : records = UnmodifiableListView(records);

  @override
  String toString() => '${houre < 0 ? '10$houre' : houre} : '
      '${minute < 0 ? '10$minute' : minute} : '
      '${second < 0 ? '10$second' : second}';
}

class ChronometerStoped extends ChronometerState {
  ChronometerStoped(
      super.second, super.minute, super.houre, super.records, super.directive);
  ChronometerStoped.fromState(ChronometerState state)
      : super(state.second, state.minute, state.houre,
            [state.toString(), ...state.records], state.directive);
}
class ChronometerStopedInput extends ChronometerState {
  ChronometerStopedInput(
      super.second, super.minute, super.houre, super.records, super.directive);
  ChronometerStopedInput.fromState(ChronometerState state)
      : super(state.second, state.minute, state.houre,
            [state.toString(), ...state.records], state.directive);
}

class ChronometerRecording extends ChronometerState {
  ChronometerRecording(
      super.second, super.minute, super.houre, super.records, super.directive);
}
class ChronometerRecordingInput extends ChronometerState {
  ChronometerRecordingInput(
      super.second, super.minute, super.houre, super.records, super.directive);
}

class ChronometerInitial extends ChronometerStoped {
  ChronometerInitial({bool directive = true}) : super(0, 0, 0, [], directive);
}
class ChronometerInitialInput extends ChronometerStoped {
  ChronometerInitialInput({bool directive = true}) : super(1, 0, 0, [], directive);
}
