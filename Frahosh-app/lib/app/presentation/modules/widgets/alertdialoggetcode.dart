import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import '../../router/const.dart';
import '../../router/packages.dart';

class AlertDialogCustom extends StatelessWidget {
  const AlertDialogCustom(
      {Key? key,
      this.about = '',
      required this.images,
      this.height = 420,
      required this.hintText,
      this.okButton = 'ثبت',
      this.notButton = 'لغو',
      required this.textEditingController,
      required this.onTapOkButton,
      required this.onTapNotButton})
      : super(key: key);
  final String about, hintText, okButton, notButton;
  final VoidCallback onTapOkButton, onTapNotButton;
  final Widget images;
  final double height;
  final TextEditingController textEditingController;
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
        child: SizedBox(
      width: double.infinity,
      height: height,
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            // Images
            Align(
              child: Column(
                children: [
                  Align(
                    alignment: Alignment.center,
                    child: images,
                  ),
                ],
              ),
            ),
            toVerticalSpaces,
            Align(
              child: Column(
                children: [
                  // about
                  Align(
                    alignment: Alignment.center,
                    child: about.toText(
                        fontSize: 17,
                        textAlign: TextAlign.right,
                        textDirection: TextDirection.rtl),
                  ),
                  toVerticalSpaces,
                  //TextField
                  Align(
                      alignment: Alignment.center,
                      child: toTextField(
                          textEditingController: textEditingController,
                          hintText: hintText)),
                  toVerticalSpaces,
                  // Clicks
                  Align(
                    alignment: Alignment.center,
                    child: Row(
                      children: [
                        Expanded(
                          child: notButton
                              .toText(color: SolidColors.blue, fontSize: 20)
                              .toSymmetric(V: 5.0)
                              .toClickOutline(
                                onTap: onTapNotButton,
                              ),
                        ),
                        toHorizontalSpaces,
                        Expanded(
                          child: okButton
                              .toText(color: SolidColors.white, fontSize: 20)
                              .toSymmetric(V: 5.0)
                              .toClick(onTap: onTapOkButton, isOption: true),
                        ),
                      ],
                    ),
                  ),
                ],
              ).toSymmetric(H: 20.0),
            ),
          ],
        ),
      ),
    ));
  }
}
