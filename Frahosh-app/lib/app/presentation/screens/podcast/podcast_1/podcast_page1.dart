import 'package:blur/blur.dart';
import 'package:farahoosh/app/presentation/blocs/podcasts/podcasts_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/modules/widgets/textField/searchTextField.dart';
import 'package:farahoosh/app/presentation/screens/podcast/podcast_2/podcast_page2.dart';
import 'package:farahoosh/app/presentation/screens/podcast/podcast_3/podcast_page3.dart';
import 'package:farahoosh/app/presentation/screens/podcast/podcast_4/podcast_page4.dart';
import 'package:farahoosh/app/presentation/screens/podcast/podcast_5/podcast_page5.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../blocs/podcast.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/const/urlimages.dart';

class PodcastPage1 extends StatelessWidget {
  PodcastPage1({super.key});

  final PodcastsCubit _cubit = PodcastsCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return WillPopScope(
      onWillPop: () async {
        if (_cubit.state is PodcastsSearching) {
          _cubit.unSearch();
          return false;
        } else {
          return true;
        }
      },
      child: SafeArea(
        child: Scaffold(
          body: Container(
            color: SolidColors.backgroundColor,
            child: Column(children: [
              toApp(context: context, title: "پادکست"),
              const SizedBox(
                height: 20,
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: SearchTextField(
                  hintText: 'پادکست مورد نظرت رو جست و جو کن...',
                  onFieldSubmitted: (p0) {
                    _cubit.toSearchMode();
                    _cubit.search(p0.toString());
                  },
                ),
              ),
              const SizedBox(
                height: 30,
              ),
              Expanded(
                child: Stack(children: [
                  SingleChildScrollView(
                    child: BlocBuilder<PodcastsCubit, PodcastsState>(
                      bloc: _cubit,
                      builder: (context, state) {
                        if (state is PodcastsSearching) {
                          return Column(
                            children: state.podcasts
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
                                .toList(),
                          );
                        }
                        return Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            Padding(
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 20),
                              child: SizedBox(
                                width: size.width,
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    customs_circle(' علاقه‌مندی‌ها', context)
                                        .toClick(onTap: (() {
                                      Navigator.of(context).push(
                                          MaterialPageRoute(
                                              builder: ((context) =>
                                                  const PodcastPage2())));
                                    })),
                                    customs_circle(' اپیزودهای جدید', context)
                                        .toClick(onTap: (() {
                                      Navigator.of(context).push(
                                          MaterialPageRoute(
                                              builder: ((context) =>
                                                  const PodcastPage3())));
                                    })),
                                    customs_circle('لیست پخش', context).toClick(
                                        onTap: (() {
                                      Navigator.of(context).push(
                                          MaterialPageRoute(
                                              builder: ((context) =>
                                                  const PodcastPage4())));
                                    })),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(
                              height: 30,
                            ),
                            Container(
                              padding: const EdgeInsets.only(right: 20),
                              height: 50,
                              width: size.width,
                              child: BlocBuilder<PodcastsCubit, PodcastsState>(
                                bloc: _cubit,
                                builder: (context, state) {
                                  if (state is PodcastsLoading) {
                                    return Text('loading');
                                  }
                                  if (state is PodcastsError) {
                                    return Text('error');
                                  }
                                  return ListView(
                                    scrollDirection: Axis.horizontal,
                                    children: [
                                      ...(state as PodcastsGeneral)
                                          .cats
                                          .map((e) => InkWell(
                                                onTap: () {
                                                  _cubit.selectCat(e.id);
                                                },
                                                child: tasktypeitem(
                                                  title: e.name,
                                                  selected: state
                                                          .cats[state
                                                              .selectedCatIndex]
                                                          .id ==
                                                      e.id,
                                                ),
                                              ))
                                    ],
                                  );
                                },
                              ),
                            ),
                            const SizedBox(
                              height: 40,
                            ),
                            Padding(
                              padding: const EdgeInsets.only(right: 20),
                              child: Align(
                                  alignment: Alignment.topRight,
                                  child: Text(
                                    'تازه‌ترین اپیزودها',
                                    style: textTheme.subtitle1,
                                  )),
                            ),
                            const SizedBox(
                              height: 10,
                            ),
                            BlocBuilder<PodcastsCubit, PodcastsState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                if (state is PodcastsLoading) {
                                  return Text('loading');
                                }
                                if (state is PodcastsError) {
                                  return Text('error');
                                }
                                if (state is PodcastsOnlyCatsLoaded) {
                                  return Text('loading');
                                }
                                return Container(
                                    padding: const EdgeInsets.only(right: 20),
                                    height: 204,
                                    width: size.width,
                                    child: ListView(
                                      scrollDirection: Axis.horizontal,
                                      children: (state as PodcastsGeneral)
                                          .podcasts
                                          .map((e) => InkWell(
                                                onTap: () {
                                                  Navigator.of(context)
                                                      .push(MaterialPageRoute(
                                                    builder: (context) =>
                                                        PodcastPage5(e),
                                                  ));
                                                },
                                                child: newepisode(
                                                  episode: e,
                                                ),
                                              ))
                                          .toList(),
                                    ));
                              },
                            ),
                            const SizedBox(
                              height: 30,
                            ),
                            Padding(
                              padding: const EdgeInsets.only(right: 20),
                              child: Align(
                                  alignment: Alignment.topRight,
                                  child: Text('محبوب‌ترین اپیزودها',
                                      style: textTheme.subtitle1)),
                            ),
                            const SizedBox(
                              height: 10,
                            ),
                            BlocBuilder<PodcastsCubit, PodcastsState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                if (state is PodcastsLoading) {
                                  return Text('loading');
                                }
                                if (state is PodcastsError) {
                                  return Text('error');
                                }
                                if (state is PodcastsOnlyCatsLoaded) {
                                  return Text('loading');
                                }
                                return Container(
                                    padding: const EdgeInsets.only(right: 20),
                                    height: 204,
                                    width: size.width,
                                    child: ListView(
                                      scrollDirection: Axis.horizontal,
                                      children:
                                          ((state as PodcastsGeneral).topView)
                                              .map((e) => InkWell(
                                                    child: newepisode(
                                                      episode: e,
                                                    ),
                                                  ))
                                              .toList(),
                                    ));
                              },
                            ),
                            const SizedBox(
                              height: 150,
                            ),
                          ],
                        );
                      },
                    ),
                  ),
                  NavBar(size: size)
                ]),
              ),
            ]),
          ),
        ),
      ),
    );
  }
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
                  textDirection: TextDirection.rtl, style: textTheme.bodyText2),
            ],
          ),
        ],
      ),
    ),
  );
}

