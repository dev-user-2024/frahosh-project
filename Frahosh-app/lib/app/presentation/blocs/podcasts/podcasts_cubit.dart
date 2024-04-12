import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

import '../podcast.dart';

part 'podcasts_state.dart';

class PodcastsCubit extends Cubit<PodcastsState> {
  PodcastsCubit() : super(PodcastsLoading()) {
    _load();
  }

  void _load() {
    API.podcastCats().then((value) {
      if ((value.data?['data'] as List).isEmpty) {
        return emit(PodcastsError());
      }

      emit(PodcastsOnlyCatsLoaded(
          (value.data?['data'] as List)
              .map((e) => PodcastCategoryObject.fromMap(e))
              .toList(),
          0));
      selectCat(
          PodcastCategoryObject.fromMap((value.data?['data'] as List).first)
              .id);
    }).catchError((_) {
      emit(PodcastsError());
    });
  }

  void toSearchMode() {
    emit(PodcastsSearching(const []));
  }

  void search(String exp) {
    print(exp);
    API.searchPodcast(exp).then((value) {
      emit(PodcastsSearching((value.data?['data'] as List)
          .map((e) => PodcastObject.fromMap(e))
          .toList()));
    }).catchError((_) {});
  }

  void unSearch() {
    emit(PodcastsLoading());
    _load();
  }

  void selectCat(String id) {
    if (state is PodcastsGeneral) {
      emit(PodcastsOnlyCatsLoaded((state as PodcastsGeneral).cats,
          (state as PodcastsGeneral).selectedCatIndex));
      final index = (state as PodcastsGeneral)
          .cats
          .indexWhere((element) => element.id == id);

      API.podcasts(id).then((value) {
        emit(PodcastsGeneral(
            (state as PodcastsGeneral).cats,
            (value.data?['data'] as List)
                .map((e) => PodcastObject.fromMap(e))
                .toList(),
            index == -1 ? (state as PodcastsGeneral).selectedCatIndex : index));
      }).catchError((_) {
        emit(PodcastsError());
      });
    }
  }
}

class PodcastCategoryObject {
  final String id;
  final String name;
  PodcastCategoryObject.fromMap(Map map)
      : id = map['id'].toString(),
        name = map['category_title'].toString();
}
