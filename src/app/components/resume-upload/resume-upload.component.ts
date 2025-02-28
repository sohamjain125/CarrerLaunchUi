import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent {
  form: FormGroup;
  fileName: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
    }
  }

  navigateToForm(type: 'FT' | 'INTERN') {
    console.log('Navigating to:', type); // Debug log
    
    // Store form data regardless of validation for testing
    localStorage.setItem('basicDetails', JSON.stringify({
      ...this.form.value,
      resume: this.fileName
    }));

    if (type === 'FT') {
      this.router.navigate(['/ft-application']);
    } else {
      this.router.navigate(['/intern-application']);
    }
  }
}