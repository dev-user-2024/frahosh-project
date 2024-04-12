import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'counsels_state.dart';

class CounselsCubit extends Cubit<CounselsState> {
  CounselsCubit() : super(CounselsLoading()) {
    _load();
  }

  void _load() {
    API.counsels().then((value) {
      emit(CounselsGeneral((value.data?['data'] as List)
          .map((e) => CounselObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(CounselsError());
    });
  }
}

class CounselObject {
  final String id;
  final String image;
  final String fName;
  final String lName;

  CounselObject.fromMap(Map map)
      : id = map['id'].toString(),
        image = '${appBaseURL}image/users/${map['avatar']}',
        fName = map['Fname'].toString(),
        lName = map['Lname'].toString();
}
