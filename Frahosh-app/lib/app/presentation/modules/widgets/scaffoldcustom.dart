import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import '../../router/const.dart';
import '../../router/packages.dart';

class ScaffoldCustom extends StatelessWidget {
  const ScaffoldCustom({Key? key, required this.appbar, required this.children}) : super(key: key);
 final String appbar;
 final List<Widget> children;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Container(
            alignment: Alignment.topCenter,
            decoration: const BoxDecoration(
                gradient: LinearGradient(colors: [
                  SolidColors.linear1,
                  SolidColors.linear2,
                ],end: Alignment.bottomRight,begin: Alignment.topLeft),
            ),
            width: context.widths,
            height: context.heights,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              toVerticalSpaces,
              toApp(title: appbar, context: context),
              toVerticalSpaces,
              Column(
                children: children,
              ).toSymmetric(H: 8.0),
            ],
          ),
        ),
      )),
    );
  }
}
