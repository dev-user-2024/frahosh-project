import 'dart:math';

import 'package:farahoosh/app/presentation/blocs/utils.dart';

class HandoutObject {
  final String date;
  final String lessonName;
  final String fileLink;
  final String sittingNo;
  final String grade;

  HandoutObject.fromMap(Map map)
      : date = map['date_reigster'].toString().replaceAll('-', '/'),
        lessonName = map['lesson_name'].toString(),
        fileLink = map['file'].toString(),
        sittingNo = map['jalase'].toString(),
        grade = map['paeie'].toString();

  String get formattedDate => dateFormat(date);
  String get fileType =>
      fileLink.substring(max(fileLink.lastIndexOf('.'), 0) + 1);
}
