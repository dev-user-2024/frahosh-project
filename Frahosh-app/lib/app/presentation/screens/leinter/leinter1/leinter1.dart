import 'package:farahoosh/app/presentation/blocs/leitner/leitner_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/leinter/leinter1/showLeinter1BottomSheet.dart';
import 'package:farahoosh/app/presentation/screens/leinter/leinter2/leinter2_page.dart';
import 'package:flutter/material.dart';
import 'package:dotted_border/dotted_border.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../blocs/leitner_box/leitner_box_cubit.dart';
import '../../../blocs/settings/settings_cubit.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/boxes/whiteBox.dart';
import '../../../../../gen/assets.gen.dart';

class Leinter1 extends StatelessWidget {
  Leinter1({super.key});

  final LeitnerBoxCubit _cubit = LeitnerBoxCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            // appbar
            toApp(context: context, title: "لایتنر"),
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
                                "جعبه‌های من",
                                style: textTheme.headline1,
                              ),
                            ],
                          ),
                        ),
                        BlocBuilder<LeitnerBoxCubit, LeitnerBoxState>(
                          bloc: _cubit,
                          builder: (context, state) {
                            if (state is LeitnerBoxesLoading) {
                              return Text('loading');
                            }
                            if (state is LeitnerBoxesError) {
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
                                            color: SolidColors.backgroundColor,
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
                                        showLeinter1BottomSheet(
                                            context, size, textTheme, _cubit);
                                      },
                                    ),
                                  ),
                                  ...(state as LeitnerBoxesGeneral)
                                      .leitnerBoxes
                                      .map((e) => Padding(
                                            padding: const EdgeInsets.all(25),
                                            child: WhiteBox(
                                                txt: e.title,
                                                size: size,
                                                textTheme: textTheme),
                                          ).toClick(
                                            onTap: () {
                                              Navigator.of(context).push(
                                                  MaterialPageRoute(
                                                      builder: (context) {
                                                return Leinter2(e.title,
                                                    LeitnerCubit(e.id));
                                              }));
                                            },
                                          ))
                                ]);
                          },
                        ),
                        const SizedBox(height: 140,)
                      ],
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
