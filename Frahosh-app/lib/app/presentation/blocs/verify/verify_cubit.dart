import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'verify_state.dart';

class VerifyCubit extends Cubit<VerifyState> {
  VerifyCubit() : super(const VerifyInitial());

  void editCode(String code) => emit(VerifyGeneralState(code));
}
