import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DahsboardRoutingModule } from './dahsboard-routing.module';
import { DahsboardComponent } from './dahsboard.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    DahsboardComponent,
    AdminComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DahsboardRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class DahsboardModule { }
