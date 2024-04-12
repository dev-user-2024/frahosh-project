import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';
import 'package:shamsi_date/shamsi_date.dart';

part 'meetings_state.dart';

class MeetingsCubit extends Cubit<MeetingsState> {
  MeetingsCubit() : super(MeetingsLoading()) {
    load();
  }

  void load() {
    if (state is! MeetingsLoading) {
      emit(MeetingsLoading());
    }
    Future.wait([API.succMeetings(), API.unsuccMettings()]).then((value) {
      emit(MeetingsGeneral(
          (value[0].data?['data'] as List)
              .map((e) => MeetingObject.fromMap(e))
              .toList(),
          (value[1].data?['data'] as List)
              .map((e) => MeetingObject.fromMap(e))
              .toList()));
    }).catchError((_) {
      emit(MeetingsError());
    });
  }
}

class MeetingObject {
  final String id;
  final String date;
  final String time;
  final String counselID;
  final String description;
  final String url;
  final String name;

  MeetingObject.fromMap(Map map)
      : id = map['id'].toString(),
        date = map['date_reserve'].toString(),
        time = map['time'].toString(),
        counselID = map['const_id'].toString(),
        description = map['description'].toString(),
        url = map['meeting_link'].toString(),
        name = '${map['Fname']} ${map['Lname']}';

  String get formattedDate => dateFormat(date);

  String get distance {
    final List<String> splitedDate = date.split('/');

    final dis = Jalali.now().distanceTo(Jalali(int.parse(splitedDate[0]),
        int.parse(splitedDate[1]), int.parse(splitedDate[2])));

    return dis.isNegative ? '${dis.abs()} روز گذشته' : '$dis روز مانده';
  }
}
