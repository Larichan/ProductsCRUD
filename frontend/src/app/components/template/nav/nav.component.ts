import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from "../../../views/home/home.component";
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatSidenavModule, MatListModule, HomeComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
