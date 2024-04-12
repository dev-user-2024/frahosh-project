part of 'podcasts_cubit.dart';

@immutable
abstract class PodcastsState {}

class PodcastsLoading extends PodcastsState {}

class PodcastsError extends PodcastsState {}

class PodcastsSearching extends PodcastsState {
  final UnmodifiableListView<PodcastObject> podcasts;
  PodcastsSearching(List<PodcastObject> podcasts)
      : podcasts = UnmodifiableListView(podcasts);
}

class PodcastsOnlyCatsLoaded extends PodcastsGeneral {
  PodcastsOnlyCatsLoaded(List<PodcastCategoryObject> cats, int selectedCatIndex)
      : super(cats, [], selectedCatIndex);
}

class PodcastsGeneral extends PodcastsState {
  final UnmodifiableListView<PodcastCategoryObject> cats;
  final UnmodifiableListView<PodcastObject> podcasts;
  final int selectedCatIndex;

  PodcastsGeneral(List<PodcastCategoryObject> cats,
      List<PodcastObject> podcasts, this.selectedCatIndex)
      : cats = UnmodifiableListView(cats),
        podcasts = UnmodifiableListView(podcasts);

  UnmodifiableListView<PodcastObject> get topView {
    final list = [...podcasts];
    list.sort(
      (a, b) => a.viewCount.compareTo(b.viewCount),
    );
    return UnmodifiableListView(list);
  }
}
