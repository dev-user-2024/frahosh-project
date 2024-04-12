import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../../gen/assets.gen.dart';
import '../../blocs/calculator/calculator_cubit.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/buttons/calculatorButton.dart';
import '../../router/packages.dart';

class RadikalPiCalculator extends StatelessWidget {
  final CalculatorCubit _cubit;
  const RadikalPiCalculator(this._cubit, {super.key});

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
          Column(
            // mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              //first line calculator button
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "/",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "√",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('%'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "Rad",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: """→
←""",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                ],
              ),
              const SizedBox(
                height: 15,
              ),
              //secund line calculator button
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.x.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "tan",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "cos",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "sin",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                ],
              ),
              const SizedBox(
                height: 15,
              ),
              //thirth line calculator button
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.mines.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "۱/X",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "log",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "ln",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                ],
              ),
              const SizedBox(
                height: 15,
              ),
              //fourth line calculator button
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "+",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "xy",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "x۲",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "ex",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                ],
              ),
              const SizedBox(
                height: 15,
              ),
              //fifth line calculator button
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "+",
                    textColor: SolidColors.white,
                    color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "e",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "π",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    isWidget: true,
                    symbol: "|x|",
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
