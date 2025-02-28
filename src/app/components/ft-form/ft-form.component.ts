import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ft-form',
  templateUrl: './ft-form.component.html',
  styleUrls: ['./ft-form.component.css']
})
export class FtFormComponent {
  ftForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ftForm = this.fb.group({
      expectedSalary: ['', Validators.required],
      yearsOfExperience: ['', Validators.required],
      noticePeriod: ['', Validators.required],
      preferredLocation: ['', Validators.required],
      currentCompany: [''],
      skills: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ftForm.valid) {
      console.log(this.ftForm.value);
      // Handle form submission
    }
  }
}