import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material components
import { MatStepperModule, MatButtonModule, MatDividerModule, MatInputModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatPaginatorModule, MatCheckboxModule, MatSnackBarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { ExportComponent } from './export/export.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConditionsComponent } from './conditions/conditions.component';
import { NgModel, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    ExportComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
