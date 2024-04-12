import 'package:blur/blur.dart';
import 'package:farahoosh/app/presentation/blocs/faracoin_guide/faracoin_guide_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:video_player/video_player.dart';
import '../../../../../../gen/assets.gen.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/boxes/videoBox.dart';

class ProfileConinGuidePage extends StatelessWidget {
  ProfileConinGuidePage({super.key});
  final FaracoinGuideCubit _cubit = FaracoinGuideCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Column(
          children: [
            toApp(context: context, title: "راهنمای کسب فراکوین"),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: BlocBuilder<FaracoinGuideCubit, FaracoinGuideState>(
                      bloc: _cubit,
                      buildWhen: (previous, current) =>
                          previous is! FaracoinGuideGeneral,
                      builder: (context, state) {
                        if (state is FaracoinGuideLoading) {
                          return Text('loading');
                        }
                        if (state is FaracoinGuideError) {
                          return Text('error');
                        }

                        final playerController = VideoPlayerController.network(
                          (state as FaracoinGuideGeneral).videoLink,
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
                                height: 15,
                              ),
                              BlocBuilder<FaracoinGuideCubit,
                                  FaracoinGuideState>(
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
                                                alignment: Alignment.center,
                                                children: [
                                                  VideoPlayer(
                                                    playerController,
                                                  ),
                                                  if (!playerController
                                                      .value.isPlaying)
                                                    Center(
                                                      child: Container(
                                                        width: 60,
                                                        height: 60,
                                                        decoration: BoxDecoration(
                                                            color: const Color
                                                                    .fromARGB(
                                                                0, 0, 0, 0),
                                                            borderRadius:
                                                                BorderRadius
                                                                    .circular(
                                                                        100)),
                                                        child: Center(
                                                                child:
                                                                    Container())
                                                            .blurred(
                                                          colorOpacity: 0.1,
                                                          borderRadius:
                                                              BorderRadius
                                                                  .circular(
                                                                      100),
                                                          //color: SolidColors.blurBlu,
                                                          blurColor:
                                                              SolidColors.white,
                                                        ),
                                                      ),
                                                    ),
                                                  if (!playerController
                                                      .value.isPlaying)
                                                    Center(
                                                      child: Padding(
                                                        padding:
                                                            const EdgeInsets
                                                                .only(left: 6),
                                                        child: Image.asset(
                                                            Assets.icons
                                                                .polygon1.path),
                                                      ),
                                                    ),
                                                ],
                                              ).toClick(onTap: () {
                                                if (playerController
                                                    .value.isPlaying) {
                                                  playerController
                                                      .pause()
                                                      .then((value) {
                                                    setState(() {});
                                                  });
                                                } else {
                                                  playerController
                                                      .play()
                                                      .then((value) {
                                                    setState(() {});
                                                  });
                                                }
                                              })
                                            : playerController.value.hasError
                                                ? Center(
                                                    child:
                                                        Text('error in video'))
                                                : Center(
                                                    child:
                                                        Text('loading video')));
                                  });
                                },
                              ),
                              const SizedBox(
                                height: 40,
                              ),
                              Padding(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 22),
                                  child: Text(state.text)),
                              const SizedBox(
                                height: 150,
                              ),

                            ],
                          ),
                        );
                      },
                    ),
                  ),
                  NavBar(size: size),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
