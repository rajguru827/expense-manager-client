import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../accounts/account.service';
import { CategoryService } from '../../categories/category.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  transactionForm: FormGroup;
  categories: [];
  accounts: [];
  transactionType: string;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private categoryService: CategoryService,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data.categories;
    });
    this.accountService.getUserAccounts().subscribe(data => {
      this.accounts = data.accounts;
    });
    this.createForm();
    this.transactionType = 'expense';
  }

  createForm() {
    this.transactionForm = this.fb.group({
      amount: ['', Validators.required],
      category: ['', Validators.required],
      account: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  saveTransaction() {
    this.transactionService.addTransaction(this.transactionForm.value).subscribe(data => {
      console.log(data);
      this.transactionForm.reset();
    });
  }

}
