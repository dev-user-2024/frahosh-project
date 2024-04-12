part of 'new_handout_cubit.dart';

@immutable
abstract class NewHandoutState {
  final int selectedGrade;

  NewHandoutState(this.selectedGrade);
}

class NewHandoutWithoutFile extends NewHandoutState {
  NewHandoutWithoutFile(super.selectedGrade);
}

class NewHandoutInitial extends NewHandoutWithoutFile {
  NewHandoutInitial() : super(8);
}

class NewHandoutWithFile extends NewHandoutState {
  final String filePath;

  NewHandoutWithFile(this.filePath, super.selectedGrade);
}

class NewHandoutLoading extends NewHandoutState {
  NewHandoutLoading(super.selectedGrade);
}
