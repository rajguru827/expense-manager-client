import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.getUserAccounts();
  }

  getUserAccounts() {
    this.accountService.getUserAccounts().subscribe(data => {
      console.log(data);
    })
  }
}
