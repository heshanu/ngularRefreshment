import { Component, OnDestroy, OnInit } from '@angular/core';
import { FraudeService } from '../services/fraude.service';
import { TransactionModel } from '../shared/models/TransactionModel';
import { TransactionsService } from '../services/transactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit,OnDestroy {
  FraudeSubscription!: Subscription ;
  TransactionSubscription!: Subscription ;
  parsedTransactions: TransactionModel[] = [];
 allparsedTransactions: TransactionModel[] = [];
  constructor(private alertService:FraudeService,private transactions:TransactionsService) {}

  ngOnDestroy(): void {
    if (this.FraudeSubscription) {
      this.FraudeSubscription.unsubscribe();
    }if (this.TransactionSubscription) {
      this.TransactionSubscription.unsubscribe();
    }  
  }


  ngOnInit() {
   this.FraudeSubscription= this.alertService.getAllAlerts().subscribe(rawStrings => {
      // Map the array of strings into an array of objects
      this.parsedTransactions = rawStrings.map(str => JSON.parse(str));
    })
   this.TransactionSubscription= this.transactions.getAllAlerts().subscribe(rawStrings => {
      // Map the array of strings into an array of objects
      this.allparsedTransactions = rawStrings.map(str => JSON.parse(str));
    });
  }
}