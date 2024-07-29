import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private service : HeaderService) {}

  get title(): string {
    return this.service.headerData.title
  }

  get icon(): string {
    return this.service.headerData.icon
  }

  get url(): string {
    return this.service.headerData.routeUrl
  }
}
