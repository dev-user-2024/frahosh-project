import 'package:blur/blur.dart';
import 'package:farahoosh/app/presentation/blocs/school_gallery_group/school_gallery_groups_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/picsgallery/picsgallery2.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/const/datacolors.dart';

class PicsGallery1 extends StatelessWidget {
  PicsGallery1({Key? key}) : super(key: key);

  final SchoolGalleryGroupsCubit _cubit = SchoolGalleryGroupsCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: " گالری تصاویر"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  child: Column(
                    children: [
                      const SizedBox(
                        height: 20,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          DataImages.sort.toPNGImage(size: 22),
                          const SizedBox(
                            width: 8,
                          ),
                          Text(
                            'جدیدترین',
                            style: textTheme.bodyText1,
                          )
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      SizedBox(
                        height: size.height,
                        width: size.width,
                        child: BlocBuilder<SchoolGalleryGroupsCubit,
                            SchoolGalleryGroupsState>(
                          bloc: _cubit,
                          builder: (context, state) {
                            if (state is SchoolGalleryGroupsLoading) {
                              return Text('loading');
                            }
                            if (state is SchoolGalleryGroupsError) {
                              return Text('error');
                            }
                            return GridView(
                              gridDelegate:
                                  const SliverGridDelegateWithFixedCrossAxisCount(
                                crossAxisCount: 2,
                                mainAxisSpacing: 20,
                                crossAxisSpacing: 11,
                                // mainAxisExtent: 200
                              ),
                              children: (state as SchoolGalleryGroupsGeneral)
                                  .galleries
                                  .map((e) => Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: [
                                          Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Container(
                                                decoration: BoxDecoration(
                                                    borderRadius:
                                                        const BorderRadius.all(
                                                            Radius.circular(
                                                                15)),
                                                    border: Border.all(
                                                        color: SolidColors.blue,
                                                        width: 0.1),
                                                    color: SolidColors.white),
                                                child: Padding(
                                                  padding:
                                                      const EdgeInsets.all(7),
                                                  child: Column(children: [
                                                    Row(
                                                      mainAxisAlignment:
                                                          MainAxisAlignment
                                                              .spaceBetween,
                                                      children: [
                                                        _galerry(Builder(
                                                          builder: (context) {
                                                            try {
                                                              return e
                                                                  .groupImages[
                                                                      1]
                                                                  .toNetworkImage();
                                                            } catch (_) {
                                                              return const SizedBox();
                                                            }
                                                          },
                                                        )),
                                                        const SizedBox(
                                                          width: 10,
                                                        ),
                                                        _galerry(Builder(
                                                          builder: (context) {
                                                            try {
                                                              return e
                                                                  .groupImages[
                                                                      0]
                                                                  .toNetworkImage();
                                                            } catch (_) {
                                                              return const SizedBox();
                                                            }
                                                          },
                                                        )),
                                                      ],
                                                    ),
                                                    const SizedBox(
                                                      height: 10,
                                                    ),
                                                    Row(
                                                      children: [
                                                        if (e.images.length -
                                                                e.groupImages
                                                                    .length >
                                                            0)
                                                          SizedBox(
                                                            height: 65,
                                                            width: 65,
                                                            child: Stack(
                                                              alignment:
                                                                  Alignment
                                                                      .center,
                                                              children: [
                                                                Container(
                                                                  width: 65,
                                                                  height: 65,
                                                                  decoration: BoxDecoration(
                                                                      color: const Color
                                                                              .fromARGB(
                                                                          140,
                                                                          0,
                                                                          0,
                                                                          0),
                                                                      borderRadius:
                                                                          BorderRadius.circular(
                                                                              15)),
                                                                  child: Center(
                                                                      child:
                                                                          Builder(
                                                                    builder:
                                                                        (context) {
                                                                      try {
                                                                        return e
                                                                            .groupImages[3]
                                                                            .toNetworkImage();
                                                                      } catch (_) {
                                                                        return const SizedBox();
                                                                      }
                                                                    },
                                                                  )).blurred(
                                                                    colorOpacity:
                                                                        0.01,
                                                                    borderRadius:
                                                                        BorderRadius.circular(
                                                                            15),
                                                                    blurColor:
                                                                        SolidColors
                                                                            .white,
                                                                  ),
                                                                ),
                                                                Text(
                                                                    '${e.images.length - e.groupImages.length}+',
                                                                    style: textTheme
                                                                        .subtitle2),
                                                              ],
                                                            ),
                                                          )
                                                        else
                                                          _galerry(Builder(
                                                            builder: (context) {
                                                              try {
                                                                return e
                                                                    .groupImages[
                                                                        3]
                                                                    .toNetworkImage();
                                                              } catch (_) {
                                                                return const SizedBox();
                                                              }
                                                            },
                                                          )),
                                                        const SizedBox(
                                                          width: 10,
                                                        ),
                                                        _galerry(Builder(
                                                          builder: (context) {
                                                            try {
                                                              return e
                                                                  .groupImages[
                                                                      4]
                                                                  .toNetworkImage();
                                                            } catch (_) {
                                                              return const SizedBox();
                                                            }
                                                          },
                                                        )),
                                                      ],
                                                    ),
                                                  ]),
                                                ),
                                              ).toClick(onTap: (() {
                                                Navigator.of(context).push(
                                                    MaterialPageRoute(
                                                        builder: ((context) =>
                                                            PicsGallery2(
                                                                e.images))));
                                              })),
                                              Padding(
                                                padding: const EdgeInsets.only(
                                                    top: 5, right: 6),
                                                child: Text(
                                                  e.title,
                                                  style: textTheme.subtitle1,
                                                ),
                                              ),
                                            ],
                                          ),
                                        ],
                                      ))
                                  .toList(),
                            );
                          },
                        ),
                      ),
                      const SizedBox(height: 150,)
                    ],
                  ),
                ),
                NavBar(size: size)
              ]),
            ),
          ),
        ],
      ),
    ));
  }

  Widget _galerry(Widget image) {
    return SizedBox(
      height: 65,
      width: 65,
      child: ClipRRect(
          borderRadius: const BorderRadius.all(Radius.circular(15)),
          child: image),
    );
  }
}
