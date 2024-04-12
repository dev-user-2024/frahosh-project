import 'package:farahoosh/app/presentation/blocs/my_handouts/my_handouts_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/testsDoneBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/handout/handoutVideo/handoutVideo.dart';
import 'package:farahoosh/app/presentation/screens/school/handout/handoutPdf/handoutPdf.dart';
import 'package:farahoosh/app/presentation/screens/school/handout/mine/new_handout.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../../../gen/assets.gen.dart';
import '../../../../modules/const/datacolors.dart';
import '../../../../modules/widgets/dropdownButton.dart';

class HandoutMine extends StatelessWidget {
  HandoutMine({super.key});
  final MyHandoutsCubit _cubit = MyHandoutsCubit();
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
            toApp(context: context, title: "جزوه‌های من"),

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
                          InkWell(
                            child: Padding(
                              padding: const EdgeInsets.only(
                                top: 8,
                                bottom: 25,
                              ),
                              child: Container(
                                height: 50,
                                width: double.infinity,
                                decoration: BoxDecoration(
                                  color: SolidColors.blue,
                                  border: Border.all(
                                      color: SolidColors.backgroundColor),
                                  borderRadius: BorderRadius.circular(10),
                                ),
                                child: Container(
                                  alignment: Alignment.center,
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Image.asset(Assets.icons.arrowTop.path),
                                      const SizedBox(
                                        width: 10,
                                      ),
                                      const Text(
                                        "بارگذاری فایل",
                                        style: TextStyle(
                                            fontSize: 16,
                                            fontFamily: "IRANSansXV",
                                            decoration: TextDecoration.none,
                                            color: SolidColors.textTitleWhite),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                            onTap: () {
                              Navigator.of(context)
                                  .push<bool>(MaterialPageRoute(
                                builder: (context) => NewHandout(),
                              ))
                                  .then((value) {
                                if (value ?? false) {
                                  _cubit.load();
                                }
                              });
                            },
                          ),
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
                            height: 40,
                          ),
                          BlocBuilder<MyHandoutsCubit, MyHandoutsState>(
                            bloc: _cubit,
                            builder: (context, state) {
                              if (state is MyHandoutsLoading) {
                                return Text('loading');
                              }
                              if (state is MyHandoutsError) {
                                return Text('error');
                              }
                              return Column(
                                children: (state as MyHandoutsGeneral)
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
