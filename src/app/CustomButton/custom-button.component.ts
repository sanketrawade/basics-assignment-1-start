import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'cbutton',
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.css'],
})
export class CustomButton {
    @Input() bcolor: string = '';
    @Input() btext: string = '';
    @Output() clickedEmitter = new EventEmitter();

    onClicked(type:string) {
        this.clickedEmitter.emit(type)
    }
}