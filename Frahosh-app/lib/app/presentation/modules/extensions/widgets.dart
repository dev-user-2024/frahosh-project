import 'package:cached_network_image/cached_network_image.dart';
import 'package:farahoosh/app/presentation/blocs/navbar/navbar_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/settings/settings_cubit.dart';
import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/strings.dart';
import 'package:farahoosh/app/presentation/modules/widgets/colors.dart';
import 'package:farahoosh/gen/assets.gen.dart';
import 'package:bloc/bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../router/packages.dart';
import '../const/urlimages.dart';
import '../widgets/dottedborder.dart';

extension EXAppBarWidget on Widget {
  toApp(
          {required BuildContext context,
          required String title,
          bool inMainScreen = false,
          Color backGroundColor = Colors.transparent}) =>
      Container(
        width: context.widths,
        alignment: Alignment.topCenter,
        decoration: BoxDecoration(
          color: backGroundColor,
        ),
        child: Column(
          children: [
            toVerticalSpaces,
            Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Expanded(
                  child: DataImages.menu
                      .toSvgImage()
                      .toClick(onTap: () => Scaffold.of(context).openDrawer())
                      .toOnly(L: 60.0),
                ),
                Expanded(
                    flex: 2,
                    child: title.toText(
                        fontSize: 18.0, fontWeight: FontWeight.bold)),
                Expanded(
                  child: DataImages.arrowLeft.toSvgImage().toClick(onTap: () {
                    if (inMainScreen) {
                      context.read<NavbarCubit>().goToPage(context, 0);
                    } else {
                      Navigator.of(context).pop();
                    }
                  }).toOnly(R: 60.0),
                ),
              ],
            ),
          ],
        ),
      );
}

extension ExToWidget on String {
  Widget toSvgImage({double size = 17.09}) => Image(
        image: Svg(this, size: Size(size, size)),
        alignment: Alignment.center,
        width: 50,
        height: 30,
      );

  get toProviderSvg => Svg(this);

  Widget toJpgImage(
          {double size = 127.0,
          double radius = 0,
          Color? color,
          BoxFit boxFit = BoxFit.fitWidth}) =>
      ClipRRect(
        borderRadius: BorderRadius.circular(radius),
        child: Image(
          image: AssetImage(this),
          color: color,
          alignment: Alignment.center,
          fit: boxFit,
          width: size,
        ),
      );

  Widget toPNGImage({double size = 127.0, Color? color}) => ClipRRect(
        borderRadius: BorderRadius.circular(0),
        child: Image(
          image: AssetImage(this),
          color: color,
          alignment: Alignment.center,
          fit: BoxFit.fitWidth,
          width: size,
        ),
      );

  Widget toNetworkImage({double size = 127.0}) => ClipRRect(
        borderRadius: BorderRadius.circular(0),
        child: CachedNetworkImage(
          imageUrl: this,
          alignment: Alignment.center,
          fit: BoxFit.fitWidth,
          width: size,
        ),
      );
}

extension CreateButtonWidget on Widget {
  Widget toClick({bool isOption = false, required void Function() onTap}) =>
      isOption
          ? InkWell(
              radius: 20,
              onTap: onTap,
              borderRadius: const BorderRadius.all(Radius.circular(10)),
              child: Container(
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: SolidColors.blue,
                  borderRadius: BorderRadius.circular(10),
                ),
                child: this,
              ),
            )
          : InkWell(
              splashColor: Colors.transparent,
              highlightColor: Colors.transparent,
              onTap: onTap,
              child: this,
            );

  Widget toClickOutline({
    required Function() onTap,
  }) =>
      InkWell(
          splashColor: Colors.transparent,
          highlightColor: Colors.transparent,
          onTap: onTap,
          child: Container(
            width: double.infinity,
            decoration: BoxDecoration(
                border: Border.all(color: SolidColors.blue),
                borderRadius: BorderRadius.circular(10.0)),
            child: this,
          ));
}

