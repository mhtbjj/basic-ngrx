import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // StoreModule.forRoot({ counter: counterReducer }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // !environment.production
    //   ? StoreDevtoolsModule.instrument({
    //       maxAge: 25, // Retains last 25 states
    //       logOnly: environment.production, // Restrict extension to log-only mode
    //       autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    //     })
    //   : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
