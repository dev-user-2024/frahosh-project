import '../../router/packages.dart';

class ToPopUpPage extends StatefulWidget {
  const ToPopUpPage({Key? key, required this.child}) : super(key: key);
  final Widget child;
  @override
  State<StatefulWidget> createState() => ToPopUpPageState();
}

class ToPopUpPageState extends State<ToPopUpPage> with SingleTickerProviderStateMixin {
  late  AnimationController controller;
  late Animation<double> opacityAnimation;
  Tween<double> opacityTween = Tween<double>(begin: 0.0, end: 5.0);
  Tween<double> marginTopTween = Tween<double>(begin: 800, end:200);
  late Animation<double> marginTopAnimation;

  @override
  void initState() {
    super.initState();

    controller = AnimationController(duration: const Duration(milliseconds: 800), vsync: this);
    marginTopAnimation = marginTopTween.animate(controller)
      ..addListener(() {
        setState(() {});
      });
    controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return FadeTransition(
      opacity: opacityTween.animate(controller),
      child: Material(
        color: Colors.transparent,
        child: Container(
          margin: EdgeInsets.only(
            top: marginTopAnimation.value,
          ),
          color: Colors.transparent,
          child: widget.child ,
        ),
      ),
    );
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}