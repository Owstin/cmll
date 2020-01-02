import {
  Component,
  Host,
  h,
  Prop,
  State
} from '@stencil/core';

@Component({
  tag: 'bga-alg-list',
  styleUrl: 'alg-list.css',
  shadow: true
})
export class AlgList {
  @Prop()
  algList!: string[];

  @Prop()
  setAlgRotation!: (rotation: number) => void;

  @State()
  algViewerLink: string;

  algRotationHandler(alg: string) {
    const rotation = this.getAlgRotation(alg);
    this.setAlgRotation(rotation);
  }

  getAlgRotation(alg: string) {
    const rotationOptions = {
      '(U)': 90,
      '(U\')': -90,
      '(U2)': 180,
      null: 0
    }
    const aufRegex = /^\(U[\'2]?\)+/
    const [rotationMatch] = alg.match(aufRegex) || [null];
    return rotationOptions[rotationMatch];
  }

  createAlgViewerLink(alg: string) {
    const emptyUrl = 'https://alg.cubing.net/?type=alg&view=playback&alg=';
    const sanitizedAlg = alg.replace(/ /g, '_').replace(/\'/g, '-');
    return `${emptyUrl}${sanitizedAlg}`;
  }

  render() {
    return (
      <Host>
        {
          this.algList.map(alg => (
            <p>
              <a
                onMouseOver={() => this.algRotationHandler(alg)}
                onMouseLeave={() => this.algRotationHandler('')}
                href={this.createAlgViewerLink(alg)}
                target="_blank"
              >
                {alg}
              </a>
            </p>
          ))
        }
      </Host>
    );
  }

}
