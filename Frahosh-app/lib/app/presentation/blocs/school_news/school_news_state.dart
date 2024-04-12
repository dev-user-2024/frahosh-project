part of 'school_news_cubit.dart';

@immutable
abstract class SchoolNewsState {}

class SchoolNewsLoading extends SchoolNewsState {}

class SchoolNewsError extends SchoolNewsState {}

class SchoolNewsGeneral extends SchoolNewsState {
  final UnmodifiableListView<SchoolNewsObject> news;
  SchoolNewsGeneral(List<SchoolNewsObject> list)
      : news = UnmodifiableListView(list);
}
