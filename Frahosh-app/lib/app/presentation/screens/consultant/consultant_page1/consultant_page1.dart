import 'package:farahoosh/app/presentation/blocs/counsels/counsels_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/meetings/meetings_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/const/routepage.dart';
import '../../../modules/widgets/boxes/consultantResearveBox.dart';
import '../../../modules/widgets/textField/searchTextField.dart';

class ConsultantPage1 extends StatelessWidget {
  ConsultantPage1({Key? key}) : super(key: key);

  final CounselsCubit _counselsCubit = CounselsCubit();
  final MeetingsCubit _meetingsCubit = MeetingsCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "ارتباط با مشاوره"),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 10),
            child: SearchTextField(
              hintText: 'نام مشاور مورد نظرت رو جست و جو کن...',
            ),
          ),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const SizedBox(
                        height: 25,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: Text(
                          'مشاوران',
                          style: textTheme.subtitle1,
                        ),
                      ),
                      SizedBox(
                        height: 191,
                        width: size.width,
                        child: BlocBuilder<CounselsCubit, CounselsState>(
                          bloc: _counselsCubit,
                          builder: (context, state) {
                            if (state is CounselsLoading) {
                              return Text('loading');
                            }
                            if (state is CounselsError) {
                              return Text('error');
                            }
                            return ListView(
                              scrollDirection: Axis.horizontal,
                              children: (state as CounselsGeneral)
                                  .counsels
                                  .map((e) => InkWell(
                                        child: InkWell(
                                          child: Container(
                                            height: 140,
                                            width: 130,
                                            margin: const EdgeInsets.symmetric(
                                                horizontal: 22, vertical: 15),
                                            decoration: BoxDecoration(
                                                borderRadius:
                                                    const BorderRadius.all(
                                                        Radius.circular(15)),
                                                border: Border.all(
                                                    color: SolidColors.grey,
                                                    width: 0.1),
                                                color: SolidColors.white),
                                            child: Column(children: [
                                              Padding(
                                                padding: const EdgeInsets.only(
                                                    left: 22,
                                                    right: 22,
                                                    top: 18,
                                                    bottom: 7),
                                                child: SizedBox(
                                                  height: 70,
                                                  width: 70,
                                                  child: Hero(
                                                    tag: 'counsel${e.id}',
                                                    child: ClipOval(
                                                      child: e.image
                                                          .toNetworkImage(),
                                                    ),
                                                  ),
                                                ),
                                              ),
                                              Padding(
                                                padding:
                                                    const EdgeInsets.symmetric(
                                                        vertical: 12),
                                                child: Text(
                                                  '${e.fName} ${e.lName}',
                                                  style: Theme.of(context)
                                                      .textTheme
                                                      .bodyText1,
                                                ),
                                              )
                                            ]),
                                          ),
                                          onTap: () {
                                            Navigator.of(context)
                                                .push(MaterialPageRoute(
                                              builder: (context) =>
                                                  ConsultantPage2(
                                                      e,
                                                      context
                                                          .read<UserCubit>()
                                                          .state
                                                          .id),
                                            ));
                                          },
                                        ),
                                      ))
                                  .toList(),
                            );
                          },
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: Text('مشاوره های رزو شده',
                            style: textTheme.subtitle1),
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: SizedBox(
                          height: 200,
                          width: size.width,
                          child: BlocBuilder<MeetingsCubit, MeetingsState>(
                            bloc: _meetingsCubit,
                            builder: (context, state) {
                              if (state is MeetingsLoading) {
                                return Text('loading');
                              }
                              if (state is MeetingsError) {
                                return Text('error');
                              }
                              return ListView(
                                children: (state as MeetingsGeneral)
                                    .unsuccMeetings
                                    .map((e) => InkWell(
                                          child: ConsultantResearveBox(
                                            size: size,
                                            textTheme: textTheme,
                                            date: e.formattedDate,
                                            name: e.name,
                                            limit: e.distance,
                                            // onTap: (){
                                            // Navigator.of(context).pushNamed(RouterPage.consultant4);
                                            // },
                                          ),
                                          onTap: () {
                                            Navigator.of(context).pushNamed(
                                                RouterPage.consultant4);
                                          },
                                        ))
                                    .toList(),
                              );
                            },
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: Text('مشاوره‌های انجام شده',
                            style: textTheme.subtitle1),
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        child: SizedBox(
                          height: 200,
                          width: size.width,
                          child: BlocBuilder<MeetingsCubit, MeetingsState>(
                            bloc: _meetingsCubit,
                            builder: (context, state) {
                              if (state is MeetingsLoading) {
                                return Text('loading');
                              }
                              if (state is MeetingsError) {
                                return Text('error');
                              }
                              return ListView(
                                children: (state as MeetingsGeneral)
                                    .succMeetings
                                    .map((e) => InkWell(
                                          child: ConsultantResearveBox(
                                            size: size,
                                            textTheme: textTheme,
                                            date: e.formattedDate,
                                            name: e.name,
                                            limit: e.distance,
                                            // onTap: (){
                                            // Navigator.of(context).pushNamed(RouterPage.consultant4);
                                            // },
                                          ),
                                          onTap: () {
                                            Navigator.of(context).pushNamed(
                                                RouterPage.consultant4);
                                          },
                                        ))
                                    .toList(),
                              );
                            },
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 100,
                      ),
                    ],
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
