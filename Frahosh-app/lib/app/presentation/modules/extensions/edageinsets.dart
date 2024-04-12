
import '../../router/packages.dart';

extension ToEdageInsets on Widget{
  Widget toPadding({double all=8.0})=>Padding(child: this,padding: EdgeInsets.all(all),);
  Widget toOnly({double T = 0.0,R=0.0,B = 0.0,L=0.0,})=>Padding(child: this,padding: EdgeInsets.only(top: T,right: R,bottom: B,left: L),);
  Widget toSymmetric({double V=0.0,H=0.0})=>Padding(child: this,padding: EdgeInsets.symmetric(vertical: V,horizontal: H));
}
extension ToSpcaes on Widget{
  get toVerticalSpaces=>const SizedBox(height: 20,);
  get toHorizontalSpaces=>const SizedBox(width: 20,);
}
extension ToPattern on BuildContext {
  get widths => MediaQuery.of(this).size.width;
  get heights => MediaQuery.of(this).size.height;
}