import 'package:farahoosh/app/presentation/blocs/gift_list/gift_list_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../modules/widgets/boxes/profileCoin3WhiteBox.dart';

class ProfileCoinPage3 extends StatelessWidget {
  ProfileCoinPage3({super.key});

  final GiftListCubit _cubit = GiftListCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: SizedBox(
          width: context.widths,
          height: context.heights,
          child: Column(
            children: [
              toApp(context: context, title: "تبدیل فراکوین"),
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: BlocBuilder<GiftListCubit, GiftListState>(
                        bloc: _cubit,
                        builder: (context, state) {
                          if (state is GiftListLoading) {
                            return Text('loading');
                          }
                          if (state is GiftListError) {
                            return Text('error');
                          }
                          return Column(
                            children: [
                              Column(
                                children: (state as GiftListGeneral)
                                    .giftList
                                    .map(
                                      (e) => Padding(
                                        padding: const EdgeInsets.symmetric(
                                                horizontal: 20) +
                                            const EdgeInsets.only(top: 20),
                                        child: ProfileCoin3WhiteBox(
                                          size: size,
                                          textTheme: textTheme,
                                          title: e.text,
                                        ),
                                      ),
                                    )
                                    .toList(),
                              ),
                              const SizedBox(height: 150,),
                            ],
                          );
                        },
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
  }
}
