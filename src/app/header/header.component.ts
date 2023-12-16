// header.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(HomeComponent) homeComponent: HomeComponent | undefined;

  icon1 = faSearch;
  icon2 = faShoppingCart;

  ngAfterViewInit() {
    // Ensure that homeComponent is initialized before using it
    if (this.homeComponent) {
      // You can now safely access homeComponent methods or properties here
    } else {
      console.error('HomeComponent is not available.');
    }
  }

  toggleSignup() {
    if (this.homeComponent) {
      this.homeComponent.toggleSignup();
    } else {
      console.error('HomeComponent is not available.');
    }
  }
}