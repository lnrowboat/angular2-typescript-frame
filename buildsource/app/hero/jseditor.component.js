System.register(['@angular/core', 'codemirror', 'mylib'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, CodeMirror, mylib_1;
    var TinyEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CodeMirror_1) {
                CodeMirror = CodeMirror_1;
            },
            function (mylib_1_1) {
                mylib_1 = mylib_1_1;
            }],
        execute: function() {
            TinyEditorComponent = (function () {
                function TinyEditorComponent() {
                    this.onEditorKeyup = new core_1.EventEmitter();
                }
                TinyEditorComponent.prototype.ngAfterViewInit = function () {
                    console.log(mylib_1.Mylib);
                    console.log(CodeMirror);
                    this.editor = CodeMirror.fromTextArea(document.querySelector('.' + this.elementId), {
                        lineNumbers: true,
                        mode: "text/html",
                        matchBrackets: true
                    });
                    console.log(this.editor.getValue());
                    this.editor.setValue('<a class="a value">abc 123</a>');
                };
                TinyEditorComponent.prototype.ngOnDestroy = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TinyEditorComponent.prototype, "elementId", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TinyEditorComponent.prototype, "onEditorKeyup", void 0);
                TinyEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'menx',
                        template: '<textarea class="{{elementId}}">aaaaaaa</textarea>',
                        styleUrls: ['./lib/codemirror/lib/codemirror.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], TinyEditorComponent);
                return TinyEditorComponent;
            }());
            exports_1("TinyEditorComponent", TinyEditorComponent);
        }
    }
});

//# sourceMappingURL=jseditor.component.js.map
