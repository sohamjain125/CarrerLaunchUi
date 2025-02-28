import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import { FtFormComponent } from './components/ft-form/ft-form.component';
import { InternFormComponent } from './components/intern-form/intern-form.component';

const routes: Routes = [
  { path: '', component: ResumeUploadComponent },
  { path: 'ft-application', component: FtFormComponent },
  { path: 'intern-application', component: InternFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
