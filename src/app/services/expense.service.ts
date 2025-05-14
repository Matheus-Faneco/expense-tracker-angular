import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Expense} from '../models/expense';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenseUrl: string = 'http://127.0.0.1:8000/expense/';

  constructor(
    private http: HttpClient
  ) { }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseUrl);
  }

  postExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expenseUrl, expense);
  }

}
