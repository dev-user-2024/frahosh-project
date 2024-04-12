import 'dart:async';
import 'dart:io';

import 'package:dio/dio.dart';

const String appBaseURL = 'https://frapanel.frahosh.com/';

abstract class API {
  static final Dio _dio = Dio(BaseOptions(baseUrl: '${appBaseURL}api/'));
  static late final String _token;
  static void setToken(String token) => _token = token;

  static Options _tokenHeaderOptions({String? token}) => Options(
      headers: {HttpHeaders.authorizationHeader: 'Bearer ${token ?? _token}'});

  static Future<Response<Map>> profile({String? token}) => _dio
      .get<Map>('auth/check_login', options: _tokenHeaderOptions(token: token));

  static Future<Response<Map>> signup(
    String firstName,
    String lastName,
    String nationalID,
    String password,
    String email,
  ) =>
      _dio.post<Map>('auth/register_user', data: {
        'username': email,
        'password': password,
        'codemili': nationalID,
        'fname': firstName,
        'lname': lastName
      });

  static Future<Response<Map>> login(String email, String password) => _dio
      .post<Map>('auth/login', data: {'username': email, 'password': password});

  static Future<Response<Map>> logout() =>
      _dio.post<Map>('auth/logout', options: _tokenHeaderOptions());

