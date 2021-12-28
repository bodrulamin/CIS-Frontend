import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu'; 

const MaterialComponents = [
  MatSidenavModule,
  MatToolbarModule,
MatIconModule,
MatButtonModule,
MatCardModule,
MatDialogModule,
MatMenuModule,
MatInputModule,
MatListModule,

]

@NgModule({
imports:[MaterialComponents],
exports:[MaterialComponents]
})
export class MaterialModule { }
