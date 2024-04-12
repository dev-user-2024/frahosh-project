import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/screens/setting/changepassword/settingFingerPrint2Screen.dart';
import '../../../router/const.dart';
import '../../../router/packages.dart';

Future<dynamic> SettingFingerPrintScreenBottomSheet(
    BuildContext context, Size size, TextTheme textTheme) {
  return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: ((context) {
        return Padding(
          padding:
              EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
          child: Container(
            height: size.height / 1.5,
            decoration: const BoxDecoration(
                color: SolidColors.backgroundColor,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                )),
            child: Center(
              child: Column(
            children: [
              const SizedBox(height: 20,),
              Align(
                alignment: Alignment.center,
                child: DataImages.line_60.toPNGImage(),
              ),
              const SizedBox(height: 20,),
              'اثر انگشتت رو ثبت کن'.toText(color: SolidColors.black, fontSize: 14,fontWeight: FontWeight.bold),
              const SizedBox(height: 20,),
              '۱ از ۵'.toText(color: SolidColors.black, fontSize: 14,fontWeight: FontWeight.bold),
              const SizedBox(height: 80,),
              Align(
                alignment: Alignment.center,
                child: DataImages.fingerImage
                    .toJpgImage(size: 44, boxFit: BoxFit.cover, radius: 0),
              ),
              const SizedBox(height: 120,),
              
              Padding(
                
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Stack(
                  children: [
                    Align(
                    alignment: Alignment.center,
                    child: SizedBox(
                      width: context.widths,
                      child: DataImages.line_69
                          .toJpgImage(size: 44, boxFit: BoxFit.cover, radius: 0),
                    ),
                  ),
                  Align(
                    alignment: Alignment.center,
                    child: Padding(
                      padding:  EdgeInsets.only(right: context.widths/4),
                      child: SizedBox(
                        width: context.widths,
                        child: DataImages.line_70
                            .toJpgImage(size: 44, boxFit: BoxFit.cover, radius: 0),
                      ),
                    ),
                  ),
                  ],
                ),
              ),
              const SizedBox(height: 40,),
              Align(
                child: Column(
                  children: [
                   const SizedBox(height: 20,),
                    Align(
                      alignment: Alignment.center,
                      child: Row(
                        children: [
                          Expanded(
                            child: 'تایید'
                                .toText(color: SolidColors.white, fontSize: 20)
                                .toSymmetric(V: 10.0)
                                .toClick(onTap: () {
                                   Navigator.pop(context);
                                }, isOption: true),
                          ),
                          const SizedBox(width: 20,),
                          Expanded(
                            child: 'بعدی'
                                .toText(color: SolidColors.blue, fontSize: 20)
                                .toSymmetric(V: 10.0)
                                .toClickOutline(
                              onTap: () {
                              Navigator.pop(context);
                              SettingFingerPrintScreen2BottomSheet(context, size, textTheme);
                              },
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ).toSymmetric(H: 10.0)
            ],
          ),
       
            ),
          ),
        );
      }));
}