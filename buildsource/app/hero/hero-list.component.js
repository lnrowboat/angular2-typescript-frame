System.register(['@angular/core', './hero.service'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, hero_service_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(heroService) {
                    this.heroService = heroService;
                }
                HeroListComponent.prototype.ngOnInit = function () {
                    this.heroes = this.heroService.getHeroes();
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h3 highlight>Hero List</h3>\n    <div *ngFor='let hero of heroes | async'>\n      <a routerLink=\"{{hero.id}}\">{{hero.id}} - {{hero.name}}</a>\n    </div>\n    <menx [elementId]=\"'my-editor-id'\" (onEditorContentChange)=\"keyupHandler($event)\" ></menx>\n  "
                    }),
                    __param(0, core_1.Inject(hero_service_1.HeroService)), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            }());
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});

//# sourceMappingURL=hero-list.component.js.map
