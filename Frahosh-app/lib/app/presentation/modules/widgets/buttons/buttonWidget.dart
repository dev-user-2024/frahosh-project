import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../blocs/settings/settings_cubit.dart';

class ButtonWidget extends StatelessWidget {
  final String? title;
  final bool? mainColor;
  final bool? grey;
  final Widget? icons;
  final VoidCallback? onTap;
  const ButtonWidget(
      {super.key,
      @required this.title,
      this.mainColor = false,
      this.onTap,
      this.icons,
      this.grey = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      width: double.infinity,
      decoration: BoxDecoration(
        color: mainColor == true
            ? context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor
            : grey == true
                ? SolidColors.grey
                : SolidColors.backgroundColor,
        border: Border.all(
            color: mainColor == true
                ? SolidColors.backgroundColor
                : grey == true
                    ? SolidColors.grey
                    : context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor,),
        borderRadius: BorderRadius.circular(10),
      ),
      child: InkWell(
        onTap: onTap,
        child: Container(
          alignment: Alignment.center,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              icons == null ? Text(
                title!,
                style: TextStyle(
                    fontSize: 16,
                    decoration: TextDecoration.none,
                    color: mainColor == true
                        ? SolidColors.white
                        : grey == true
                            ? SolidColors.white
                            : context
                                .watch<SettingsCubit>()
                                .state
                                .selectedPrimaryColor,),
              ): Row(
                children: [
                  icons!,
                  const SizedBox(width: 8,),
                  Text(
                    title!,
                    style: TextStyle(
                        fontSize: 16,
                        decoration: TextDecoration.none,
                        color: mainColor == true
                            ? SolidColors.white
                            : grey == true
                                ? SolidColors.white
                                : context
                                    .watch<SettingsCubit>()
                                    .state
                                    .selectedPrimaryColor,),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
