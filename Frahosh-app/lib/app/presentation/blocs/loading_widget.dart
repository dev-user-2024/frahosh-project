import 'package:farahoosh/app/presentation/router/packages.dart';
import 'package:lottie/lottie.dart';

class CustomLoadingWidget extends StatelessWidget {
  final double dimension;
  const CustomLoadingWidget(this.dimension, {super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox.square(
      dimension: dimension,
      child: Lottie.asset('lottie_files/loading.json'),
    );
  }
}
