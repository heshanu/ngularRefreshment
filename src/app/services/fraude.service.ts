import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraudeService {

  private apiUrl = 'http://localhost:8081/api/v1/fraud-alerts/all';

  constructor(private http: HttpClient) { }

  // Method to fetch all records
  getAllAlerts(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
  
}
