import 'package:blur/blur.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../router/packages.dart';
import '../../const/datacolors.dart';

class PartOfListWidget extends StatelessWidget {
  const PartOfListWidget(
      {Key? key,
      required this.size,
      required this.title,
      required this.albomNameOrDate,
      required this.textTheme,
      this.listSize = 82,
      this.releaseName,
      this.hasReleaseName = false,
      this.playing = false})
      : super(key: key);

  final Size size;
  final String title;
  final double listSize;
  final String albomNameOrDate;
  final String? releaseName;
  final bool? hasReleaseName;
  final TextTheme textTheme;
  final bool playing;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: listSize + 5,
      width: size.width,
      child: Row(
        children: [
          SizedBox(
            width: listSize,
            height: listSize,
            child: Stack(
              children: [
                Center(
                    child:
                        // DataImages.schoolClass.toSvgImage(size: 100)
                        Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(15),
                    color: SolidColors.blue,
                  ),
                )),
                Center(
                  child: Container(
                    width: 60,
                    height: 60,
                    decoration: BoxDecoration(
                        color: const Color.fromARGB(0, 0, 0, 0),
                        borderRadius: BorderRadius.circular(100)),
                    child: Center(child: Container()),
                  ),
                ).blurred(
                  colorOpacity: 0.1,
                  borderRadius: BorderRadius.circular(15),
                  //color: SolidColors.blurBlu,
                  blurColor: SolidColors.white,
                ),
                Center(
                  child: Padding(
                    padding: const EdgeInsets.only(left: 6),
                    child: playing
                        ? const Icon(
                            Icons.pause,
                            color: Colors.white,
                          )
                        : Image.asset(Assets.icons.polygon1.path),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(
            width: 20,
          ),
          Expanded(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Row(
                  children: [
                    Text(
                      title,
                      style: textTheme.bodyText1,
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      albomNameOrDate,
                      style: textTheme.bodyText2,
                    ),
                    hasReleaseName == true
                        ? Text(
                            releaseName!,
                            style: textTheme.bodyText2,
                          )
                        : Container(),
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
