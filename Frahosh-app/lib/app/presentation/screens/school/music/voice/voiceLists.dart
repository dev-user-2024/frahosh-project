import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/music/voice/voicePlay.dart';
import 'package:flutter/material.dart';
import '../../../../../../gen/assets.gen.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../../modules/widgets/list/partOfListWidget.dart';

class VoiceLists extends StatelessWidget {
  const VoiceLists({super.key});

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
              toApp(context: context, title: "لیست صداها"),

              Padding(
                padding: const EdgeInsets.all(20),
                child: Container(
                  height: 58,
                  decoration: BoxDecoration(
                    color: SolidColors.white,
                    borderRadius: BorderRadius.circular(15),
                  ),
                  child: TextFieldWidget(
                    borderSideColor: SolidColors.blue,
                    hintText: "صدای مورد نظرت رو جست و جو کن...",
                    prefixIcon: Image.asset(Assets.icons.microphoneIcon.path),
                    suffixIcon: Image.asset(Assets.icons.searchIcon.path),
                  ),
                ),
              ),

              Expanded(
                child: Stack(
                  children: [
                    Padding(
                        padding: const EdgeInsets.fromLTRB(20,20,20,150),
                      child: SingleChildScrollView(
                        child: PartOfListWidget(
                          size: size,
                          listSize: 61,
                          title: "صحبتی درباره اهداف آموزشی سال تحصیلی 1401-1402",
                          albomNameOrDate: "2 مهر 1401",
                          textTheme: textTheme
                          ),
                      ).toClick(onTap: (() {
                             Navigator.of(context).push(
                                    MaterialPageRoute(
                                        builder: ((context) =>
                                            const VoicePlay())));
                      })),
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

