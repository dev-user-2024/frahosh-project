

import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';

import '../../modules/widgets/scaffoldcustom.dart';
import '../../router/const.dart';
import '../../router/packages.dart';

class NewDictionaryScreen extends StatelessWidget {
  const NewDictionaryScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ScaffoldCustom(appbar: 'لغت جدید', children: [
      toVerticalSpaces,
      Align(
        child: Column(
          children: [
            Align(
              alignment: Alignment.topRight,
              child: 'لغت'.toText(textAlign: TextAlign.right,fontSize: 17,fontWeight:FontWeight.bold).toOnly(R: 5.0),
            ),
            Align(
              alignment: Alignment.topRight,
              child: toTextField(textEditingController: TextEditingController(), hintText: '',lines: 4),
            ),
          ],
        ),
      ).toSymmetric(H: 10.0),
      toVerticalSpaces,
      Align(
        child: Column(
          children: [
            Align(
              alignment: Alignment.topRight,
              child: 'معنی'.toText(textAlign: TextAlign.right,fontSize: 17,fontWeight:FontWeight.bold).toOnly(R: 5.0),
            ),
            Align(
              alignment: Alignment.topRight,
              child: toTextField(textEditingController: TextEditingController(), hintText: '',lines: 4),
            ),
            toVerticalSpaces,
            toVerticalSpaces,
            // Clicks
            Align(
              alignment: Alignment.center,
              child: Row(
                children: [
                  Expanded(child: 'لغو'.toText(color: SolidColors.blue,fontSize: 20).toSymmetric(V: 5.0).toClickOutline(onTap:(){},),),
                  toHorizontalSpaces,
                  Expanded(child: 'ثبت'.toText(color: SolidColors.white,fontSize: 20).toSymmetric(V: 5.0).toClick(onTap: (){},isOption: true),),
                ],
              ),
            ),
          ],
        ),
      ).toSymmetric(H: 10.0),
    ]);
  }
}
