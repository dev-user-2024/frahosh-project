part of 'navbar_cubit.dart';

@immutable
abstract class NavbarState {
  final int activePage;
  const NavbarState(this.activePage);
}

class NavbarGeneral extends NavbarState {
  const NavbarGeneral(super.activePage);
}

class NavbarInitial extends NavbarState {
  const NavbarInitial() : super(0);
}
