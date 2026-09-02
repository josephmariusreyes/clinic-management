import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { environment } from '../enviroments/enviroment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        providePrimeNG({
            theme: {
                preset: Aura
            },
            license: environment.primeNgLicense
        })],
    bootstrap: [AppComponent]
})
export class AppModule { }
