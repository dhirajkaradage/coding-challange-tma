import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserI } from '../../services/user';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {
  userService = inject(User);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  userDetails: UserI | undefined;
  userId: string = '';
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id') || '';

    if (this.userId) {
      this.getAllUserList();
    }
  }

  getAllUserList() {
    this.userService.getAllUserList().subscribe({
      next: (users) => {
        this.userDetails = users.find((user) => user.id === this.userId) || undefined;
        console.log('this is user details ', this.userDetails);
      },
      error: (error) => {
        console.log('error fetching user list ', error);
      },
    });
  }

  goBackToUserListing() {
    this.router.navigate(['/user-list']);
  }
}
