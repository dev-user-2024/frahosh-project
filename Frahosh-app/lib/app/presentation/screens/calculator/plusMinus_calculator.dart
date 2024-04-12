part of 'calculator_page.dart';

class PlusMinesCalculator extends StatelessWidget {
  final CalculatorCubit _cubit;
  const PlusMinesCalculator(this._cubit, {super.key});

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
                    icon: Image.asset(Assets.icons.division.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('/'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.percent.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('%'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.parantez.path),
                    color: SolidColors.white,
                    onTap: () {},
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.c.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.clear(),
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
                    onTap: () => _cubit.addToExp('*'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.nine.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('9'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.eight.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('8'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.seven.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('7'),
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
                    onTap: () => _cubit.addToExp('-'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.sex.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('6'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.five.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('5'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.four.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('4'),
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
                    icon: Image.asset(Assets.icons.plus.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('+'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.three.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('3'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.two.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('2'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.one.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('1'),
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
                    icon: Image.asset(Assets.icons.equal.path),
                    color: context
                        .watch<SettingsCubit>()
                        .state
                        .selectedPrimaryColor,
                    onTap: () => _cubit.equal(),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.dat.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('.'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.ziro.path),
                    color: SolidColors.white,
                    onTap: () => _cubit.addToExp('0'),
                  ),
                  CalculatorButton(
                    size: size,
                    icon: Image.asset(Assets.icons.plusMines.path),
                    color: SolidColors.white,
                    onTap: () {},
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
