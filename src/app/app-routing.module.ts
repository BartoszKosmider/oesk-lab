import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurePipesComponent } from './pure-pipes/pure-pipes.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';
import { TableWithVirtualScrollComponent } from './virtual-scroll-example/table-with-virtual-scroll/table-with-virtual-scroll.component';
import { TableWithoutVirtualScrollComponent } from './virtual-scroll-example/table-without-virtual-scroll/table-without-virtual-scroll.component';
import { OnpushExampleComponent } from './onpush-example/onpush-example.component';
import { RunOutsideAngularExampleComponent } from './runOutsideAngular-example/runOutsideAngular-example.component';
import { DebounceTimeExampleComponent } from './debounce-time-example/debounce-time-example.component';
import { DistinctUntilChangedExampleComponent } from './distinct-until-changed-example/distinct-until-changed-example.component';

const routes: Routes = [
  { path: 'pure-pipes', component: PurePipesComponent },
  { path: 'memory-leak', component: MemoryLeakComponent },
  { path: 'virtual-scroll', component: TableWithVirtualScrollComponent },
  { path: 'not-virtual-scroll', component: TableWithoutVirtualScrollComponent },
  { path: 'lazy-loading', loadChildren:()=> import('./lazy-loading/lazy-loading.module').then(m=> m.LazyLoadingModule) },
  { path: 'onpush', component: OnpushExampleComponent },
  { path: 'run-outside-angular', component: RunOutsideAngularExampleComponent },
  { path: 'debounce-time', component: DebounceTimeExampleComponent },
  { path: 'distinct-until-changed', component: DistinctUntilChangedExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
