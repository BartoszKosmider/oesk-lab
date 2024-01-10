import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './shared/module/core.module';
import { TableWithVirtualScrollComponent } from './virtual-scroll-example/table-with-virtual-scroll/table-with-virtual-scroll.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';
import { PurePipesComponent } from './pure-pipes/pure-pipes.component';
import { TableWithoutVirtualScrollComponent } from './virtual-scroll-example/table-without-virtual-scroll/table-without-virtual-scroll.component';
import { IsValueEven } from "./pure-pipes/is-value-even.pipe";
import { OnpushExampleComponent } from './onpush-example/onpush-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultListComponent } from './onpush-example/default-list/default-list.component';
import { OnpushListComponent } from './onpush-example/onpush-list/onpush-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PurePipesComponent,
    MemoryLeakComponent,
    TableWithVirtualScrollComponent,
    TableWithoutVirtualScrollComponent,
    OnpushExampleComponent,
    DefaultListComponent,
    OnpushListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    IsValueEven,
    BrowserAnimationsModule,
  ],
})
export class AppModule { }