  static Future<Response<Map>> transactionsList(int page) => _dio
      .get<Map>('V1/trachonesh_student_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> walletBalance() => _dio
      .get<Map>('V1/inventory_wallet_student', options: _tokenHeaderOptions());

  static Future<Response<Map>> faracoinBalance() =>
      _dio.get<Map>('V1/coin_inventory', options: _tokenHeaderOptions());

  static Future<Response<Map>> faracoinGuide() =>
      _dio.get<Map>('V1/admin/fracoin_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> tickets() =>
      _dio.get<Map>('V1/ticket_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> lessons() =>
      _dio.get<Map>('V1/student_class_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> lessonGrades(int id) =>
      _dio.post<Map>('V1/grade_student_class_list',
          data: {'class_id': id}, options: _tokenHeaderOptions());

  static Future<Response<Map>> searchPodcast(String exp) =>
      _dio.post<Map>('V1/search_podcast',
          data: {'s': exp}, options: _tokenHeaderOptions());

  static Future<Response<Map>> sendTicket(String title, String text,
          {String? filePath}) =>
      _dio.post<Map>('V1/ticket_list',
          data: FormData.fromMap({
            if (filePath != null) 'file': MultipartFile.fromFileSync(filePath)
          }),
          options: _tokenHeaderOptions());

  static Future<Response<Map>> uploadHandout(
          String sitting, String lesson, int grade,
          {required String filePath}) =>
      _dio.post<Map>('V1/handout_create',
          data: FormData.fromMap({
            'lesson_name': lesson,
            'jalase': sitting,
            'paeie': grade,
            'file': MultipartFile.fromFileSync(filePath)
          }),
          options: _tokenHeaderOptions());

  static Future<Response<Map>> uploadTestAnalysis(String description, int month,
          {required String filePath}) =>
      _dio.post<Map>('V1/test_analysis_create',
          data: FormData.fromMap({
            'description': description,
            'month': month,
            'test_report': MultipartFile.fromFileSync(filePath)
          }),
          options: _tokenHeaderOptions());

  static Future<Response<Map>> leitnerBoxes() =>
      _dio.get<Map>('V1/leitner_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> homeworks() =>
      _dio.get<Map>('V1/homework_student', options: _tokenHeaderOptions());

  static Future<Response<Map>> tickeights() =>
      _dio.get<Map>('V1/tickeight_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> leitners(String id) => _dio
      .get<Map>('V1/leitner_student_list/$id', options: _tokenHeaderOptions());

  static Future<Response<Map>> tickeight(String id) =>
      _dio.get<Map>('V1/tickeight_student_list/$id',
          options: _tokenHeaderOptions());

  static Future<Response<Map>> wordnotes() =>
      _dio.get<Map>('V1/wordnote_student_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> wordnote(String id) =>
      _dio.get<Map>('V1/wordnote_student_list_single/$id',
          options: _tokenHeaderOptions());

  static Future<Response<Map>> giftList() => _dio
      .get<Map>('V1/coins_gift_list_student', options: _tokenHeaderOptions());

  static Future<Response<Map>> heartWrites() =>
      _dio.get<Map>('V1/heart_written_student_Group',
          options: _tokenHeaderOptions());

  static Future<Response<Map>> aboutSchool() =>
      _dio.get<Map>('V1/about_school', options: _tokenHeaderOptions());

  static Future<Response<Map>> myHandouts() =>
      _dio.get<Map>('V1/my_handout', options: _tokenHeaderOptions());

  static Future<Response<Map>> schoolHandouts() =>
      _dio.get<Map>('V1/handout_school', options: _tokenHeaderOptions());

  static Future<Response<Map>> podcastCats() =>
      _dio.get<Map>('V1/category_podcasts', options: _tokenHeaderOptions());

  static Future<Response<Map>> podcasts(String catID) =>
      _dio.get<Map>('V1/podcasts/$catID', options: _tokenHeaderOptions());

  static Future<Response<Map>> counsels() =>
      _dio.get<Map>('V1/const_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> succMeetings() =>
      _dio.get<Map>('V1/yes_meting', options: _tokenHeaderOptions());

  static Future<Response<Map>> unsuccMettings() =>
      _dio.get<Map>('V1/no_meting', options: _tokenHeaderOptions());

  static Future<Response<Map>> schoolMusics() =>
      _dio.get<Map>('V1/music_student_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> schoolGalleryGroups() => _dio
      .get<Map>('V1/gallery_school_student', options: _tokenHeaderOptions());

  static Future<Response<Map>> surveyGroups() => _dio
      .get<Map>('V1/survey_group_list_student', options: _tokenHeaderOptions());

  static Future<Response<Map>> counselRates(String id) =>
      _dio.get<Map>('V1/score_const_list/$id', options: _tokenHeaderOptions());

  static Future<Response<Map>> counselTimes(String id) => _dio
      .get<Map>('V1/consts_time_rezerv/$id', options: _tokenHeaderOptions());

  static Future<Response<Map>> disciplines() => _dio
      .get<Map>('V1/discipline_student_list', options: _tokenHeaderOptions());

  static Future<Response<Map>> testAnalysisList() =>
      _dio.get<Map>('V1/test_analysis_group', options: _tokenHeaderOptions());

  static Future<Response<Map>> intPodcasts() =>
      _dio.get<Map>('V1/interest_podcast_list', options: _tokenHeaderOptions());
  static Future<Response<Map>> schoolNews() =>
      _dio.get<Map>('V1/news_school', options: _tokenHeaderOptions());

  // test
  static Future<Response<Map>> testGroups() =>
      _dio.get<Map>('V1/group_test_list', options: _tokenHeaderOptions());
  static Future<Response<Map>> testQuestions(String id) =>
      _dio.get<Map>('V1/question_list/$id', options: _tokenHeaderOptions());
  static Future<Response<Map>> uploadAnswer(String qID, String answer) =>
      _dio.post<Map>('V1/save_question/$qID',
          data: {'value': answer}, options: _tokenHeaderOptions());

  static Future<Response<Map>> rateCousel(String id, int rate) =>
      _dio.post<Map>('V1/score_const/$id',
          options: _tokenHeaderOptions(),
          data: {'score': rate, 'review': 'auto-from-app'});

  static Future<Response<Map>> addPodcastToInt(int id) =>
      _dio.post<Map>('V1/interest_podcast_create',
          options: _tokenHeaderOptions(), data: {'podcast_id': id});

  static Future<Response<Map>> deletePodcastFromInt(String id) =>
      _dio.delete<Map>('V1/interest_podcast_delete/$id',
          options: _tokenHeaderOptions());

  static Future<Response<Map>> addLeitnerBox(String title) =>
      _dio.post<Map>('V1/leitner_create',
          options: _tokenHeaderOptions(), data: {'title_leitner': title});

  static Future<Response<Map>> addTickeight(String title) =>
      _dio.post<Map>('V1/tickeight_create',
          options: _tokenHeaderOptions(), data: {'title_tickeight': title});

  static Future<Response<Map>> addLeitnerItem(
          String id, String text, bool front) =>
      _dio.post<Map>('V1/leitner_student/$id',
          options: _tokenHeaderOptions(),
          data: {"title": text, "position": front ? 'front' : 'back'});

  static Future<Response<Map>> addTickeightItem(
          String id, String eng, String per) =>
      _dio.post<Map>('V1/tickeight_student_create/$id',
          options: _tokenHeaderOptions(),
          data: {"word_english": eng, "mean_word": per});

  static Future<Response<Map>> addWordnote(
          String english, String mean, String exEng, String exMean) =>
      _dio.post<Map>('V1/wordnote_student',
          options: _tokenHeaderOptions(),
          data: {
            "word_english": english,
            "mean_word": mean,
            "example_english": exEng,
            "mean_example": exMean
          });
}
