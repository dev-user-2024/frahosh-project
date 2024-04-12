import 'dart:collection';
import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';
part 'heart_writes_state.dart';

class HeartWritesCubit extends Cubit<HeartWritesState> {
  HeartWritesCubit() : super(HeartWritesLoading()) {
    load();
  }

  void load() {
    if (state is! HeartWritesLoading) {
      emit(HeartWritesLoading());
    }
    API.heartWrites().then((value) {
      emit(HeartWritesGeneral((value.data?['data'] as List)
          .map((e) => HeartWriteGroupObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(HeartWritesError());
    });
  }

  void addBox(String text) {}
}

class HeartWriteGroupObject {
  final String id;
  final String date;

  HeartWriteGroupObject.fromMap(Map map)
      : id = map['id'].toString(),
        date = map['date_register'].toString();

  String get formattedDate => dateFormat(date);
}
