import 'package:farahoosh/app/presentation/modules/const/routepage.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profileCoinGuide_page/profileCoinGuide_page.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profileCoin_Page3/profileCoin_Page3.dart';
import 'package:farahoosh/app/presentation/screens/profile/profile_coin/profileCoin_page2/profileCoin_Page2.dart';
import '../../../../../../gen/assets.gen.dart';
import '../../../../router/packages.dart';

class ProfileCoinPage extends StatelessWidget {
  const ProfileCoinPage({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: SizedBox(
          width: context.widths,
          height: context.heights,
          child: Column(
            children: [
              toApp(context: context, title: "فراکوین"),
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          Column(
                            children: [
                              toBoxShadow(
                                context: context,
                                onTap: () {
                                  Navigator.pushNamed(
                                      context, RouterPage.profileCoinGuide);
                                },
                                name: 'راهنمای کسب فراکوین',
                                icon: Stack(
                                  children: [
                                    Image.asset(Assets.icons.bookFormat1.path),
                                    Positioned(
                                        left: 10,
                                        top: 2,
                                        child: Image.asset(
                                            Assets.icons.bookFormatLine.path)),
                                    Positioned(
                                        left: 3,
                                        top: 7,
                                        child: Image.asset(
                                            Assets.icons.bookFormatLine2.path)),
                                    Positioned(
                                        left: 3,
                                        top: 10,
                                        child: Image.asset(
                                            Assets.icons.bookFormatLine3.path)),
                                  ],
                                ),
                              ),
                              toVerticalSpaces,
                              toBoxShadow(
                                context: context,
                                onTap: () {
                                  Navigator.of(context).pushReplacement(
                                      MaterialPageRoute(
                                          builder: ((context) =>
                                              const ProfileCoinPage2())));
                                },
                                name: 'جزییات',
                                icon: Center(
                                    child: Image.asset(
                                        Assets.icons.paperWrite.path)),
                              ),
                              toVerticalSpaces,
                              toBoxShadow(
                                context: context,
                                onTap: () {
                                  Navigator.of(context).pushReplacement(
                                      MaterialPageRoute(
                                          builder: ((context) =>
                                              ProfileCoinPage3())));
                                },
                                name: 'تبدیل فراکوین',
                                icon: Center(
                                    child:
                                        Image.asset(Assets.icons.refresh.path)),
                              ),
                              toVerticalSpaces,
                            ],
                          ).toSymmetric(H: 20.0),
                        ],
                      ),
                    ),
                    NavBar(size: size),
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
