import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-global-dialog',
  templateUrl: './global-dialog.component.html',
  styleUrls: ['./global-dialog.component.css']
})
export class GlobalDialogComponent {
  MostrarDialogo!: string;
  
  constructor(
    public dialogRef: MatDialogRef<GlobalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.addPanelClass('custom-dialog-container');
    dialogRef.updateSize('600px', 'auto');
  }

  onClose(): void {
    this.dialogRef.close();
  }
}