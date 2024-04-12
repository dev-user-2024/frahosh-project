part of 'counsel_program_cubit.dart';

@immutable
abstract class CounselProgramState {
  final int selectedYear;
  final int selectedMonth;
  final int selectedDay;

  CounselProgramState(this.selectedYear, this.selectedMonth, this.selectedDay);
}

class CounselProgramLoading extends CounselProgramState {
  CounselProgramLoading(
      super.selectedYear, super.selectedMonth, super.selectedDay);
}

class CounselProgramInitial extends CounselProgramLoading {
  CounselProgramInitial(Jalali now) : super(now.year, now.month, now.day);
}

class CounselProgramLoaded extends CounselProgramState {
  final UnmodifiableListView<ProgramItemObject> objects;
  CounselProgramLoaded(super.selectedYear, super.selectedMonth,
      super.selectedDay, List<ProgramItemObject> list)
      : objects = UnmodifiableListView(list);
}
