import '../../../router/packages.dart';
import '../../const/datacolors.dart';

class ConsultantResearveBox extends StatelessWidget {
  const ConsultantResearveBox({
    Key? key,
    required this.size,
    required this.date,
    required this.name,
    required this.limit,
     this.onTap,
    required this.textTheme,
  }) : super(key: key);

  final Size size;
  final String date;
  final String name;
  final Function? onTap;
  final String limit;
  final TextTheme textTheme;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 82,
      width: size.width,
      margin: const EdgeInsets.symmetric(vertical: 10),
      padding: const EdgeInsets.symmetric(horizontal: 15),
      decoration: BoxDecoration(
          borderRadius: const BorderRadius.all(
              Radius.circular(15)),
          border: Border.all(
              color: SolidColors.grey,
              width: 0.1),
          color: SolidColors.white),
      child: InkWell(
        // ignore: sort_child_properties_last
        child: Row(
           mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
              Text(
                date,
                style: textTheme.subtitle1,
            ),
            Text(
                name,
                textDirection: TextDirection.rtl,
                textAlign: TextAlign.right,
                style: textTheme.subtitle1,
            
            ),
            Row(
              children: [
                Padding(
                  padding:
                      const EdgeInsets.only(left: 10),
                  child: Text(
                    limit,
                    textDirection: TextDirection.rtl,
                    textAlign: TextAlign.right,
                    style: textTheme.subtitle1,
                  ),
                ),
               const Icon(
                Icons.west,
                color: SolidColors.black,
            ),
              ],
            ),
          ],
        ),
      // onTap: onTap!(),
      ),
    );
  }
}
