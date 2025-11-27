import { Routes } from '@angular/router';
import { UserListing } from './feature/user-listing/user-listing';
import { UserDetails } from './feature/user-details/user-details';

export const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListing, pathMatch: 'full' },
  { path: 'user-details/:id', component: UserDetails, pathMatch: 'full' },
];
