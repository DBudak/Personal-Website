import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeSkillComponent } from './resume-skill/resume-skill.component';
import { ResumeEmploymentComponent } from './resume-employment/resume-employment.component';
import { ResumeEducationComponent } from './resume-education/resume-education.component';
import { ProjectComponent } from './project/project.component';

import {PathLocationStrategy, LocationStrategy} from '@angular/common';

const appRoutes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProjectsComponent,
    ResumeSkillComponent,
    ResumeEmploymentComponent,
    ResumeEducationComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
