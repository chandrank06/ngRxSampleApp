import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeApplicationAction } from '../store/applications.action';
import { CommonModule } from '@angular/common';
import {
  applicationCountSelector,
  applicationSelector,
} from '../store/applications.selector';
import { AppState } from '../store/applications.state';

@Component({
  selector: 'app-application-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.scss',
})
export class ApplicationDetailsComponent {
  applicationList = [];
  applicationCount: any;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.select(applicationSelector).subscribe((res: AppState) => {
      this.applicationList = res.applicationList;
    });
    this.store.select(applicationCountSelector).subscribe((res: any) => {
      this.applicationCount = res;
    }); 
  }
  removeApplication(applicationId: string) {
    this.store.dispatch(
      removeApplicationAction({ appDetails: { appId: applicationId } })
    );
  }
}