extension ToBoxesContainer on Widget {
  Widget get toBox => Container(
        decoration: BoxDecoration(
            color: SolidColors.white,
            borderRadius: BorderRadius.circular(15),
            border: Border.all(color: const Color.fromRGBO(29, 155, 240, .25))),
        child: toSymmetric(V: 20, H: 20.0),
      );

  Widget get toDottedBorder => DottedBorder(
        radius: const Radius.circular(10.0),
        borderType: BorderType.RRect,
        color: SolidColors.blue,
        strokeWidth: 1,
        dashPattern: const [10, 4],
        child: this,
      );

  Widget toProgressor({double progres = 0.5,Color color = SolidColors.blue, double reAction = .5}) =>
      Progresso(
          progress: progres,
          points: const [0.5],
          start: reAction,
          backgroundStrokeWidth: 10,
          pointColor: color,
          backgroundStrokeCap: StrokeCap.round,
          pointRadius: 13,
          pointInnerColor: color,
          backgroundColor: color.withOpacity(.2));

  Widget  toDivider({Color color = SolidColors.blue}) => Container(
        width: double.maxFinite,
        height: 2,
        decoration: BoxDecoration(
          gradient: LinearGradient(colors: [
            SolidColors.white,
            color.withOpacity(.5),
            SolidColors.white,
          ]),
        ),
      );

  Widget toBoxCheck(bool en , Color color) => Container(
        width: 20,
        height: 20,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(5),
            color: en ? color : SolidColors.grey),
      ).toOnly(L: 10.0);

  Widget get toDirection =>
      Directionality(textDirection: TextDirection.rtl, child: this);

  Widget toSessionApp(
          {required String title,
          bool hasIcon = true,
          Color color = SolidColors.blue,
          required Function() onTap,
          required bool enabled}) =>
      Align(
        child: Row(children: [
          Expanded(flex: 0, child: toBoxCheck(enabled , color)),
          Expanded(flex: 0, child: title.toText(fontSize: 16).toOnly(L: 5.0)),
          hasIcon == true
              ? const Expanded(
                  flex: 0, child: Icon(Icons.arrow_forward_ios, size: 15))
              : Container(),
        ]),
      ).toClick(onTap: onTap);

  Widget toCheckBox(
          {required BuildContext context,
          bool isActive = false,
          bool isActivePast = false,
          required Function() onTap,
          required String title}) =>
      Align(
        alignment: Alignment.center,
        child: Row(
          children: [
            Expanded(
                child: Align(
              alignment: Alignment.center,
              child: Row(textDirection: TextDirection.rtl, children: [
                Expanded(
                  flex: 0,
                  child: Container(
                    width: 24,
                    height: 24,
                    decoration: BoxDecoration(
                        border: isActive == true
                            ? const Border()
                            : Border.all(color: SolidColors.grey),
                        borderRadius: BorderRadius.circular(5),
                        color: isActive == true
                            ? context
                            .watch<SettingsCubit>()
                            .state
                            .selectedPrimaryColor
                            : isActivePast == true
                                ? SolidColors.grey
                                : SolidColors.backgroundColor),
                  ).toClick(onTap: onTap),
                ),
                Expanded(
                  flex: 0,
                  child: Container(
                    child: title.toText().toOnly(R: 10.0),
                  ),
                )
              ]),
            ))
          ],
        ),
      );

  Widget toBoxShadow(
          {required BuildContext context,
          required String name,
          required Widget icon,
          required void Function() onTap}) =>
      Container(
        height: 110,
        width: context.widths,
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(15),
            boxShadow: [
              BoxShadow(
                color: SolidColors.black.withOpacity(.02),
                blurRadius: 15,
                offset: const Offset(3, 3),
              ),
              BoxShadow(
                  color: SolidColors.black.withOpacity(.06),
                  blurRadius: 20,
                  offset: const Offset(-5, -5)),
            ]),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            icon == '' ? ''.toText() : Expanded(flex: 0, child: icon),
            const SizedBox(
              width: 10,
            ),
            Expanded(
                flex: 0,
                child: name.toText(
                    fontFamily: "IRANSansXV",
                    fontSize: 18,
                    color: SolidColors.textTitleBlac,
                    fontWeight: FontWeight.bold)),
          ],
        ).toCenter,
      ).toClick(onTap: onTap);

  Widget toReceipt(
          {required BuildContext context,
          required String price,
          int status = 0,
          required String date,
          required String time,
          required Function() onTap}) =>
      Container(
        height: 110,
        width: context.widths,
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(15),
            boxShadow: [
              BoxShadow(
                color: SolidColors.black.withOpacity(.02),
                blurRadius: 15,
                offset: const Offset(3, 3),
              ),
              BoxShadow(
                  color: SolidColors.black.withOpacity(.06),
                  blurRadius: 20,
                  offset: const Offset(-5, -5)),
            ]),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Align(
              child: Row(children: [
                Expanded(
                    flex: 0,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Expanded(
                          flex: 0,
                          child: status == 0
                              ? DataImages.plus.toSvgImage(size: 20)
                              : DataImages.minimiz.toSvgImage(size: 20),
                        ),
                        Expanded(
                            flex: 0,
                            child: status == 0
                                ? "واریز".toText(color: SolidColors.green)
                                : "برداشت".toText(color: SolidColors.red)),
                      ],
                    )),
                Expanded(
                  flex: 1,
                  child: price.toText(
                      fontWeight: FontWeight.bold,
                      textDirection: TextDirection.rtl),
                ),
              ]),
            ).toOnly(R: 10.0),
            Align(
              alignment: Alignment.centerLeft,
              child: DataImages.arrowBack.toSvgImage().toClick(onTap: onTap),
            ).toOnly(L: 10.0),
            Align(
              child:
                  Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                Expanded(
                    flex: 0,
                    child: "ساعت ۲۳:۱۵".toText(color: SolidColors.grey)),
                Expanded(
                  flex: 1,
                  child: "۱۵ مرداد ۱۴۰۱".toText(
                      textDirection: TextDirection.rtl,
                      color: SolidColors.grey),
                ),
              ]),
            ).toOnly(R: 30.0)
          ],
        ),
      );
}

