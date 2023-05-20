import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { AppEventsComponent } from './app-events/app-events.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { DescriptionSlicePipe } from './description-slice.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { GetAllPhotosComponent } from './get-all-photos/get-all-photos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { SeatsComponent } from './seats/seats.component';
import { SnacksComponent } from './snacks/snacks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AsideComponent,
    FooterComponent,
    UserEventsComponent,
    AppEventsComponent,
    ProductListComponent,
    ProductCardComponent,
    DescriptionSlicePipe,
    ProductDetailsComponent,
    LoginComponent,
    AddProductComponent,
    GetAllPhotosComponent,
    UserDetailsComponent,
    RegisterLoginComponent,
    LoadingSpinnerComponent,
    DateTimeComponent,
    SeatsComponent,
    SnacksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
