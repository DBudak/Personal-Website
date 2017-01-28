import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';
import { Employment } from './employment.model';
import {Education } from './education.model'


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  coreSkills : Skill[];
  employments : Employment[];
  educations : Education[];

  constructor() {
    this.coreSkills = [
      new Skill('HTML5',8),
      new Skill('CSS3',8),
      new Skill('JavaScript',7),
      new Skill('Angular 2', 7),
      new Skill('TypeScript', 7),
      new Skill('Wordpress', 7),  
      new Skill('GIT/GitHub', 7),
      new Skill('Photoshop', 7),             
      new Skill('JSON', 7),           
      new Skill('jQuery', 6),
      new Skill('Bootstrap', 6),     
      new Skill('Backbone.js', 5),
      new Skill('React.js',5),
      new Skill('Underscore.js', 5),
      new Skill('PHP', 5),
      new Skill('MySQL', 4),
      new Skill('XML', 4),
    ];

    this.employments = [
      new Employment(
        'Front-End Developer',
        'Analog Drone',
        'Brooklyn, NY',
        'Mar 2016',
        'Jan 2017',
        'Development, customization and maintenance of e-commerce website. Email and PPC marketing. Market & website performance analysis. Onsite and offsite SEO, blogging. Creating graphics for the web promotions and signs. Having fun with drones and their software.'
      ),
      new Employment(
        'Full Stack Web Developer', 
        'BH Wholesale', 
        'Brooklyn, NY', 
        'Dec 2014', 
        'Feb 2016',
        'Development and deep customization/maintenance of e-commerce websites, email marketing, SEO. Creating customer relationship management, auto-newsletter and eBay interaction web applications using various APIs'
        ),
      new Employment(
        'Freelance Web developer',
        'Various Clients',
        'United States',
        '2013',
        'Current',
        'Design, Front- and occasional Back-end development'
      )
    ];

    this.educations = [
      new Education(
        'Kingsborough Community College',
        'Brooklyn, NY',
        '2015',
        '2017',
        'Computer Science'
      ),
      new Education(
        'Black Sea University',
        'Ukraine',
        '2012',
        '2014',
        'Computer Science'
      )
    ];
   }

  ngOnInit() {
  }

}
