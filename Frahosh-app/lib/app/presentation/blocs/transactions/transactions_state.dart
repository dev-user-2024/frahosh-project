part of 'transactions_cubit.dart';

@immutable
abstract class TransactionsState {
  final UnmodifiableListView<Transaction> transactions;
  TransactionsState(List<Transaction> transactions)
      : transactions = UnmodifiableListView(transactions);
}

class TransactionsLoading extends TransactionsState {
  TransactionsLoading(super.transactions);
}

class TransactionsInitial extends TransactionsGeneral {
  TransactionsInitial() : super([]);
}

class TransactionsGeneral extends TransactionsState {
  TransactionsGeneral(super.transactions);
}
