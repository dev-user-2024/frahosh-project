part of 'tickets_cubit.dart';

@immutable
abstract class TicketsState {}

class TicketsGeneral extends TicketsState {
  final UnmodifiableListView<TicketObject> tickets;

  TicketsGeneral(List<TicketObject> tickets)
      : tickets = UnmodifiableListView(tickets);
}

class TicketsLoading extends TicketsState {}

class TicketsError extends TicketsState {}
