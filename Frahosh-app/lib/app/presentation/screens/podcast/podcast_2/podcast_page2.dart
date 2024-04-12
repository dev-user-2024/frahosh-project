import 'package:blur/blur.dart';
import 'package:farahoosh/app/presentation/blocs/intrest_podcasts/intrest_podcasts_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/podcast.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/modules/widgets/textField/searchTextField.dart';
import 'package:farahoosh/app/presentation/screens/podcast/podcast_5/podcast_page5.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../modules/const/datacolors.dart';

class PodcastPage2 extends StatelessWidget {
  const PodcastPage2({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "علاقه مندی ها"),
            Expanded(
              child: Column(children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 20, 20, 10),
                  child: SearchTextField(
                    hintText: 'پادکست مورد نظرت رو جست و جو کن...',
                  ),
                ),
                Expanded(
                  child: Stack(
                    children: [
                      SingleChildScrollView(
                        child: Padding(
                          padding: const EdgeInsets.fromLTRB(20,0,20,150),
                          child: BlocBuilder<IntrestPodcastsCubit,
                              IntrestPodcastsState>(
                            builder: (context, state) {
                              return Column(
                                  children: (state as IntrestPodcastsLoaded)
                                      .list
                                      .map((e) => Padding(
                                            padding:
                                                EdgeInsets.symmetric(vertical: 10),
                                            child: _epizode(size, textTheme, e)
                                                .toClick(onTap: (() {
                                              Navigator.of(context).push(
                                                  MaterialPageRoute(
                                                      builder: ((context) =>
                                                          PodcastPage5(e))));
                                            })),
                                          ))
                                      .toList());
                            },
                          ),
                        ),
                      ),
                      NavBar(size: size)
                    ],
                  ),
                ),
              ]),
            ),
          ]),
        ),
      ),
    );
  }

  Container _epizode(Size size, TextTheme textTheme, PodcastObject podcast) {
    return Container(
      height: 90,
      width: size.width,
      color: SolidColors.backgroundColor,
      child: Container(
        height: 82,
        width: size.width,
        color: SolidColors.backgroundColor,
        child: Row(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: SizedBox(
                width: 82,
                height: 82,
                child: Stack(
                  children: [
                    Center(child: podcast.imageURL.toNetworkImage()),
                    Center(
                      child: Container(
                        width: 80,
                        height: 80,
                        decoration: BoxDecoration(
                            color: const Color.fromARGB(0, 0, 0, 0),
                            borderRadius: BorderRadius.circular(100)),
                        child: Center(child: Container()).blurred(
                          colorOpacity: 0.1,
                          borderRadius: BorderRadius.circular(15),
                          //color: SolidColors.blurBlu,
                          blurColor: SolidColors.white,
                        ),
                      ),
                    ),
                    Center(
                      child: Padding(
                        padding: const EdgeInsets.only(left: 6),
                        child: Image.asset(Assets.icons.polygon1.path),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.only(top: 15),
                  child: Text(podcast.description,
                      textDirection: TextDirection.rtl,
                      style: textTheme.bodyText1),
                ),
                const SizedBox(
                  height: 10,
                ),
                Text(podcast.formattedDate,
                    textDirection: TextDirection.rtl,
                    style: textTheme.bodyText2),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
