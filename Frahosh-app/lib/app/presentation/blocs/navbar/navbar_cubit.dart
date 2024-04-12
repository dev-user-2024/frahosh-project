import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/presentation/router/packages.dart';

part 'navbar_state.dart';

class NavbarCubit extends Cubit<NavbarState> {
  NavbarCubit() : super(const NavbarInitial());

  late final TabController _tabController;
  bool _emptyController = true;

  set controller(TabController tabController) {
    if (_emptyController) {
      _emptyController = false;
      _tabController = tabController;
    }
  }

  void goToPage(BuildContext context, int page) {
    Navigator.of(context).popUntil((route) => route.isFirst);
    _tabController.animateTo(
      page,
    );
    emit(NavbarGeneral(page));
  }
}
