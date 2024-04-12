import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

Future<T> showLoadingDialog<T>(BuildContext context, Future<T> future) async {
  final width = MediaQuery.of(context).size.width;
  showDialog<void>(
    context: context,
    builder: (context) => WillPopScope(
      child: Dialog(
        backgroundColor: Colors.white,
        insetPadding: EdgeInsets.symmetric(horizontal: width / 3),
        shape: const CircleBorder(),
        child: Lottie.asset('lottie_files/loading.json'),
      ),
      onWillPop: () async => false,
    ),
  );
  return future.whenComplete(() => Navigator.of(context).pop());
}
