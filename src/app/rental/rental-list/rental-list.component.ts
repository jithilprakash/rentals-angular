import { Component, OnInit } from "@angular/core";
import { RentalService } from "../shared/rental.service";
import { Rentals } from "../shared/rental.models";

@Component({
  selector: "app-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls: ["./rental-list.component.scss"]
})
export class RentalListComponent implements OnInit {
  rentals: Rentals[] = [];
  constructor(private rentalService: RentalService) {}

  ngOnInit() {
    const rentalObservable= this.rentalService.getRentals();

    rentalObservable.subscribe(
      (rentals:Rentals[]) => {
        this.rentals = rentals;
      },
      err => {},
      () => {}
    );
  }
}
