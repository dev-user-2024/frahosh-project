import 'package:farahoosh/app/presentation/blocs/differentiation/differentiation_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/differentiation_bottom_sheet/differentiation_bottom_sheet_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/const/urlimages.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/buttons/calculatorButton.dart';
import '../../router/packages.dart';

class VariableDerivative extends StatelessWidget {
  const VariableDerivative(
    this._cubit,
    this._bShCubit, {
    Key? key,
  }) : super(key: key);

  final DifferentiationCubit _cubit;
  final DifferentiationBottomSheetCubit _bShCubit;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Column(
      children: [
        const SizedBox(
          height: 20,
        ),
        SizedBox(
          width: context.widths,
          height: context.heights / 3,
          child: BlocBuilder<DifferentiationBottomSheetCubit,
              DifferentiationBottomSheetState>(
            bloc: _bShCubit,
            builder: (context, state) {
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  //first line calculator button
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('p'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('p'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('o'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('o'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('i'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('i'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('u'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('u'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('y'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('y'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('t'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('t'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('r'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('r'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('e'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('e'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('w'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('w'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('q'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('q'));
                          },
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  //secund line calculator button
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('l'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('l'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('k'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('k'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('j'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('j'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('h'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('h'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('g'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('g'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('f'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('f'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('d'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('d'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('s'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('s'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('a'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('a'));
                          },
                        ),
                      ],
                    ),
                  ),

                  const SizedBox(
                    height: 15,
                  ),
                  //thirth line calculator button
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('m'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('m'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('n'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('n'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('b'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('b'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('v'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('v'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('c'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('c'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('x'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('x'));
                          },
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        CalculatorButton(
                          size: size,
                          widths: 30,
                          heights: 43,
                          isWidget: true,
                          radiosNumber: 10,
                          symbol: state.trueExp('z'),
                          color: SolidColors.white,
                          onTap: () {
                            _cubit.addToExp(state.trueExp('z'));
                          },
                        ),
                      ],
                    ),
                  ),

                  const SizedBox(
                    height: 15,
                  ),
                ],
              );
            },
          ),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            CalculatorButton(
              size: size,
              widths: context.widths / 1.6,
              heights: 45,
              // isWidget: true,
              radiosNumber: 10,
              // symbol: "m",
              color: SolidColors.blue,
              onTap: () {
                _cubit.backspace();
              },
            ),
            BlocBuilder<DifferentiationBottomSheetCubit,
                DifferentiationBottomSheetState>(
              bloc: _bShCubit,
              builder: (context, state) {
                return Container(
                  width: context.widths / 4.5,
                  height: 45,
                  decoration: BoxDecoration(
                    color: state.upCase ? SolidColors.blue : SolidColors.white,
                    // border: Border.all(color: SolidColors.white, width: 1),
                    borderRadius: BorderRadius.circular(10),
                    boxShadow: const [
                      BoxShadow(
                        color: SolidColors.calculatorBox,
                        blurRadius: 4,
                        offset: Offset(0, 0), // Shadow position
                      ),
                    ],
                  ),
                  child: DataImages.arrowTop.toSvgImage(size: 20),
                ).toClick(
                  onTap: () {
                    _bShCubit.toggleUpperCase();
                  },
                );
              },
            ),
          ],
        ),
        const SizedBox(
          height: 50,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(
              width: size.width / 2.35,
              height: 50,
              child: const ButtonWidget(
                title: "تایید",
                mainColor: true,
              ),
            ).toClick(
              onTap: () {
                _cubit.btnClicked();
                Navigator.of(context).pop();
              },
            ),
            const SizedBox(
              width: 20,
            ),
            InkWell(
              child: SizedBox(
                width: size.width / 2.35,
                height: 50,
                child: const ButtonWidget(
                  title: "لغو",
                  mainColor: false,
                ),
              ),
              onTap: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        ),
      ],
    );
  }
}
