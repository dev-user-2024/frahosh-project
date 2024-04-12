import '../../../../gen/assets.gen.dart';
import '../../blocs/leitner/leitner_cubit.dart';
import '../../router/packages.dart';
import '../const/datacolors.dart';

DropdownButtonFormField<String> dropdownButton(
      String selectedItem, List<String> items, TextTheme textTheme,
      {void Function(String?)? onChanged}) {
    return DropdownButtonFormField<String>(
      decoration: InputDecoration(
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Colors.black, width: 0.3),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Colors.black, width: 0.3),
        ),
        filled: true,
        fillColor: SolidColors.backgroundColor,
      ),
      icon: Image.asset(Assets.icons.arrowButtom.path),
      dropdownColor: SolidColors.backgroundColor,
      value: selectedItem,
      items: items
          .map((item) => DropdownMenuItem<String>(
                value: item,
                child: Text(
                  item,
                  style: textTheme.bodyText1,
                ),
              ))
          .toList(),
          onChanged: (value) {
            onChanged.toString();
          },
    );
  }



  DropdownButtonFormField<String> dropdownButton2(String selectedItem,
      List<String> items, TextTheme textTheme, LeitnerCubit leitnerCubit) {
    return DropdownButtonFormField<String>(
      decoration: InputDecoration(
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Colors.black, width: 0.3),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Colors.black, width: 0.3),
        ),
        filled: true,
        fillColor: SolidColors.backgroundColor,
      ),
      icon: Image.asset(Assets.icons.arrowButtom.path),
      dropdownColor: SolidColors.backgroundColor,
      value: selectedItem,
      items: items
          .map((item) => DropdownMenuItem<String>(
                value: item,
                child: Text(
                  item,
                  style: textTheme.bodyText1,
                ),
              ))
          .toList(),
      onChanged: (item) {
        leitnerCubit.select(item.toString());
      },
    );
  }
