import { Component, EventEmitter, AfterViewInit, OnDestroy, Input, Output } from '@angular/core';

//import {CodemirrorModule} from 'ng2-codemirror';
import * as CodeMirror from 'codemirror';
import { Mylib } from 'mylib';
//declare var tinymce: any;
//declare var CodeMirror: any;

@Component({
    selector: 'menx',
    template: '<textarea class="{{elementId}}">aaaaaaa</textarea>',
    //template: `<codemirror [(ngModel)]="code" [config]="{lineNumbers: true, mode: "text/html",  matchBrackets: true}" (focus)="onFocus()" (blur)="onBlur()"> </codemirror>`,
    styleUrls: ['./lib/codemirror/lib/codemirror.css'],
})
export class TinyEditorComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Output() onEditorKeyup = new EventEmitter();
    editor;
    ngAfterViewInit() {
        console.log(Mylib);
        console.log(CodeMirror);
        //this.code = 'no code';
        this.editor = CodeMirror.fromTextArea(document.querySelector('.'+this.elementId), {
            lineNumbers: true,
            mode: "text/html",
            matchBrackets: true
        });
        console.log(this.editor.getValue());
        this.editor.setValue('<a class="a value">abc 123</a>');
        /*tinymce.init({
          selector: '.' + this.elementId,
          plugins: ['link', 'table', 'code'],
          skin_url: 'lib/tinymce/skins/lightgray',
          setup: editor => {
            this.editor = editor;
            editor.on('keyup change', () => {
              const content = editor.getContent();
              //console.log(content);
              this.onEditorKeyup.emit(content);
            });
          }
        });*/
    }

    ngOnDestroy() {
        //CodeMirror.remove(this.editor);
    }
}