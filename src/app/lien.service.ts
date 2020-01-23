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
    new Lien("js-jcyrkq", "ES6", Category.JAVASCRIPT),

    new Lien("objectassign-js", "Object Assign", Category.JAVASCRIPT),
    new Lien("typescript-qytgzf", "Typescript Example", Category.TYPESCRIPT),
    new Lien("rxjs-nwojyq", "Observable", Category.RXJS),
    new Lien("rxjs-nwojyq", "Subject", Category.RXJS),
    new Lien("rxjs-nwojyq", "BehaviorSubject", Category.RXJS),
    new Lien("coderbaseui", "Coderbase-ui", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Input", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Output", Category.ANGULAR),
    new Lien("angular-unxnpa", "@Attribute", Category.ANGULAR),
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
      "angular-cdk-portal-tooltip-overlay",
      "Angular CDK portal Tooltip Overlay",
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
    new Lien(
      "swiper-demo",
      "Angular Swiper Demo",
      Category.ANGULAR
    ),
    
    new Lien(
      "native-theming-angular-cssvariables-coderbase",
      "Angular Native Theming CSS variable",
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
    new Lien(
      "buffertoggle-rxjs-coderbase",
      "BufferToggle operator",
      Category.RXJS
    ),
    new Lien("bufferwhen-rxjs-coderbase", "BufferWhen operator", Category.RXJS)
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
