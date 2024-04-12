import 'dart:collection';

import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:meta/meta.dart';

part 'lesseon_grades_state.dart';

class LesseonGradesCubit extends Cubit<LesseonGradesState> {
  bool loading = false;
  LesseonGradesCubit() : super(LesseonGradesLoading()) {
    _load();
  }

  void _load() {
    API.lessons().then((value) {
      emit(LesseonGradesGeneralWithoutGrades(
          0,
          (value.data?['data'] as List)
              .map((e) => LessonObject.fromMap(e))
              .toList()));

      if ((value.data?['data'] as List).isNotEmpty) {
        selectLesson(
            LessonObject.fromMap((value.data?['data'] as List)[0]).title);
      }
    });
  }

  void selectLesson(String name) {
    if (state is LesseonGradesGeneralWithoutGrades && !loading) {
      loading = true;
      final index = (state as LesseonGradesGeneralWithoutGrades)
          .lessons
          .indexWhere((element) => element.title == name);

      emit(LesseonGradesGeneralWithoutGrades(
          index, (state as LesseonGradesGeneralWithoutGrades).lessons));

      API
          .lessonGrades(int.parse((state as LesseonGradesGeneralWithoutGrades)
              .lessons[
                  (state as LesseonGradesGeneralWithoutGrades).selectedIndex]
              .id))
          .then((value) => {
                emit(LesseonGradesGeneralWithGrades(
                    index,
                    (state as LesseonGradesGeneralWithoutGrades).lessons,
                    (value.data?['data'] as List)
                        .map((e) => LessonGradeObject.fromMap(e))
                        .toList()))
              })
          .catchError((_) {})
          .whenComplete(() => loading = false);
    }
  }
}

class LessonObject {
  final String id;
  final String title;
  LessonObject.fromMap(Map map)
      : id = map['class_id'].toString(),
        title = map['class_name'].toString();
}

class LessonGradeObject {
  final String grade;
  final String title;
  final String date;
  LessonGradeObject.fromMap(Map map)
      : grade = map['grade'].toString(),
        date = map['date'].toString(),
        title = map['title_grade'].toString();
}
