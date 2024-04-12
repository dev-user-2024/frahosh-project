import 'dart:collection';

import 'package:intl/intl.dart' as intl;

final intl.NumberFormat _numberFormat = intl.NumberFormat.decimalPattern();
String countFormat(int n) => _numberFormat.format(n);

final UnmodifiableListView<String> monthNames = UnmodifiableListView([
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
]);

String dateFormat(String date) {
  final numbers = date.split('/');
  if (numbers.length != 3) {
    return '';
  }
  return '${numbers[2]} ${getMonthName(int.tryParse(numbers[1]) ?? 0)} ${numbers[0]}';
}

String getMonthName(int monthNumber) => monthNames[monthNumber - 1];
int getMonthNumber(String monthName) => monthNames.indexOf(monthName) + 1;
