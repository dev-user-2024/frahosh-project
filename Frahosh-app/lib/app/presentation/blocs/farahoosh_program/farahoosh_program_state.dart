part of 'farahoosh_program_cubit.dart';

@immutable
abstract class FarahooshProgramState {
  final int selectedYear;
  final int selectedMonth;
  final int selectedDay;

  FarahooshProgramState(
      this.selectedYear, this.selectedMonth, this.selectedDay);
}

class FarahooshProgramLoading extends FarahooshProgramState {
  FarahooshProgramLoading(
      super.selectedYear, super.selectedMonth, super.selectedDay);
}

class FarahooshProgramInitial extends FarahooshProgramLoading {
  FarahooshProgramInitial(Jalali now) : super(now.year, now.month, now.day);
}

class FarahooshProgramLoaded extends FarahooshProgramState {
  final UnmodifiableListView<ProgramItemObject> objects;
  FarahooshProgramLoaded(super.selectedYear, super.selectedMonth,
      super.selectedDay, List<ProgramItemObject> list)
      : objects = UnmodifiableListView(list);
}
