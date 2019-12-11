import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();
  sidenavOpen = false;

  constructor() { }

  ngOnInit() { }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
    this.sidenavToggle.emit(this.sidenavOpen);
  }
}
