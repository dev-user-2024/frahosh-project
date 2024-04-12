import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/differentColorBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/music/music/musicLists.dart';
import 'package:farahoosh/app/presentation/screens/school/music/voice/voiceLists.dart';
import 'package:flutter/material.dart';
import '../../../modules/const/datacolors.dart';

class Music extends StatelessWidget {
  const Music({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [
              // appbar
              toApp(context: context, title: "موسیقی"),

              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                        child: Center(
                          child: Column(
                            children: [
                              InkWell(
                                child: DifferentColorsBox(
                                  widths: 263,
                                  heights: 275,
                                  widget: DataImages.musicMusic
                                      .toPNGImage(size: 120),
                                  color: GradiantColors.pinkGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "موسیقی",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => MusicLists())));
                                },
                              ),
                              const SizedBox(
                                height: 55,
                              ),
                              InkWell(
                                child: DifferentColorsBox(
                                  widths: 263,
                                  heights: 275,
                                  widget: DataImages.soundMusic
                                      .toPNGImage(size: 120),
                                  color: GradiantColors.greenGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "صدا",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) =>
                                          const VoiceLists())));
                                },
                              ),
                              const SizedBox(height: 150,)
                            ],
                          ),
                        ),
                      ),
                    ),
                    NavBar(size: size)
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
