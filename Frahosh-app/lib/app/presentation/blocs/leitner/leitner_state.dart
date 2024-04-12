part of 'leitner_cubit.dart';

@immutable
abstract class LeitnerState {}

class LeitnerLoading extends LeitnerState {}

class LeitnerGeneral extends LeitnerState {
  final UnmodifiableListView<LeitnerObject> leitners;
  final int? _selectedItem;

  LeitnerGeneral(List<LeitnerObject> leitners, this._selectedItem)
      : leitners = UnmodifiableListView(leitners);

  String get selectedID =>
      _selectedItem == null ? 'خالی' : leitners[_selectedItem!].id;
  String get selectedFront =>
      _selectedItem == null ? 'خالی' : leitners[_selectedItem!].front;
  String get selectedBack =>
      _selectedItem == null ? 'خالی' : leitners[_selectedItem!].back;
}

class LeitnerError extends LeitnerState {}
