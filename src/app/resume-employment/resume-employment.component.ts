import { Component, OnInit, Input } from '@angular/core';
import { Employment }  from '../resume/employment.model';

@Component({
  selector: 'app-resume-employment',
  templateUrl: './resume-employment.component.html',
  styleUrls: ['./resume-employment.component.css']
})
export class ResumeEmploymentComponent implements OnInit {
  @Input() employment : Employment;
  constructor() { }

  ngOnInit() {
  }

}
