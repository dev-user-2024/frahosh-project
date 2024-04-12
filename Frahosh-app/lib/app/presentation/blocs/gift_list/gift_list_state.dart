part of 'gift_list_cubit.dart';

@immutable
abstract class GiftListState {}

class GiftListLoading extends GiftListState {}

class GiftListError extends GiftListState {}

class GiftListGeneral extends GiftListState {
  final UnmodifiableListView<GiftObject> giftList;
  GiftListGeneral(List<GiftObject> giftList)
      : giftList = UnmodifiableListView(giftList);
}
