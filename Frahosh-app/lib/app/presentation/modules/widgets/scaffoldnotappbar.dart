import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import '../../router/const.dart';
import '../../router/packages.dart';

class ScaffoldNotAppBar extends StatelessWidget {
  const ScaffoldNotAppBar({Key? key,required this.child}) : super(key: key);
 final Widget child;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: context.widths,
      height: context.heights,
      decoration:  const BoxDecoration(
          color: SolidColors.backgroundColor,
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(20),
          topRight:Radius.circular(20),
        )
      ),
      child: child ,
    );
  }
}
