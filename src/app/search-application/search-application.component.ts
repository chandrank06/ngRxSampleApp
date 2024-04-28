import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addApplicationAction } from '../store/applications.action';

@Component({
  selector: 'app-search-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-application.component.html',
  styleUrl: './search-application.component.scss',
})
export class SearchApplicationComponent {
  applicationId = '';
  constructor(private store: Store) {}
  searchApplication(applicationId: string) {
    this.store.dispatch(
      addApplicationAction({ appDetails: { appId: applicationId } })
    );
  }
}
