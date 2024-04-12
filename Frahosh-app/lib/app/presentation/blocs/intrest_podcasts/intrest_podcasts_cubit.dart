import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/podcast.dart';
import 'package:meta/meta.dart';

part 'intrest_podcasts_state.dart';

class IntrestPodcastsCubit extends Cubit<IntrestPodcastsState> {
  IntrestPodcastsCubit() : super(IntrestPodcastsInitial());

  void load() {
    if (state is IntrestPodcastsInitial) {
      API.intPodcasts().then((value) {
        emit(IntrestPodcastsLoaded((value.data?['data'] as List)
            .map((e) => PodcastObject.fromMap(e))
            .toList()));
      }).catchError((_) {});
    }
  }

  void deleteFromInt(String id) {
    final l = (state as IntrestPodcastsLoaded).list;
    l.removeWhere((element) => element.id == id);
    emit(IntrestPodcastsLoaded(l));
    API.deletePodcastFromInt(id).then((value) {}).catchError((_) {});
  }

  void addToInt(PodcastObject podcastObject) {
    emit(IntrestPodcastsLoaded(
        [...(state as IntrestPodcastsLoaded).list, podcastObject]));
    API
        .addPodcastToInt(int.parse(podcastObject.id))
        .then((value) {})
        .catchError((_) {});
  }
}
