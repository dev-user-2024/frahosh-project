import 'package:flutter/cupertino.dart';
import '../../const/datacolors.dart';

class ButtonBlu extends StatelessWidget {
  const ButtonBlu({
    Key? key,
     required this.text,
  }) : super(key: key);

  final String text;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 160,
      height: 50,
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(10)),
        color: SolidColors.blue
      ),
      child:  Center(child:  Text(text,style: const TextStyle(
                    fontSize: 16,
                    color: SolidColors.textTitleWhite,
                    fontFamily: "sansR",
                    ),))
    );
  }
}
