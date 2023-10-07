import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddVoterComponent } from './add-voter/add-voter.component';
import { DeleteVoterComponent } from './delete-voter/delete-voter.component';
import { UpdateVoterComponent } from './update-voter/update-voter.component';
import { DisplayVoterComponent } from './display-voter/display-voter.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddVoterComponent,
    DeleteVoterComponent,
    UpdateVoterComponent,
    DisplayVoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
