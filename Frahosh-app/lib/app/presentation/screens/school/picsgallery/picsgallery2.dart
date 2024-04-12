import 'dart:collection';
import 'package:blur/blur.dart';
import 'package:farahoosh/app/presentation/blocs/gallery/gallery_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:share_plus/share_plus.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import '../../../modules/const/datacolors.dart';
import 'package:overlay_group_avatar/overlay_group_avatar.dart';

class PicsGallery2 extends StatelessWidget {
  final UnmodifiableListView<String> _imageURLs;
  PicsGallery2(this._imageURLs, {super.key});

  final PageController _pageController = PageController();
  final GalleryCubit _cubit = GalleryCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "گالری تصاویر"),
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
                    Stack(
                      alignment: Alignment.bottomCenter,
                      children: [
                        SizedBox(
                          height: size.width / 1.5,
                          width: size.width,
                          child: PageView(
                            controller: _pageController,
                            onPageChanged: (value) {
                              _cubit.select(value);
                            },
                            children: _imageURLs
                                .map((e) => e.toNetworkImage())
                                .toList(),
                          ),
                        ),
                        SmoothPageIndicator(
                            controller: _pageController,
                            count: _imageURLs.length)
                      ],
                    ),
                    Container(
                      height: 35,
                      width: size.width,
                      color: SolidColors.blue,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            children: [
                              DataImages.hart.toSvgImage(),
                              OverlapAvatar(
                                  insideRadius: 21,
                                  outSideRadius: 12,
                                  widthFactor: 0.6,
                                  itemCount: 5,
                                  groupWidth: 90,
                                  backgroundImage: const NetworkImage(
                                    'https://www.shutterstock.com/image-vector/african-bearded-man-wearing-tshirt-260nw-1476685571.jpg',
                                  ),
                                  backgroundColor: Colors.white),
                              const Text(
                                '+ 52  دیگر این تصویر را پسندیدند',
                                style: TextStyle(
                                    fontSize: 11, color: SolidColors.white),
                              ),
                            ],
                          ),
                          DataImages.share.toSvgImage().toClick(
                            onTap: () {
                              Share.share(_imageURLs[
                                  _pageController.page?.toInt() ?? 0]);
                            },
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Container(
                      margin: const EdgeInsets.only(top: 20),
                      height: 73,
                      width: size.width,
                      child: BlocBuilder<GalleryCubit, GalleryState>(
                        bloc: _cubit,
                        builder: (context, state) {
                          return ListView.builder(
                            scrollDirection: Axis.horizontal,
                            itemCount: _imageURLs.length,
                            itemBuilder: (context, index) {
                              return index == state.selectedIndex
                                  ? Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 20),
                                      child: SizedBox(
                                        height: 73,
                                        width: 73,
                                        child: ClipRRect(
                                          borderRadius: const BorderRadius.all(
                                              Radius.circular(15)),
                                          child: _imageURLs[index]
                                              .toNetworkImage(),
                                        ),
                                      ),
                                    )
                                  : Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 5),
                                      child: SizedBox(
                                        height: 73,
                                        width: 73,
                                        child: Container(
                                                decoration: BoxDecoration(
                                                    color: const Color.fromARGB(
                                                        0, 0, 0, 0),
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                            50)),
                                                child: _imageURLs[index]
                                                    .toNetworkImage())
                                            .blurred(
                                          colorOpacity: 0.1,
                                          borderRadius:
                                              BorderRadius.circular(15),
                                          blurColor: SolidColors.white,
                                        ),
                                      ),
                                    );
                            },
                          );
                        },
                      ),
                    ),
                    const SizedBox(height: 150,)
                  ],
                )),
                NavBar(size: size)
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
