part of 'pdf_view_cubit.dart';

@immutable
abstract class PdfViewState {}

class PdfViewLoading extends PdfViewState {}

class PdfViewGeneral extends PdfViewState {
  final int pages;
  final int currentPage;

  PdfViewGeneral(this.pages, this.currentPage);

  bool get canGoNext => currentPage < pages;
  bool get canGoPre => currentPage != 1;
}