class newepisode extends StatelessWidget {
  newepisode({
    Key? key,
    required this.episode,
  }) : super(key: key);
  PodcastObject episode;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
            height: 130,
            width: 130,
            margin: EdgeInsets.all(10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(15)),
              // gradient: LinearGradient(
              //     begin: Alignment.topCenter,
              //     end: Alignment.bottomCenter,
              //     colors: [
              //       episode.color1,
              //       episode.color2,
              //     ]),
            ),
            child: episode.imageURL.toNetworkImage()),
        SizedBox(
          height: 40,
          width: 110,
          child: Text(
            episode.name,
            textDirection: TextDirection.rtl,
            style: TextStyle(
                fontFamily: 'IRANSansXV',
                fontSize: 12,
                color: SolidColors.black),
          ),
        ),
      ],
    );
  }
}

class tasktypeitem extends StatelessWidget {
  tasktypeitem({Key? key, required this.title, required this.selected})
      : super(
          key: key,
        );
  String title;
  bool selected;
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(8),
      height: 50,
      decoration: BoxDecoration(
        border: Border.all(color: SolidColors.blue, width: 0.8),
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        color: selected ? SolidColors.blue : SolidColors.backgroundColor,
      ),
      child: Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10),
          child: Text(
            title,
            style: TextStyle(
                color: selected ? SolidColors.white : SolidColors.blue,
                fontFamily: 'IRANSansXV',
                fontWeight: FontWeight.w600),
          ),
        ),
      ),
    );
  }
}

Widget customs_circle(String text, BuildContext context) {
  var textTheme = Theme.of(context).textTheme;
  return Column(
    children: [
      Container(
        height: 48,
        width: 48,
        decoration: const BoxDecoration(
          shape: BoxShape.circle,
          color: SolidColors.white,
        ),
        child: Center(child: DataImages.favorite.toSvgImage(size: 20)),
      ),
      const SizedBox(
        height: 10,
      ),
      Text(
        text,
        style: textTheme.subtitle1,
      )
    ],
  );
}
