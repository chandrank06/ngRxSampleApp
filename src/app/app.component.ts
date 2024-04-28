import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchApplicationComponent } from './search-application/search-application.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchApplicationComponent,
    ApplicationDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngRxSampleApp';
}
