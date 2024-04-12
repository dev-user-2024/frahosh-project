import 'package:farahoosh/app/presentation/blocs/tickeight/tickeight_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/tickeights/tickeights_cubit.dart';
import 'package:farahoosh/app/presentation/screens/tickeight/tickeight..dart';
import 'package:flutter/material.dart';
import 'package:dotted_border/dotted_border.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../gen/assets.gen.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/widgets/boxes/whiteBox.dart';
import '../../router/packages.dart';
import '../../router/extension.dart';
import 'createcart/createcartscreen.dart';

class TickitScreen extends StatelessWidget {
  TickitScreen({super.key});
  final TickeightsCubit _cubit = TickeightsCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: BlocBuilder<TickeightsCubit, TickeightsState>(
          bloc: _cubit,
          builder: (context, state) {
            if (state is TickeightsLoading) {
              return Text('loading');
            }
            if (state is TickeightsError) {
              return Text('error');
            }
            return Column(
              children: [
                // appbar
                toApp(context: context, title: "تیک ایت"),
                Expanded(
                  child: Stack(
                    children: [
                      SingleChildScrollView(
                        child: Column(
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(
                                  top: 10, left: 20, right: 25),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Text(
                                    "پوشه‌های من",
                                    style: textTheme.headline1,
                                  ),
                                ],
                              ),
                            ),

                            BlocBuilder<TickeightsCubit, TickeightsState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                if (state is TickeightsLoading) {
                                  return Text('loading');
                                }
                                if (state is TickeightsError) {
                                  return Text('error');
                                }
                                return GridView(
                                    gridDelegate:
                                        const SliverGridDelegateWithFixedCrossAxisCount(
                                            crossAxisCount: 2),
                                    shrinkWrap: true,
                                    primary: false,
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.all(25),
                                        child: InkWell(
                                          child: DottedBorder(
                                            color: context
                                                .watch<SettingsCubit>()
                                                .state
                                                .selectedPrimaryColor,
                                            strokeWidth: 2,
                                            borderType: BorderType.RRect,
                                            dashPattern: [15, 12],
                                            strokeCap: StrokeCap.round,
                                            radius: const Radius.circular(15),
                                            child: Container(
                                              decoration: const BoxDecoration(
                                                color:
                                                    SolidColors.backgroundColor,
                                              ),
                                              child: Stack(
                                                children: [
                                                  Center(
                                                      child: Image.asset(
                                                    Assets.images.line61.path,
                                                    color: context
                                                        .watch<SettingsCubit>()
                                                        .state
                                                        .selectedPrimaryColor,
                                                  )),
                                                  Center(
                                                      child: Image.asset(
                                                    Assets.images.line62.path,
                                                    color: context
                                                        .watch<SettingsCubit>()
                                                        .state
                                                        .selectedPrimaryColor,
                                                  )),
                                                ],
                                              ),
                                            ),
                                          ),
                                          onTap: () {
                                            showTickitBottomSheet(context, size,
                                                textTheme, _cubit);
                                          },
                                        ),
                                      ),
                                      ...(state as TickeightsGeneral)
                                          .tickeights
                                          .map((e) => Padding(
                                                padding:
                                                    const EdgeInsets.all(25),
                                                child: WhiteBox(
                                                    txt: e.title,
                                                    size: size,
                                                    textTheme: textTheme),
                                              ).toClick(
                                                onTap: () {
                                                  Navigator.of(context).pushReplacement(
                                                      MaterialPageRoute(
                                                          builder: ((context) =>
                                                              Ticleight(
                                                                  e.title,
                                                                  TickeightCubit(
                                                                      e.id)))));
                                                },
                                              ))
                                    ]);
                              },
                            ),
                            // derivative withe box
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}
