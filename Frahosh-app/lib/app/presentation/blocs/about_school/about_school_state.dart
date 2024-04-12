part of 'about_school_cubit.dart';

@immutable
abstract class AboutSchoolState {}

class AboutSchoolLoading extends AboutSchoolState {}

class AboutSchoolError extends AboutSchoolState {}

class AboutSchoolGeneral extends AboutSchoolState {
  final Map _data;

  AboutSchoolGeneral(this._data);

  String get schoolName => _data['school_name'].toString();
  String get videoURL => _data['video_link'].toString();
  String get textManager => _data['text_manager'].toString();
  String get buildYear => _data['year_make'].toString();
  String get studentsCount => _data['number_students'].toString();
  String get equipment => _data['schoolequipment'].toString();
  String get avatar =>
      '${appBaseURL}image/school_image/${_data['avatar_school']}';
  String get managerName => _data['Fname_Lname'].toString();
  String get address => _data['address_school'].toString();
  String get province => _data['ostan_school'].toString();
  String get city => _data['city_school'].toString();
  String get cability => _data['cability_shool'].toString();
  String get longitude => _data['Longitude'].toString();
  String get latitude => _data['latitude'].toString();
  String get description => _data['description'].toString();
  List<String> get pictures =>
      (json.decode(_data['slider_picture'].toString()) as List)
          .map<String>((e) => '${appBaseURL}image/school_image/slide_pic/$e')
          .toList();
}
