import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { GlobalDialogComponent } from '../global-dialog/global-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userRole: string | null = '';
  user: string | null = null; 

  constructor(
    private router: Router, 
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.user = localStorage.getItem('usuario'); 
    this.userRole = this.authService.getUserRole(); 
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']); 
    }
  }

  openGlobalDialog(type: string): void {
    const dialogRef = this.dialog.open(GlobalDialogComponent);
    dialogRef.componentInstance.componentToShow = type;
  }
}