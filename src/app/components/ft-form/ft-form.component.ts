import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ft-form',
  templateUrl: './ft-form.component.html',
  styleUrls: ['./ft-form.component.css']
})
export class FtFormComponent implements OnInit {
  ftForm: FormGroup;
  basicDetails: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.ftForm = this.fb.group({
      expectedSalary: ['', Validators.required],
      yearsOfExperience: ['', Validators.required],
      noticePeriod: ['', Validators.required],
      preferredLocation: ['', Validators.required],
      currentCompany: [''],
      skills: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log('FT Form Component Initialized'); // Debug log
    const details = localStorage.getItem('basicDetails');
    if (details) {
      this.basicDetails = JSON.parse(details);
      console.log('Basic Details:', this.basicDetails); // Debug log
    }
  }

  onSubmit() {
    if (this.ftForm.valid) {
      const fullApplication = {
        ...this.basicDetails,
        ...this.ftForm.value
      };
      console.log('Full Application:', fullApplication);
      localStorage.removeItem('basicDetails');
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}