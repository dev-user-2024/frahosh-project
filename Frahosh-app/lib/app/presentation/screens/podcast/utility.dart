import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:flutter/material.dart';

import '../../modules/const/datacolors.dart';

class new_episode {
  new_episode({
    required this.image,
    required this.title,
    required this.color1,
    required this.color2,
  });
  Object image;
  String title;
  Color color1;
  Color color2;
}

List<new_episode> getnewepisode() {
  var list = [
    new_episode(
      color1: SolidColors.blue,
      color2: SolidColors.backgroundColor,
      image: DataImages.businessman,
      // image: 'businessman',
      title: 'مصاحبه با علی محمدی رتبه یک ریاضی',
    ),
    new_episode(
        color1: SolidColors.green,
        color2: SolidColors.backgroundColor,
        image: DataImages.roomSchool,
        title: 'آموزش لغات 504'),
    new_episode(
        color1: SolidColors.red,
        color2: SolidColors.backgroundColor,
        image: DataImages.roomSchool,
        title: 'آرامش حین تحصیل'),
  ];
  return list;
}
