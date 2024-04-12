import 'package:farahoosh/app/presentation/blocs/heart_writes/heart_writes_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../blocs/settings/settings_cubit.dart';

class PlannerDelneveshte extends StatelessWidget {
  PlannerDelneveshte({Key? key}) : super(key: key);

  final HeartWritesCubit _cubit = HeartWritesCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "دل نوشته"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    children: [
                        BlocBuilder<HeartWritesCubit, HeartWritesState>(
                          bloc: _cubit,
                            builder: (context, state) {
                              if (state is HeartWritesLoading) {
                                return Text('loading');
                              }
                              if (state is HeartWritesError) {
                                return Text('error');
                              }
                            return Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 0, vertical: 20),
                              child: Column(
                                children: [
                               
                          Container(
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: context
                          .watch<SettingsCubit>()
                          .state
                          .selectedPrimaryColor, width: 0.2)),
                            child: Column(
                              children: [
                                // Padding(
                                //   padding: const EdgeInsets.all(20),
                                //   child: Row(
                                //     mainAxisAlignment:
                                //         MainAxisAlignment.start,
                                //     children: [
                                //       Text(
                                //         "تاریخ یا موضوع",
                                //         style: textTheme.bodyText1,
                                //       ),
                                //     ],
                                //   ),
                                // ),

                                // SizedBox(height: 20),
                                Padding(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 5, vertical: 20),
                                  child: SizedBox(
                                    width: size.width,
                                    child: Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        "متن دل نوشته",
                                        textDirection: TextDirection.rtl,
                                        style: Theme.of(context)
                                            .textTheme
                                            .subtitle1,
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 150,
                          ),
                                ],
                              )
                            );
                          },
                        ),
                    
                    
                    ],
                  ),
                ),
                NavBar(size: size)
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}