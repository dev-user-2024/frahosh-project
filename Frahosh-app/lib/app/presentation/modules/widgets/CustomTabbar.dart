import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../const/datacolors.dart';
import 'colors.dart';

class CustomTabbar extends StatefulWidget {
  final String title1;
  final String title2;
  final Widget tab1;
  final Widget tab2;
  const CustomTabbar(this.title1, this.title2, this.tab1, this.tab2,
      {super.key});

  @override
  _CustomTabbarState createState() => _CustomTabbarState();
}

class _CustomTabbarState extends State<CustomTabbar>
    with SingleTickerProviderStateMixin {
  TabController? _tabController;

  @override
  void initState() {
    _tabController = TabController(length: 2, vsync: this);
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
    _tabController!.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: SolidColors.backgroundColor,
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Container(
              height: 50,
              decoration: BoxDecoration(
                color: SolidColors.backgroundColor,
                border: Border.all(color: SolidColors.blue, width: 1),
                borderRadius: BorderRadius.circular(10),
              ),
              child: TabBar(
                controller: _tabController,
                indicator: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: SolidColors.blue),
                labelColor: Colors.white,
                unselectedLabelColor: SolidColors.blue,
                tabs: [
                  Tab(
                    text: widget.title1,
                  ),
                  Tab(
                    text: widget.title2,
                  ),
                ],
              ),
            ),

            // tab bar view here
            Expanded(
              
              child: TabBarView(
                controller: _tabController,
                children: [widget.tab2, widget.tab1],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
