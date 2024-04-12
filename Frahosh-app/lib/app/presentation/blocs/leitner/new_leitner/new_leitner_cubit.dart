import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'new_leitner_state.dart';

class NewLeitnerCubit extends Cubit<NewLeitnerState> {
  NewLeitnerCubit() : super(NewLeitnerInitial());

  Future<bool?> addLeitner(String id, String front, String back) async {
    if (state is! NewLeitnerLoading) {
      emit(NewLeitnerLoading());
      try {
        await API.addLeitnerItem(id, front, true);
        await API.addLeitnerItem(id, back, false);
        return true;
      } catch (_) {
        print((_ as DioError).requestOptions.data);
        print((_ as DioError).requestOptions.path);

        return false;
      }
    }
    return null;
  }
}
