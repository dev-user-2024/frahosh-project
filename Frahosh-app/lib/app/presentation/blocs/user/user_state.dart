part of 'user_cubit.dart';

@immutable
abstract class UserState {
  final String id;
  final String email;
  final String firstName;
  final String lastName;
  final String nationalCode;
  final String phone;
  final String? image;

  const UserState(this.id, this.email, this.firstName, this.lastName,
      this.nationalCode, this.phone, this.image);
}

class UserInitial extends UserState {
  const UserInitial() : super('', '', '', '', '', '', null);
}

class UserGeneral extends UserState {
  UserGeneral.fromMap(Map map)
      : super(
          map['user_id'].toString(),
          map['username'].toString(),
          map['Fnamest'].toString(),
          map['Lnamest'].toString(),
          map['National_code'].toString(),
          map['phone'].toString(),
          map['avatar_st'],
        );
}
