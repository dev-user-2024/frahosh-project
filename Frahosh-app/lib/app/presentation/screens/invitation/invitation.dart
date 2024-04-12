import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import '../../router/const.dart';
import '../../router/packages.dart';
import '../../router/screens.dart';

class InvitationScreen extends StatelessWidget {
  const InvitationScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            // appbar
            toApp(context: context, title: "ارسال کد دعوت به دوستان"),

            Expanded(
                child: Stack(
              children: [
                SingleChildScrollView(
                  child: Column(
                    children: [
                      const SizedBox(height: 20,),
                      Align(
                        alignment: Alignment.center,
                        child: DataImages.hand.toPNGImage(size: 200),
                      ),
                      toVerticalSpaces,
                      Align(
                        alignment: Alignment.center,
                        child:
                            "با ارسال کد دعوت به دوستان بیشتر \n سکه‌های بیشتر بدست بیار!"
                                .toText(
                                    fontSize: 16,
                                    textAlign: TextAlign.center,
                                    fontWeight: FontWeight.bold,
                                    textDirection: TextDirection.rtl),
                      ),
                      toVerticalSpaces,
                      toVerticalSpaces,
                      Align(
                        alignment: Alignment.center,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Align(
                              alignment: Alignment.center,
                              child: "کد شما : ".toText(
                                  color: SolidColors.grey,
                                  fontSize: 16,
                                  textAlign: TextAlign.right,
                                  textDirection: TextDirection.rtl),
                            ),
                            toVerticalSpaces,
                            Align(
                              alignment: Alignment.center,
                              child: "09123456789".toText(
                                  fontSize: 30, color: SolidColors.black,
                                  fontFamily: "IRANSansXV",
                                  fontWeight: FontWeight.bold),
                            ),
                          ],
                        ).toPadding(all: 10),
                      ).toBox.toSymmetric(H: 20.0),
                      toVerticalSpaces,
                      toVerticalSpaces,
                      Align(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            "اشتراک گذاری"
                                .toText(
                                    color: SolidColors.white,
                                    fontWeight: FontWeight.bold)
                                .toSymmetric(V: 14)
                                .toClick(onTap: () {}, isOption: true),
                            toVerticalSpaces,
                            "ثبت کد دوست"
                                .toText(
                                    color: SolidColors.blue,
                                    fontWeight: FontWeight.bold)
                                .toSymmetric(V: 14)
                                .toClickOutline(
                              onTap: () {
                                 getCodeScreenPageBottomSheet(context, size, textTheme);
                              },
                            ),
                          ],
                        ),
                      ).toSymmetric(H: 20.0),
                    ],
                  ),
                )
              ],
            ))
          ]),
        ),
      ),
    );
  }
}
