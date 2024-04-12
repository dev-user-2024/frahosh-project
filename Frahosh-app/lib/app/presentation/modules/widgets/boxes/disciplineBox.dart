import '../../../router/packages.dart';
import '../../const/datacolors.dart';

class DisciplineBox extends StatelessWidget {
  const DisciplineBox({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.title,
    required this.description,
    required this.score,
    required this.date,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final String title;
  final String description;
  final String date;
  final double score;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size.width,
      margin: const EdgeInsets.symmetric(vertical: 20),
      decoration: BoxDecoration(
          borderRadius:
              const BorderRadius.all(Radius.circular(15)),
          border: Border.all(
              color: SolidColors.blue, width: 0.2),
          color: SolidColors.white),
      child: Padding(
        padding: const EdgeInsets.symmetric(
            horizontal: 20, vertical: 8),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                SizedBox(
                  width: 80,
                  child: Text(
                    'عنوان:',
                    style: textTheme.bodyText2,
                  ),
                ),
                //  const    SizedBox(width: 20,),
                Text(
                  title,
                  style: textTheme.bodyText1,
                ),
                const SizedBox(
                  width: 20,
                ),
                Text(
                  "$score نمره",
                  style: const TextStyle(
                      color: SolidColors.red, fontSize: 12),
                )
              ],
            ),
            const SizedBox(
              height: 14,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                SizedBox(
                  width: 80,
                  child: Text(
                    'شرح:',
                    style: textTheme.bodyText2,
                  ),
                ),
                Text(
                  description,
                  style: textTheme.bodyText1,
                )
              ],
            ),
            const SizedBox(
              height: 14,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                SizedBox(
                  width: 80,
                  child: Text(
                    'تاریخ:',
                    style: textTheme.bodyText2,
                  ),
                ),
                Text(
                  date,
                  style: textTheme.bodyText1,
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
