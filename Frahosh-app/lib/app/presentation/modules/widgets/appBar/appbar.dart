import 'package:flutter/material.dart';

import '../../../../../gen/assets.gen.dart';


class Appbar extends StatelessWidget {
  const Appbar({
    Key? key,
    required this.title,
    required this.image,
    required this.textTheme,
  }) : super(key: key);

  final TextTheme textTheme;
  final String title;
  final Image image;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        children: [
          const SizedBox(height: 10,),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Image.asset(
                Assets.icons.menu.path,
                scale: 1,
              ),
              Text(
                title,
                style: textTheme.headline1,
              ),
              image
            ],
          ),
        ],
      ),
    );
  }
}
