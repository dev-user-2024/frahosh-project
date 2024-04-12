import 'package:farahoosh/app/presentation/blocs/utils.dart';

import '../../api.dart';

class PodcastObject {
  final String id;
  final String name;
  final String description;
  final String audioURL;
  final String imageURL;
  final String date;
  final int viewCount;
  PodcastObject.fromMap(Map map)
      : id = map['id'].toString(),
        name = map['Fname_Lname'].toString(),
        description = map['description'].toString(),
        date = map['date_podcast'].toString(),
        audioURL = map['audio'].toString(),
        imageURL = '${appBaseURL}image/podcast/${map['image']}',
        viewCount = 0;

  String get formattedDate => dateFormat(date);
}
