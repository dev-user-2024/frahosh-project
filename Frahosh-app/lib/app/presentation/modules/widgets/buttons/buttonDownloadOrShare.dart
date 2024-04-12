import '../../../../../gen/assets.gen.dart';
import '../../../router/packages.dart';

class ButtonDownloadOrShare extends StatelessWidget {
  const ButtonDownloadOrShare({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.title,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final String title;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size.width / 2.3,
      height: 50,
      decoration: BoxDecoration(
        color:
            const Color.fromARGB(255, 29, 155, 240),
        border: Border.all(color: Colors.white),
        borderRadius: BorderRadius.circular(10),
      ),
      child: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(Assets.icons.arrowTop.path),
            
            const SizedBox(
              width: 12,
            ),
            Text(
              title,
              style: textTheme.subtitle2,
            ),
          ],
        ),
      ),
    );
  }
}
