import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './app/company-list/company-list.component';

bootstrapApplication(AppComponent, {
  providers: [ provideHttpClient() ],
});
