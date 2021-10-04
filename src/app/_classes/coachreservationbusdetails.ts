export class Coachreservationbusdetails {
  ReservationId!: number;
  CustomerId!: number;
  WithDriver!: string;
  CoachBusId!: number;
  Source!: string;
  Destination!: string;
  DepartureTime!: string;
  DepartureDate!: string;
  ArrivalTime!: string;
  ArrivalDate!: string;
  ReturnDepartureTime!: string;
  ReturnDepartureDate!: string;
  ReturnArrivalTime!: string;
  ReturnArrivalDate!: string;
  OutDate!: string;
  InDate!: string;
  Price!: number;
  SecurityDeposit!: string;
  DepositAmount!:number;
  NoOfSeats: number | undefined;
  DriverId: number | undefined;
  TripStatus: string | undefined;
  RouteId: number | undefined;
}
