System.register(['@angular/core', 'tinymce/tinymce', 'tinymce/themes/modern', 'tinymce/plugins/table', 'tinymce/plugins/link'], function(exports_1, context_1) {
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
    var core_1, tinymce_1;
    var TinyEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tinymce_1_1) {
                tinymce_1 = tinymce_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            TinyEditorComponent = (function () {
                function TinyEditorComponent() {
                    this.onEditorKeyup = new core_1.EventEmitter();
                }
                TinyEditorComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    tinymce_1.default.init({
                        selector: '#' + this.elementId,
                        plugins: ['link', 'table'],
                        skin_url: 'assets/skins/lightgray',
                        setup: function (editor) {
                            _this.editor = editor;
                            editor.on('keyup change', function () {
                                var content = editor.getContent();
                                _this.onEditorKeyup.emit(content);
                            });
                        }
                    });
                };
                TinyEditorComponent.prototype.ngOnDestroy = function () {
                    tinymce_1.default.remove(this.editor);
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
                        selector: 'app-tiny-editor',
                        template: "<textarea id=\"{{elementId}}\"></textarea>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TinyEditorComponent);
                return TinyEditorComponent;
            }());
            exports_1("TinyEditorComponent", TinyEditorComponent);
        }
    }
});

//# sourceMappingURL=jseditor__.component.js.map
