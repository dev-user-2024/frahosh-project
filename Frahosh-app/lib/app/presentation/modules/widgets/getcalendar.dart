import 'package:farahoosh/app/presentation/blocs/calendar/calendar_cubit.dart';

import '../../router/packages.dart';

class getcalendar extends StatelessWidget {
  final List<CalendarDay?> days;
  final void Function(CalendarDay day) onTap;

  getcalendar(List<CalendarDay?> inDays, this.onTap)
      : days = [...List.generate(7, (index) => null), ...inDays];

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SizedBox(
      width: size.width,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Directionality(
          textDirection: TextDirection.rtl,
          child: GridView.builder(
            itemCount: days.length,
            physics: const NeverScrollableScrollPhysics(),
            shrinkWrap: true,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 7,
              mainAxisSpacing: 10,
              crossAxisSpacing: 10,
            ),
            itemBuilder: (context, index) {
              if (index < 7) {
                return Container(
                  height: 70,
                  width: 75,
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(15)),
                    color: Colors.white,
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(1),
                    child: Center(
                      child: FittedBox(
                        child: Text(
                          [
                            'شنبه',
                            'یکشنبه',
                            'دوشنبه',
                            'سه شنبه',
                            'چهارشنبه',
                            'پنجشنبه',
                            'جمعه',
                          ][index],
                          style: textTheme.bodyText1!
                              .copyWith(color: index == 6 ? Colors.red : null),
                        ),
                      ),
                    ),
                  ),
                );
              }
              if (days[index] == null) {
                return const SizedBox(
                  height: 70,
                  width: 75,
                );
              }
              return GestureDetector(
                onTap: () {
                  onTap(days[index]!);
                },
                child: Container(
                  height: 70,
                  width: 75,
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(15)),
                    color: Colors.white,
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(1),
                    child: Center(
                      child: FittedBox(
                        child: Text(
                          days[index]!.dayNo.toString(),
                          style: textTheme.bodyText1!.copyWith(
                              color: index % 7 == 6 ? Colors.red : null),
                        ),
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
