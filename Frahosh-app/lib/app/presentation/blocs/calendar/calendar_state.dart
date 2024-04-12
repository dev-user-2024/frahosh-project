part of 'calendar_cubit.dart';

@immutable
abstract class CalendarState {
  final int year;
  final int month;
  final UnmodifiableListView<CalendarDay?> days;
  CalendarState(this.year, this.month, List<CalendarDay?> data)
      : days = UnmodifiableListView<CalendarDay?>(data);
}

class CalendarInitial extends CalendarState {
  CalendarInitial(Jalali now) : super(now.year, now.month, <CalendarDay?>[]);
}

class CalendarGeneral extends CalendarState {
  CalendarGeneral(super.year, super.month, super.days);
}
