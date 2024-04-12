import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/courseInformationBox.dart';
import 'package:farahoosh/app/presentation/router/screens.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
export 'package:hexcolor/hexcolor.dart';
import '../../../blocs/tickets/tickets_cubit.dart';
import '../../../modules/const/datacolors.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';

class Ticket extends StatelessWidget {
  Ticket({Key? key}) : super(key: key);
  final TicketsCubit _cubit = TicketsCubit();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "درخواست تیکت پشتیبانی"),
            Expanded(
              child: Stack(children: [
                SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 20,
                        ),
                        Padding(
                          padding: const EdgeInsets.symmetric(vertical: 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              SizedBox(
                                width: size.width / 2,
                                height: 48,
                                child: const ButtonWidget(
                                    title: '+ ثبت تیکت جدید', mainColor: true),
                              ).toClick(
                                onTap: () {
                                  Navigator.of(context)
                                      .push<bool>(MaterialPageRoute(
                                    builder: (context) => NewTicket(),
                                  ))
                                      .then((value) {
                                    if (value ?? false) {
                                      _cubit.loadTickets();
                                    }
                                  });
                                },
                              ),
                            ],
                          ),
                        ),
                        Row(
                          children: [
                            Text(
                              'تیکت‌های ارسال شده',
                              style: textTheme.subtitle1,
                            )
                          ],
                        ),
                        const SizedBox(
                          height: 15,
                        ),
                        BlocBuilder<TicketsCubit, TicketsState>(
                          bloc: _cubit,
                          builder: (context, state) {
                            if (state is TicketsLoading) {
                              return Text('loading');
                            }
                            if (state is TicketsError) {
                              return Text('error');
                            }
                            return Column(
                              children: (state as TicketsGeneral)
                                  .tickets
                                  .map<Widget>(
                                    (e) => Padding(
                                      padding:
                                          const EdgeInsets.only(bottom: 20),
                                      child: CourseInformationBox(
                                              title: e.title,
                                              date: e.formattedDate,
                                              check: false,
                                              size: size,
                                              textTheme: textTheme)
                                          .toClick(
                                        onTap: () {
                                          Navigator.of(context).pushNamed(
                                              RouterPage.ticketpage3);
                                        },
                                      ),
                                    ),
                                  )
                                  .toList(),
                            );
                          },
                        ),
                      ],
                    ),
                  ),
                ),
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}
