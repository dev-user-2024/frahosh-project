part of 'school_gallery_groups_cubit.dart';

@immutable
abstract class SchoolGalleryGroupsState {}

class SchoolGalleryGroupsLoading extends SchoolGalleryGroupsState {}

class SchoolGalleryGroupsError extends SchoolGalleryGroupsState {}

class SchoolGalleryGroupsGeneral extends SchoolGalleryGroupsState {
  final UnmodifiableListView<SchoolGalleryGroupObject> galleries;

  SchoolGalleryGroupsGeneral(List<SchoolGalleryGroupObject> galleries)
      : galleries = UnmodifiableListView(galleries);
}
