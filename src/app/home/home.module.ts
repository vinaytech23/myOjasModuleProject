import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorlistComponent } from './colorlist/colorlist.component';
import { EmicalcComponent } from './emicalc/emicalc.component';
import { StructAttrDirComponent } from './struct-attr-dir/struct-attr-dir.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { OutputComponent } from './output/output.component';
import { DynamicvaluesComponent } from './dynamicvalues/dynamicvalues.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TamplateDrivenComponent } from './tamplate-driven/tamplate-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServicesnowComponent } from './servicesnow/servicesnow.component';
import { CrudOpsComponent } from './crud-ops/crud-ops.component';
import { InputComponent } from './input/input.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations : [ ColorlistComponent, EmicalcComponent, StructAttrDirComponent, InputOutputComponent, OutputComponent, DynamicvaluesComponent, TamplateDrivenComponent, ReactiveFormComponent, ServicesnowComponent, CrudOpsComponent, InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ColorlistComponent,
    EmicalcComponent,
    StructAttrDirComponent,
    InputOutputComponent,
    OutputComponent,
    DynamicvaluesComponent,
    ReactiveFormComponent,
    TamplateDrivenComponent,
    ServicesnowComponent,
    CrudOpsComponent,
    InputComponent
  ]
})
export class HomeModule {


 }
