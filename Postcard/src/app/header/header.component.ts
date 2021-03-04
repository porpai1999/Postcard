import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

  }

}
