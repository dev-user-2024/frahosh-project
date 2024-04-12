part of 'survey_groups_cubit.dart';

@immutable
abstract class SurveyGroupsState {}

class SurveyGroupsLoading extends SurveyGroupsState {}

class SurveyGroupsError extends SurveyGroupsState {}

class SurveyGroupsGeneral extends SurveyGroupsState {
  final UnmodifiableListView<SurveyGroupObject> groups;
  SurveyGroupsGeneral(List<SurveyGroupObject> groups)
      : groups = UnmodifiableListView(groups);
}
