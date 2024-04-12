import '../../../router/packages.dart';
import '../../const/datacolors.dart';

class NotficationBox extends StatelessWidget {
  const NotficationBox({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.title,
    required this.date,
    required this.mainText,
    required this.desc,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final String title;
  final String date;
  final String mainText;
  final String desc;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size.width,
      margin: const EdgeInsets.symmetric(vertical: 20),
      child: Container(
        width: size.width,
        decoration: BoxDecoration(
            borderRadius: const BorderRadius.all(Radius.circular(15)),
            border: Border.all(color: SolidColors.blue, width: 0.2),
            color: SolidColors.white),
        child: Padding(
          padding: const EdgeInsets.all(15.0),
          child: Column(children: [
            Row(
              children: [
                Text(
                  date,
                  style: textTheme.bodyText2,
                )
              ],
            ),
            const SizedBox(
              height: 20,
            ),
            Align(
              alignment: Alignment.topRight,
              child: Text(
                'عنوان : $title',
                style: textTheme.bodyText1,
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Align(
              alignment: Alignment.topRight,
              child: Text(
                mainText,
                style: textTheme.bodyText1,
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Align(
              alignment: Alignment.topRight,
              child: Text(
                desc,
                style: textTheme.bodyText1,
              ),
            )
          ]),
        ),
      ),
    );
  }
}
