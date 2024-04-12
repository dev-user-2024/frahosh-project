import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

import '../../../api.dart';
import '../utils.dart';

part 'faracoin_state.dart';

class FaracoinCubit extends Cubit<FaracoinState> {
  FaracoinCubit() : super(FaracoinInitial());

  void updateBalance() {
    if (state is! FaracoinLoading) {
      API.faracoinBalance().then((value) {
        emit(FaracoinGeneral(
            int.tryParse((value.data?['total_coin']).toString()) ?? 0));
      }).catchError((_) {
        emit(FaracoinGeneral(0));
      });
    }
  }
}
