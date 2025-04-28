import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { KeycloakService } from '../../utils/keycloak/keycloak.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isNavOpen = false;

  constructor(
    public keycloak: KeycloakService,
    private router: Router
  ) {}

  logout() {
    this.keycloak.logout();
  }
}
