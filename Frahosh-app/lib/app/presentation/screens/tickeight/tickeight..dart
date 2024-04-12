import 'package:farahoosh/app/presentation/blocs/new_tickeight/new_tickeight_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/tickeight/tickeight_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/buttons/buttonWidget.dart';
import 'package:farahoosh/app/presentation/screens/tickeight/wordPage1.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/linearProgress.dart';

class Ticleight extends StatelessWidget {
  final String title;

  Ticleight(this.title, this._cubit, {Key? key}) : super(key: key);

  final TickeightCubit _cubit;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;

    return SafeArea(
      child: Scaffold(
        body: Container(
            color: SolidColors.backgroundColor,
            child: Column(
              children: [
                toApp(context: context, title: title),
                Expanded(
                  child: Stack(
                    children: [
                      SingleChildScrollView(
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                          child: BlocBuilder<TickeightCubit, TickeightState>(
                            bloc: _cubit,
                            builder: (context, state) {
                              if (state is TickeightLoading) {
                                return Text('loading');
                              }
                              if (state is TickeightError) {
                                return Text('error');
                              }
                              if ((state as TickeightGeneral)
                                  .tickeights
                                  .isEmpty) {
                                return SizedBox(
                                  width: size.width / 2,
                                  height: 48,
                                  child: const ButtonWidget(
                                          title: ' + ثبت لغت جدید', mainColor: true)
                                      .toClick(onTap: (() {
                                    Navigator.of(context)
                                        .push<bool>(MaterialPageRoute(
                                            builder: ((context) => Wordpage(
                                                NewTickeightCubit(_cubit.id)))))
                                        .then((value) {
                                      if (value == true) {
                                        _cubit.load();
                                      }
                                    });
                                  })),
                                );
                              }

                              return Column(
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
                                                title: ' + ثبت لغت جدید',
                                                mainColor: true)
                                            .toClick(onTap: (() {
                                          Navigator.of(context)
                                              .push<bool>(MaterialPageRoute(
                                                  builder: ((context) =>
                                                      Wordpage(
                                                          NewTickeightCubit(
                                                              _cubit.id)))))
                                              .then((value) {
                                            if (value == true) {
                                              _cubit.load();
                                            }
                                          });
                                        })),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(
                                    height: 30,
                                  ),
                                  BlocBuilder<TickeightCubit, TickeightState>(
                                    bloc: _cubit,
                                    buildWhen: (previous, current) =>
                                        (previous as TickeightGeneral)
                                            .selectedIndex !=
                                        (current as TickeightGeneral)
                                            .selectedIndex,
                                    builder: (context, state) => LinearProgress(
                                        context,
                                        (state as TickeightGeneral)
                                            .tickeights
                                            .length,
                                        state.selectedIndex + 1),
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  BlocBuilder<TickeightCubit, TickeightState>(
                                    bloc: _cubit,
                                    buildWhen: (previous, current) =>
                                        ((previous as TickeightGeneral)
                                                .showEng !=
                                            (current as TickeightGeneral)
                                                .showEng) ||
                                        previous.selectedIndex !=
                                            current.selectedIndex,
                                    builder: (context, state) {
                                      return containerword(
                                          (state as TickeightGeneral).showEng
                                              ? state.selectedObj.eng
                                              : state.selectedObj.per,
                                          context);
                                    },
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  BlocBuilder<TickeightCubit, TickeightState>(
                                    bloc: _cubit,
                                    buildWhen: (previous, current) =>
                                        (previous as TickeightGeneral)
                                            .showEng !=
                                        (current as TickeightGeneral).showEng,
                                    builder: (context, state) => Container(
                                      child: (state as TickeightGeneral).showEng
                                          ? SizedBox(
                                              width: size.width,
                                              height: 48,
                                              child: const ButtonWidget(
                                                  title: 'نمایش معنی',
                                                  mainColor: true),
                                            )
                                          : Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment
                                                      .spaceBetween,
                                              children: [
                                                SizedBox(
                                                  width: size.width / 2.35,
                                                  height: 48,
                                                  child: const ButtonWidget(
                                                          title: 'درست بود',
                                                          mainColor: true)
                                                      .toClick(
                                                    onTap: () {
                                                      _cubit.check(true);
                                                    },
                                                  ),
                                                ),
                                                SizedBox(
                                                  width: size.width / 2.35,
                                                  height: 48,
                                                  child: const ButtonWidget(
                                                          title: 'اشتباه بود',
                                                          mainColor: false)
                                                      .toClick(
                                                    onTap: () {
                                                      _cubit.check(false);
                                                    },
                                                  ),
                                                ),
                                              ],
                                            ),
                                    ).toClick(
                                      onTap: () {
                                        _cubit.toggleWord();
                                      },
                                    ),
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  BlocBuilder<TickeightCubit, TickeightState>(
                                    bloc: _cubit,
                                    builder: (context, state) {
                                      return numbers(context,
                                          (state as TickeightGeneral).stages);
                                    },
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  btn_previous(() {
                                    _cubit.pre();
                                  }, () {
                                    _cubit.next();
                                  })
                                ],
                              );
                            },
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            )),
      ),
    );
  }
}

Widget btn_elevat(double widths, String text) {
  return ElevatedButton(
    style: ElevatedButton.styleFrom(
        backgroundColor: SolidColors.blue,
        minimumSize: Size(widths, 48),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10))),
    onPressed: () {},
    child: Text(
      '$text',
      textAlign: TextAlign.center,
      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
    ),
  );
}

Widget containerword(String word, context) {
  Size size = MediaQuery.of(context).size;

  return Container(
    height: 287,
    width: size.width,
    decoration: const BoxDecoration(
      borderRadius: BorderRadius.all(Radius.circular(15)),
      color: SolidColors.white,
    ),
    child: Center(
      child: Text('$word',
          style: const TextStyle(
              fontFamily: 'IRANSansXV',
              fontSize: 28,
              color: SolidColors.textTitleBlac,
              fontWeight: FontWeight.w500)),
    ),
  );
}

Widget numbers(context, List<bool?> stages) {
  var textTheme = Theme.of(context).textTheme;
  Size size = MediaQuery.of(context).size;
  return SizedBox(
    height: 51,
    width: size.width,
    child: GridView.builder(
        itemCount: 8,
        gridDelegate:
            const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 8),
        itemBuilder: (BuildContext context, index) {
          return Column(
            children: [
              Text(
                  [
                    'یک',
                    'دو.',
                    'سه',
                    'چهار',
                    'پنج',
                    'شش',
                    'هفت',
                    'هشت',
                  ][index],
                  style: textTheme.bodyText2),
              Container(
                height: 24,
                width: 24,
                decoration: BoxDecoration(
                    color: stages[index] == null
                        ? null
                        : stages[index] ?? false
                            ? Colors.green
                            : Colors.red,
                    borderRadius: const BorderRadius.all(Radius.circular(5)),
                    border: Border.all(color: SolidColors.black)),
                child: const Padding(
                  padding: EdgeInsets.all(2.0),
                  //  child: dataimage.trues,
                ),
              ),
            ],
          );
        }),
  );
}

Widget btn_previous(VoidCallback pre, VoidCallback next) {
  return Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: [
      Padding(
        padding: const EdgeInsets.only(right: 20),
        child: Container(
          height: 48,
          width: 48,
          decoration: const BoxDecoration(
            shape: BoxShape.circle,
            color: SolidColors.blue,
          ),
          child: const Icon(
            Icons.east,
            color: SolidColors.white,
          ),
        ).toClick(
          onTap: next,
        ),
      ),
      Padding(
        padding: const EdgeInsets.only(left: 20),
        child: Container(
          height: 48,
          width: 48,
          decoration: const BoxDecoration(
            shape: BoxShape.circle,
            color: SolidColors.blue,
          ),
          child: const Icon(
            Icons.west,
            color: SolidColors.white,
          ),
        ).toClick(onTap: pre),
      ),
    ],
  );
}
