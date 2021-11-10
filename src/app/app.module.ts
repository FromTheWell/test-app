import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaModule } from './components/tabla/tabla.module';
import { GridModule } from './components/grid/grid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TablaModule, GridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
