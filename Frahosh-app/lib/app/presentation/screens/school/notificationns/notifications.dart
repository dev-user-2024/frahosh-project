import 'package:farahoosh/app/presentation/blocs/school_news/school_news_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../modules/widgets/boxes/notficationBox.dart';

class Notifications extends StatelessWidget {
  Notifications({Key? key}) : super(key: key);
  final SchoolNewsCubit _cubit = SchoolNewsCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "اطلاعیه "),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 20,
                  ),
                  child: BlocBuilder<SchoolNewsCubit, SchoolNewsState>(
                    bloc: _cubit,
                    builder: (context, state) {
                      if (state is SchoolNewsLoading) {
                        return Text('loading');
                      }
                      if (state is SchoolNewsError) {
                        return Text('error');
                      }
                      return Column(
                        children: (state as SchoolNewsGeneral)
                            .news
                            .map(
                              (e) => NotficationBox(
                                  size: size,
                                  textTheme: textTheme,
                                  desc: e.desc,
                                  title: e.title,
                                  date: e.formattedDate,
                                  mainText: e.shortDesc),
                            )
                            .toList(),
                      );
                    },
                  ),
                ),
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
