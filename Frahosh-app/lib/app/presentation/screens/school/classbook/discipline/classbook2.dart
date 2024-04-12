import 'package:farahoosh/app/presentation/blocs/disciplines/disciplines_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/boxes/disciplineBox.dart';

class ClassBook2 extends StatelessWidget {
  ClassBook2({Key? key}) : super(key: key);
  final DisciplinesCubit _cubit = DisciplinesCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "موارد انضباطی"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: BlocBuilder<DisciplinesCubit, DisciplinesState>(
                      bloc: _cubit,
                      builder: (context, state) {
                        if (state is DisciplinesLoading) {
                          return Text('loading');
                        }
                        if (state is DisciplinesError) {
                          return Text('error');
                        }
                        return Column(
                          children: (state as DisciplinesGeneral)
                              .objects
                              .map(
                                (e) => DisciplineBox(
                                  size: size,
                                  textTheme: textTheme,
                                  title: e.title,
                                  score: 0.5,
                                  description: e.desc,
                                  date: e.date,
                                ),
                              )
                              .toList(),
                        );
                      },
                    )),
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}
