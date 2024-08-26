import { NgModule } from "@angular/core";
import { LazyComponent } from "./lazy.component";
import { lazyModuleRouting } from "./lazy.routes";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, lazyModuleRouting],
  exports: [LazyComponent]
})
export class LazyModule {}
