import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'new_leitner_state.dart';

class NewLeitnerCubit extends Cubit<NewLeitnerState> {
  final String id;
  NewLeitnerCubit(this.id) : super(NewLeitnerInitial());

  Future<bool?> addLeitner(String front, String back) async {
    if (state is! NewLeitnerLoading) {
      emit(NewLeitnerLoading());
      try {
        await API.addLeitnerItem(id, front, true);
        await API.addLeitnerItem(id, back, false);
        return true;
      } catch (_) {
        return false;
      }
    }
    return null;
  }
}
