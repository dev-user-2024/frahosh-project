import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'gallery_state.dart';

class GalleryCubit extends Cubit<GalleryState> {
  GalleryCubit() : super(const GalleryInitial());

  void select(int index) => emit(GalleryGeneral(index));
}
