import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
  constructor(public dataservice:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  username="";
  authkey="";
 logout() {
  // this.router.navigateByUrl("");
   this.dataservice.logout(this.username, this.authkey)
   .subscribe(data => {
     this.router.navigateByUrl("");
   });
 }
}
