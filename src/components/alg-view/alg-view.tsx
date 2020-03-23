import {
  Component,
  Host,
  h,
  Prop,
  getAssetPath,
  State
} from '@stencil/core';
import { AlgModel } from '../../models/alg.model';

@Component({
  tag: 'bga-alg-view',
  styleUrl: 'alg-view.css',
  shadow: true
})
export class AlgView {
  algImageClass = 'alg-image';

  @Prop()
  alg!: AlgModel;

  @State()
  classNames = [this.algImageClass];

  setAlgRotation = (rotation: number) => {
    this.classNames = [this.algImageClass, `rotate-${rotation}`];
  }

  render() {
    return (
      <Host>
        <h3>{this.alg.name}</h3>
        <rx-lazy-image
          class={this.classNames.join(' ')}
          src={getAssetPath(`../../assets/images/${this.alg.name}.png`)}
        />
        <bga-alg-list algList={this.alg.cases} setAlgRotation={ this.setAlgRotation } />
      </Host>
    );
  }
}
