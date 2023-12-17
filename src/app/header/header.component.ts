// header.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {


  icon1 = faSearch;
  icon2 = faShoppingCart;


}