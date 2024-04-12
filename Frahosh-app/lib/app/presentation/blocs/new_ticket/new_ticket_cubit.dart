import 'package:bloc/bloc.dart';
import 'package:farahoosh/app/api.dart';
import 'package:farahoosh/app/presentation/blocs/new_tickeight/new_tickeight_cubit.dart';
import 'package:meta/meta.dart';

part 'new_ticket_state.dart';

class NewTicketCubit extends Cubit<NewTicketState> {
  NewTicketCubit() : super(NewTicketWithoutFile());

  void addFile(String filePath) {
    emit(NewTicketWithFile(filePath));
  }

  void removeFile() {
    emit(NewTicketWithoutFile());
  }

  Future<bool?> uploadTicket(String title, String desc) async {
    if (state is! NewTickeightLoading) {
      final path = state is NewTicketWithFile
          ? (state as NewTicketWithFile).filePath
          : null;
      emit(NewTicketLoading());
      try {
        await API.sendTicket(title, desc, filePath: path);
        return true;
      } catch (_) {
        if (path == null) {
          emit(NewTicketWithoutFile());
        } else {
          emit(NewTicketWithFile(path));
        }
        return false;
      }
    }
    return null;
  }
}
