part of 'counsel_cubit.dart';

@immutable
abstract class CounselState {}

class CounselLoading extends CounselState {}

class CounselError extends CounselState {}

class CounselGeneral extends CounselState {
  final String myID;
  final UnmodifiableListView<RateObject> ratings;
  final UnmodifiableListView<ReserveObject> reserves;
  CounselGeneral(
      List<RateObject> ratings, List<ReserveObject> reserves, this.myID)
      : ratings = UnmodifiableListView(ratings),
        reserves = UnmodifiableListView(reserves);

  int get myRate => ratings
      .firstWhere(
        (element) => element.userID == myID,
        orElse: () => RateObject.empty(),
      )
      .rate;

  String get averageRate => (ratings.fold<int>(
              0, (previousValue, element) => previousValue + element.rate) /
          max(ratings.length, 1))
      .toStringAsFixed(1);
}
