import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import '../../modules/const/routepage.dart';
import '../../modules/const/urlimages.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../router/packages.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: SizedBox(
          width: context.widths,
          height: context.heights,
          child: Column(
            children: [
              toApp(context: context, title: "اطلاعات فردی"),
              Expanded(
                child: Stack(
                  children: [
                    SingleChildScrollView(
                      child: Column(children: [
                        const SizedBox(
                          height: 20,
                        ),
                        // Pictures To Profile And Edit
                        Row(
                          children: [
                            // ignore: sort_child_properties_last
                            Expanded(
                                flex: 1,
                                child: Align(
                                  alignment: Alignment.center,
                                  child: Container(
                                    alignment: Alignment.center,
                                    decoration: const BoxDecoration(
                                      shape: BoxShape.circle,
                                    ),
                                    child: DataImages.profile.toJpgImage(),
                                  ),
                                ).toOnly(R: 0.0)),
                          ],
                        ),
                        // Information Persons
                        toVerticalSpaces,
                        Align(
                            alignment: Alignment.center,
                            child: Column(
                              children: [
                                toList(
                                    tabel: "نام و نام خانوادگی",
                                    name: "مازیار محمدپور"),
                                toVerticalSpaces,
                                toList(tabel: "تاریخ تولد", name: "1390/02/16"),
                                toVerticalSpaces,
                                toList(
                                    tabel: "مقطع تحصیلی",
                                    name: "هفتم- متوسطه اول"),
                              ],
                            )).toBox,
                        toVerticalSpaces,
                        Align(
                            alignment: Alignment.center,
                            child: Column(
                              children: [
                                toList(tabel: "نام پدر", name: "کامران"),
                                toVerticalSpaces,
                                toList(tabel: "سن", name: "43"),
                                toVerticalSpaces,
                                toList(tabel: "تحصیلات", name: "کارشناسی"),
                                toVerticalSpaces,
                                toList(tabel: "شغل", name: "کارمند بانک"),
                                toVerticalSpaces,
                                toList(
                                    tabel: "شماره تماس", name: "09123456789"),
                              ],
                            )).toBox,
                        toVerticalSpaces,
                        Align(
                            alignment: Alignment.center,
                            child: Column(
                              children: [
                                toList(
                                    tabel: "نام و نام خانوادگی مادر",
                                    name: "مریم ربیعی"),
                                toVerticalSpaces,
                                toList(tabel: "سن", name: "38"),
                                toVerticalSpaces,
                                toList(tabel: "تحصیلات", name: "کارشناسی"),
                                toVerticalSpaces,
                                toList(tabel: "شغل", name: "معلم ابتدایی"),
                                toVerticalSpaces,
                                toList(
                                    tabel: "شماره تماس", name: "09123456789"),
                              ],
                            )).toBox,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        SizedBox(
                          height: 50,
                          child: InkWell(
                            child: ButtonWidget(
                              title: "ویرایش اطلاعات",
                              mainColor: true,
                              icons: DataImages.edit.toPNGImage(size: 18),
                            ),
                            onTap: () {
                              
                      navigatorPush(context: context, push: RouterPage.profileEditeScreen);
                            },
                          ),
                        ),
                        toVerticalSpaces,
                        const SizedBox(
                          height: 150,
                        )
                      ]).toSymmetric(H: 20.0),
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
