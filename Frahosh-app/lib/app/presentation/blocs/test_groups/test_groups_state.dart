part of 'test_groups_cubit.dart';

@immutable
abstract class TestGroupsState {}

class TestGroupsLoading extends TestGroupsState {}

class TestGroupsError extends TestGroupsState {}

class TestGroupsGeneral extends TestGroupsState {
  UnmodifiableListView<TestGroupObject> groups;

  TestGroupsGeneral(List<TestGroupObject> objects)
      : groups = UnmodifiableListView(objects);

  UnmodifiableListView<TestGroupObject> get finished =>
      UnmodifiableListView(groups.where((element) => element.status == '1'));

  UnmodifiableListView<TestGroupObject> get unFinished =>
      UnmodifiableListView(groups.where((element) => element.status == '0'));
}
