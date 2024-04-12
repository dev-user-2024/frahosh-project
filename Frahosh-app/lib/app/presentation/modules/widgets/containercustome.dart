import 'package:farahoosh/app/presentation/blocs/wallet/wallet_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../router/packages.dart';
import '../const/datacolors.dart';
import '../const/urlimages.dart';

class ContainerCustome extends StatelessWidget {
  const ContainerCustome({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return SizedBox(
      width: context.widths,
      height: 180,

      child: Stack(
        children: [
          Container(
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
            
              color: context.watch<SettingsCubit>().state.selectedPrimaryColor,
            ),

          ),
          DataImages.maskGroup.toPNGImage(size: size.width),
          Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          toVerticalSpaces,
          Align(
              alignment: Alignment.center,
              child: "موجودی کیف پول".toText(color: SolidColors.white)),
          toVerticalSpaces,
          Align(
            alignment: Alignment.center,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(
                  flex: 0,
                  child: "تومان".toText(color: SolidColors.white),
                ),
                Expanded(
                  flex: 0,
                  child: BlocBuilder<WalletCubit, WalletState>(
                    builder: (context, state) {
                      if (state is WalletLoading) {
                        return '0'.toText();
                      }
                      return (state as WalletGeneral)
                          .formattedBalance
                          .toText(color: SolidColors.white, fontSize: 50);
                    },
                  ),
                ),
              ],
            ),
          )
        ],
      ).toCenter,
   
        ],
      ),
    );
  }
}
