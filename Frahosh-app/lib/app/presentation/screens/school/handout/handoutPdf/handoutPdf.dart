import 'package:farahoosh/app/presentation/blocs/handout.dart';
import 'package:farahoosh/app/presentation/blocs/pdf_view/pdf_view_cubit.dart';
import 'package:farahoosh/app/presentation/modules/extensions/widgets.dart';
import 'package:farahoosh/app/presentation/modules/widgets/navbar/navbar.dart';
import 'package:farahoosh/gen/assets.gen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';
import '../../../../modules/const/datacolors.dart';

class HandoutPdf extends StatelessWidget {
  final HandoutObject _handout;
  HandoutPdf(this._handout, {super.key});

  final PdfViewCubit _cubit = PdfViewCubit();
  final PdfViewerController _pdfViewerController = PdfViewerController();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var textTheme = Theme.of(context).textTheme;
    return SafeArea(
      child: Scaffold(
        backgroundColor: SolidColors.backgroundColor,
        body: Column(
          children: [
            // appbar
            toApp(
                context: context,
                title: '${_handout.sittingNo} ${_handout.lessonName}'),
            Expanded(
              child: Stack(
                children: [
                  SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 20,
                          ),
                          Padding(
                            padding: const EdgeInsets.only(top: 10, right: 5),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Text(
                                  _handout.formattedDate,
                                  style: textTheme.bodyText1,
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 40,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Container(
                                width: 48,
                                height: 48,
                                decoration: BoxDecoration(
                                  color: SolidColors.blue,
                                  borderRadius: BorderRadius.circular(100),
                                ),
                                child: Image.asset(Assets.icons.vector.path),
                              ).toClick(
                                onTap: () {
                                  if (_cubit.nextPage()) {
                                    _pdfViewerController.nextPage();
                                  }
                                },
                              ),
                              BlocBuilder<PdfViewCubit, PdfViewState>(
                                bloc: _cubit,
                                builder: (context, state) {
                                  if (state is PdfViewGeneral) {
                                    return Text(
                                      'صفحه ${state.currentPage}',
                                      style: textTheme.bodyText1,
                                    );
                                  }
                                  return const SizedBox();
                                },
                              ),
                              Container(
                                width: 48,
                                height: 48,
                                decoration: BoxDecoration(
                                  color: SolidColors.blue,
                                  borderRadius: BorderRadius.circular(100),
                                ),
                                child: Image.asset(Assets.icons.arrowLeft.path),
                              ).toClick(
                                onTap: () {
                                  if (_cubit.prePage()) {
                                    _pdfViewerController.previousPage();
                                  }
                                },
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          Container(
                            width: size.width,
                            height: size.height / 2,
                            decoration: BoxDecoration(
                                color: SolidColors.white,
                                borderRadius: BorderRadius.circular(15),
                                border: Border.all(
                                    color: SolidColors.blue, width: 0.2)),
                            child: SfPdfViewer.network(
                              _handout.fileLink,
                              controller: _pdfViewerController,
                              scrollDirection: PdfScrollDirection.horizontal,
                              onPageChanged: (details) {
                                _cubit.updateCurrPage(details.newPageNumber);
                              },
                              pageLayoutMode: PdfPageLayoutMode.single,
                              canShowScrollHead: false,
                              onDocumentLoaded: (details) {
                                _cubit.loaded(details.document.pages.count);
                              },
                            ),
                          ),
                          const SizedBox(height: 150,)
                        ],
                      ),
                    ),
                  ),
                  NavBar(size: size)
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
