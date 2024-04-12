import 'dart:async';

import 'package:audioplayers/audioplayers.dart';
import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/presentation/blocs/podcast.dart';
import 'package:meta/meta.dart';

part 'podcast_state.dart';

class PodcastCubit extends Cubit<PodcastState> {
  final AudioPlayer _player = AudioPlayer();
  final PodcastObject _podcastObject;
  PodcastCubit(this._podcastObject) : super(const PodcastLoading());

  bool loadingAudio = false;

  Timer? timer;

  void startTimer() {
    timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (state is PodcastPlaying) {
        emit(PodcastPlaying((state as PodcastPlaying).maxLength,
            (state as PodcastPlaying).seekPosition + 1));
      }
    });
  }

  void stopTimer() {
    timer?.cancel();
    timer = null;
  }

  void disposeMusic() {
    timer?.cancel();
    _player.dispose();
  }

  void playButton() {
    if (state is PodcastLoading && !loadingAudio) {
      loadingAudio = true;
      emit(const PodcastPlaying(1, 0));
      _player.play(UrlSource(_podcastObject.audioURL)).then((value) {
        _player.pause();
        _player.getDuration().then((value) {
          emit(PodcastPlaying(value?.inSeconds ?? 0, 0));
          _player.resume();
          startTimer();
          loadingAudio = false;
        });
      });
    } else if (state is PodcastPlaying && !loadingAudio) {
      loadingAudio = true;
      _player.pause();
      stopTimer();
      _player.getCurrentPosition().then(
        (value) {
          emit(PodcastStoped(
              (state as PodcastPlaying).maxLength, value?.inSeconds ?? 0));
          loadingAudio = false;
        },
      );
    } else if (state is PodcastStoped && !loadingAudio) {
      _player.resume();
      emit(PodcastPlaying((state as PodcastStoped).maxLength,
          (state as PodcastStoped).seekPosition));
      startTimer();
    }
  }

  void seekForward() {
    if (state is PodcastPlaying) {
      if ((state as PodcastPlaying).maxLength -
              (state as PodcastPlaying).seekPosition >
          10) {
        _player.seek(
            Duration(seconds: (state as PodcastPlaying).seekPosition + 10));
        emit(PodcastPlaying((state as PodcastPlaying).maxLength,
            (state as PodcastPlaying).seekPosition + 10));
      }
    } else if (state is PodcastStoped) {
      if ((state as PodcastStoped).maxLength -
              (state as PodcastStoped).seekPosition >
          10) {
        _player.seek(
            Duration(seconds: (state as PodcastStoped).seekPosition + 10));
        emit(PodcastStoped((state as PodcastStoped).maxLength,
            (state as PodcastStoped).seekPosition + 10));
      }
    }
  }

  void seekBack() {
    if (state is PodcastPlaying) {
      if ((state as PodcastPlaying).seekPosition > 10) {
        _player.seek(
            Duration(seconds: (state as PodcastPlaying).seekPosition - 10));
        emit(PodcastPlaying((state as PodcastPlaying).maxLength,
            (state as PodcastPlaying).seekPosition - 10));
      }
    } else if (state is PodcastStoped) {
      if ((state as PodcastStoped).maxLength -
              (state as PodcastStoped).seekPosition >
          10) {
        _player.seek(
            Duration(seconds: (state as PodcastStoped).seekPosition - 10));
        emit(PodcastStoped((state as PodcastStoped).maxLength,
            (state as PodcastStoped).seekPosition - 10));
      }
    }
  }
}
