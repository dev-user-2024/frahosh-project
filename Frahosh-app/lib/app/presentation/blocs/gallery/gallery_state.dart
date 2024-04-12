part of 'gallery_cubit.dart';

@immutable
abstract class GalleryState {
  final int selectedIndex;

  const GalleryState(this.selectedIndex);
}

class GalleryInitial extends GalleryState {
  const GalleryInitial() : super(0);
}

class GalleryGeneral extends GalleryState {
  const GalleryGeneral(super.selectedIndex);
}
