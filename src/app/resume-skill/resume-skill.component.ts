import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../resume/skill.model';
@Component({
  selector: 'app-resume-skill',
  templateUrl: './resume-skill.component.html',
  styleUrls: ['./resume-skill.component.css']
})
export class ResumeSkillComponent implements OnInit {
  @Input() skill: Skill;
  constructor() { 
  }

  ngOnInit() {

  }

}
