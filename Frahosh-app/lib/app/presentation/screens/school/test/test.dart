import 'package:farahoosh/app/presentation/blocs/test_groups/test_groups_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/testsDoneBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/test/q/testQ_1.dart';
import 'package:farahoosh/app/presentation/screens/school/test/done/testDone_1.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class TestPage extends StatelessWidget {
  TestPage({super.key});
  final TestGroupsCubit _cubit = TestGroupsCubit();
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            // appbar
            toApp(context: context, title: "آزمون"),

            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 20,
                        ),
                        Padding(
                          padding: EdgeInsets.only(
                              top: 8,
                              left: size.width / 2,
                              bottom: 25,
                              right: 20),
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: const ButtonWidget(
                                title: "+ شرکت در آزمون جدید", mainColor: true),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(
                              top: 10, left: 20, right: 25),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                "آزمون‌های انجام نشده",
                                style: textTheme.bodyText1,
                              ),
                            ],
                          ),
                        ),
                        BlocBuilder<TestGroupsCubit, TestGroupsState>(
                          bloc: _cubit,
                          builder: (context, state) {
                            if (state is TestGroupsLoading) {
                              return Text('loading');
                            }
                            if (state is TestGroupsError) {
                              return Text('error');
                            }
                            return Column(
                              children: (state as TestGroupsGeneral)
                                  .unFinished
                                  .map((e) => Padding(
                                        padding: const EdgeInsets.only(
                                            top: 20,
                                            left: 20,
                                            right: 20,
                                            bottom: 5),
                                        child: InkWell(
                                          child: TestsDoneBox(
                                              title: e.title,
                                              date: e.formattedDate,
                                              size: size,
                                              textTheme: textTheme),
                                          onTap: () {
                                            Navigator.of(context)
                                                .pushReplacement(
                                                    MaterialPageRoute(
                                                        builder: ((context) =>
                                                            const TestQ1())));
                                          },
                                        ),
                                      ))
                                  .toList(),
                            );
                          },
                        ),
                        Padding(
                          padding: const EdgeInsets.only(
                              top: 20, left: 20, right: 25),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                "آزمون‌های انجام شده",
                                style: textTheme.bodyText1,
                              ),
                            ],
                          ),
                        ),
                        BlocBuilder<TestGroupsCubit, TestGroupsState>(
                          bloc: _cubit,
                          builder: (context, state) {
                            if (state is TestGroupsLoading) {
                              return Text('loading');
                            }
                            if (state is TestGroupsError) {
                              return Text('error');
                            }
                            return Column(
                              children: (state as TestGroupsGeneral)
                                  .finished
                                  .map((e) => Padding(
                                        padding: const EdgeInsets.only(
                                            top: 20,
                                            left: 20,
                                            right: 20,
                                            bottom: 5),
                                        child: InkWell(
                                          child: TestsDoneBox(
                                              title: e.title,
                                              date: e.formattedDate,
                                              size: size,
                                              textTheme: textTheme),
                                          onTap: () {
                                            Navigator.of(context)
                                                .pushReplacement(
                                                    MaterialPageRoute(
                                                        builder: ((context) =>
                                                            TestDone1(e))));
                                          },
                                        ),
                                      ))
                                  .toList(),
                            );
                          },
                        ),
                        
                          const SizedBox(height: 150,),
                      ],
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
