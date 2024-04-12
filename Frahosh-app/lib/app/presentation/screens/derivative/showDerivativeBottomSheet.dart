import 'package:farahoosh/app/presentation/blocs/differentiation/differentiation_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/differentiation_bottom_sheet/differentiation_bottom_sheet_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/screens/derivative/plusMinusDerivative.dart';
import 'package:farahoosh/app/presentation/screens/derivative/variableDerivative.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../blocs/calculator/calculator_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/buttons/calculatorButton.dart';
import '../../../../gen/assets.gen.dart';

Future<dynamic> showDerivativeBottomSheet(DifferentiationCubit cubit,
    BuildContext context, Size size, TextTheme textTheme) {
  final DifferentiationBottomSheetCubit bShCubit =
      DifferentiationBottomSheetCubit();
  return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: ((context) {
        return Padding(
          padding:
              EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
          child: Container(
            height: size.height / 1.4,
            decoration: const BoxDecoration(
                color: SolidColors.backgroundColor,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                )),
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 10,
                        ),
                        Image.asset(Assets.images.line60.path),
                        const SizedBox(
                          height: 30,
                        ),
                        Container(
                          width: context.widths / 1.1,
                          height: 48,
                          decoration: BoxDecoration(
                              color: SolidColors.backgroundColor,
                              border: Border.all(
                                  color: SolidColors.blue, width: 0.6),
                              borderRadius: BorderRadius.circular(12)),
                          child: BlocBuilder<DifferentiationBottomSheetCubit,
                              DifferentiationBottomSheetState>(
                            bloc: bShCubit,
                            builder: (context, state) {
                              return Row(
                                children: [
                                  GestureDetector(
                                    onTap: () {
                                      bShCubit.toPlusMinesMode();
                                    },
                                    child: Container(
                                      height: context.heights,
                                      width: (context.widths / 1.1) / 2.02,
                                      decoration: BoxDecoration(
                                          color: state.abType
                                              ? SolidColors.backgroundColor
                                              : SolidColors.blue,
                                          border: Border.all(
                                              color: SolidColors.blue,
                                              width: 0.3),
                                          borderRadius: const BorderRadius.only(
                                            bottomRight: Radius.circular(12),
                                            topRight: Radius.circular(12),
                                          )),
                                      child: Center(
                                          child: Text(
                                        "-+",
                                        style: TextStyle(
                                            fontFamily: "IRANSansXV",
                                            fontSize: 24,
                                            fontWeight: FontWeight.bold,
                                            color: state.abType
                                                ? SolidColors.blue
                                                : SolidColors.backgroundColor),
                                      )),
                                    ),
                                  ),
                                  GestureDetector(
                                    onTap: () {
                                      bShCubit.toAbMode();
                                    },
                                    child: Container(
                                      height: context.heights,
                                      width: (context.widths / 1.1) / 2.01,
                                      decoration: BoxDecoration(
                                          color: state.abType
                                              ? SolidColors.blue
                                              : SolidColors.backgroundColor,
                                          border: Border.all(
                                              color: SolidColors.blue,
                                              width: 0.3),
                                          borderRadius: const BorderRadius.only(
                                            bottomLeft: Radius.circular(12),
                                            topLeft: Radius.circular(12),
                                          )),
                                      child: Center(
                                          child: Text(
                                        "AB",
                                        style: TextStyle(
                                            fontFamily: "IRANSansXV",
                                            fontSize: 24,
                                            fontWeight: FontWeight.bold,
                                            color: state.abType
                                                ? SolidColors.backgroundColor
                                                : SolidColors.blue),
                                      )),
                                    ),
                                  ),
                                ],
                              );
                            },
                          ),
                        ),
                        const SizedBox(
                          height: 25,
                        ),
                        BlocBuilder<DifferentiationBottomSheetCubit,
                            DifferentiationBottomSheetState>(
                          bloc: bShCubit,
                          builder: (context, state) {
                            if (state.abType) {
                              return VariableDerivative(cubit, bShCubit);
                            }
                            return PlusMinusDerivative(cubit, bShCubit);
                          },
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      }));
}
