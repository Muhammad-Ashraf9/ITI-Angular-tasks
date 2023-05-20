import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { GetAllPhotosComponent } from './get-all-photos/get-all-photos.component';
import { LoginComponent } from './login/login.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { SeatsComponent } from './seats/seats.component';
import { SnacksComponent } from './snacks/snacks.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'productlist',component:ProductListComponent},
  {path:'productcard',component:ProductCardComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'userdetails/:username',component:UserDetailsComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'photos',component:GetAllPhotosComponent},
  {path:'Auth',component:RegisterLoginComponent},
  {path:'date',component:DateTimeComponent},
  {path:'seats',component:SeatsComponent},
  {path:'snacks',component:SnacksComponent},
  {path:'',redirectTo:'Auth' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
