import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:meta/meta.dart';

part 'wallet_state.dart';

class WalletCubit extends Cubit<WalletState> {
  WalletCubit() : super(WalletInitial());

  void updateBalance() {
    if (state is! WalletLoading) {
      API.walletBalance().then((value) {
        emit(WalletGeneral(value.data?['inventory_wallet']));
      }).catchError((_) {
        emit(WalletGeneral(0));
      });
    }
  }
}
