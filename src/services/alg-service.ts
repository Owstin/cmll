import { Observable, of } from 'rxjs';
import { flatMap, reduce } from 'rxjs/operators';
import { AlgModel } from '../models/alg.model';
// import { typedFetch } from '../helpers/utils';
import { cmllCollection } from './cmll-collection';

class AlgService {
  getAlgs(): Observable<Map<string, AlgModel[]>> {
    // return from(typedFetch<AlgModel[]>('http://localhost:8080/api/algs')).pipe(
    return of(cmllCollection).pipe(
      // switchMap(res => res.json()),
      flatMap(algs => algs),
      // horrible hack to correct the data structure comming from the api
      reduce(
        (aggregatedAlgs, alg) => {
          const collectionName = alg.name.charAt(0);
          if (!aggregatedAlgs.has(collectionName)) {
            aggregatedAlgs.set(collectionName, []);
          }
          const collection = aggregatedAlgs.get(collectionName);
          aggregatedAlgs.set(collectionName, [...collection, alg]);

          return new Map(aggregatedAlgs);
        },
        new Map<string, AlgModel[]>()
      )
    );
  }
}

export const algService = new AlgService();
