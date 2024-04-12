part of 'lesseon_grades_cubit.dart';

@immutable
abstract class LesseonGradesState {}

class LesseonGradesLoading extends LesseonGradesState {}

class LesseonGradesError extends LesseonGradesState {}

class LesseonGradesGeneralWithGrades extends LesseonGradesGeneralWithoutGrades {
  final UnmodifiableListView<LessonGradeObject> grades;

  LesseonGradesGeneralWithGrades(
      super.selectedIndex, super.lessons, List<LessonGradeObject> grades)
      : grades = UnmodifiableListView(grades);
}

class LesseonGradesGeneralWithoutGrades extends LesseonGradesState {
  final UnmodifiableListView<LessonObject> lessons;
  final int selectedIndex;
  LesseonGradesGeneralWithoutGrades(
      this.selectedIndex, List<LessonObject> lessons)
      : lessons = UnmodifiableListView(lessons);
}
