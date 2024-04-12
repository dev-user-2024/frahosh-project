import 'package:flutter/cupertino.dart';


 class LinePathClass extends CustomClipper<Path>{
  @override
  Path getClip(Size size) {
    debugPrint(size.width.toString());
    var path = Path();

    path.lineTo(0, size.height - 140 );
    var first_start = Offset(size.width/3.7, size.height - 0);
    var first_end = Offset(size.width/2.25, size.height - 100 );
    path.quadraticBezierTo(first_start.dx, first_start.dy, first_end.dx, first_end.dy);

    var secound_start = Offset(size.width - (size.width/5), size.height - 300);
    var secound_end = Offset(size.width , size.height - 190 );
    path.quadraticBezierTo(secound_start.dx, secound_start.dy, secound_end.dx, secound_end.dy);

   path.lineTo(size.width , 0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return true;
  }
} 
class LinePathClass1 extends CustomClipper<Path>{
  @override
  Path getClip(Size size) {
    debugPrint(size.width.toString());
    var path = Path();
    
     path.lineTo(0  , size.width );
    var first_start = Offset(size.width, size.height);
    var first_end = Offset(size.width, size.height);
    path.quadraticBezierTo(first_start.dx, first_start.dy, first_end.dx, first_end.dy);

    var secound_start = Offset(size.width , 0 );
    var secound_end = Offset(size.width , 90 );
    path.quadraticBezierTo(secound_start.dx, secound_start.dy, secound_end.dx, secound_end.dy);

     path.lineTo(0 , size.width - 50);
   
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return true;
  }
} 
class LinePathClass2 extends CustomClipper<Path>{
  @override
  Path getClip(Size size) {
    debugPrint(size.width.toString());
    var path = Path();

    path.lineTo(0, size.height/1.6 );
    var first_start = Offset(size.width/1.6, size.height - 0);
    var first_end = Offset(size.width, size.height/1.6 );
    path.quadraticBezierTo(first_start.dx, first_start.dy, first_end.dx, first_end.dy);

    // var secound_start = Offset(size.width - (size.width/5.24), size.height - 345);
    // var secound_end = Offset(size.width, size.height - 200);
    // path.quadraticBezierTo(secound_start.dx, secound_start.dy, secound_end.dx, secound_end.dy);

   path.lineTo(size.width , 0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return true;
  }
} 

class LinePathClass3 extends CustomClipper<Path>{
  @override
  Path getClip(Size size) {
    debugPrint(size.width.toString());
    var path = Path();

    path.lineTo(0, size.height - 120 );
    var first_start = Offset(size.width/7.9, size.height - 30);
    var first_end = Offset(size.width/2.25, size.height - 60 );
    path.quadraticBezierTo(first_start.dx, first_start.dy, first_end.dx, first_end.dy);

    var secound_start = Offset(size.width - (size.width/5.24), size.height - 100);
    var secound_end = Offset(size.width, size.height );
    path.quadraticBezierTo(secound_start.dx, secound_start.dy, secound_end.dx, secound_end.dy);

   path.lineTo(size.width , 0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return true;
  }
} 
class LinePathClass4 extends CustomClipper<Path>{
  @override
  Path getClip(Size size) {
    debugPrint(size.width.toString());
    var path = Path();

    path.lineTo(0, size.height - 50 );
    var first_start = Offset(size.width/4.9, size.height - 0);
    var first_end = Offset(size.width/2.25, size.height - 80 );
    path.quadraticBezierTo(first_start.dx, first_start.dy, first_end.dx, first_end.dy);

    var secound_start = Offset(size.width - (size.width/3.24), size.height - 170);
    var secound_end = Offset(size.width, size.height - 110 );
    path.quadraticBezierTo(secound_start.dx, secound_start.dy, secound_end.dx, secound_end.dy);

   path.lineTo(size.width , 0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return true;
  }
} 
class LinePathLogin extends CustomClipper<Path>{
  @override
  Path getClip(Size size) {
    debugPrint(size.width.toString());
    var path = Path();

    path.lineTo(0, size.height );
    var first_start = Offset(size.width/2.4, size.height/3);
    var first_end = Offset(size.width, size.height/2  );
    path.quadraticBezierTo(first_start.dx, first_start.dy, first_end.dx, first_end.dy);

    // var secound_start = Offset(size.width - (size.width/5.24), size.height - 345);
    // var secound_end = Offset(size.width, size.height - 200);
    // path.quadraticBezierTo(secound_start.dx, secound_start.dy, secound_end.dx, secound_end.dy);

   path.lineTo(size.width , 0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return true;
  }
} 