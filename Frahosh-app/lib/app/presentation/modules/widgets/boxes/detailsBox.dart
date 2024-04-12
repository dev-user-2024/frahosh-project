import 'package:flutter/material.dart';
import '../../../../../gen/assets.gen.dart';
import '../../const/datacolors.dart';

class DetailsBox extends StatelessWidget {
  final String title;
  final String time;
  final String date;
  final String description;
  final bool blu;
  final bool plus;
  final Size size;
  final TextTheme textTheme;
  const DetailsBox({
    super.key,
    required this.title,
    required this.size,
    required this.textTheme,
    required this.time,
    required this.date,
    required this.description,
    required this.blu,
    required this.plus,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,

      decoration: BoxDecoration(
              color: blu == true
            ? const Color.fromARGB(255, 29, 155, 240)
            : Colors.white,
            borderRadius: BorderRadius.circular(15),
        border: Border.all(
            color: blu == true
                ? Colors.white
                : const Color.fromARGB(255, 29, 155, 240),
            width: 0.1),
            boxShadow: [
              BoxShadow(
                color: SolidColors.black.withOpacity(.02),
                blurRadius: 15,
                offset: const Offset(3, 3),
              ),
              BoxShadow(
                  color: SolidColors.black.withOpacity(.06),
                  blurRadius: 20,
                  offset: const Offset(-5, -5)),
            ]),


      child: Container(
          width: 385,
          height: 136,
          alignment: Alignment.center,
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Container(
                          width: 24,
                          height: 24,
                          decoration: BoxDecoration(
                            border: Border.all(
                                color: plus == true
                                    ? SolidColors.green
                                    : SolidColors.red,
                                width: 1),
                            borderRadius: BorderRadius.circular(6),
                          ),
                          child: Image.asset(plus == true
                              ? Assets.icons.plusIcon.path
                              : Assets.icons.minusIcon.path),
                        ),
                        const SizedBox(
                          width: 8,
                        ),
                        Text(
                          title,
                          style: TextStyle(
                            fontSize: 14,
                            decoration: TextDecoration.none,
                            color: plus == true
                                ? SolidColors.green
                                : SolidColors.red,
                          ),
                        ),
                      ],
                    ),
                    Text(time, style: textTheme.bodyText2),
                    Text(date, style: textTheme.bodyText2),
                  ],
                ),
                Row(
                  children: [
                    Text(description, style: textTheme.bodyText2),
                  ],
                )
              ],
            ),
          )),
    );
  }
}
