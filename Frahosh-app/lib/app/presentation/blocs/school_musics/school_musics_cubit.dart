import 'dart:collection';

import 'package:audioplayers/audioplayers.dart';
import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'school_musics_state.dart';

class SchoolMusicsCubit extends Cubit<SchoolMusicsState> {
  final AudioPlayer _player = AudioPlayer();

  SchoolMusicsCubit() : super(SchoolMusicsLoading()) {
    _load();
  }

  void _load() {
    API.schoolMusics().then((value) {
      emit(SchoolMusicsGeneral((value.data?['data'] as List)
          .map((e) => SchoolMusicObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(SchoolMusicsError());
    });
  }

  void disposeMusic() {
    _player.dispose();
  }

  void click(String id) {
    if (state is SchoolMusicsGeneral) {
      if ((state as SchoolMusicsGeneral).playingID == null) {
        _player.play(UrlSource((state as SchoolMusicsGeneral)
            .musics
            .firstWhere((element) => element.id == id)
            .url));
        emit(SchoolMusicsGeneral((state as SchoolMusicsGeneral).musics,
            playingID: id));
      } else {
        if ((state as SchoolMusicsGeneral).playingID == id) {
          _player.pause();
          emit(SchoolMusicsGeneral((state as SchoolMusicsGeneral).musics,
              pausedID: id));
        } else if ((state as SchoolMusicsGeneral).pausedID == id) {
          _player.resume();
          emit(SchoolMusicsGeneral((state as SchoolMusicsGeneral).musics,
              playingID: id));
        } else {
          _player.play(UrlSource((state as SchoolMusicsGeneral)
              .musics
              .firstWhere((element) => element.id == id)
              .url));
          emit(SchoolMusicsGeneral((state as SchoolMusicsGeneral).musics,
              playingID: id));
        }
      }
    }
  }
}

class SchoolMusicObject {
  final String id;
  final String title;
  final String url;
  final String date;

  SchoolMusicObject.fromMap(Map map)
      : id = map['id'].toString(),
        title = map['title_audio'].toString(),
        url = map['audio_link'].toString(),
        date = map['date_audio'].toString().replaceAll('-', '/');
}
