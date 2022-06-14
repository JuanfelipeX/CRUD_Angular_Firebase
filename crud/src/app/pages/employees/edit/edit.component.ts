import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  employee: any = null;
  employeeForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.['value'];
    this.initForm();
  }

  ngOnInit(): void {
     if (typeof this.employee === 'undefined') {
       this.router.navigate(['new']);
     } else {
       this.employeeForm.patchValue(this.employee);
     }
  }

  onSave(): void {
    console.log('Saved', this.employeeForm.value); 
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
    });
  }
}
