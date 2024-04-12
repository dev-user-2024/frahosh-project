import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';
import '../../../../modules/const/datacolors.dart';

class ProfileEduinfo2Page extends StatelessWidget {
  const ProfileEduinfo2Page({super.key});

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
              toApp(context: context, title: "کارنامه ششم ابتدایی"),

            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          const SizedBox(height: 30,),
                          Container(
                            width: size.width,
                            height: size.height/1.5,
                            decoration: BoxDecoration(
                              color: SolidColors.white,
                              borderRadius: BorderRadius.circular(15),
                              border: Border.all(color: SolidColors.blue,width: 0.2)
                            ),
                            child: const Text(""),
                          ),

                          
                          const SizedBox(height: 150,),
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
