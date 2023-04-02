import { style } from '@angular/animations';

import {Component} from '@angular/core';

@Component({
    selector: 'app-activity-attribute-directive',
    templateUrl: './attribute-directive.component.html'
})

export class AttributeDirectiveComponent{
    showOdd = false;
    oddNumbers = [1,3,5];
    evenNumbers = [2,4,6];
}