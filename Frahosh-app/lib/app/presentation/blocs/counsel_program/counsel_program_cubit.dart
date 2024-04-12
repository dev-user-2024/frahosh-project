import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/presentation/blocs/program_item.dart';
import 'package:meta/meta.dart';
import 'package:shamsi_date/shamsi_date.dart';

part 'counsel_program_state.dart';

class CounselProgramCubit extends Cubit<CounselProgramState> {
  CounselProgramCubit() : super(CounselProgramInitial(Jalali.now())) {
    _load();
  }

  void _load() {}
}
