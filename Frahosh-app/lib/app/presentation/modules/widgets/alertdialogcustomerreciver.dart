import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';

import '../../router/const.dart';
import '../../router/packages.dart';

class AlertDialogCustomerReciver extends StatelessWidget {
  const AlertDialogCustomerReciver(
      {Key? key,
        required this.status,
        required this.code,
        required this.priceChange,
        required this.timer,
        required this.date,
        required this.continueCallBack})
      : super(key: key);
  final String  code, priceChange, timer, date;
  final int status;
  final VoidCallback continueCallBack;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: SizedBox(
        width: context.widths,

        child: Column(
          children: [
         Align(
           alignment: Alignment.center,
           child: Column(
             children: [
               // Aboute
               status==0 ? "واریز".toText(color: SolidColors.green,fontSize: 20).toOnly(T: 10):"برداشت".toText(color: SolidColors.red,fontSize: 20).toOnly(T: 10),
               toVerticalSpaces,
               toVerticalSpaces,
               Align(
                 alignment: Alignment.centerRight,
                 child: Row(
                   textDirection: TextDirection.rtl,
                   children: [
                     Expanded(
                       flex: 1,
                       child: 'تاریخ'.toText(
                           color: SolidColors.grey,
                           textAlign: TextAlign.right),
                     ),
                     Expanded(
                       flex: 0,
                       child: timer
                           .toText(color: SolidColors.grey)
                           .toSymmetric(H: 30.0),
                     ),
                     Expanded(
                       flex: 0,
                       child: date.toText(color: SolidColors.grey),
                     ),
                   ],
                 ),
               ),
               toVerticalSpaces,
               Align(
                 alignment: Alignment.centerRight,
                 child: Row(
                   textDirection: TextDirection.rtl,
                   children: [
                     Expanded(
                       flex: 1,
                       child: 'مبلغ'.toText(
                           color: SolidColors.grey,
                           textAlign: TextAlign.right),
                     ),
                     Expanded(
                       flex: 0,
                       child: '$priceChange تومان'
                           .toText(color: SolidColors.grey),
                     ),
                   ],
                 ),
               ),
               toVerticalSpaces,
               toVerticalSpaces,
               toVerticalSpaces,
               Align(
                 alignment: Alignment.center,
                 child: 'شماره پیگیری: $code'.toText(fontWeight: FontWeight.bold,fontSize: 18),
               ),
               toVerticalSpaces,
             ],
           ),
         ).toBox.toSymmetric(H: 20.0,V: 40.0),
         toVerticalSpaces,
         Align(
           alignment: Alignment.center,
           child: Row(
             children: [
               
               Expanded(
                 child: "اشتراک گذاری"
                     .toText(color: SolidColors.white)
                     .toSymmetric(V: 14.0, H: 10.0)
                     .toClick(
                     onTap: () {
                       
                     },
                     isOption: true)
                     .toOnly(R: 15.0,L: 5.0),
               ),
               Expanded(
                 child: "لغو"
                     .toText(color: SolidColors.blue)
                     .toSymmetric(V: 14.0, H: 10.0)
                     .toClickOutline(onTap: () {
                   navigatorPop(context: context);
                 }) .toOnly(R: 5.0,L: 15.0),
               ),
             ],
           ),
         ),
          ],
        ),
      ),
    );
  }
}

