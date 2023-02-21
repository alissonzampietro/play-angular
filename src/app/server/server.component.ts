import { style } from "@angular/animations";
import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .serverStatus {
        max-width: 200px;
        height: auto;
        text-align: center;
        padding: 10px;
        margin: 10px 0 0 0;
        color: white;
    }
    `]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    buttonDescription: string = 'Switch Server';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    changeStatus() {
        if(this.serverStatus === 'offline') {
            this.serverStatus = 'online';
            return;
        }
        this.serverStatus = 'offline';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getClass() {
        return this.serverStatus === 'online' ? 'btn-danger' : 'btn-success';
    }
}