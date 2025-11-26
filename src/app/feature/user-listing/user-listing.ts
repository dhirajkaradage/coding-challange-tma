import { Component, inject } from '@angular/core';
import { User, UserI } from '../../services/user';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-listing',
  imports: [CommonModule, TableModule, FormsModule, InputTextModule],
  templateUrl: './user-listing.html',
  styleUrl: './user-listing.scss',
})
export class UserListing {
  userService = inject(User);
  router = inject(Router);
  userList: UserI[] = [];
  dyanamicHeaders: string[] = [];

  ngOnInit(): void {
    this.getAllUserList();
  }

  getAllUserList() {
    this.userService.getAllUserList().subscribe({
      next: (users) => {
        console.log('this is user list ', users);
        this.userList = users;
        if (this.userList.length > 0) {
          this.dyanamicHeaders = Object.keys(this.userList[0]);
          console.log('this is header keys ', this.dyanamicHeaders);
          
        }
      },
      error: (error) => {
        console.log('error fetching user list ', error);
      },
    });
  }

  onViewClick(userId: string): void {
    this.router.navigate(['/user-details', userId]);
  }
}
