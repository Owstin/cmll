import { Component, h, State } from '@stencil/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { AlgModel } from '../../models/alg.model';
import { algService } from '../../services/alg-service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  unsubscribe = new Subject<void>();

  @State()
  algs: Map<string, AlgModel[]> = new Map();

  componentWillLoad() {
    algService.getAlgs().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(algs => this.algs = algs);
  }

  componentWillUnload() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  render() {
    return (
      <ion-app>
        <ion-content fullscreen>
          <ion-grid>
            { [...this.algs.entries()].map(([collectionName, collectionData]) => {
                return (
                  <bga-cmll-collection
                    collectionName={collectionName}
                    collectionData={collectionData}
                  />
                )
              })
            }
          </ion-grid>
        </ion-content>
      </ion-app>
    );
  }
}
