export class Coach {
    CoachBusId!: number;
    RouteId!: number;
    DepartureTime!: string;
    DepartureDate!: string;
    ArrivalTime!: string;
    ArrivalDate!: string;
    TotalSeats!: number;
    Status!: string;
    DriverId!: number;
    NoOfSeats: number | undefined;
    TripStatus: string | undefined;
}
