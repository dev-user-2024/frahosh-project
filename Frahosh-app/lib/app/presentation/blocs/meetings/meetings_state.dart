part of 'meetings_cubit.dart';

@immutable
abstract class MeetingsState {}

class MeetingsLoading extends MeetingsState {}

class MeetingsError extends MeetingsState {}

class MeetingsGeneral extends MeetingsState {
  final UnmodifiableListView<MeetingObject> succMeetings;
  final UnmodifiableListView<MeetingObject> unsuccMeetings;

  MeetingsGeneral(List<MeetingObject> succ, List<MeetingObject> unsucc)
      : succMeetings = UnmodifiableListView(succ),
        unsuccMeetings = UnmodifiableListView(unsucc);
}
