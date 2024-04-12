import 'package:blur/blur.dart';
import 'package:dismissible_page/dismissible_page.dart';
import 'package:farahoosh/app/presentation/blocs/about_school/about_school_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:video_player/video_player.dart';
import '../../../../../../gen/assets.gen.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class SchoolAbout extends StatelessWidget {
  SchoolAbout({Key? key}) : super(key: key);
  final AboutSchoolCubit _cubit = AboutSchoolCubit();
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
            toApp(context: context, title: "درباره مدرسه"),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: BlocBuilder<AboutSchoolCubit, AboutSchoolState>(
                      bloc: _cubit,
                      buildWhen: (previous, current) =>
                          previous is! AboutSchoolGeneral,
                      builder: (context, state) {
                        if (state is AboutSchoolLoading) {
                          return Text('loading');
                        }
                        if (state is AboutSchoolError) {
                          return Text('error');
                        }
                        final playerController = VideoPlayerController.network(
                          (state as AboutSchoolGeneral).videoURL,
                        )..initialize()
                            .whenComplete(() => _cubit.updatedVideo());

                        return WillPopScope(
                          onWillPop: () async {
                            await playerController.pause();
                            await playerController.dispose();
                            return true;
                          },
                          child: Column(
                            children: [
                              const SizedBox(
                                height: 20,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    SizedBox.square(
                                      dimension: 55,
                                      child: (state as AboutSchoolGeneral)
                                          .avatar
                                          .toNetworkImage(),
                                    ),
                                    SizedBox(
                                      height: 70,
                                      width: size.width / 3.2,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceAround,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            "سال تاسیس: ${state.buildYear}",
                                            style: textTheme.bodyText1,
                                          ),
                                          Text(
                                            "دانش آموزان: ${state.studentsCount}",
                                            style: textTheme.bodyText1,
                                          ),
                                        ],
                                      ),
                                    ),
                                    SizedBox(
                                      height: 70,
                                      width: size.width / 3.2,
                                      child: Column(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceAround,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            "استان: ${state.province}",
                                            style: textTheme.bodyText1,
                                          ),
                                          Text(
                                            "شهر: ${state.city}",
                                            style: textTheme.bodyText1,
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 20,
                              ),
                              Container(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 20),
                                width: size.width,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      state.schoolName,
                                      style: textTheme.subtitle1,
                                    ),
                                    const SizedBox(
                                      height: 10,
                                    ),
                                    Container(
                                      padding: const EdgeInsets.symmetric(
                                          vertical: 5),
                                      // height: 155,
                                      width: size.width,
                                      decoration: BoxDecoration(
                                          borderRadius: const BorderRadius.all(
                                              Radius.circular(15)),
                                          border: Border.all(
                                              color: SolidColors.blue,
                                              width: 0.3),
                                          color: SolidColors.white),
                                      child: Padding(
                                        padding: const EdgeInsets.only(
                                            left: 13,
                                            right: 13,
                                            top: 9,
                                            bottom: 17),
                                        child: Text(
                                          state.description,
                                          style: textTheme.bodyText1,
                                          textDirection: TextDirection.rtl,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 20,
                              ),
                              Container(
                                  width: size.width,
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 20),
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        'ویدیو معرفی مدرسه',
                                        style: textTheme.subtitle1,
                                        textDirection: TextDirection.rtl,
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.symmetric(
                                            vertical: 10),
                                        child: SizedBox(
                                          width: size.width,
                                          height: 225,
                                          child: BlocBuilder<AboutSchoolCubit,
                                              AboutSchoolState>(
                                            bloc: _cubit,
                                            builder: (context, state) {
                                              return StatefulBuilder(
                                                  builder: (context, setState) {
                                                return SizedBox(
                                                    width: size.width,
                                                    height: size.width / 1.8,
                                                    child: playerController
                                                            .value.isInitialized
                                                        ? Stack(
                                                            alignment: Alignment
                                                                .center,
                                                            children: [
                                                              VideoPlayer(
                                                                playerController,
                                                              ),
                                                              if (!playerController
                                                                  .value
                                                                  .isPlaying)
                                                                Center(
                                                                  child:
                                                                      Container(
                                                                    width: 60,
                                                                    height: 60,
                                                                    decoration: BoxDecoration(
                                                                        color: const Color.fromARGB(
                                                                            0,
                                                                            0,
                                                                            0,
                                                                            0),
                                                                        borderRadius:
                                                                            BorderRadius.circular(100)),
                                                                    child: Center(
                                                                            child:
                                                                                Container())
                                                                        .blurred(
                                                                      colorOpacity:
                                                                          0.1,
                                                                      borderRadius:
                                                                          BorderRadius.circular(
                                                                              100),
                                                                      //color: SolidColors.blurBlu,
                                                                      blurColor:
                                                                          SolidColors
                                                                              .white,
                                                                    ),
                                                                  ),
                                                                ),
                                                              if (!playerController
                                                                  .value
                                                                  .isPlaying)
                                                                Center(
                                                                  child:
                                                                      Padding(
                                                                    padding: const EdgeInsets
                                                                            .only(
                                                                        left:
                                                                            6),
                                                                    child: Image.asset(Assets
                                                                        .icons
                                                                        .polygon1
                                                                        .path),
                                                                  ),
                                                                ),
                                                            ],
                                                          ).toClick(onTap: () {
                                                            if (playerController
                                                                .value
                                                                .isPlaying) {
                                                              playerController
                                                                  .pause()
                                                                  .then(
                                                                      (value) {
                                                                setState(() {});
                                                              });
                                                            } else {
                                                              playerController
                                                                  .play()
                                                                  .then(
                                                                      (value) {
                                                                setState(() {});
                                                              });
                                                            }
                                                          })
                                                        : playerController
                                                                .value.hasError
                                                            ? Center(
                                                                child: Text(
                                                                    'error in video'))
                                                            : Center(
                                                                child: Text(
                                                                    'loading video')));
                                              });
                                            },
                                          ),
                                        ),
                                      ),
                                      const SizedBox(
                                        height: 30,
                                      ),
                                      //   Rectangle_160(context, dataimage.Rectangle2_png),
                                    ],
                                  )),
                              SizedBox(
                                width: size.width,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 20),
                                      child: Text(
                                        'گالری تصاویر',
                                        style: textTheme.subtitle1,
                                        textDirection: TextDirection.rtl,
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 20,
                                    ),
                                    Container(
                                        padding:
                                            const EdgeInsets.only(right: 0),
                                        height: 204,
                                        width: size.width,
                                        child: ListView(
                                          scrollDirection: Axis.horizontal,
                                          children: state.pictures
                                              .map((e) => InkWell(
                                                    child: _newepisode(
                                                      episode: e,
                                                    ),
                                                  ))
                                              .toList(),
                                        )),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 20,
                              ),
                              SizedBox(
                                width: size.width,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 20),
                                      child: Text(
                                        'موقعیت روی نقشه',
                                        style: textTheme.subtitle1,
                                        textDirection: TextDirection.rtl,
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 40,
                                    ),
                                    Padding(
                                      padding:  EdgeInsets.symmetric(
                                          horizontal: size.width/6),
                                      child: InkWell(
                                        child: const ButtonWidget(
                                          title: "موقعیت نقشه",
                                          mainColor: true,
                                        ),
                                        onTap: () {},
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 150,
                              ),
                            ],
                          ),
                        );
                      },
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            ),
          ],
        ),
      )),
    );
  }
}

class _newepisode extends StatelessWidget {
  _newepisode({
    Key? key,
    required this.episode,
  }) : super(key: key);
  String episode;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Hero(
          tag: 'slider$episode',
          child: Container(
            height: 130,
            width: 130,
            margin: const EdgeInsets.fromLTRB(0, 0, 20, 0),
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(15)),
            ),
            child: episode.toNetworkImage(),
            // Image.asset(episode.image)
          ),
        ).toClick(
          onTap: () {
            context.pushTransparentRoute(DismissiblePage(
              child: Hero(
                tag: 'slider$episode',
                child: episode.toNetworkImage(),
              ),
              onDismissed: () => Navigator.pop(context),
            ));
          },
        ),
      ],
    );
  }
}
