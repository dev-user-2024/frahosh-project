import 'dart:collection';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'package:shamsi_date/shamsi_date.dart';

part 'calendar_state.dart';

class CalendarCubit extends Cubit<CalendarState> {
  CalendarCubit() : super(CalendarInitial(Jalali.now())) {
    toDate(state.year, state.month);
  }

  List<CalendarDay?> _nullDays(int count) =>
      [...List<CalendarDay?>.filled(count, null)];

  void toDate(int year, int month) {
    final j = Jalali(year, month, 1);
    final dayList = _nullDays(j.weekDay - 1);

    dayList.addAll(List<CalendarDay>.generate(
        j.monthLength, (index) => CalendarDay(index + 1)));

    dayList.addAll(_nullDays((7 - dayList.length % 7) % 7));
    emit(CalendarGeneral(year, month, dayList));
  }
}

class CalendarDay {
  final int dayNo;
  CalendarDay(this.dayNo);
}
