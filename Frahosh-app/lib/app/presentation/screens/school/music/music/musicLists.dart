import 'package:farahoosh/app/presentation/blocs/school_musics/school_musics_cubit.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../../gen/assets.gen.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../../modules/widgets/list/partOfListWidget.dart';

class MusicLists extends StatelessWidget {
  MusicLists({super.key});
  final SchoolMusicsCubit _cubit = SchoolMusicsCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return WillPopScope(
      onWillPop: () async {
        _cubit.disposeMusic();
        return true;
      },
      child: SafeArea(
        child: Scaffold(
          body: Container(
            color: SolidColors.backgroundColor,
            child: Column(
              children: [
                // appbar
                toApp(context: context, title: "لیست موسیقی‌ها"),

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
                      hintText: "موسیقی مورد نظرت رو جست و جو کن...",
                      prefixIcon: Image.asset(Assets.icons.microphoneIcon.path),
                      suffixIcon: Image.asset(Assets.icons.searchIcon.path),
                    ),
                  ),
                ),

                Expanded(
                  child: Stack(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(bottom: 150),
                        child: BlocBuilder<SchoolMusicsCubit, SchoolMusicsState>(
                          bloc: _cubit,
                          builder: (context, state) {
                            if (state is SchoolMusicsLoading) {
                              return Text('loading');
                            }
                            if (state is SchoolMusicsError) {
                              return Text('error');
                            }
                            return ListView(
                              children: (state as SchoolMusicsGeneral)
                                  .musics
                                  .map(
                                    (e) => Padding(
                                      padding: const EdgeInsets.all(20),
                                      child: PartOfListWidget(
                                        size: size,
                                        title: e.title,
                                        albomNameOrDate: e.date,
                                        releaseName: "بارگذاری توسط مدرسه",
                                        hasReleaseName: true,
                                        textTheme: textTheme,
                                        playing: state.playingID == e.id,
                                      ).toClick(
                                        onTap: () {
                                          _cubit.click(e.id);
                                        },
                                      ),
                                    ),
                                  )
                                  .toList(),
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
          ),
        ),
      ),
    );
  }
}
