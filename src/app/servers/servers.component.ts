import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';




@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false; 
  serverCreationStatus = 'no server created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout( ()=> {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was createdand the  server name is'+ this.serverName;
  }
    onUpdateServerName(event:any)  {
      this.serverName = (<HTMLInputElement>event.target).value;
    }
  

}
