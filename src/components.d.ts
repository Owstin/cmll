/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  AlgModel,
} from './models/alg.model';

export namespace Components {
  interface AppRoot {}
  interface BgaAlgList {
    'algList': string[];
    'setAlgRotation': (rotation: number) => void;
  }
  interface BgaAlgView {
    'alg': AlgModel;
  }
  interface BgaCmllCollection {
    'collectionData': AlgModel[];
    'collectionName': string;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLBgaAlgListElement extends Components.BgaAlgList, HTMLStencilElement {}
  var HTMLBgaAlgListElement: {
    prototype: HTMLBgaAlgListElement;
    new (): HTMLBgaAlgListElement;
  };

  interface HTMLBgaAlgViewElement extends Components.BgaAlgView, HTMLStencilElement {}
  var HTMLBgaAlgViewElement: {
    prototype: HTMLBgaAlgViewElement;
    new (): HTMLBgaAlgViewElement;
  };

  interface HTMLBgaCmllCollectionElement extends Components.BgaCmllCollection, HTMLStencilElement {}
  var HTMLBgaCmllCollectionElement: {
    prototype: HTMLBgaCmllCollectionElement;
    new (): HTMLBgaCmllCollectionElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'bga-alg-list': HTMLBgaAlgListElement;
    'bga-alg-view': HTMLBgaAlgViewElement;
    'bga-cmll-collection': HTMLBgaCmllCollectionElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface BgaAlgList {
    'algList': string[];
    'setAlgRotation': (rotation: number) => void;
  }
  interface BgaAlgView {
    'alg': AlgModel;
  }
  interface BgaCmllCollection {
    'collectionData': AlgModel[];
    'collectionName': string;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'bga-alg-list': BgaAlgList;
    'bga-alg-view': BgaAlgView;
    'bga-cmll-collection': BgaCmllCollection;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'bga-alg-list': LocalJSX.BgaAlgList & JSXBase.HTMLAttributes<HTMLBgaAlgListElement>;
      'bga-alg-view': LocalJSX.BgaAlgView & JSXBase.HTMLAttributes<HTMLBgaAlgViewElement>;
      'bga-cmll-collection': LocalJSX.BgaCmllCollection & JSXBase.HTMLAttributes<HTMLBgaCmllCollectionElement>;
    }
  }
}


