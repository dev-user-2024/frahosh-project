part of 'school_musics_cubit.dart';

@immutable
abstract class SchoolMusicsState {}

class SchoolMusicsLoading extends SchoolMusicsState {}

class SchoolMusicsError extends SchoolMusicsState {}

class SchoolMusicsGeneral extends SchoolMusicsState {
  final UnmodifiableListView<SchoolMusicObject> musics;
  final String? playingID;
  final String? pausedID;

  SchoolMusicsGeneral(List<SchoolMusicObject> musics,
      {this.playingID, this.pausedID})
      : musics = UnmodifiableListView(musics);
}
