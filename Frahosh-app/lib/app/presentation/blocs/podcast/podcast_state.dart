part of 'podcast_cubit.dart';

@immutable
abstract class PodcastState {
  final int maxLength;

  const PodcastState(this.maxLength);

  String get maxString =>
      '${maxLength ~/ 3600}:${(maxLength % 3600) ~/ 60}:${(maxLength % 60).toInt()}';
}

class PodcastLoading extends PodcastState {
  const PodcastLoading() : super(0);
}

class PodcastStoped extends PodcastState {
  final int seekPosition;
  const PodcastStoped(super.maxLength, this.seekPosition);

  String get seekString =>
      '${seekPosition ~/ 3600}:${(seekPosition % 3600) ~/ 60}:${(seekPosition % 60).toInt()}';
}

class PodcastPlaying extends PodcastState {
  final int seekPosition;
  const PodcastPlaying(super.maxLength, this.seekPosition);
  String get seekString =>
      '${seekPosition ~/ 3600}:${(seekPosition % 3600) ~/ 60}:${(seekPosition % 60).toInt()}';
}
