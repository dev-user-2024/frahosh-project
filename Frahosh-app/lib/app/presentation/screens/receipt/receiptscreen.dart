import 'package:farahoosh/app/presentation/blocs/transactions/transactions_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../router/const.dart';
import '../../router/packages.dart';

part 'dialog/reciverscreen.dart';

class ReceiptScreen extends StatelessWidget {
  ReceiptScreen({Key? key}) : super(key: key);

  final TransactionsCubit _transactionsCubit = TransactionsCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.linear1,
          width: context.widths,
          height: context.heights,
          child: Column(
            children: [
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          toApp(context: context, title: "گزارش"),
                          toVerticalSpaces,
                          SizedBox(
                            height: context.heights * .85,
                            child: BlocBuilder(
                                bloc: _transactionsCubit,
                                builder: (context, state) {
                                  if (state is TransactionsLoading) {
                                    return 'در حال دریافت'.toText();
                                  }
                                  return ListView(
                                      children: (state as TransactionsGeneral)
                                          .transactions
                                          .map((e) => toReceipt(
                                                  context: context,
                                                  price: '${e.money} تومان',
                                                  status: e.status,
                                                  date: e.formattedDate,
                                                  time: 'ساعت ${e.time}',
                                                  onTap: () {
                                                    ReciverScreen(e)
                                                        .toShowDialog(
                                                            context: context);
                                                  })
                                              .toSymmetric(V: 10.0)
                                              .toSymmetric(H: 20.0))
                                          .toList());
                                }),
                          ),
                        ],
                      ),
                    ),
                    NavBar(size: size),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
    ;
  }
}