extension ToRowing on Widget {
  toList({required String tabel, required String name}) => Row(
        textDirection: TextDirection.rtl,
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Expanded(
              flex: 1,
              child: tabel
                  .toText(textAlign: TextAlign.right, color: SolidColors.grey)
                  .toOnly(R: 10.0)),
          Expanded(
            child: name.toText(
                textAlign: TextAlign.right, fontWeight: FontWeight.bold),
          ),
        ],
      );
}

extension ToCenters on Widget {
  get toCenter => Center(
        child: this,
      );
}

extension ToNavigator on Widget {
  navigatorPush({required BuildContext context, required String push}) =>
      Navigator.pushNamed(context, push);

  navigatorReplace({required BuildContext context, required String push}) =>
      Navigator.pushReplacementNamed(context, push);

  navigatorPop({required BuildContext context}) => Navigator.pop(context);

  Future toShowDialog({required BuildContext context}) => showDialog(
        context: context,
        builder: (_) => this,
      );
}

extension ToTextFormField on Widget {
  Widget toTextField(
          {required TextEditingController textEditingController,
          bool isBlu = false,
          Color color = SolidColors.blue,
          int lines = 1,
          required String hintText}) =>
      SizedBox(
        height: 50,
        child: TextFormField(
          controller: textEditingController,
          textDirection: TextDirection.rtl,
          textAlign: TextAlign.right,
          maxLines: lines,
          decoration: InputDecoration(
            hintText: hintText,
            enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
                borderSide: BorderSide(
                    color: isBlu == true ? color : SolidColors.black,
                    width: 0.2)),
            focusedBorder: OutlineInputBorder(
              borderSide:  BorderSide(color: color, width: 0.5),
              borderRadius: BorderRadius.circular(10.0),
            ),
            border: OutlineInputBorder(
              borderSide:  BorderSide(color: color, width: 0.5),
              borderRadius: BorderRadius.circular(10.0),
            ),
            isDense: true,
            hintTextDirection: TextDirection.rtl,
          ),
        ),
      );
}
