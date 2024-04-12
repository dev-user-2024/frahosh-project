import 'package:farahoosh/app/presentation/blocs/school_handouts/school_handouts_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/testsDoneBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/handout/handoutVideo/handoutVideo.dart';
import 'package:farahoosh/app/presentation/screens/school/handout/handoutPdf/handoutPdf.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/dropdownButton.dart';

class HandoutOthers extends StatelessWidget {
  HandoutOthers({super.key});

  final SchoolHandoutsCubit _cubit = SchoolHandoutsCubit();

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      'ریاضی',
      'فیزیک',
      'شیمی',
    ];
    String? selectedItem = 'ریاضی';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            // appbar
            toApp(context: context, title: "جزوه‌های دوستان"),

            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Container(
                                width: size.width / 2.35,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                              Container(
                                width: size.width / 2.35,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 15,
                          ),
                          BlocBuilder<SchoolHandoutsCubit, SchoolHandoutsState>(
                            bloc: _cubit,
                            builder: (context, state) {
                              if (state is SchoolHandoutsLoading) {
                                return Text('loading');
                              }
                              if (state is SchoolHandoutsError) {
                                return Text('error');
                              }
                              return Column(
                                children: (state as SchoolHandoutsGeneral)
                                    .handouts
                                    .map(
                                      (e) => Padding(
                                        padding: const EdgeInsets.only(top: 25),
                                        child: InkWell(
                                          child: TestsDoneBox(
                                              title:
                                                  '${e.sittingNo} ${e.lessonName} , ${e.fileType}',
                                              date: e.formattedDate,
                                              size: size,
                                              textTheme: textTheme),
                                          onTap: () {
                                            if (e.fileType == 'pdf') {
                                              Navigator.of(context).push(
                                                  MaterialPageRoute(
                                                      builder: ((context) =>
                                                          HandoutPdf(e))));
                                            } else {
                                              Navigator.of(context).push(
                                                  MaterialPageRoute(
                                                      builder: ((context) =>
                                                          const HandoutVideo())));
                                            }
                                          },
                                        ),
                                      ),
                                    )
                                    .toList(),
                              );
                            },
                          ),
                          const SizedBox(height: 150,)
                        ],
                      ),
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
