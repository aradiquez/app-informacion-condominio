import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// APP Core
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// Electron Modules
import { ElectronService } from './providers/electron.service';
import { WebviewDirective } from './directives/webview.directive';
import { CryptoServiceService } from './services/crypto-service.service';
// Globals
import { BasicInterceptor } from './interceptor/basic.interceptor';
import { CondominiumsComponent } from './components/home/partials/condominiums/condominiums.component';
import { CondominiumChildsComponent } from './components/home/partials/condominium-childs/condominium-childs.component';
import { AuthorizedVehiclesComponent } from './components/home/partials/authorized-vehicles/authorized-vehicles.component';
import { PeopleComponent } from './components/home/partials/people/people.component';
import { PersonQuestionComponent } from './components/home/partials/people/person-question/person-question.component';
import { PersonScheduleComponent } from './components/home/partials/people/person-schedule/person-schedule.component';
import { FilialComponent } from './components/home/partials/filial/filial.component';
import { BooleanDirective } from './directives/boolean.directive';
import { PeopleTypePipe } from './services/person_type.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { NavigationComponent } from './components/admin/navigation/navigation.component';
import { QuestionsComponent } from './components/admin/questions/questions.component';
import { FilialsComponent } from './components/admin/filials/filials.component';

// Materials components 
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { FilialNewComponent } from './components/admin/filial-new/filial-new.component';
import { FilialEditComponent } from './components/admin/filial-edit/filial-edit.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WebviewDirective,
    NotFoundComponent,
    CondominiumsComponent,
    CondominiumChildsComponent,
    AuthorizedVehiclesComponent,
    PeopleComponent,
    PersonQuestionComponent,
    PersonScheduleComponent,
    FilialComponent,
    BooleanDirective,
    PeopleTypePipe,
    AdminComponent,
    NavigationComponent,
    QuestionsComponent,
    FilialsComponent,
    FilialNewComponent,
    FilialEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    CryptoServiceService,
    ElectronService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicInterceptor,
      multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
