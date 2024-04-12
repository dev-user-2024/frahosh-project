import 'package:farahoosh/app/presentation/blocs/counsel/counsel_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/counsels/counsels_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/ratingstar.dart';

class ConsultantPage2 extends StatelessWidget {
  ConsultantPage2(this._counselObject, String myID, {Key? key})
      : _cubit = CounselCubit(_counselObject.id, myID);

  final CounselObject _counselObject;

  final CounselCubit _cubit;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
        child: Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Column(
        children: [
          toApp(context: context, title: "مشاوره"),
          Expanded(
            child: SizedBox(
              height: size.height,
              width: size.width,
              child: Stack(children: [
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    // crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      const SizedBox(
                        height: 20,
                      ),
                      SizedBox(
                        //  color: SolidColors.grey,
                        height: 200,
                        width: size.width,
                        child: Column(
                          children: [
                            SizedBox(
                              height: 70,
                              width: 70,
                              child: Hero(
                                tag: 'counsel${_counselObject.id}',
                                child: ClipOval(
                                  child: _counselObject.image.toNetworkImage(),
                                ),
                              ),
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            Text(
                              '${_counselObject.fName} ${_counselObject.lName}',
                              style: Theme.of(context).textTheme.subtitle1,
                            ),
                            BlocBuilder<CounselCubit, CounselState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                if (state is CounselLoading) {
                                  return Text('loading');
                                }
                                if (state is CounselError) {
                                  return Text('error');
                                }
                                return ratingstar(
                                    onRatingUpdate: (rate) {
                                      _cubit.rate(rate.toInt());
                                    },
                                    initRate: (state as CounselGeneral)
                                        .myRate
                                        .toDouble());
                              },
                            ),
                            const SizedBox(
                              height: 11,
                            ),
                            BlocBuilder<CounselCubit, CounselState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                if (state is CounselLoading) {
                                  return Text('loading');
                                }
                                if (state is CounselError) {
                                  return Text('error');
                                }
                                return Text(
                                  '${(state as CounselGeneral).averageRate} از ${state.ratings.length} نفر',
                                  style: textTheme.bodyText2,
                                );
                              },
                            ),
                          ],
                        ),
                      ),
                      Container(
                        width: size.width,
                        decoration: BoxDecoration(
                            borderRadius:
                                const BorderRadius.all(Radius.circular(15)),
                            border:
                                Border.all(color: SolidColors.blue, width: 0.2),
                            color: SolidColors.white),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 13, vertical: 12),
                          child: Text(
                            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.',
                            style: Theme.of(context).textTheme.subtitle1,
                            textDirection: TextDirection.rtl,
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 42,
                      ),
                      Container(
                        margin: const EdgeInsets.symmetric(horizontal: 0),
                        height: 535,
                        width: size.width,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Padding(
                              padding: const EdgeInsets.symmetric(vertical: 20),
                              child: Text('روزهای قابل رزو',
                                  style: textTheme.subtitle1),
                            ),
                            BlocBuilder<CounselCubit, CounselState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                if (state is CounselLoading) {
                                  return Text('loading');
                                }
                                if (state is CounselError) {
                                  return Text('error');
                                }
                                return Column(
                                  children: (state as CounselGeneral)
                                      .reserves
                                      .map(
                                        (e) => Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceBetween,
                                          children: [
                                            //      dataimage.left_c,
                                            Text(
                                              e.formattedDate,
                                              style: Theme.of(context)
                                                  .textTheme
                                                  .subtitle1,
                                            ),
                                            //    dataimage.right_c,
                                          ],
                                        ),
                                      )
                                      .toList(),
                                );
                              },
                            ),
                          ],
                        ),
                      ),
                      SizedBox(
                        width: size.width,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'ساعت‌های مشاوره',
                              style: textTheme.subtitle1,
                            ),
                            const SizedBox(
                              height: 17,
                            ),
                            Container(
                              width: size.width,
                              decoration: BoxDecoration(
                                  borderRadius: const BorderRadius.all(
                                      Radius.circular(15)),
                                  border: Border.all(
                                      color: SolidColors.blue, width: 0.2),
                                  color: SolidColors.white),
                              child: Padding(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 13, vertical: 15),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'صبح: 8 الی 12',
                                      style:
                                          Theme.of(context).textTheme.subtitle1,
                                    ),
                                    const SizedBox(
                                      height: 15,
                                    ),
                                    Text(
                                      'عصر: 5 الی 9',
                                      style:
                                          Theme.of(context).textTheme.subtitle1,
                                    )
                                  ],
                                ),
                              ),
                            )
                          ],
                        ),
                      ),
                      const SizedBox(
                        height: 40,
                      ),
                      Align(
                        alignment: Alignment.topRight,
                        child: Text(
                          'شرح هزینه',
                          style: textTheme.subtitle1,
                        ),
                      ),
                      const SizedBox(
                        height: 17,
                      ),
                      Container(
                        width: size.width,
                        decoration: BoxDecoration(
                            borderRadius:
                                const BorderRadius.all(Radius.circular(15)),
                            border:
                                Border.all(color: SolidColors.blue, width: 0.2),
                            color: SolidColors.white),
                        child: Padding(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 16, vertical: 15),
                            child: Text(
                              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
                              style: Theme.of(context).textTheme.subtitle1,
                            )),
                      ),
                      const SizedBox(
                        height: 55,
                      ),
                      Align(
                        alignment: Alignment.topRight,
                        child: Text(
                          'نظرات و امتیازها',
                          style: textTheme.subtitle1,
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      Container(
                        decoration: BoxDecoration(
                            borderRadius:
                                const BorderRadius.all(Radius.circular(15)),
                            border:
                                Border.all(color: SolidColors.blue, width: 0.2),
                            color: SolidColors.white),
                        child: Column(
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(20),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Text(
                                    "سحر مرادی",
                                    style: textTheme.bodyText1,
                                  ),
                                  Row(
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.only(top: 4),
                                        child: Text(
                                          "4.5",
                                          style: textTheme.bodyText1,
                                        ),
                                      ),
                                      ratingstar(),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 0, vertical: 0),
                              child: SizedBox(
                                height: 200,
                                width: size.width,
                                child: Padding(
                                  padding: const EdgeInsets.all(8.0),
                                  child: Text(
                                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
                                    textDirection: TextDirection.rtl,
                                    style:
                                        Theme.of(context).textTheme.subtitle1,
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
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
