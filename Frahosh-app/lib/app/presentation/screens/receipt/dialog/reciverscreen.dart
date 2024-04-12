part of '../receiptscreen.dart';

class ReciverScreen extends StatelessWidget {
  final Transaction _transaction;

  const ReciverScreen(
    this._transaction, {
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ToPopUpPage(
        child: ScaffoldNotAppBar(
      child: AlertDialogCustomerReciver(
          status: _transaction.status,
          code: _transaction.tracking,
          priceChange: _transaction.money,
          timer: _transaction.time,
          date: _transaction.date,
          continueCallBack: () {}),
    ));
  }
}
