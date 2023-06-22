import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }


  formatRoleName(role: string): string {
    switch (role) {
      case 'ROLE_USER':
        return 'User';
      case 'ROLE_MODERATOR':
        return 'Moderator';
      case 'ROLE_ADMIN':
        return 'Admin';
      default:
        return role;
    }
  }
}
