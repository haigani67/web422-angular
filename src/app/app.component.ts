/*********************************************************************************
 * WEB422 – Assignment 06
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students.
 *
 * Name: Hanieh Aigani Student ID:135524197 Date: 08-13-2021
 * Online Link to Music App: __________________________________________________________
 *
 * Online Link to User Api: ____________________________________________________________
 *
 ********************************************************************************/

import { Component, OnInit } from '@angular/core';
import { NavigationStart, Event, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  searchString: string = '';
  title = 'web422-a4';
  token: any;

  handleSearch() {
    if (this.searchString != null) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchString },
      });
    }
    this.searchString = '';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event): void => {
      if (event instanceof NavigationStart) {
        // only read the token on "NavigationStart"
        this.token = this.auth.readToken();
      }
    });
  }
}
