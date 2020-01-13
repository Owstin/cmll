import { Component, h, Prop, Host } from '@stencil/core';
import { AlgModel } from '../../models/alg.model';

@Component({
  tag: 'bga-cmll-collection',
  styleUrl: 'cmll-collection.css',
  shadow: true
})
export class CmllCollection {
  @Prop()
  collectionName!: string;

  @Prop()
  collectionData!: AlgModel[];

  render() {
    return (
      <Host>
        <div>
          <h1 class="collection-name">{this.collectionName}</h1>
        </div>
        <ion-row >
          {
            this.collectionData && this.collectionData.map(alg => (
              <ion-col sizeLg="3" sizeMd="4" sizeSm="6" style={{textAlign: 'center'}}>
                <bga-alg-view alg={alg} />
              </ion-col>
            ))
          }
        </ion-row>
      </Host>
    );
  }

}
