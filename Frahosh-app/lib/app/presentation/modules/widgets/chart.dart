import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

import '../const/datacolors.dart';

class LineChartSample2 extends StatefulWidget {
  const LineChartSample2({super.key});

  @override
  State<LineChartSample2> createState() => _LineChartSample2State();
}

class _LineChartSample2State extends State<LineChartSample2> {
  List<Color> gradientColors = [
    const Color(0xff49AFF4),
    const Color(0xffFFFFFF),
  ];


  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        AspectRatio(
          aspectRatio: 1.70,
              child: LineChart(
                  mainData(),
              ),
            ),
      ],
    );
  }

  Widget bottomTitleWidgets(double value, TitleMeta meta) {
    const style = TextStyle(
      color: Color(0xff68737d),
      fontWeight: FontWeight.bold,
      fontSize: 16,
    );
    Widget text;
    switch (value.toInt()) {
        //     case 0:
        // text =
        //     const RotatedBox(quarterTurns: 3, child: Text('مهر', style: style));
        // break;
      case 1:
        text =
            const RotatedBox(quarterTurns: 3, child: Text('آبان', style: style));
        break;
      case 2:
        text =
            const RotatedBox(quarterTurns: 3, child: Text('آذر', style: style));
        break;
      case 3:
        text =
            const RotatedBox(quarterTurns: 3, child: Text('دی', style: style));
        break;
      case 4:
        text =
            const RotatedBox(quarterTurns: 3, child: Text('بهمن', style: style));
        break;
      case 5:
        text =
            const RotatedBox(quarterTurns: 3, child: Text('اسفند', style: style));
        break;
      case 6:
        text =
            const RotatedBox(quarterTurns: 3, child: Text('فروردین', style: style));
        break;
      default:
        text = const Text('', style: style);
        break;
    }

    return SideTitleWidget(
      axisSide: meta.axisSide,
      child: text,
    );
  }

  LineChartData mainData() {
    return LineChartData(
      gridData: FlGridData(
        show: false,
        drawVerticalLine: false,
        horizontalInterval: 1,
        verticalInterval: 1,
        getDrawingHorizontalLine: (value) {
          return FlLine(
            color: SolidColors.backgroundColor,
            strokeWidth: 5,
          );
        },
        getDrawingVerticalLine: (value) {
          return FlLine(
            color: const Color(0xff37434d),
            strokeWidth: 1,
          );
        },
      ),
      titlesData: FlTitlesData(
        show: true,
        rightTitles: AxisTitles(
          sideTitles: SideTitles(showTitles: false),
        ),
        topTitles: AxisTitles(
          sideTitles: SideTitles(showTitles: false),
        ),
        bottomTitles: AxisTitles(
          sideTitles: SideTitles(
            showTitles: true,
            reservedSize: 80,
            interval: 1,
            getTitlesWidget: bottomTitleWidgets,
          ),
        ),
        leftTitles: AxisTitles(
          sideTitles: SideTitles(
            showTitles: false,
            interval: 1,
            reservedSize: 42,
          ),
        ),
      ),
      borderData: FlBorderData(
        show: true,
        border: const Border(
            left: BorderSide(color: Colors.blue),
            bottom: BorderSide(color: Colors.blue)),
      ),
      minX: 0,
      maxX: 6,
      minY: 0,
      maxY: 8,
      lineBarsData: [
        LineChartBarData(
          spots: const [
            FlSpot(0, 0),
            FlSpot(1, 6),
            FlSpot(2, 3),
            FlSpot(3, 6),
            FlSpot(4, 5),
            FlSpot(5, 8),
            FlSpot(6, 7),
          ],
          isCurved: true,
          gradient: LinearGradient(
            colors: gradientColors,
          ),
          barWidth: 1,
          isStrokeCapRound: false,
          dotData: FlDotData(
            show: false,
            // checkToShowDot: (spot, barData) {
              
            // },
          ),
          belowBarData: BarAreaData(
            show: true,
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: gradientColors
                  .map((color) => color.withOpacity(0.45))
                  .toList(),
            ),
          ),
        ),
      ],
    );
  }
}