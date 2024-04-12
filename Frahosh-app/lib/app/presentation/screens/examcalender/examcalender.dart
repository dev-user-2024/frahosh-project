import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../blocs/settings/settings_cubit.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';
import '../../modules/widgets/boxes/widgetExamCalender.dart';

class ExamCalender extends StatelessWidget {
  const ExamCalender({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "روزشمار کنکور"),
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
                        widgetExamCalender('365', 'روز',context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor, 186, size.width, context,),
                        const SizedBox(height: 28),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            widgetExamCalender(
                                '59', 'ثانیه',context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor, 160, size.width / 3.7, context),
                            widgetExamCalender(
                                '59', 'دقیقه',context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor, 160, size.width / 3.7, context),
                            widgetExamCalender(
                                '12', 'ساعت',context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor, 160, size.width / 3.7, context),
                          ],
                        ),
                        const SizedBox(
                          height: 60,
                        ),
                        _task(context,'10 شهریور 1401'),
                        const SizedBox(
                          height: 28,
                        ),
                        _task(context,'14 تیر 1402'),
                      ],
                    ),
                  ),
                ),
                NavBar(size: size),
              ]),
            ),
          ]),
        ),
      ),
    );
  }

  

  Widget _task(context,String text) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SizedBox(
        height: 52,
        width: size.width,
        child: Row(
          children: [
            
            Text(
              'تاریخ امروز :',
              style: textTheme.subtitle1,
            ),
            const SizedBox(
              width: 12,
            ),
                          Expanded(
                            child: Container(
                                width: size.width,
                                decoration: BoxDecoration(
                                  color: SolidColors.white,
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child:  TextFieldWidget(
                                  hintText: text,
                                  borderSideColor: SolidColors.blue,
                                )),
                          ),
            
          ],
        ));
  }
}
