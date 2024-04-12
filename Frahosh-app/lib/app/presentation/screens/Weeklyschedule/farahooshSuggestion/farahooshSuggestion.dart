import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../blocs/calendar/calendar_cubit.dart';
import '../../../blocs/farahoosh_program/farahoosh_program_cubit.dart';
import '../../../blocs/utils.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/Schedule_page/planeMySchedule.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/getcalendar.dart';
import '../../../modules/widgets/navbar/navbar.dart';

class FarahooshSuggestion extends StatelessWidget {
  FarahooshSuggestion({super.key});
  final CalendarCubit _calendarCubit = CalendarCubit();
  final FarahooshProgramCubit _farahooshProgramCubit = FarahooshProgramCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "برنامه پیشنهادی فراهوش"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const SizedBox(
                        height: 20,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            width: size.width / 2.35,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: BlocBuilder<FarahooshProgramCubit,
                                FarahooshProgramState>(
                              bloc: _farahooshProgramCubit,
                              builder: (context, state) {
                                return dropdownButton(
                                  state.selectedYear.toString(),
                                  [
                                    '1401',
                                    '1402',
                                    '1403',
                                    '1404',
                                    '1405',
                                  ],
                                  textTheme,
                                  onChanged: (p0) {
                                    _calendarCubit.toDate(
                                        int.parse(p0.toString()),
                                        state.selectedMonth);
                                  },
                                );
                              },
                            ),
                          ),
                          Container(
                            width: size.width / 2.35,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: BlocBuilder<FarahooshProgramCubit,
                                FarahooshProgramState>(
                              bloc: _farahooshProgramCubit,
                              builder: (context, state) {
                                return dropdownButton(
                                  getMonthName(state.selectedMonth),
                                  monthNames,
                                  textTheme,
                                  onChanged: (p0) {
                                    _calendarCubit.toDate(state.selectedYear,
                                        getMonthNumber(p0.toString()));
                                  },
                                );
                              },
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      BlocBuilder<CalendarCubit, CalendarState>(
                        bloc: _calendarCubit,
                        builder: (context, state) {
                          return getcalendar(
                            state.days,
                            (day) {},
                          );
                        },
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'برنامه روز یکشنبه 16 مرداد',
                            style: textTheme.subtitle1,
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      PlaneMySchedule(
                        size: size,
                        hintText: "اتمام تمرین‌های ریاضی",
                        lineThroughText: true,
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      PlaneMySchedule(
                        size: size,
                        hintText: "رسم نمودارهای کلاس دوشنبه",
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      PlaneMySchedule(
                          size: size, hintText: "تمرین روخوانی فارسی"),
                      const SizedBox(
                        height: 20,
                      ),
                      PlaneMySchedule(
                        size: size,
                        hintText: "مطالعه کلمه‌ها و معنی‌های درس فارسی",
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'دلایل عدم تحقق برنامه',
                            style: textTheme.subtitle1,
                          ),
                          const Icon(
                            Icons.add_circle_outline,
                            color: SolidColors.black,
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 100,
                      ),
                    ],
                  ),
                ),
                NavBar(size: size),
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
