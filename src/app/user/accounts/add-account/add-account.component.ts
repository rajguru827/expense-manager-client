import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }
//   const account = new Account({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     description: req.body.description,
//     initialBalance: req.body.initialBalance,
//     accountType: req.body.accountType,
//     user: req.userData.userId
// });

  createForm() {
    this.accountForm = this.fb.group({
      name: [''],
      description: [''],
      initialBalance: [''],
      accountType: [''],
    });
  }

}
