import 'dart:ui';

import 'package:flutter/material.dart';

import '../../class/clippath.dart';

class tools_page extends StatelessWidget {
  const tools_page({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final  size=MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Color.fromARGB(251, 188, 215, 233),
      appBar: AppBar(
        iconTheme: IconThemeData(color: Colors.black),
        title: Text(
          'اطلاعات فردی ',
          style: TextStyle(color: Colors.black, fontSize: 16),
        ),
        centerTitle: true,
        backgroundColor: Colors.white,
        elevation: 0,
        actions: [
          Container(
            height: 15.5,
            width: 13.5,
            margin: EdgeInsets.only(right: 19),
            child: Icon(
              Icons.filter_list,
              color: Colors.black,
            ),
          ),
        ],
      ),
      body:  Stack(
      //  alignment: Alignment.bottomCenter,
        children: [
          Positioned(
              left: 0,
              bottom: 0,
              child: Container(
                width: 428,
                height: 96,
                
              decoration: BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(15)),
                  color: Color.fromARGB(255, 0, 0, 0),
              ),
                child: Stack(
                  children: [
                   CustomPaint(
                     size: Size(size.width, 80),
                   //  painter: BottomNavigation(),
                   )
                  ],
                ),
              ))
        ],
      ),
    );
  }

  Widget _getcontainer() {
    return Column(
      children: [
        Padding(
          padding: EdgeInsets.all(10),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              GestureDetector(
                  onTap: (() {}), child: _getimages('consultant', 'درصد گیری')),
              //   SizedBox(width: 20,),
              GestureDetector(
                  onTap: () {}, child: _getimages('Organizer 1', 'کنومتر')),
            ],
          ),
        ),
        Padding(
          padding: EdgeInsets.all(10),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              GestureDetector(
                  onTap: (() {}), child: _getimages('Organizer 1 (8)', 'مشتق')),
              //   SizedBox(width: 20,),
              GestureDetector(
                  onTap: () {},
                  child: _getimages('Organizer 1 (2)', 'ماشین حساب')),
            ],
          ),
        ),
        Padding(
          padding: EdgeInsets.all(10),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              GestureDetector(
                  onTap: (() {}),
                  child: _getimages('Organizer 1 (3)', 'تیکت ایت')),
              //   SizedBox(width: 20,),
              GestureDetector(
                  onTap: () {}, child: _getimages('Organizer 1 (1)', 'لایتنر')),
            ],
          ),
        ),
        Padding(
          padding: EdgeInsets.all(10),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              GestureDetector(
                  onTap: (() {}),
                  child: _getimages('Organizer 1 (4)', 'روزشمار کنکور')),
              //   SizedBox(width: 20,),
              GestureDetector(
                  onTap: () {},
                  child: _getimages('Organizer 12', 'دفتر یاداشت')),
            ],
          ),
        ),
        Padding(
          padding: EdgeInsets.all(10),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              GestureDetector(
                  onTap: (() {}),
                  child: _getimages('Organizer 1 (7)', 'کتابخانه')),
              //   SizedBox(width: 20,),
              GestureDetector(
                  onTap: () {},
                  child: _getimages('Organizer 1 (5)', 'ماتریس ')),
            ],
          ),
        ),
      ],
    );
  }

  Widget _getimages(String images, String text) {
    return Container(
      height: 136,
      width: 184,
      decoration: BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(15)),
          color: Color.fromARGB(255, 246, 246, 246)),
      child: Stack(
        alignment: Alignment.bottomCenter,
        children: [
          Positioned(
            top: 11,
            left: 50,
            child: Image.asset('images/$images.png'),
          ),
          ClipPath(
            child: ClipRRect(
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 5.0, sigmaY: 5.0),
                child: Container(
                  height: 53,
                  width: 184,
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(29, 155, 240, 0.08),
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(15),
                      bottomRight: Radius.circular(15),
                    ),
                  ),
                  child: Center(
                    child: Text(
                      '$text',
                      textAlign: TextAlign.center,
                      style:
                          TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ),
            ),
            clipper: pathclipper(),
          ),
        ],
      ),
    );
  }
}
