import 'dart:convert';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'about_school_state.dart';

class AboutSchoolCubit extends Cubit<AboutSchoolState> {
  AboutSchoolCubit() : super(AboutSchoolLoading()) {
    _load();
  }

  void _load() {
    API.aboutSchool().then((value) {
      emit(AboutSchoolGeneral(value.data?['data'][0]));
    }).catchError((_) {
      emit(AboutSchoolError());
    });
  }

  void updatedVideo() {
    if (state is AboutSchoolGeneral) {
      emit(AboutSchoolGeneral((state as AboutSchoolGeneral)._data));
    }
  }
}
