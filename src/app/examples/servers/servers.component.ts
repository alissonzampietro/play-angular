import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  serverNameTwoWay="";
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is "+this.serverNameTwoWay;
  }

  onUpdateServerName(event:any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
