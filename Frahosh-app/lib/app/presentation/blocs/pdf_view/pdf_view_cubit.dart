import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'pdf_view_state.dart';

class PdfViewCubit extends Cubit<PdfViewState> {
  PdfViewCubit() : super(PdfViewLoading());

  void loaded(int pages) {
    emit(PdfViewGeneral(pages, 1));
  }

  void updateCurrPage(int curr) {
    if (state is PdfViewGeneral) {
      emit(PdfViewGeneral((state as PdfViewGeneral).pages, curr));
    }
  }

  bool nextPage() {
    if (state is PdfViewGeneral) {
      if ((state as PdfViewGeneral).canGoNext) {
        emit(PdfViewGeneral((state as PdfViewGeneral).pages,
            (state as PdfViewGeneral).currentPage + 1));
        return true;
      }
    }
    return false;
  }

  bool prePage() {
    if (state is PdfViewGeneral) {
      if ((state as PdfViewGeneral).canGoPre) {
        emit(PdfViewGeneral((state as PdfViewGeneral).pages,
            (state as PdfViewGeneral).currentPage - 1));
        return true;
      }
    }
    return false;
  }
}
