import 'package:farahoosh/app/presentation/blocs/wordnote/wordnote_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/wordnotes/wordnotes_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/word/createword.dart';
import 'package:farahoosh/app/presentation/screens/word/word.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../modules/widgets/navbar/navbar.dart';

class WordNote extends StatelessWidget {
  WordNote({Key? key}) : super(key: key);
  final WordnotesCubit _cubit = WordnotesCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "دفترچه لغت"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(
                children: [
                  SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 20,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            SizedBox(
                              width: size.width / 2,
                              height: 48,
                              child: const ButtonWidget(
                                      title: ' + ثبت لغت جدید', mainColor: true)
                                  .toClick(onTap: (() {
                                Navigator.of(context)
                                    .push(MaterialPageRoute(
                                        builder: ((context) => CreatWord())))
                                    .then((value) {
                                  if (value ?? false) {
                                    _cubit.load();
                                  }
                                });
                              })),
                            ),
                          ],
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        SizedBox(
                          height: size.height,
                          width: size.width,
                          child: BlocBuilder<WordnotesCubit, WordnotesState>(
                            bloc: _cubit,
                            builder: (context, state) {
                              if (state is WordnotesLoading) {
                                return Text('loading');
                              }
                              if (state is WordnotesError) {
                                return Text('error');
                              }
                              return GridView(
                                gridDelegate:
                                    const SliverGridDelegateWithFixedCrossAxisCount(
                                  crossAxisCount: 2,
                                  mainAxisSpacing: 25,
                                  crossAxisSpacing: 15,
                                  // mainAxisExtent: 200
                                ),
                                children: (state as WordnotesGeneral)
                                    .wordnotes
                                    .map((e) => GestureDetector(
                                          onTap: (() {
                                            Navigator.of(context).push(
                                                MaterialPageRoute(
                                                    builder: ((context) =>
                                                        WordPage2(WordnoteCubit(
                                                            e.id)))));
                                          }),
                                          child: Container(
                                            height: 250,
                                            width: size.width,
                                            decoration: BoxDecoration(
                                                borderRadius:
                                                    const BorderRadius.all(
                                                        Radius.circular(15)),
                                                color: SolidColors.white,
                                                border: Border.all(
                                                    color: SolidColors.blue,
                                                    width: 0.2)),
                                            child: Center(
                                                child: Padding(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                      vertical: 50),
                                              child: Text(
                                                e.englishWord,
                                                style: textTheme.subtitle1,
                                              ),
                                            )),
                                          ),
                                        ))
                                    .toList(),
                              );
                            },
                          ),
                        ),
                      ],
                    ),
                  ),
                  
                  NavBar(size: size),
                ],
              ),
            ),
          ),
          
        ],
      ),
    ));
  }
}
