import 'package:farahoosh/app/presentation/blocs/new_test_analysis/new_test_analysis_cubit.dart';
import 'package:farahoosh/app/presentation/blocs/utils.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/dropdownButton.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../../../gen/assets.gen.dart';
import '../../modules/const/datacolors.dart';
import '../../modules/widgets/textField/TextFieldwidget.dart';
import '../../modules/widgets/buttons/buttonWidget.dart';
import '../../router/packages.dart';

class TestAnalysisPage3 extends StatelessWidget {
  TestAnalysisPage3({Key? key}) : super(key: key);

  final NewTestAnalysisCubit _cubit = NewTestAnalysisCubit();
  final GlobalKey<FormState> _formKey = GlobalKey();
  final TextEditingController _textEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        body: Container(
          color: SolidColors.backgroundColor,
          child: Column(children: [
            toApp(context: context, title: "ثبت توضیحات"),
            Expanded(
              child: Stack(children: [
                SingleChildScrollView(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 20,
                        ),
                        Row(
                          children: [
                            Text(
                              'توضیحات دانش‌آموز',
                              style: textTheme.subtitle1,
                            ),
                          ],
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        Container(
                          width: size.width,
                          decoration: const BoxDecoration(
                            borderRadius: BorderRadius.all(
                              Radius.circular(15),
                            ),
                            color: SolidColors.backgroundColor,
                          ),
                          child: Center(
                              child: Form(
                            key: _formKey,
                            child: TextFieldWidget(
                              minLines: 10,
                              validator: (value) {
                                if (value?.isEmpty ?? true) {
                                  return 'این قسمت نباید خالی باشد';
                                }
                              },
                              controller: _textEditingController,
                              labelText: "",
                              borderSideColor: SolidColors.black,
                            ),
                          )),
                        ),
                        const SizedBox(
                          height: 50,
                        ),
                        SizedBox(
                          height: 60,
                          child: Stack(
                            children: [
                              Center(
                                child: toCheckBox(
                                    title: '', isActive: true, onTap: () {}, context: context),
                              ),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.end,
                                children: [
                                  Container(
                                      width: size.width / 1.3,
                                      decoration: BoxDecoration(
                                        color: SolidColors.white,
                                        borderRadius: BorderRadius.circular(12),
                                      ),
                                      child: const TextFieldWidget(
                                        hintText: 'به مشاور نشان داده شود.',
                                        borderSideColor: SolidColors.blue,
                                      )),
                                ],
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        SizedBox(
                            height: 60,
                            child: BlocBuilder<NewTestAnalysisCubit,
                                NewTestAnalysisState>(
                              bloc: _cubit,
                              builder: (context, state) {
                                return dropdownButton(
                                  state.month,
                                  monthNames,
                                  textTheme,
                                  onChanged: (p0) {
                                    _cubit.changeMonth(p0.toString());
                                  },
                                );
                              },
                            )),
                        const SizedBox(
                          height: 50,
                        ),
                        BlocBuilder<NewTestAnalysisCubit, NewTestAnalysisState>(
                          bloc: _cubit,
                          builder: (context, state) {
                            return Container(
                              height: 50,
                              decoration: BoxDecoration(
                                color: state is NewTestAnalysisWithoutFile
                                    ? const Color.fromARGB(255, 29, 155, 240)
                                    : Colors.red,
                                border: Border.all(color: Colors.white),
                                borderRadius: BorderRadius.circular(10),
                              ),
                              child: Center(
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Image.asset(Assets.icons.arrowTop.path),
                                    const SizedBox(
                                      width: 12,
                                    ),
                                    Text(
                                      state is NewTestAnalysisWithoutFile
                                          ? "بارگزاری فایل"
                                          : 'تغییر فایل',
                                      style: textTheme.subtitle2,
                                    ),
                                  ],
                                ),
                              ),
                            );
                          },
                        ).toClick(
                          onTap: () {
                            FilePicker.platform
                                .pickFiles(type: FileType.image)
                                .then((value) {
                              if (value != null) {
                                _cubit.addFile(value.files[0].path.toString());
                              }
                            });
                          },
                        ),
                        const SizedBox(
                          height: 25,
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(
                              width: size.width / 2.35,
                              height: 50,
                              child: const ButtonWidget(
                                title: "ثبت",
                                mainColor: true,
                              ).toClick(
                                onTap: () {
                                  _cubit
                                      .uploadTestAnalysis(
                                          _textEditingController.text)
                                      .then((value) {
                                    if (value ?? false) {
                                      Navigator.of(context).pop(true);
                                    }
                                  });
                                },
                              ),
                            ),
                            const SizedBox(
                              width: 20,
                            ),
                            SizedBox(
                              width: size.width / 2.35,
                              height: 50,
                              child: const ButtonWidget(
                                title: "لغو",
                                mainColor: false,
                              ).toClick(onTap: (() {
                                Navigator.of(context).pop();
                              })),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}
