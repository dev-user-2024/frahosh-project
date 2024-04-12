import '../../../router/packages.dart';
import '../../const/datacolors.dart';

Widget previousButton(context, Color MainColor) {
  Size size = MediaQuery.of(context).size;
  var textTheme = Theme.of(context).textTheme;
  return SizedBox(
    height: 48,
    width: size.width,
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 0),
          child: Container(
            height: 48,
            width: 48,
            decoration:  BoxDecoration(
              shape: BoxShape.circle,
              color: MainColor,
            ),
            child: const Icon(
              Icons.east,
              color: SolidColors.white,
            ),
          ),
        ),
        Text('صفحه 5', style: textTheme.subtitle1),
        Padding(
          padding: const EdgeInsets.only(right: 0),
          child: Container(
            height: 48,
            width: 48,
            decoration:  BoxDecoration(
              shape: BoxShape.circle,
              color: MainColor,
            ),
            child: const Icon(
              Icons.west,
              color: SolidColors.white,
            ),
          ),
        ),
      ],
    ),
  );
}
