import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RentalService } from "../shared/rental.service";
import { Rentals } from "../shared/rental.models";

@Component({
  selector: "app-rental-detail",
  templateUrl: "./rental-detail.component.html",
  styleUrls: ["./rental-detail.component.scss"]
})
export class RentalDetailComponent implements OnInit {
  rental: Rentals;
  rentalId: string;
  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService
  ) {}

  ngOnInit() {
    this.rental = new Rentals();
    this.route.params.subscribe(params => {
      this.rentalId = params["rentalId"];
    });
    this.getRental(this.rentalId);
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe((rental: Rentals) => {
      this.rental = rental;
    });
  }
}
