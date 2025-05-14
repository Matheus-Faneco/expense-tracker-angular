import {Component, OnInit} from '@angular/core';
import { Expense } from '../../models/expense';
import {ExpenseService} from '../../services/expense.service';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  expenses: Expense[] = []

  constructor(
    private expenseService: ExpenseService,
  ) {}

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(expenses => {
      this.expenses = expenses;
    })

  }


}
