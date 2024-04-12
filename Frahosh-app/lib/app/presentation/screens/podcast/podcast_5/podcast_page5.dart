import 'package:farahoosh/app/presentation/blocs/intrest_podcasts/intrest_podcasts_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/podcast/podcast_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/podcasts/podcasts_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/modules/widgets/textField/TextFieldwidget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../blocs/podcast.dart';
import '../../../blocs/settings/settings_cubit.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../modules/widgets/ratingstar.dart';

class PodcastPage5 extends StatelessWidget {
  final PodcastObject podcast;
  final PodcastCubit _cubit;
  PodcastPage5(this.podcast) : _cubit = PodcastCubit(podcast);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: WillPopScope(
        onWillPop: () async {
          _cubit.disposeMusic();
          return true;
        },
        child: Scaffold(
          body: Container(
            color: SolidColors.backgroundColor,
            child: Column(children: [
              toApp(context: context, title: "پادکست"),
              Expanded(
                child: Stack(children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        //    crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          Container(
                            height: 320,
                            width: size.width,
                            decoration: BoxDecoration(
                              borderRadius:
                                  const BorderRadius.all(Radius.circular(15)),
                              border: Border.all(
                                  color: SolidColors.grey, width: 0.1),
                              gradient: const LinearGradient(
                                  begin: Alignment.topCenter,
                                  end: Alignment.bottomCenter,
                                  colors: [
                                    SolidColors.blue,
                                    SolidColors.backgroundColor,
                                  ]),
                            ),
                            child: podcast.imageURL.toNetworkImage(),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          SizedBox(
                            width: size.width,
                            child: Column(
                              children: [
                                Padding(
                                  padding:
                                      const EdgeInsets.only(top: 10, right: 5),
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text(
                                        podcast.name,
                                        style: textTheme.bodyText1,
                                      ),
                                      ratingstar(),
                                    ],
                                  ),
                                ),
                                const SizedBox(
                                  height: 10,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    SizedBox(
                                      height: 50,
                                      width: size.width / 2.5,
                                      // child: Text(
                                      //   'مصاحبه با علی محمدی رتبه یک ریاضی',
                                      //   textDirection: TextDirection.rtl,
                                      //   style:
                                      //       Theme.of(context).textTheme.subtitle1,
                                      // ),
                                    ),
                                    Text('4.6 از 154 نفر',
                                        textDirection: TextDirection.rtl,
                                        style: Theme.of(context)
                                            .textTheme
                                            .bodyText1),
                                  ],
                                ),
                                const SizedBox(
                                  height: 25,
                                ),
                                SizedBox(
                                  width: size.width,
                                  child: Text(
                                    podcast.description,
                                    textDirection: TextDirection.rtl,
                                    style:
                                        Theme.of(context).textTheme.subtitle1,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          Container(
                            height: 6,
                            width: size.width,
                            decoration: const BoxDecoration(
                              borderRadius:
                                  BorderRadius.all(Radius.circular(15)),
                            ),
                            child: BlocBuilder<PodcastCubit, PodcastState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                if (state is PodcastPlaying) {
                                  return LinearProgressIndicator(
                                    value: state.seekPosition / state.maxLength,
                                    color: const Color.fromARGB(
                                        255, 224, 224, 224),
                                    backgroundColor: SolidColors.blue,
                                    minHeight: 2,
                                  );
                                }
                                if (state is PodcastStoped) {
                                  return LinearProgressIndicator(
                                    value: state.seekPosition / state.maxLength,
                                    color: const Color.fromARGB(
                                        255, 224, 224, 224),
                                    backgroundColor: SolidColors.blue,
                                    minHeight: 2,
                                  );
                                }
                                return const LinearProgressIndicator(
                                  value: 0,
                                  color: Color.fromARGB(255, 224, 224, 224),
                                  backgroundColor: SolidColors.blue,
                                  minHeight: 2,
                                );
                              },
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 10),
                            child: BlocBuilder<PodcastCubit, PodcastState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                return Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      state.maxString,
                                      textDirection: TextDirection.rtl,
                                      style: TextStyle(
                                        fontSize: 10,
                                        color: SolidColors.grey,
                                        fontFamily: 'IRANSansXV',
                                        fontWeight: FontWeight.w400,
                                      ),
                                    ),
                                    Text(
                                      state is PodcastPlaying
                                          ? state.seekString
                                          : state is PodcastStoped
                                              ? state.seekString
                                              : '00:00:00',
                                      textDirection: TextDirection.rtl,
                                      style: const TextStyle(
                                        fontSize: 10,
                                        color: SolidColors.grey,
                                        fontFamily: 'IRANSansXV',
                                        fontWeight: FontWeight.w400,
                                      ),
                                    ),
                                  ],
                                );
                              },
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Column(
                            children: [
                              toVerticalSpaces,
                              Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  SizedBox(
                                    height: 50,
                                    width: 290,
                                    child: Stack(
                                      children: [
                                        Center(
                                          child: Container(
                                            height: 35,
                                            width: 290,
                                            decoration: BoxDecoration(
                                              // color: SolidColors.blue,
                                              border: Border.all(
                                                  color: SolidColors.blue),
                                              borderRadius:
                                                  BorderRadius.circular(40),
                                            ),
                                          ),
                                        ),

                                        // play button
                                        Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          children: [
                                            Stack(
                                              children: [
                                                Container(
                                                  height: 50,
                                                  width: 50,
                                                  decoration: BoxDecoration(
                                                    color: SolidColors.blue,
                                                    border: Border.all(
                                                        color:
                                                            SolidColors.white),
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                            100),
                                                  ),
                                                ),
                                                Center(
                                                  child: Padding(
                                                      padding:
                                                          const EdgeInsets.only(
                                                              right: 15.5),
                                                      child: BlocBuilder<
                                                          PodcastCubit,
                                                          PodcastState>(
                                                        bloc: _cubit,
                                                        builder:
                                                            (context, state) {
                                                          if (state
                                                              is PodcastPlaying) {
                                                            return const Icon(
                                                              Icons.pause,
                                                              color:
                                                                  Colors.white,
                                                              size: 15,
                                                            );
                                                          }
                                                          return DataImages
                                                              .playIcon
                                                              .toPNGImage(
                                                                  size: 15);
                                                        },
                                                      )),
                                                ),
                                              ],
                                            ).toClick(
                                              onTap: () {
                                                _cubit.playButton();
                                              },
                                            ),
                                          ],
                                        ),

                                        Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceBetween,
                                          children: [
                                            DataImages.musicPlaylist
                                                .toPNGImage(size: 20),
                                            SizedBox(
                                              width: 21,
                                              height: 21,
                                              child: Stack(
                                                children: [
                                                  DataImages.refreshRight
                                                      .toPNGImage(size: 21),
                                                  const Center(
                                                      child: Text(
                                                    "۱۰",
                                                    style: TextStyle(
                                                        fontFamily:
                                                            "IRANSansXV",
                                                        fontSize: 9,
                                                        color: SolidColors
                                                            .textTitleBlac,
                                                        fontWeight:
                                                            FontWeight.bold),
                                                  ))
                                                ],
                                              ),
                                            ).toClick(
                                              onTap: () {
                                                _cubit.seekForward();
                                              },
                                            ),
                                            Container(),
                                            SizedBox(
                                              width: 21,
                                              height: 21,
                                              child: Stack(
                                                children: [
                                                  DataImages.refreshLeft
                                                      .toPNGImage(size: 21),
                                                  const Center(
                                                      child: Text(
                                                    "۱۰",
                                                    style: TextStyle(
                                                        fontFamily:
                                                            "IRANSansXV",
                                                        fontSize: 9,
                                                        color: SolidColors
                                                            .textTitleBlac,
                                                        fontWeight:
                                                            FontWeight.bold),
                                                  ))
                                                ],
                                              ),
                                            ).toClick(
                                              onTap: () {
                                                _cubit.seekBack();
                                              },
                                            ),
                                            BlocBuilder<IntrestPodcastsCubit,
                                                IntrestPodcastsState>(
                                              builder: (context, state) {
                                                final intre = (state
                                                        as IntrestPodcastsLoaded)
                                                    .isIntrest(podcast.id);
                                                return DataImages.heartImage
                                                    .toPNGImage(
                                                        size: 20,
                                                        color: intre
                                                            ? Colors.red
                                                            : null)
                                                    .toClick(
                                                  onTap: () {
                                                    if (intre) {
                                                      context
                                                          .read<
                                                              IntrestPodcastsCubit>()
                                                          .deleteFromInt(
                                                              podcast.id);
                                                    } else {
                                                      context
                                                          .read<
                                                              IntrestPodcastsCubit>()
                                                          .addToInt(podcast);
                                                    }
                                                  },
                                                );
                                              },
                                            )
                                          ],
                                        ).toSymmetric(H: 25.0)
                                      ],
                                    ),
                                  ),
                                ],
                              ).toOnly(B: 30.0, R: 20.0),
                            ],
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              SizedBox(
                                width: size.width / 2.35,
                                height: 50,
                                child: const ButtonWidget(
                                  title: 'ثبت',
                                  mainColor: true,
                                ),
                              ),
                              const SizedBox(
                                width: 20,
                              ),
                              SizedBox(
                                width: size.width / 2.35,
                                height: 50,
                                child: const ButtonWidget(
                                  title: 'لغو',
                                  mainColor: false,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 60,
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            child: SizedBox(
                              width: size.width,
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.end,
                                children: [
                                  Align(
                                      alignment: Alignment.centerRight,
                                      child: Text(
                                        'خلاصه',
                                        style: textTheme.headline1,
                                      )),
                                  const SizedBox(
                                    height: 10,
                                  ),
                                  Text(
                                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
                                    textDirection: TextDirection.rtl,
                                    textAlign: TextAlign.right,
                                    style:
                                        Theme.of(context).textTheme.bodyText1,
                                  ),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 42,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                "لطفا امتیاز و نظرت رو ثبت کن",
                                style: textTheme.bodyText1,
                              ),
                              ratingstar(),
                            ],
                          ),
                          const SizedBox(
                            height: 15,
                          ),
                          Container(
                            decoration: BoxDecoration(
                              color: SolidColors.white,
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: const TextFieldWidget(
                              labelText: "",
                              minLines: 8,
                              borderSideColor: SolidColors.black,
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          SizedBox(
                            width: size.width,
                            height: 50,
                            child: const ButtonWidget(
                              title: "ثبت",
                              mainColor: true,
                            ),
                          ),
                          const SizedBox(
                            height: 50,
                          ),
                          Align(
                              alignment: Alignment.centerRight,
                              child: Text(
                                "نظرات و امتیازها",
                                style: textTheme.subtitle1,
                              )),
                          const SizedBox(
                            height: 20,
                          ),
                          Container(
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: context
                          .watch<SettingsCubit>()
                          .state
                          .selectedPrimaryColor, width: 0.3)),
                            child: Column(
                              children: [
                                Padding(
                                  padding: const EdgeInsets.all(20),
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text(
                                        "سحر مرادی",
                                        style: textTheme.bodyText1,
                                      ),
                                      Row(
                                        children: [
                                          Text(
                                            "4.5",
                                            style: textTheme.bodyText1,
                                          ),
                                          const SizedBox(
                                            width: 10,
                                          ),
                                          ratingstar(),
                                        ],
                                      ),
                                    ],
                                  ),
                                ),

                                // SizedBox(height: 20),
                                Padding(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 5, vertical: 20),
                                  child: SizedBox(
                                    width: size.width,
                                    child: Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
                                        textDirection: TextDirection.rtl,
                                        style: Theme.of(context)
                                            .textTheme
                                            .subtitle1,
                                      ),
                                    ),
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
