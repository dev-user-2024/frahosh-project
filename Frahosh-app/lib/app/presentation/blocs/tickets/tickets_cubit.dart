import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

part 'tickets_state.dart';

class TicketsCubit extends Cubit<TicketsState> {
  TicketsCubit() : super(TicketsLoading()) {
    loadTickets();
  }

  void loadTickets() {
    API.tickets().then((value) {
      emit(TicketsGeneral((value.data?['data'] as List)
          .map<TicketObject>((e) => TicketObject.fromMap(e))
          .toList()));
    }).catchError((_) {
      emit(TicketsError());
    });
  }
}

class TicketObject {
  final String id;
  final String no;
  final String date;
  final String title;
  final int status;

  TicketObject.fromMap(Map map)
      : id = map['id'].toString(),
        no = map['sh_ticket'].toString(),
        date = map['date_register'].toString(),
        title = map['title'].toString(),
        status = map['status'] as int;

  String get formattedDate => dateFormat(date);
}
