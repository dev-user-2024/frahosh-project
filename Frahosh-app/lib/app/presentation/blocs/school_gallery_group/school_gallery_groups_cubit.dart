import 'dart:collection';
import 'dart:convert';

import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import '../../../api.dart';

part 'school_gallery_groups_state.dart';

class SchoolGalleryGroupsCubit extends Cubit<SchoolGalleryGroupsState> {
  SchoolGalleryGroupsCubit() : super(SchoolGalleryGroupsLoading()) {
    _load();
  }

  void _load() {
    API.schoolGalleryGroups().then((value) {
      emit(SchoolGalleryGroupsGeneral((value.data?['data'] as List)
          .map((e) => SchoolGalleryGroupObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(SchoolGalleryGroupsError());
    });
  }
}

class SchoolGalleryGroupObject {
  final String title;
  final UnmodifiableListView<String> groupImages;
  final UnmodifiableListView<String> images;
  SchoolGalleryGroupObject.fromMap(Map map)
      : title = map['title_galley'].toString(),
        groupImages = UnmodifiableListView((json
                .decode(map['image_group'].toString()) as List)
            .map<String>((e) => '${appBaseURL}image/school/gallery/group/$e')),
        images = UnmodifiableListView(
            (json.decode(map['image_gallery'].toString()) as List)
                .map<String>((e) => '${appBaseURL}image/school/gallery/$e'));
}
