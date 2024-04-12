import 'package:farahoosh/app/presentation/blocs/heart_writes/heart_writes_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/planner/planner_page5/planner_delneveshte.dart';
import 'package:farahoosh/app/presentation/screens/planner/showPlanner5BottomSheet.dart';
import 'package:flutter/material.dart';
import 'package:dotted_border/dotted_border.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../gen/assets.gen.dart';
import '../../leinter/leinter1/showLeinter1BottomSheet.dart';

class PlannerPage5 extends StatelessWidget {
  PlannerPage5({Key? key}) : super(key: key);

  final HeartWritesCubit _cubit = HeartWritesCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "دل نوشته"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    children: [
                        BlocBuilder<HeartWritesCubit, HeartWritesState>(
                          bloc: _cubit,
                            builder: (context, state) {
                              if (state is HeartWritesLoading) {
                                return Text('loading');
                              }
                              if (state is HeartWritesError) {
                                return Text('error');
                              }
                            return Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 0, vertical: 20),
                              child: GridView(
                                  gridDelegate:
                                      const SliverGridDelegateWithFixedCrossAxisCount(
                                          crossAxisCount: 2),
                                  shrinkWrap: true,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.all(15),
                                      child: InkWell(
                                        child: DottedBorder(
                                          color: SolidColors.blue,
                                          strokeWidth: 2,
                                          borderType: BorderType.RRect,
                                          dashPattern: [15, 12],
                                          strokeCap: StrokeCap.round,
                                          radius: const Radius.circular(15),
                                          child: Container(
                                            decoration: const BoxDecoration(
                                              color: SolidColors.backgroundColor,
                                            ),
                                            child: Stack(
                                              children: [
                                                Center(
                                                    child: Image.asset(Assets
                                                        .images.line61.path)),
                                                Center(
                                                    child: Image.asset(Assets
                                                        .images.line62.path)),
                                              ],
                                            ),
                                          ),
                                        ),
                                        onTap: () {
                                          // showPlanner5BottomSheet(context, size, textTheme, _cubit);
                                          Navigator.of(context).push(MaterialPageRoute(
                              builder: ((context) =>
                                   PlannerDelneveshte())));
                                        },
                                      ),
                                    ),
                                    ...(state as HeartWritesGeneral)
                                        .heartWrites
                                        .map((e) =>
                                            boxData(context, e.formattedDate))
                                            
                                            
                                  ]),
                            );
                          },
                        ),
                        const SizedBox(height: 150,),
                    ],
                  ),
                ),
                NavBar(size: size)
              ]),
            ),
          ),
        ],
      ),
    ));
  }
}

Widget boxDataFirs(context , _cubit) {
  Size size = MediaQuery.of(context).size;
  var textTheme = Theme.of(context).textTheme;
  return DottedBorder(
    color: SolidColors.blue,
    strokeWidth: 2,
    borderType: BorderType.RRect,
    dashPattern: [15, 12],
    strokeCap: StrokeCap.round,
    radius: const Radius.circular(15),
    child: InkWell(
      child: Container(
        width: size.width / 2.5,
        height: size.height / 2.5,
        decoration: const BoxDecoration(
          color: SolidColors.backgroundColor,
        ),
        child: Stack(
          children: [
            Center(child: Image.asset(Assets.images.line61.path)),
            Center(child: Image.asset(Assets.images.line62.path)),
          ],
        ),
      ),
      onTap: () {
        showLeinter1BottomSheet(context, size, textTheme, _cubit);
      },
    ),
  );
}

Widget boxData(context, String date) {
  Size size = MediaQuery.of(context).size;
  var textTheme = Theme.of(context).textTheme;
  return Padding(
    padding: const EdgeInsets.all(10),
    child: Container(
      height: size.width/2.5,
      width: size.width/2.5,
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.all(Radius.circular(15)),
        border: Border.all(color: SolidColors.blue, width: 0.1),
        color: SolidColors.white,
      ),
      child: Center(
        child: Text(
          date,
          textDirection: TextDirection.rtl,
          style: textTheme.subtitle1,
        ),
      ),
    ),
  );
}
