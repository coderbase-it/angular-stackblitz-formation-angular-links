import { Injectable } from "@angular/core";
import { Lien } from "./lien";
import { Category } from "./category.enum";
import { from, of, zip } from "rxjs";
import { groupBy, map, mergeMap, toArray, tap } from "rxjs/operators";

@Injectable()
export class LienService {
  // add your links in this array
  // by using Lien class
  // new Lien('endOfStackblitz URL', 'NAME', Category.XXXX)
  // check category.enum for Category Attribute
  liens: Lien[] = [
    new Lien("es6-way-to-clone-an-array", "ES6 full", Category.JAVASCRIPT),

    new Lien(
      "affectations-destructuree-es6",
      "Affectation Desctructuré",
      Category.JAVASCRIPT
    ),

    new Lien(
      "es6-class-import-export",
      "Class import/export",
      Category.JAVASCRIPT
    ),
    new Lien("objectassign-js", "Object Assign", Category.JAVASCRIPT),
    new Lien(
      "typescript-basic-coderbase",
      "Typescript Basic",
      Category.TYPESCRIPT
    ),

    new Lien("rxjs-init-observable-coderbase", "Observable", Category.RXJS),
    new Lien("rxjs-nwojyq", "of and map operators", Category.RXJS),
    new Lien("rxjs-nwojyq", "Subject", Category.RXJS),
    new Lien(
      "rxjs-behaviorsubject-example-coderbase",
      "BehaviorSubject",
      Category.RXJS
    ),
    new Lien("coderbaseui", "Coderbase-ui", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Input", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Output", Category.ANGULAR),
    new Lien("angular-ngif-ngcontainer-click", "*ngIf | ng-container | (click) | interpolation", Category.ANGULAR),
    new Lien("angular-pipe-async-coderbase", "Pipe Async", Category.ANGULAR),
    
    new Lien("angular-unxnpa", "@Injectable", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Optional", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Pipe", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Self", Category.ANGULAR),
    new Lien("angular-unxnpa", "@SkipSelf", Category.ANGULAR),
    new Lien("angular-unxnpa", "@ViewChild", Category.ANGULAR),
    new Lien("angular-unxnpa", "@ViewChildren", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Component", Category.ANGULAR),
    new Lien("angular-unxnpa", "@ContentChild", Category.ANGULAR),
    new Lien("angular-unxnpa", "@ContentChildren", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Directive", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Host", Category.ANGULAR),
    new Lien("angular-unxnpa", "@HostBinding", Category.ANGULAR),
    new Lien("angular-unxnpa", "@HostListener", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Inject", Category.ANGULAR),
    new Lien(
      "angular-api-pipe-percent-coderbase",
      "Angular Pipe Percent",
      Category.ANGULAR
    ),
    new Lien(
      "angular-api-pipe-i18nselect-coderbase",
      "Angular Pipe I18nSelect",
      Category.ANGULAR
    ),
    new Lien(
      "angular-version-service-observable",
      "Angular Version Service observable",
      Category.ANGULAR
    ),
    new Lien(
      "coderbase-angular-breadcrumb-demo",
      "Angular Breadcrumd example",
      Category.ANGULAR
    ),
    new Lien(
      "example-angular-material-reactive-form-coderbase",
      "Angular Material Reactive Forms",
      Category.ANGULAR
    ),
    new Lien(
      "coderbase-angular-reactive-form-validation",
      "Angular Bootstrap Reactive Forms Validation",
      Category.ANGULAR
    ),
    new Lien(
      "translate-router",
      "Angular POC NGX translate router urls",
      Category.ANGULAR
    ),

    new Lien(
      "angular-api-pipe-decimal-coderbase",
      "Angular Pipe Decimal",
      Category.ANGULAR
    ),

    new Lien("coderbase-crm-proto", "Coderbase Crm Proto", Category.ANGULAR),

    new Lien(
      "angular-directive-form-errors-generic",
      "Angular Directive Form Errors Generic",
      Category.ANGULAR
    ),
    new Lien(
      "angular-manual-dynamic-form-config",
      "Angular Manual Dynamic Form Config",
      Category.ANGULAR
    ),

    new Lien(
      "angular-cdk-portal-tooltip-overlay",
      "Angular CDK portal Tooltip Overlay",
      Category.ANGULAR
    ),

    new Lien(
      "angular-dynamic-form-builder-other-example",
      "Angular Dynamic form builder other example",
      Category.ANGULAR
    ),
    new Lien(
      "angular-pyramid",
      "Angular pyramid with recursive",
      Category.ANGULAR
    ),
    new Lien(
      "angular-font-awesome-integration",
      "Angular FontAwesomeModule Integration",
      Category.ANGULAR
    ),
    new Lien(
      "angular-themeing-ng-coderbase",
      "Angular CSS variable --mavar theming",
      Category.ANGULAR
    ),
    new Lien("swiper-demo", "Angular Swiper Demo", Category.ANGULAR),

    new Lien(
      "native-theming-angular-cssvariables-coderbase",
      "Angular Native Theming CSS variable",
      Category.ANGULAR
    ),
    new Lien(
      "angular-kingdom-dynamic-components-coderbase",
      "Angular Kingdom Dynamic Components 🦄 🧟 🐉 🧙 ",
      Category.ANGULAR
    ),
    new Lien(
      "angular-kingdom-advanced-projection-coderbase",
      "Angular Kingdom Projection 🦄 🐉 ",
      Category.ANGULAR
    ),
    new Lien(
      "angular-onpushc2d-coderbase",
      "Change Detection MarkForCheck/OnPush object attribute change",
      Category.ANGULAR
    ),
    new Lien(
      "angular-simple-movie-example",
      "Angular Simple Movie app",
      Category.ANGULAR
    ),
    new Lien(
      "isgreaterthanotherfield-custom-validator-angular-coderbase",
      "Angular Custom Validator ReactiveForm isGreaterThanOtherField",
      Category.ANGULAR
    ),

    new Lien(
      "ng-template-outlet-with-ng-content",
      "Angular Ng Template Outlet with projection (ng-content)",
      Category.ANGULAR
    ),

    new Lien("https://www.learnrxjs.io", "LearnRxJS.io", Category.RXJS),
    new Lien("https://rxmarbles.com", "RxMarbles.com", Category.RXJS),
    new Lien("https://rxviz.com", "Rxviz.com", Category.RXJS),
    new Lien(
      "https://rxjs.dev/operator-decision-tree",
      "Operator Decision Tree",
      Category.RXJS
    ),
    new Lien(
      "https://www.youtube.com/watch?v=rUZ9CjcaCEw",
      "SwitchMap NgConf Vidéo",
      Category.RXJS
    ),
    new Lien("angular-rxjs-coderbase-of", "of operator", Category.RXJS),
    new Lien("angular-rxjs-coderbase-from", "from operator", Category.RXJS),

    new Lien(
      "buffertoggle-rxjs-coderbase",
      "BufferToggle operator",
      Category.RXJS
    ),
    new Lien(
      "untildestroyed-operator-third-library",
      "untildestroyed operator",
      Category.RXJS
    ),

    new Lien("bufferwhen-rxjs-coderbase", "BufferWhen operator", Category.RXJS),

    new Lien(
      "rxjs-fromevent-merge",
      "FromEvent and Merge operator",
      Category.RXJS
    ),

    new Lien(
      "rxjs-from-event-stars-coderbase",
      "FromEvent map (stars ) operator",
      Category.RXJS
    ),
    new Lien("rxjs-observabe-async-vs-sync", "Async vs sync", Category.RXJS),
    new Lien(
      "rxjs-of-vs-from-coderbase",
      "Of vs From operators",
      Category.RXJS
    ),
    new Lien(
      "rxjs-from-map-tap-take",
      "From map tap take operators",
      Category.RXJS
    ),
    new Lien(
      "angular-joke-interpolation",
      "Agular Joke/Troll interpolation ",
      Category.RXJS
    ),

    new Lien(
      "angular-change-detection-strategy-onpush-coderbase",
      "Agular Change detection 0 ",
      Category.ANGULAR
    ),
    new Lien(
      "angular-change-detection-sample-2-coderbase",
      "Agular Change detection 0bis ",
      Category.ANGULAR
    ),
        new Lien(
      "angular-validation-i18n-engine",
      "Agular Validation Engine I18n Error Form Builder Class validators",
      Category.ANGULAR
    ),
    

    new Lien("angular-cd-pp", "Agular Change detection 1 ", Category.ANGULAR),
    new Lien("angular-cd-pp-2", "Agular Change detection 2 ", Category.ANGULAR),
    new Lien("angular-cd-pp-3", "Agular Change detection 3 ", Category.ANGULAR),

    new Lien(
      "rxjs-throwerror-catherror-operator",
      "CatchError ThrowError operators",
      Category.RXJS
    ),

    new Lien(
      "rxjs-observable-vs-subject-coderbase",
      "Observable vs Subject",
      Category.RXJS
    ),

    new Lien("akita-todos-app-coderbase", "Akita Todo App", Category.AKITA),
    new Lien("akita-books-store-coderbase", "Akita Book Store", Category.AKITA),
    new Lien("angular-ngxs-pizza-coderbase", "NGXS Pizza Store", Category.NGXS),
    new Lien(
      "angular-ngrx-chuck-norris-coderbase",
      "NGRX Chuck Norris Joke Store",
      Category.NGRX
    ),
    new Lien("ngrx-8-playground-coderbase", "NGRX Playground", Category.NGRX),
    new Lien("angular-form-ngrx-coderbase", "NGRX Form", Category.NGRX),
    new Lien(
      "angular-ngrx-count-example-coderbase",
      "NGRX Count Example",
      Category.NGRX
    ),
    new Lien(
      "light-demo-for-ngrxstore-and-ngrxeffects",
      "Light demo NGRX STORE and Effect",
      Category.NGRX
    ),
 new Lien(
      "https://indepth.dev/he-who-thinks-change-detection-is-depth-first-and-he-who-thinks-its-breadth-first-are-both-usually-right/",
      "Change Detection is Depth",
      Category.ARTICLE
    ),
    new Lien(
      "https://indepth.dev/angular/",
      "Angular indepth.dev",
      Category.SITE
    )
,
    new Lien(
      "00-angular-renderer-component-append",
      "00 Angular renderer Component",
      Category.ANGULAR
    ),
    new Lien(
      "angula-8-view-encapsulation",
      "angula 8 view-encapsulation",
      Category.ANGULAR
    )
    
  ];

  constructor() {}

  // Don't touch this function until u know RXJS enough
  get list() {
    return from(this.liens).pipe(
      groupBy(lien => lien.category),
      mergeMap(group => group.pipe(toArray())),
      map(data => {
        return {
          category: data[0].category,
          liens: data
        };
      }),
      toArray()
      //tap(console.log)
    );
  }
}
