import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from '../../accounts/account.service';
import { CategoryService } from '../../categories/category.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  transactionForm: FormGroup;
  categories: [];
  accounts: [];

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data.categories;
    });
    this.accountService.getUserAccounts().subscribe(data => {
      this.accounts = data.accounts;
    });
    this.createForm();
  }

  createForm() {
    this.transactionForm = this.fb.group({
      amount: [''],
      category: [''],
      account: [''],
      description: [''],
    });
  }

}
