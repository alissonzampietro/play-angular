import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;
    private serverStatus: string = 'offline';

    getServerStatus(): string {
        return this.serverStatus;
    }

    changeStatus() {
        if(this.serverStatus === 'offline') {
            this.serverStatus = 'online';
        }else {
            this.serverStatus = 'offline';
        }
    }
}