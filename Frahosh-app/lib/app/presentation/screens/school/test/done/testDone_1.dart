import 'package:farahoosh/app/presentation/blocs/test_groups/test_groups_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/urlimages.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/boxes/differentColorBox.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/app/presentation/screens/school/test/done/testDone_2.dart';
import 'package:farahoosh/app/presentation/screens/school/test/mid/testMid.dart';
import 'package:flutter/material.dart';
import '../../../../../../gen/assets.gen.dart';
import '../../../../modules/const/datacolors.dart';
import '../avg/testAVG.dart';

class TestDone1 extends StatelessWidget {
  const TestDone1(this._testGroupObject, {super.key});
  final TestGroupObject _testGroupObject;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(
            children: [
              // appbar
              toApp(context: context, title: _testGroupObject.title),

              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
                        child: Center(
                          child: Column(
                            children: [
                              InkWell(
                                child: DifferentColorsBox(
                                  widget: DataImages.exampeper.toPNGImage(
                                      size: 100),
                                  color: GradiantColors.pinkGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "برگه امتحان",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) =>
                                          const TestDone2())));
                                },
                              ),
                              const SizedBox(
                                height: 25,
                              ),
                              InkWell(
                                child: DifferentColorsBox(
                                  widget: DataImages.graphOfAverageScores
                                      .toPNGImage(size: 100),
                                  color: GradiantColors.greenGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "نمودار میانگین نمرات",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => const TestAVG())));
                                },
                              ),
                              const SizedBox(
                                height: 25,
                              ),
                              InkWell(
                                child: DifferentColorsBox(
                                  widget: Image.asset(
                                    Assets.images.robotHello.path,
                                    scale: 1,
                                  ),
                                  color: GradiantColors.blueGradiantColor,
                                  size: size,
                                  textTheme: textTheme,
                                  title: "نمودار میانه نمرات",
                                ),
                                onTap: () {
                                  Navigator.of(context).push(MaterialPageRoute(
                                      builder: ((context) => const TestMid())));
                                },
                              ),
                              const SizedBox(
                                height: 150,
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
                    NavBar(size: size)
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
