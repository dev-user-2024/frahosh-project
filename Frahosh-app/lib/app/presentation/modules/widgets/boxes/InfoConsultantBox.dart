import '../../../router/packages.dart';
import '../../const/datacolors.dart';

class InfoConsultant extends StatelessWidget {
  const InfoConsultant({
    Key? key,
    required this.size,
    required this.date,
    required this.hours,
    required this.consultantName,
    required this.time,
    required this.cost,
    required this.relationship,
  }) : super(key: key);

  final Size size;
  final String date;
  final String hours;
  final String consultantName;
  final String time;
  final String cost;
  final String relationship;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 20),
      child: Container(
        width: size.width,
        decoration: BoxDecoration(
            borderRadius: const BorderRadius.all(Radius.circular(15)),
            border: Border.all(color: SolidColors.grey, width: 0.1),
            color: SolidColors.white),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 15),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'تاریخ',
                      textDirection: TextDirection.rtl,
                      style: Theme.of(context).textTheme.subtitle1,
                    ),
                    SizedBox(
                      width: 150,
                      child: Text(
                        date,
                        textDirection: TextDirection.rtl,
                        style: Theme.of(context).textTheme.subtitle1,
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'ساعت',
                      textDirection: TextDirection.rtl,
                      style: Theme.of(context).textTheme.subtitle1,
                    ),
                    SizedBox(
                      width: 150,
                      child: Text(
                        hours,
                        textDirection: TextDirection.rtl,
                        textAlign: TextAlign.right,
                        style: Theme.of(context).textTheme.subtitle1,
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'مدت زمان',
                      textDirection: TextDirection.rtl,
                      style: Theme.of(context).textTheme.subtitle1,
                    ),
                    SizedBox(
                      width: 150,
                      child: Text(
                        time,
                        textDirection: TextDirection.rtl,
                        style: Theme.of(context).textTheme.subtitle1,
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'نوع ارتباط',
                      textDirection: TextDirection.rtl,
                      style: Theme.of(context).textTheme.subtitle1,
                    ),
                    SizedBox(
                      width: 150,
                      child: Text(
                        relationship,
                        textDirection: TextDirection.rtl,
                        style: Theme.of(context).textTheme.subtitle1,
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'نام مشاور',
                      textAlign: TextAlign.end,
                      textDirection: TextDirection.rtl,
                      style: Theme.of(context).textTheme.subtitle1,
                    ),
                    SizedBox(
                      width: 150,
                      child: Text(
                        consultantName,
                        textAlign: TextAlign.right,
                        textDirection: TextDirection.rtl,
                        style: Theme.of(context).textTheme.subtitle1,
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'هزینه پرداخت شده',
                      textDirection: TextDirection.rtl,
                      style: Theme.of(context).textTheme.subtitle1,
                    ),
                    SizedBox(
                      width: 150,
                      child: Text(
                        cost,
                        textDirection: TextDirection.rtl,
                        style: Theme.of(context).textTheme.subtitle1,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
