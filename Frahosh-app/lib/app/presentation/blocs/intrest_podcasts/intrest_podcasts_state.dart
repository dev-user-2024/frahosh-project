part of 'intrest_podcasts_cubit.dart';

@immutable
abstract class IntrestPodcastsState {}

class IntrestPodcastsInitial extends IntrestPodcastsState {}

class IntrestPodcastsLoaded extends IntrestPodcastsState {
  final List<PodcastObject> list;

  IntrestPodcastsLoaded(this.list);

  bool isIntrest(String id) => list.any((element) => element.id == id);
}
