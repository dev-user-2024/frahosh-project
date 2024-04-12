import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../gen/assets.gen.dart';
import '../../../blocs/settings/settings_cubit.dart';
import '../../const/datacolors.dart';

class BluBoxTwoText extends StatelessWidget {
  const BluBoxTwoText({
    Key? key,
    required this.size,
    required this.textTheme,
    required this.image,
     this.text1,
     this.text2,
  }) : super(key: key);

  final Size size;
  final TextTheme textTheme;
  final Widget image;
  final String? text1;
  final String? text2;
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
        borderRadius: BorderRadius.circular(15),
         boxShadow: [
                  BoxShadow(
                    color: context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,
                    blurRadius: 0, 
                    spreadRadius: 0, 
                    offset: Offset(
                      1, 
                      1, 
                    ),
                  )
                ],
      ),
      

      child: Padding(
        padding: const EdgeInsets.fromLTRB(12, 0, 10, 0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                 Text(text1!,style: textTheme.subtitle2,),
                Row(
                  children: [
                    Text(text2!,style: const TextStyle(color: SolidColors.textTitleWhite,fontFamily: "IRANSansXV",fontSize: 12),),
                     const SizedBox(width: 6,),
                    Image.asset(Assets.icons.arrowLeft.path),
                  ],
                ),

              ],
            ),
             image,
          ],
        ),
      ),
    );
  }
}