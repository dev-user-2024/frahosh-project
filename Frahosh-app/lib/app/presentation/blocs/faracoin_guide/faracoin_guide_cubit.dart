import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'faracoin_guide_state.dart';

class FaracoinGuideCubit extends Cubit<FaracoinGuideState> {
  FaracoinGuideCubit() : super(FaracoinGuideLoading()) {
    _loadData();
  }

  void updatedVideo() {
    if (state is FaracoinGuideGeneral) {
      emit(FaracoinGuideGeneral((state as FaracoinGuideGeneral).videoLink,
          (state as FaracoinGuideGeneral).text));
    }
  }

  void _loadData() {
    API.faracoinGuide().then((value) {
      emit(FaracoinGuideGeneral(
        (value.data?['data'][0]['video_link']).toString(),
        (value.data?['data'][0]['content']).toString(),
      ));
    }).catchError((_) {
      emit(FaracoinGuideError());
    });
  }
}
