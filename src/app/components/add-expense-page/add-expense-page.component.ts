import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExpenseService} from '../../services/expense.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-expense-page',
  standalone: false,
  templateUrl: './add-expense-page.component.html',
  styleUrl: './add-expense-page.component.css'
})
export class AddExpensePageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private expenseService: ExpenseService,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
    })
  }

  submit() {
    this.expenseService.postExpense(this.form.getRawValue()).subscribe({
      next: (res) => {
        console.log("Despesa registrada com sucesso", res);
        this.router.navigate(['/home']);
      }

      }
    )
  }



}
