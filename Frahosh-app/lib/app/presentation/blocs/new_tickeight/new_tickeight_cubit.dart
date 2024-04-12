import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'new_tickeight_state.dart';

class NewTickeightCubit extends Cubit<NewTickeightState> {
  final String id;
  NewTickeightCubit(this.id) : super(NewTickeightInitial());

  Future<bool?> addTickeight(String eng, String per) async {
    if (state is! NewTickeightLoading) {
      emit(NewTickeightLoading());
      try {
        await API.addTickeightItem(id, eng, per);
        return true;
      } catch (_) {
        emit(NewTickeightInitial());
        return false;
      }
    }
    return null;
  }
}
