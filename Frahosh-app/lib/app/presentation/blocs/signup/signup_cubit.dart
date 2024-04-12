import 'package:bloc/bloc.dart';
import 'package:dio/dio.dart';
import 'package:farahoosh/app/presentation/modules/const/routepage.dart';
import 'package:flutter/material.dart';
import 'package:meta/meta.dart';

import '../../../api.dart';

part 'signup_state.dart';

class SignupCubit extends Cubit<SignupState> {
  SignupCubit() : super(SignupGeneral());

  void signup(BuildContext context, String firstName, String lastName,
      String nationalID, String password, String email) {
    print(firstName);
    print(lastName);
    print(nationalID);
    print(password);
    print(email);
    if (state is! SignupLoading) {
      API
          .signup(firstName, lastName, nationalID, password, email)
          .then((value) {
        //show success dialog
        Navigator.of(context).pushReplacementNamed(RouterPage.login);
      }).catchError((_) {
        print((_ as DioError).response?.data);
        print((_ as DioError).message);
        print((_ as DioError).error);
        showDialog(
          context: context,
          builder: (context) => Dialog(),
        );
      });
    }
  }
}
