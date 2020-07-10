
import { from,  zip } from "rxjs";
import { groupBy, map, mergeMap, toArray, tap } from "rxjs/operators";
import { of, MonoTypeOperatorFunction, OperatorFunction } from 'rxjs';
//reusable custom operator
export function customOp<R>(): OperatorFunction<any, any> {
  return input$ => input$.pipe(
     groupBy( (lien:any) => lien.category),
      mergeMap( (group:any) => group.pipe(toArray())),
      map(data => {
        return {
          category: data[0].category,
          liens: data
        };
      }),
      toArray()
    )
}