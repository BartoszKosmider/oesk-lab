import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyLoadingComponent } from "./lazy-loading/lazy-loading.component";
import { LazyLoadingRoutingModule } from "./lazy-loading-routing.module";

@NgModule({
  declarations: [
    LazyLoadingComponent,
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
  ],
})
export class LazyLoadingModule { }
