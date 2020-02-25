import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { E1HeaderComponent } from './exercise-1/e1-header/e1-header.component';
import { E1ContentComponent } from './exercise-1/e1-content/e1-content.component';
import { E1SidebarComponent } from './exercise-1/e1-sidebar/e1-sidebar.component';
import { E1FooterComponent } from './exercise-1/e1-footer/e1-footer.component';
import { E1IndexComponent } from './exercise-1/e1-index/e1-index.component';
import { E2HeaderComponent } from './exercise-2/e2-header/e2-header.component';
import { E2CarouselComponent } from './exercise-2/e2-carousel/e2-carousel.component';
import { E2ItemComponent } from './exercise-2/e2-item/e2-item.component';
import { E2CardComponent } from './exercise-2/e2-card/e2-card.component';
import { E2FooterComponent } from './exercise-2/e2-footer/e2-footer.component';
import { E2IndexComponent } from './exercise-2/e2-index/e2-index.component';
import { Baitap3Module } from './baitap3/baitap3.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
import { InteractionModule } from './interaction/interaction.module';
import { BaitapBusModule } from './baitap-bus/baitap-bus.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent, 
    E1HeaderComponent, 
    E1ContentComponent, 
    E1SidebarComponent, 
    E1FooterComponent, 
    E1IndexComponent, E2HeaderComponent, E2CarouselComponent, E2ItemComponent, E2CardComponent, E2FooterComponent, E2IndexComponent
  ],
  imports: [
    BrowserModule, 
    Baitap3Module,
    DataBindingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    InteractionModule,
    BaitapBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
