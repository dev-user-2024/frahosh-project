import 'package:farahoosh/app/presentation/blocs/wordnote/wordnote_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/navbar/navbar.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';

class WordPage2 extends StatelessWidget {
  final WordnoteCubit _cubit;

  WordPage2(this._cubit, {Key? key}) : super(key: key);

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
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: BlocBuilder<WordnoteCubit, WordnoteState>(
                    bloc: _cubit,
                    builder: (context, state) {
                      if (state is WordnoteLoading) {
                        return Text('loading');
                      }
                      if (state is WordnoteError) {
                        return Text('error');
                      }
                      return Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Padding(
                                padding:
                                    const EdgeInsets.only(top: 20, bottom: 10),
                                child: Text(
                                  'لغت',
                                  style: textTheme.subtitle1,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(
                            width: 15,
                          ),
                          Container(
                              width: size.width,
                              decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: TextFieldWidget(
                                textAlign: TextAlign.center,
                                hintText: (state as WordnoteGeneral).english,
                                minLines: 2,
                                borderSideColor: SolidColors.blue,
                              )),
                          Row(
                            children: [
                              Padding(
                                padding:
                                    const EdgeInsets.only(top: 20, bottom: 10),
                                child: Text(
                                  'معنی',
                                  style: textTheme.subtitle1,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(
                            width: 15,
                          ),
                          Container(
                              width: size.width,
                              decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: TextFieldWidget(
                                textAlign: TextAlign.center,
                                hintText: state.mean,
                                minLines: 2,
                                borderSideColor: SolidColors.blue,
                              )),
                          Row(
                            children: [
                              Padding(
                                padding:
                                    const EdgeInsets.only(top: 20, bottom: 10),
                                child: Text(
                                  'مثال',
                                  style: textTheme.subtitle1,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(
                            width: 15,
                          ),
                          Container(
                              width: size.width,
                              decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: TextFieldWidget(
                                textAlign: TextAlign.center,
                                hintText: state.exEng,
                                minLines: 2,
                                borderSideColor: SolidColors.blue,
                              )),
                          Row(
                            children: [
                              Padding(
                                padding:
                                    const EdgeInsets.only(top: 20, bottom: 10),
                                child: Text(
                                  'معنی',
                                  style: textTheme.subtitle1,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(
                            width: 15,
                          ),
                          Container(
                              width: size.width,
                              decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: TextFieldWidget(
                                textAlign: TextAlign.center,
                                hintText: state.exMean,
                                minLines: 2,
                                borderSideColor: SolidColors.blue,
                              )),
                        ],
                      );
                    },
                  ),
                ),
             
                NavBar(size: size),
              ]),
            ),
          ),
          
        ],
      ),
    ));
  }
}
