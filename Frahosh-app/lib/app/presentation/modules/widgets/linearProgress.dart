import '../../router/packages.dart';
import '../const/datacolors.dart';

Widget LinearProgress(context, int all, int curr) {
  Size size = MediaQuery.of(context).size;
  var textTheme = Theme.of(context).textTheme;
  return SizedBox(
    height: 32,
    width: size.width,
    // margin: const EdgeInsets.symmetric(horizontal: 20),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        SizedBox(
          width: 314,
          child: LinearProgressIndicator(
            value: all / curr,
            backgroundColor: SolidColors.blue,
            color: const Color.fromARGB(255, 213, 213, 213),
            minHeight: 10,
          ),
        ),
        const SizedBox(
          width: 20,
        ),
        Text('$curr/$all', style: textTheme.subtitle1),
      ],
    ),
  );
}
