import 'package:farahoosh/app/presentation/blocs/calculator/calculator_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/calculator/radikalPi_calculator.dart';
import 'package:farahoosh/app/presentation/screens/calculator/variable_calculator.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../gen/assets.gen.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/buttons/calculatorButton.dart';
part 'plusMinus_calculator.dart';

class CalculatorPage extends StatelessWidget {
  CalculatorPage({super.key});

  final CalculatorCubit _cubit = CalculatorCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return SafeArea(
      child: Scaffold(
        body: BlocBuilder<CalculatorCubit, CalculatorState>(
          bloc: _cubit,
          buildWhen: (previous, current) => previous.calType != current.calType,
          builder: (context, state) {
            return Container(
              width: context.widths,
              height: context.heights,
              color: SolidColors.backgroundColor,
              child: Column(
                children: [
                  toApp(context: context, title: "ماشین حساب"),
                  Expanded(
                    child: Stack(
                      children: [
                        Column(
                          children: [
                            const SizedBox(
                              height: 20,
                            ),
                            Stack(
                              children: [
                                Container(
                                    decoration: BoxDecoration(
                                      color: SolidColors.white,
                                      border: Border.all(
                                          color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor, width: 0.1),
                                      borderRadius: const BorderRadius.only(
                                        topRight: Radius.circular(20),
                                        topLeft: Radius.circular(20),
                                      ),
                                      boxShadow: const [
                                        BoxShadow(
                                          color: SolidColors.calculatorBox,
                                          blurRadius: 1,
                                          offset:
                                              Offset(0, 0), // Shadow position
                                        ),
                                      ],
                                    ),
                                    child: BlocBuilder<CalculatorCubit,
                                        CalculatorState>(
                                      bloc: _cubit,
                                      buildWhen: (previous, current) =>
                                          previous.runtimeType !=
                                          current.runtimeType,
                                      builder: (context, state) {
                                        return Column(
                                          children: [
                                            if (state is CalculatorGeneral)
                                              SizedBox(
                                                height: context.heights / 7,
                                                width: context.widths - 40,
                                                child: FittedBox(
                                                  child: BlocBuilder<
                                                      CalculatorCubit,
                                                      CalculatorState>(
                                                    bloc: _cubit,
                                                    builder: (context, state) =>
                                                        Text(
                                                      (state as CalculatorGeneral)
                                                          .exp,
                                                      textDirection:
                                                          TextDirection.ltr,
                                                    ),
                                                  ),
                                                ),
                                              ),
                                            SizedBox(
                                              height: state is CalculatorGeneral
                                                  ? context.heights / 20
                                                  : context.heights / 6,
                                              width: context.widths - 50,
                                              child: FittedBox(
                                                child: BlocBuilder<
                                                    CalculatorCubit,
                                                    CalculatorState>(
                                                  bloc: _cubit,
                                                  builder: (context, state) {
                                                    if (state
                                                        is CalculatorGeneral) {
                                                      return Text(state.result);
                                                    } else {
                                                      return Text(
                                                        (state as CalculatorEqual)
                                                            .result,
                                                        textDirection:
                                                            TextDirection.ltr,
                                                      );
                                                    }
                                                  },
                                                ),
                                              ),
                                            ),
                                          ],
                                        );
                                      },
                                    )),
                                Positioned(
                                  right: 10,
                                  bottom: 15,
                                  child: GestureDetector(
                                    onTap: _cubit.clear,
                                    child: DataImages.clearIcon
                                        .toPNGImage(size: 24),
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
                            Container(
                              width: context.widths / 1.1,
                              height: context.heights / 18,
                              decoration: BoxDecoration(
                                  color: SolidColors.backgroundColor,
                                  border: Border.all(
                                      color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor, width: 0.1),
                                  borderRadius: const BorderRadius.only(
                                    bottomLeft: Radius.circular(20),
                                    bottomRight: Radius.circular(20),
                                  )),
                              child: Row(
                                children: [
                                  GestureDetector(
                                    onTap: () =>
                                        _cubit.changeType(CalType.standard),
                                    child: Container(
                                      height: context.heights,
                                      width: (context.widths / 1.1) / 3.0,
                                      decoration: BoxDecoration(
                                          color:
                                              state.calType == CalType.standard
                                                  ? context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor
                                                  : SolidColors.backgroundColor,
                                          border: Border.all(
                                              color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
                                              width: 0.3),
                                          borderRadius: const BorderRadius.only(
                                            bottomRight: Radius.circular(12),
                                          )),
                                      child: Center(
                                          child: Text(
                                        "-+",
                                        style: TextStyle(
                                            fontFamily: "IRANSansXV",
                                            fontSize: 24,
                                            fontWeight: FontWeight.bold,
                                            color: state.calType ==
                                                    CalType.standard
                                                ? SolidColors.backgroundColor
                                                : context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor),
                                      )),
                                    ),
                                  ),
                                  GestureDetector(
                                    onTap: () =>
                                        _cubit.changeType(CalType.advanced),
                                    child: Container(
                                      height: context.heights,
                                      width: (context.widths / 1.1) / 3.01,
                                      decoration: BoxDecoration(
                                          color:
                                              state.calType == CalType.advanced
                                                  ? context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor
                                                  : SolidColors.backgroundColor,
                                          border: Border.all(
                                              color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
                                              width: 0.3),
                                          borderRadius:
                                              const BorderRadius.only()),
                                      child: Center(
                                          child: Text(
                                        "π√",
                                        style: TextStyle(
                                            fontFamily: "IRANSansXV",
                                            fontSize: 24,
                                            fontWeight: FontWeight.bold,
                                            color: state.calType ==
                                                    CalType.advanced
                                                ? SolidColors.backgroundColor
                                                : context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor),
                                      )),
                                    ),
                                  ),
                                  GestureDetector(
                                    onTap: () =>
                                        _cubit.changeType(CalType.variable),
                                    child: Container(
                                      height: context.heights,
                                      width: (context.widths / 1.1) / 3.01,
                                      decoration: BoxDecoration(
                                          color:
                                              state.calType == CalType.variable
                                                  ? context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor
                                                  : SolidColors.backgroundColor,
                                          border: Border.all(
                                              color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
                                              width: 0.3),
                                          borderRadius: const BorderRadius.only(
                                            bottomLeft: Radius.circular(20),
                                          )),
                                      child: Center(
                                          child: Text(
                                        "AB",
                                        style: TextStyle(
                                            fontFamily: "IRANSansXV",
                                            fontSize: 24,
                                            fontWeight: FontWeight.bold,
                                            color: state.calType ==
                                                    CalType.variable
                                                ? SolidColors.backgroundColor
                                                : context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor),
                                      )),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            Expanded(
                                child: state.calType == CalType.standard
                                    ? PlusMinesCalculator(_cubit)
                                    : state.calType == CalType.advanced
                                        ? RadikalPiCalculator(_cubit)
                                        : VariableCalculator(_cubit)),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}
