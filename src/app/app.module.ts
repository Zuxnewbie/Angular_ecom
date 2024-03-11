import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { SliderComponent } from './slider/slider.component';
import { SuppoerComponent } from './suppoer/suppoer.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisComponent } from './auth/regis/regis.component';
import{HttpClientModule}from'@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        CustomHeaderComponent,
        SliderComponent,
        SuppoerComponent,
        ProductComponent,
        BlogComponent,
        FooterComponent,
        CartComponent,
        HomeComponent,
        ListComponent,
        LoginComponent,
        RegisComponent,


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
