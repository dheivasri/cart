import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isScreenBelow520px: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialization code, if needed
    this.checkScreenWidth();
    window.addEventListener('resize', () => this.checkScreenWidth()); // Listen for screen size changes
  }

  checkScreenWidth() {
    this.isScreenBelow520px = window.innerWidth <= 520;
  }


  navigateBack() {
    this.router.navigate(['/menu']); // Navigate back to the menu page
  }
}
