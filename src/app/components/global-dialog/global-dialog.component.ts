import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-global-dialog',
  templateUrl: './global-dialog.component.html',
  styleUrls: ['./global-dialog.component.css']
})
export class GlobalDialogComponent {
  componentToShow!: string;
  
  constructor(public dialogRef: MatDialogRef<GlobalDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}