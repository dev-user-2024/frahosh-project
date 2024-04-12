import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import '../../../router/packages.dart';
import '../../const/datacolors.dart';
import '../../const/urlimages.dart';
import '../textField/TextFieldwidget.dart';

class PlaneMySchedule extends StatelessWidget {
  const PlaneMySchedule({
    Key? key,
    required this.size,
     this.hintText = '',
     this.delete = false,
     this.doneCheckBox = false,
     this.lineThroughText = false,
  }) : super(key: key);
  final Size size;
  final bool delete;
  final bool doneCheckBox;
  final bool lineThroughText;
  final String hintText;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 70,
      width: size.width,
      child: 
      delete == false ? Stack(
        children: [
          Align(
              alignment: Alignment.centerRight,
              child: doneCheckBox == true ? toCheckBox(
                    title: '',
                    isActivePast: true,
                    isActive: false,
                    onTap: () {
                    }, context: context) : toCheckBox(
                    title: '',
                    onTap: () {
                    }, context: context) 
              ),
              Align(
              alignment: Alignment.centerLeft,
                child: Container(
                  height: 60,
                  width: size.width/1.26,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(15),
                    color: SolidColors.white,
                  ),
                  child: lineThroughText == false ?
                   TextFieldWidget(
                        hintText: hintText,
                        borderSideColor: SolidColors.blue,
                      ) :
                   TextFieldWidget(
                        hintText: hintText,
                        borderSideColor: SolidColors.blue,
                        lineThrough: true,
                      ),
                ),
              )
        ],
      ) :  Stack(
                  children: [
                    Align(
                        alignment: Alignment.centerLeft,
                        child: DataImages.trash.toPNGImage(size: 20),
                        ),
                        Align(
                        alignment: Alignment.centerRight,
                          child: Container(
                            height: 60,
                            width: size.width/1.26,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                              color: SolidColors.white,
                            ),
                            child: TextFieldWidget(
                                  hintText: hintText,
                                  borderSideColor: SolidColors.blue,
                                ),
                          ),
                        )
                  ],
                ),
    );
  }
}