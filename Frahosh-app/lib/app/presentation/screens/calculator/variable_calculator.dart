import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../blocs/calculator/calculator_cubit.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/buttons/calculatorButton.dart';
import '../../router/packages.dart';

class VariableCalculator extends StatelessWidget {
  final CalculatorCubit _cubit;
  const VariableCalculator(this._cubit, {super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
      color: SolidColors.backgroundColor,
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Column(
        children: [
          const SizedBox(
            height: 20,
          ),
          SizedBox(
            width: context.widths,
            height: context.heights/3,
            child: Column(
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
                        symbol: "p",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "o",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "i",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "u",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "y",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "t",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "r",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "e",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "w",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "q",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "l",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "k",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "j",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "h",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "g",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "f",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "d",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "s",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "a",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "m",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "n",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "b",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "v",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "c",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "x",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
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
                        symbol: "z",
                        color: SolidColors.white,
                        onTap: () => _cubit.addToExp('/'),
                      ),
                    ],
                  ),
                ),

                const SizedBox(
                  height: 15,
                ),
              ],
            ),
          ),
         
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              CalculatorButton(
                size: size,
                widths: context.widths/1.6,
                heights: 45,
               // isWidget: true,
                radiosNumber: 10,
               // symbol: "m",
                color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
                onTap: () => _cubit.addToExp('/'),
              ),


              Container(
              width: context.widths/4.5,
               height: 45,
              decoration: BoxDecoration(
              color: SolidColors.white,
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
      ),
   
              
            ],
          ),
        ],
      ),
    );
  }
}
