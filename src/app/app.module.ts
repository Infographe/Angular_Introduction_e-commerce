import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResearchComponent } from './research/research.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { ProductDisplayComponent } from './research/product-display/product-display.component';
import { ProductSelectionbycriteriaComponent } from './research/product-selectionbycriteria/product-selectionbycriteria.component';
import { ProductSelectionkeywordsComponent } from './research/product-selectionkeywords/product-selectionkeywords.component';
import { CartManagementComponent } from './cart/cart-management/cart-management.component';
import { CartValidationComponent } from './cart/cart-validation/cart-validation.component';
import { CartDisplayComponent } from './cart/cart-display/cart-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchComponent,
    AuthComponent,
    CartComponent,
    ProductDisplayComponent,
    ProductSelectionbycriteriaComponent,
    ProductSelectionkeywordsComponent,
    CartManagementComponent,
    CartValidationComponent,
    CartDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
