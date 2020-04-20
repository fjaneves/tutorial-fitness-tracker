import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UIService {
    loadingStateChanges = new Subject<boolean>();

    constructor(private snackbar: MatSnackBar){}

    showSnackbarSuccess(message){
        this.showSnackbar(message, { duration: 1000, panelClass: ['mat-toolbar', 'mat-primary'] })
    }

    showSnackbarError(message){
        this.showSnackbar(message, { panelClass: ['mat-toolbar', 'mat-warn'] })
    }

    showSnackbar(message, 
        { action = null, duration = 3000, verticalPosition = "top", panelClass = [] } : 
        { action?:any, duration?:number, verticalPosition?: any, panelClass?: any[] }
    ) {
        this.snackbar.open(message, action, {
            duration: duration,
            verticalPosition: verticalPosition,
            panelClass: panelClass
        });
    }
}