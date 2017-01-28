import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../resume/education.model'
@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.css']
})
export class ResumeEducationComponent implements OnInit {

  @Input() education : Education;
  constructor() { }

  ngOnInit() {
  }

}
