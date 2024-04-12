part of 'my_program_cubit.dart';

@immutable
abstract class MyProgramState {
  final int selectedYear;
  final int selectedMonth;
  final int selectedDay;

  MyProgramState(this.selectedYear, this.selectedMonth, this.selectedDay);
}

class MyProgramLoading extends MyProgramState {
  MyProgramLoading(super.selectedYear, super.selectedMonth, super.selectedDay);
}

class MyProgramInitial extends MyProgramLoading {
  MyProgramInitial(Jalali now) : super(now.year, now.month, now.day);
}

class MyProgramLoaded extends MyProgramState {
  final UnmodifiableListView<ProgramItemObject> objects;
  MyProgramLoaded(super.selectedYear, super.selectedMonth, super.selectedDay,
      List<ProgramItemObject> list)
      : objects = UnmodifiableListView(list);
}
