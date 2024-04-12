import '../../../presentation/router/packages.dart';
import '../../modules/const/routepage.dart';
import '../../modules/const/urlimages.dart';
import '../../modules/widgets/containercustome.dart';
import '../../router/extension.dart';

class WalletScreen extends StatelessWidget {
  const WalletScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: Column(
        children: [
          toVerticalSpaces,
          Align(
            child: Column(
              children: [
                // Create Cart
                const ContainerCustome(),
                // Options Wallet
                toVerticalSpaces,
                toBoxShadow(
                    context: context,
                    onTap: () {
                      navigatorPush(context: context, push: RouterPage.increaseScreen);
                    },
                    name: 'افزایش اعتبار',
                    icon: Center(
                        child: DataImages.addWallet.toSvgImage(
                      size: 70,
                    ))),
                toVerticalSpaces,
                toBoxShadow(
                    context: context,
                     onTap: () {
                      navigatorPush(context: context, push: RouterPage.transferScreen);
                    },
                    name: 'انتقال اعتبار',
                    icon: Center(
                        child: DataImages.changeWallet.toSvgImage(
                      size: 70,
                    ))),
                toVerticalSpaces,
                toBoxShadow(
                    context: context,
                    onTap: () {
                      navigatorPush(context: context, push: RouterPage.receipt);
                    },
                    name: 'گزارش',
                    icon:
                        Center(child: DataImages.receipt.toSvgImage(size: 70))),
                toVerticalSpaces,
              ],
            ),
          ).toSymmetric(H: 20.0),
        ],
      ),
    );
  }
}
