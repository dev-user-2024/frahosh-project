import 'package:flutter/material.dart';
import '../../../../gen/assets.gen.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';
import '../../modules/widgets/textField/searchTextField.dart';
import '../../router/const.dart';
import '../../router/packages.dart';

class SearchPage extends StatelessWidget {
  const SearchPage({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20),
            child: SearchTextField(),
          ),
        ],
      ),
    );
  }
}
