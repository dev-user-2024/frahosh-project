import 'package:farahoosh/app/presentation/modules/const/datacolors.dart';
import 'package:farahoosh/app/presentation/modules/extensions/edageinsets.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/router/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../blocs/settings/settings_cubit.dart';
import '../../../modules/const/urlimages.dart';
import '../../../modules/widgets/buttons/buttonWidget.dart';
import '../../../modules/widgets/dropdownButton.dart';
import '../../../modules/widgets/textField/TextFieldwidget.dart';
import '../../../router/packages.dart';

class ProfileEditeScreen extends StatelessWidget {
  const ProfileEditeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> items = <String>[
      '',
      'اول مفاهیم',
      'دوم مفاهیم',
      'سوم مفاهیم',
    ];
    String? selectedItem = '';
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          width: context.widths,
          height: context.heights,
          color: SolidColors.backgroundColor,
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
                                    height: 120,
                                    width: 120,
                                    alignment: Alignment.center,
                                    decoration: const BoxDecoration(
                                      shape: BoxShape.circle,
                                    ),
                                    child: Stack(
                                      children: [
                                        DataImages.profile.toJpgImage(),
                                        Container(
                                          height: 120,
                                          width: 120,
                                          decoration: BoxDecoration(
                                            color: const Color.fromARGB(
                                                103, 0, 0, 0),
                                            borderRadius:
                                                BorderRadius.circular(100),
                                          ),
                                        ),
                                        Center(
                                            child: DataImages.profileBorder
                                                .toJpgImage(size: 110)),
                                        Center(
                                            child: DataImages.edit
                                                .toJpgImage(size: 22)),
                                      ],
                                    ),
                                  ),
                                ).toOnly(R: 0.0)),
                          ],
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'نام',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'نام خانوادگی',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'تاریخ تولد',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.symmetric(vertical: 10),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Container(
                                width: size.width / 4,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                              Container(
                                width: size.width / 4,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                              Container(
                                width: size.width / 4,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                            ],
                          ),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'مقطع تحصیلی',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'اطلاعات پدر',
                              style: TextStyle(
                                  fontFamily: "IRANSansXV",
                                  fontSize: context
                                          .watch<SettingsCubit>()
                                          .state
                                          .normalTextSize +
                                      4,
                                  color: context
                                    .watch<SettingsCubit>()
                                    .state
                                    .selectedPrimaryColor,
                                  fontWeight: FontWeight.bold),
                            ).toOnly(L: 12.0),
                            Expanded(
                              child: Divider(
                                height: 4,
                                // thickness: 5,
                                // indent: 20,
                                // endIndent: 10,
                                color: context
                                    .watch<SettingsCubit>()
                                    .state
                                    .selectedPrimaryColor,
                              ),
                            ),
                          ],
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'نام',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                         Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'سال تولد',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                              Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'تحصیلات',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                              Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                        
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'شغل',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'شماره تماس',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,toVerticalSpaces,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'اطلاعات مادر',
                              style: TextStyle(
                                  fontFamily: "IRANSansXV",
                                  fontSize: context
                                          .watch<SettingsCubit>()
                                          .state
                                          .normalTextSize +
                                      4,
                                  color: context
                                    .watch<SettingsCubit>()
                                    .state
                                    .selectedPrimaryColor,
                                  fontWeight: FontWeight.bold),
                            ).toOnly(L: 12.0),
                            Expanded(
                              child: Divider(
                                height: 4,
                                // thickness: 5,
                                // indent: 20,
                                // endIndent: 10,
                                color: context
                                    .watch<SettingsCubit>()
                                    .state
                                    .selectedPrimaryColor,
                              ),
                            ),
                          ],
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'نام',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'نام خانوادگی',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'سال تولد',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                              Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                        
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Text(
                              'تحصیلات',
                              style: textTheme.headline1,
                            )
                          ],
                        ),
                              Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: dropdownButton(
                                    selectedItem, items, textTheme),
                              ),
                        
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'شغل',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          children: [
                            Text(
                              'شماره تماس',
                              style: textTheme.headline1,
                            )
                          ],
                        ).toOnly(R: 6.0),
                        toVerticalSpaces,
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.all(
                                Radius.circular(15),
                              ),
                              color: SolidColors.backgroundColor),
                          child: const Center(
                              child: TextFieldWidget(
                            borderSideColor: SolidColors.black,
                          )),
                        ),
                        toVerticalSpaces,
                        toVerticalSpaces,

                        toVerticalSpaces,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        toVerticalSpaces,
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            SizedBox(
                              width: size.width / 2.5,
                              height: 50,
                              child: InkWell(
                                child: const ButtonWidget(
                                  title: "ذخیره",
                                  mainColor: true,
                                ),
                                onTap: () {},
                              ),
                            ),
                            const SizedBox(
                              width: 20,
                            ),
                            SizedBox(
                              width: size.width / 2.5,
                              height: 50,
                              child: InkWell(
                                child: const ButtonWidget(
                                  title: "لغو",
                                  mainColor: false,
                                ),
                                onTap: () {
                                  Navigator.of(context).pop();
                                },
                              ),
                            ),
                          ],
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
