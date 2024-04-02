import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  accountForm: UntypedFormGroup;
  accountTypes: [];

  constructor(
    private fb: UntypedFormBuilder,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.getAccountTypes();
  }

  createForm() {
    this.accountForm = this.fb.group({
      name: [''],
      description: [''],
      initialBalance: [''],
      accountType: [''],
    });
  }

  getAccountTypes() {
    this.accountService.getAccountTypes().subscribe(data => {
      this.accountTypes = data.accountTypes;
    });
  }

  addAccount() {
    this.accountService.addUserAccount(this.accountForm.value).subscribe(data => {
      if (data) {
        this.router.navigate(['/accounts']);
      }
    });
  }
}
