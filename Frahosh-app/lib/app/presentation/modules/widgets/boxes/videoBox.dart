
import 'package:blur/blur.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../router/packages.dart';
import '../../const/datacolors.dart';

class VideoBox extends StatelessWidget {
  const VideoBox({
    Key? key,
    required this.size,
    required this.image,
  }) : super(key: key);

  final Size size;
  final Image image;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: SizedBox(
        width: size.width,
        height: 225,
        child: Stack(
          children: [
            Center(
                child: image),
            Center(
              child: Container(
                width: 60,
                height: 60,
                decoration: BoxDecoration(
                    color:
                        const Color.fromARGB(0, 0, 0, 0),
                    borderRadius:
                        BorderRadius.circular(100)),
                child: Center(
                  child: Container()
                ).blurred(
              colorOpacity: 0.1,
              borderRadius:  BorderRadius.circular(100),
              //color: SolidColors.blurBlu,
              blurColor: SolidColors.white,
            ),
              ),
            ),
            Center(
              child: Padding(
                      padding: const EdgeInsets.only(left: 6),
                      child: Image.asset(
                          Assets.icons.polygon1.path),
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
