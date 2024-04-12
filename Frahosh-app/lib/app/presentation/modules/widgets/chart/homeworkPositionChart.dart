import 'package:percent_indicator/linear_percent_indicator.dart';
import '../../../router/packages.dart';
import '../../const/datacolors.dart';

Widget homeworkPositionChart(
    context, String position, double percent, String title) {
  Size size = MediaQuery.of(context).size;
  var textTheme = Theme.of(context).textTheme;
  return Container(
    height: 130,
    width: size.width,
    decoration: BoxDecoration(
        borderRadius: const BorderRadius.all(Radius.circular(15)),
        border: Border.all(color: SolidColors.black, width: 0.2),
        color: SolidColors.white),
    child: Column(
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                title,
                textDirection: TextDirection.rtl,
                style: textTheme.subtitle1,
              ),
              const Icon(
                Icons.west,
                color: SolidColors.black,
              ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 15),
          child: Row(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 30),
                child: Center(
                  child: SizedBox(
                    width: size.width / 1.40,
                    child: LinearPercentIndicator(
                      leading: Text(
                        '%100',
                        textDirection: TextDirection.rtl,
                        style: textTheme.bodyText1,
                      ),
                      trailing: Text(
                        '%0',
                        textDirection: TextDirection.rtl,
                        style: textTheme.bodyText1,
                      ),
                      barRadius: const Radius.circular(10),
                      linearGradient: LinearGradient(
                        colors: [
                          percent < .5
                              ? Colors.green
                              : percent < 1
                                  ? Colors.blue
                                  : Colors.grey,
                          SolidColors.gwhhitee,
                        ],
                      ),
                      lineHeight: 20,
                      percent: percent,
                      //  progressColor: DataColors.Primary,
                      backgroundColor: SolidColors.greyChart,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    ),
  );
}
