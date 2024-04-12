import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'gift_list_state.dart';

class GiftListCubit extends Cubit<GiftListState> {
  GiftListCubit() : super(GiftListLoading()) {
    _load();
  }

  void _load() {
    API.giftList().then((value) {
      emit(GiftListGeneral((value.data?['data'] as List)
          .map((e) => GiftObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(GiftListError());
    });
  }
}

class GiftObject {
  final String id;
  final String text;

  GiftObject.fromMap(Map map)
      : id = map['id'].toString(),
        text = map['for_use'].toString();
}
