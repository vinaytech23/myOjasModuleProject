import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorlistComponent } from './home/colorlist/colorlist.component';
import { EmicalcComponent } from './home/emicalc/emicalc.component';
import { StructAttrDirComponent } from './home/struct-attr-dir/struct-attr-dir.component';
import { InputOutputComponent } from './home/input-output/input-output.component';
import { OutputComponent } from './home/output/output.component';
import { DynamicvaluesComponent } from './home/dynamicvalues/dynamicvalues.component';
import { TamplateDrivenComponent } from './home/tamplate-driven/tamplate-driven.component';
import { ReactiveFormComponent } from './home/reactive-form/reactive-form.component';
import { ServicesnowComponent } from './home/servicesnow/servicesnow.component';
import { CrudOpsComponent } from './home/crud-ops/crud-ops.component';
import { InputComponent } from './home/input/input.component';


const routes: Routes = [
                      {path: 'colorlist', component: ColorlistComponent},
                      {path: 'emicalc', component: EmicalcComponent},
                      {path: 'struct', component: StructAttrDirComponent},
                      {path: 'input_output', component: InputOutputComponent},
                      {path: 'output', component: OutputComponent},
                      {path: 'dynamicvalues', component: DynamicvaluesComponent},
                      {path: 'templatedriven', component: TamplateDrivenComponent},
                      {path: 'reactiveform', component: ReactiveFormComponent},
                      {path: 'servicenow', component: ServicesnowComponent},
                      {path: 'crudOps', component: CrudOpsComponent},
                      {path: 'input', component:InputComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
