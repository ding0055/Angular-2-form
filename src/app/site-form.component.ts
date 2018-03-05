import { Component } from '@angular/core';
import { Site }    from './site';
 
@Component({
  moduleId: module.id,
  selector: 'site-form',
  templateUrl: './site-form.component.html'
})
export class SiteFormComponent {
  urls = ['www.nba.com', 'www.google.com',
            'www.taobao.com', 'www.facebook.com'];
  model = new Site(1, 'NBA', this.urls[0], 10000);
  
  submitted = false;
  onSubmit() { this.submitted = true; }
 
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;
  newSite() {
    this.model = new Site(5, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}