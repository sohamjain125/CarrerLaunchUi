import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.css']
})
export class InternFormComponent {
  internForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.internForm = this.fb.group({
      university: ['', Validators.required],
      course: ['', Validators.required],
      graduationYear: ['', Validators.required],
      availableFrom: ['', Validators.required],
      internshipDuration: ['', Validators.required],
      stipendExpectation: ['', Validators.required],
      relevantProjects: ['']
    });
  }

  onSubmit() {
    if (this.internForm.valid) {
      console.log(this.internForm.value);
      // Handle form submission
    }
  }
}