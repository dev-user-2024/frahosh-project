import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/presentation/blocs/program_item.dart';
import 'package:meta/meta.dart';
import 'package:shamsi_date/shamsi_date.dart';

part 'farahoosh_program_state.dart';

class FarahooshProgramCubit extends Cubit<FarahooshProgramState> {
  FarahooshProgramCubit() : super(FarahooshProgramInitial(Jalali.now())) {
    _load();
  }

  void _load() {}
}
