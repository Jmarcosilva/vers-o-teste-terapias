import { Component, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private renderer: Renderer2) {}

  closeNavbar() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    this.renderer.removeClass(navbarCollapse, 'show');
  }
  
  ngAfterViewInit() {
    const navLinks = document.querySelectorAll('.nav-item.nav-link');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.closeNavbar();
      });
    });
  }
  
  
}
