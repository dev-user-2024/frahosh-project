
import 'package:percent_indicator/circular_percent_indicator.dart';

import '../../../router/packages.dart';
import '../../const/datacolors.dart';

Widget chart_Circular(context) {
  Size size = MediaQuery.of(context).size;
  var textTheme = Theme.of(context).textTheme;
  return Directionality(
    textDirection: TextDirection.ltr,
    child: Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Text(
              'نمودار تحقیق',
              style: textTheme.subtitle1,
            )
          ],
        ),
        const SizedBox(height: 20,),
        Container(
          width: size.width,
          margin: const EdgeInsets.symmetric(horizontal: 10,),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              CircularPercentIndicator(
                radius: 70.0,
                lineWidth: 15.0,
                startAngle: 200,
                percent: 0.8,
                center: const Text(
                  "80%",
                  style: TextStyle(
                      fontSize: 24,
                      fontFamily: 'IRANSansXV',
                      color: SolidColors.textTitleBlac),
                ),
                progressColor: GradiantColors.blueBoxColor.first,
                backgroundColor: SolidColors.greyChart,
              ),
              Column(
                children: [
                        const SizedBox(
                          height: 10,
                        ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 20),
                    child: Row(
                      children: [
                        Text(
                          'انجام شده',
                          style: textTheme.subtitle1,
                        ),
                        const SizedBox(
                          width: 10,
                        ),
                        Container(
                          height: 24,
                          width: 24,
                          decoration: const BoxDecoration(
                              borderRadius:
                                  BorderRadius.all(Radius.circular(4)),
                              color: SolidColors.blue),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Row(
                    children: [
                      Text(
                        'انجام نشده',
                        style: textTheme.subtitle1,
                      ),
                      const SizedBox(
                        width: 10,
                      ),
                      Container(
                        height: 24,
                        width: 24,
                        decoration: const BoxDecoration(
                            borderRadius: BorderRadius.all(Radius.circular(4)),
                            color: SolidColors.greyChart),
                      ),
                    ],
                  ),
                ],
              ),
            ],
          ),
        ),
      ],
    ),
  );
}
