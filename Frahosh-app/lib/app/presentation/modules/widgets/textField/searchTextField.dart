import '../../../../../gen/assets.gen.dart';
import '../../../router/packages.dart';
import '../../const/datacolors.dart';
import 'TextFieldwidget.dart';

class SearchTextField extends StatelessWidget {
  final TextEditingController textEditingController = TextEditingController();
  SearchTextField({
    this.hintText = "بخش یا مطلب مورد نظرت رو جست و جو کن...",
    this.onFieldSubmitted,
    Key? key,
  }) : super(key: key);
  String? hintText;
  final void Function(String)? onFieldSubmitted;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: SolidColors.white,
        borderRadius: BorderRadius.circular(20),
      ),
      child: TextFieldWidget(
        borderSideColor: SolidColors.blue,
        hintText: hintText,
        controller: textEditingController,
        isSearchTextField: true,
        prefixIcon: Image.asset(Assets.icons.microphoneIcon.path),
        suffixIcon: GestureDetector(
          onTap: () {
            onFieldSubmitted?.call(textEditingController.text);
          },
          child: Image.asset(Assets.icons.searchIcon.path),
        ),
      ),
    );
  }
}
