import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../blocs/settings/settings_cubit.dart';

class BluBoxOneText extends StatelessWidget {
  const BluBoxOneText({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.image,
    required this.text,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final Widget image;
  final String text;
 // final

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
      width: size.width,
      height: size.height/7,
      decoration: BoxDecoration(
        color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
        // gradient: const LinearGradient(
        //         colors: GradiantColors.blueBoxColor,
        //         begin: Alignment.topCenter,
        //         end: Alignment.bottomCenter,
        //       ),
        borderRadius: BorderRadius.circular(15),
         boxShadow: [
                  BoxShadow(
                    color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
                    blurRadius: 0, 
                    spreadRadius: 0, 
                    offset: const Offset(
                      1, 
                      1, 
                    ),
                  )
                ],
      ),
      

      child: Padding(
        padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Center(child: Text(text,style: textTheme.subtitle2,)),
             image,
          ],
        ),
      ),
    );
  }
}