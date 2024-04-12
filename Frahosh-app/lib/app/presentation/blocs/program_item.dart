class ProgramItemObject {
  final String id;
  final String title;
  final bool done;

  ProgramItemObject.fromMap(Map map)
      : id = map[''].toString(),
        title = map[''].toString(),
        done = map[''].toString() == '';
}
