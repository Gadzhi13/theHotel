import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {
  navLinks;
  currentUrl;

  constructor(private router: Router) {
    this.navLinks = [];
    this.router.events.subscribe(
      (change) => {
        this.currentUrl = this.router.url;
      }
    );
  }


  ngOnInit() {
    this.navLinks.push(
      {path: "/", label: "Home"},
      {path: "/accomodation", label: "Accomodation"},
      {path: "/food-and-beverage", label: "Food and Beverage"},
      {path: "/lifestyle", label: "Lifestyle"},
      {path: "/celebrations", label: "Celebrations"},
      {path: "/offers", label: "Offers"}
    );
  }
}
