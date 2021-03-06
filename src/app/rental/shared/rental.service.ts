import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rentals } from './rental.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  

  constructor(private http : HttpClient) { }

  public getRentalById(rentalId : string):Observable<any>{
    return this.http.get('http://localhost:3001/api/v1/rentals/'+rentalId)
   
  }

  public getRentals():Observable<any>{
   return this.http.get('http://localhost:3001/api/v1/rentals');
  }
}
