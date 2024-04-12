part of 'counsels_cubit.dart';

@immutable
abstract class CounselsState {}

class CounselsLoading extends CounselsState {}

class CounselsError extends CounselsState {}

class CounselsGeneral extends CounselsState {
  final UnmodifiableListView<CounselObject> counsels;

  CounselsGeneral(List<CounselObject> counsels)
      : counsels = UnmodifiableListView(counsels);
}
