part of 'new_ticket_cubit.dart';

@immutable
abstract class NewTicketState {}

class NewTicketLoading extends NewTicketState {}

class NewTicketWithoutFile extends NewTicketState {}

class NewTicketWithFile extends NewTicketState {
  final String filePath;
  NewTicketWithFile(this.filePath);
}
