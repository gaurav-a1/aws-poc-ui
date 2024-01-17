import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-new.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
