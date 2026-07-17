import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  
    private apiUrl = 'http://localhost:8081/api/v1/fraud-alerts/transactions';
  
    constructor(private http: HttpClient) { }
  
    // Method to fetch all records
    getAllAlerts(): Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl);
    }
}
