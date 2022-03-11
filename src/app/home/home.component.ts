import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {NavigationEnd, Router} from "@angular/router";

export interface Nav {
  title: string;
  path: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentNav: string = 'home';
  navs: Nav[] = [
    { title: 'Home', path: '/home', name: 'home' },
    { title: 'Personal info', path: '/home/profile', name: 'profile' },
    { title: 'Collector', path: '/home/collector', name: 'collector' },
    { title: 'Recommendation', path: '/home/recommendation', name: 'recommendation' }
  ]
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        const pathnames = url.split('/');
        const currentPathname = pathnames[pathnames.length - 1];
        this.currentNav = currentPathname;
      }
    })
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['signin']);
    });
  }
}
