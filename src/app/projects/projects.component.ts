import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects : Project[];

  constructor() { 
    this.projects = [
      new Project(
        'kleau.png',
        'Design / Front-End Development / HTML Prototype',
        'Kleau Mag',
        'Responsive lifestyle blog.'
      ),
      new Project(
        'brooklyndronesstore.png',
        'Design / Front-End Development / Graphics',
        'Brooklyn Drone Store',
        'Responsive drone store landing page to increase local sales'
      ),
      new Project(
        'analogdrone.png',
        'Design / Front-End Development / Graphics',
        'Analog Drone',
        'Responsive e-commerce store for quadcopters'
      ),
      new Project(
        'crm.png',
        'Web Application Development',
        'Customer Relationship Management Plugin',
        'Application provides user with the ability to create follow ups, calls and notes. Supports creating leads, assigning them to salesperson and tracking their daily preformance'
      ),
      new Project(
        'feedback.png',
        'Web Application Development',
        'eBay feedback reminder and account stats',
        'Application auto-processes all incoming eBay orders for a connected account. Sends scheduled email reminders. Provides real-time orders and feedback statistics.'
      ),
      new Project(
        'ebay-inventory.png',
        'Web Application Development',
        'WooCommerce to eBay Inventory Sync',
        'Application provides user with the ability to create eBay listing from existing Woocommerce products. Tracks and syncs the inventory.'
      ),
      new Project(
        'hotline.png',
        'Design / Front-End Development',
        'Pet Project',
        'Landing page for a videogame with custom designed graphics'
      ),
      new Project(
        'camel.png',
        'Design / Front-End / Back-End Development',
        'Wholesale Camel',
        'Responsive e-commerce store for a wholesale business'
      ),
      new Project(
        'fancy.png',
        'Design / Front-End Development / eBay Store Design',
        'Fancy Discount',
        'Responsive e-commerce store for a wholesale business. Custom eBay listing template and store design.'
      )
    ];
  }

  ngOnInit() {
  }

}
