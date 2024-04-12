import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';
import '../utils.dart';

part 'transactions_state.dart';

class TransactionsCubit extends Cubit<TransactionsState> {
  int page = 0;

  TransactionsCubit() : super(TransactionsInitial()) {
    load();
  }

  void load() {
    if (state is! TransactionsLoading) {
      emit(TransactionsLoading(state.transactions));
      API.transactionsList(++page).then((value) {
        emit(TransactionsGeneral([
          ...state.transactions,
          ...(value.data?['data'] as List).map((e) => Transaction.fromMap(e))
        ]));
      }).catchError((_) {
        emit(TransactionsGeneral(state.transactions));
      });
    }
  }
}

class Transaction {
  final String money;
  final String date;
  final String time;
  final String tracking;
  int status;

  Transaction.fromMap(Map map)
      : money =
            countFormat(int.tryParse(map['money_trachonesh'].toString()) ?? 0),
        date = map['date_register'].toString(),
        time = map['time_register'].toString(),
        tracking = map['Issue_Tracking'].toString(),
        status = map['status'] as int;

  String get formattedDate => dateFormat(date);
}
