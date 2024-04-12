import 'dart:collection';
import 'dart:math';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

part 'counsel_state.dart';

class CounselCubit extends Cubit<CounselState> {
  final String myID;
  final String _id;

  CounselCubit(this._id, this.myID) : super(CounselLoading()) {
    _load();
  }

  void _load() {
    Future.wait([API.counselRates(_id), API.counselTimes(_id)]).then((value) {
      emit(CounselGeneral(
          (value[0].data?['data'] as List)
              .map((e) => RateObject.fromMap(e))
              .toList(),
          (value[1].data?['data'] as List)
              .map((e) => ReserveObject.fromMap(e))
              .toList(),
          myID));
    }).catchError((_) {
      emit(CounselError());
    });
  }

  void rate(int rate) {
    if (state is CounselGeneral) {
      API.rateCousel(_id, rate).then((value) {
        emit(CounselGeneral([
          ...(state as CounselGeneral).ratings,
          RateObject.withRate(myID, rate)
        ], (state as CounselGeneral).reserves, myID));
      }).catchError((_) {});
    }
  }
}

class RateObject {
  final String userID;
  final int rate;
  final String review;

  RateObject.empty()
      : userID = '',
        rate = 0,
        review = '';

  RateObject.withRate(String myID, this.rate)
      : userID = myID,
        review = '';

  RateObject.fromMap(Map map)
      : userID = map['student_id'].toString(),
        rate = (map['score'] as num).toInt(),
        review = map['review'].toString();
}

class ReserveObject {
  final String id;
  final String date;
  final String startTime;
  final String endTime;

  ReserveObject.fromMap(Map map)
      : id = map['id'].toString(),
        date = map['date'].toString(),
        startTime = map['time_start'],
        endTime = map['time_end'];

  String get formattedDate => dateFormat(date);
}
