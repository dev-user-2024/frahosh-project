import 'package:farahoosh/app/presentation/blocs/differentiation/differentiation_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/derivative/showDerivativeBottomSheet.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/const/urlimages.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../../../gen/assets.gen.dart';

class DerivativePage extends StatelessWidget {
  DerivativePage({super.key});
  final DifferentiationCubit _cubit = DifferentiationCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: SizedBox(
          width: context.widths,
          height: context.heights,
          child: Column(
            children: [
              // appbar
              toApp(context: context, title: "مشتق"),
              Expanded(
                child: Stack(
                  children: [
                    Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(
                              top: 20, left: 20, right: 25),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                "فرمول رو وارد کن",
                                style: textTheme.bodyText1,
                              ),
                            ],
                          ),
                        ),

                        Padding(
                          padding: const EdgeInsets.only(
                              top: 10, left: 20, right: 20),
                          child: Stack(
                            children: [
                              Container(
                                  decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    border: Border.all(
                                        color: context
                                            .watch<SettingsCubit>()
                                            .state
                                            .selectedPrimaryColor,
                                        width: 0.1),
                                    borderRadius: const BorderRadius.only(
                                      topRight: Radius.circular(20),
                                      topLeft: Radius.circular(20),
                                    ),
                                    boxShadow: const [
                                      BoxShadow(
                                        color: SolidColors.calculatorBox,
                                        blurRadius: 1,
                                        offset: Offset(0, 0), // Shadow position
                                      ),
                                    ],
                                  ),
                                  child: SizedBox(
                                    height: context.heights / 7,
                                    width: context.widths - 40,
                                    child: FittedBox(
                                      child: BlocBuilder<DifferentiationCubit,
                                          DifferentiationState>(
                                        bloc: _cubit,
                                        builder: (context, state) => Text(
                                          state.exp,
                                          textDirection: TextDirection.ltr,
                                        ),
                                      ),
                                    ),
                                  ).toClick(
                                    onTap: () {
                                      showDerivativeBottomSheet(
                                          _cubit, context, size, textTheme);
                                    },
                                  )),
                              Positioned(
                                right: 10,
                                bottom: 15,
                                child: GestureDetector(
                                  onTap: _cubit.clear,
                                  child:
                                      DataImages.clearIcon.toPNGImage(size: 24),
                                ),
                              ),
                              Positioned(
                                right: 16,
                                bottom: 20,
                                child: GestureDetector(
                                  onTap: _cubit.clear,
                                  child: DataImages.xIcon.toPNGImage(size: 9),
                                ),
                              ),
                            ],
                          ),
                        ),

                        // derivative blu button
                        Padding(
                          padding: const EdgeInsets.only(
                              top: 50, left: 21, right: 21),
                          child: const ButtonWidget(
                                  title: "محاسبه مشتق", mainColor: true)
                              .toClick(
                            onTap: () {
                              _cubit.btnClicked();
                            },
                          ),
                        ),

                        // derivative withe box
                        BlocBuilder<DifferentiationCubit, DifferentiationState>(
                          bloc: _cubit,
                          builder: (context, state) {
                            if (state is DifferentiationWithResult) {
                              return Padding(
                                padding: const EdgeInsets.only(
                                    top: 50, left: 20, right: 20),
                                child: Container(
                                  height: size.height / 6,
                                  decoration: BoxDecoration(
                                    color: SolidColors.white,
                                    border: Border.all(
                                        color: SolidColors.blue, width: 0.4),
                                    borderRadius: BorderRadius.circular(12),
                                    boxShadow: const [
                                      BoxShadow(
                                        color: SolidColors.calculatorBox,
                                        blurRadius: 4,
                                        offset: Offset(0, 0), // Shadow position
                                      ),
                                    ],
                                  ),
                                  child: Center(
                                    child: Text(
                                      'f`(x) = ${state.resultForX}\n'
                                      'f`(y) = ${state.resultForY}\n'
                                      'f`(z) = ${state.resultForZ}',
                                      textDirection: TextDirection.ltr,
                                    ),
                                  ),
                                ),
                              );
                            } else {
                              return const SizedBox();
                            }
                          },
                        ),
                      ],
                    ),
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
