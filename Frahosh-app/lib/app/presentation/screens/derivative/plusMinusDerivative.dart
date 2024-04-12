import '../../../../gen/assets.gen.dart';
import '../../blocs/differentiation/differentiation_cubit.dart';
import '../../blocs/differentiation_bottom_sheet/differentiation_bottom_sheet_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/buttons/calculatorButton.dart';
import '../../router/packages.dart';

class PlusMinusDerivative extends StatelessWidget {
  const PlusMinusDerivative(
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
        Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            //first line calculator button
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.division.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('/');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.percent.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('%');
                  },
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
                  onTap: () {
                    _cubit.clear();
                  },
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
                  onTap: () {
                    _cubit.addToExp('*');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.nine.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('9');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.eight.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('8');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.seven.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('7');
                  },
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
                  onTap: () {
                    _cubit.addToExp('-');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.sex.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('6');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.five.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('5');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.four.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('4');
                  },
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
                  onTap: () {
                    _cubit.addToExp('+');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.three.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('3');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.two.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('2');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.one.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('1');
                  },
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
                  color: SolidColors.blue,
                  onTap: () {
                    _cubit.btnClicked();
                    Navigator.of(context).pop();
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.dat.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('.');
                  },
                ),
                CalculatorButton(
                  size: size,
                  icon: Image.asset(Assets.icons.ziro.path),
                  color: SolidColors.white,
                  onTap: () {
                    _cubit.addToExp('0');
                  },
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
        const SizedBox(
          height: 40,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            InkWell(
              onTap: () {
                _cubit.btnClicked();
                Navigator.of(context).pop();
              },
              child: SizedBox(
                width: size.width / 2.35,
                height: 50,
                child: const ButtonWidget(
                  title: "تایید",
                  mainColor: true,
                ),
              ),
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
