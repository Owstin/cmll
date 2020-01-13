import { Component, h, Prop, Element, State } from '@stencil/core';
import { Subject, Observable } from 'rxjs';
import { flatMap, distinctUntilChanged, takeUntil, map } from 'rxjs/operators';

@Component({
  tag: 'rx-lazy-image',
  styleUrl: 'lazy-image.css',
  shadow: true
})
export class LazyImage {
  @Element()
  el: HTMLElement;

  @Prop()
  src!: string;

  @Prop()
  alt: string;

  @State()
  lazySrc?: string;

  unsubscribe = new Subject<boolean>();
  imageRef: HTMLElement;

  componentWillLoad() {
    this.addIntersectionObserver().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(isIntersecting => {
      if (isIntersecting) {
        this.loadImage();
      }
    });
  }

  componentDidUnload() {
    this.removeIntersectionObserver();
  }

  addIntersectionObserver() {
    return new Observable<IntersectionObserverEntry[]>(observer => {
      const intersectionObserver = new IntersectionObserver(entries => {
        observer.next(entries);
      });
      intersectionObserver.observe(this.el);

      return () => { intersectionObserver.disconnect() };
    })
    .pipe(
      flatMap(entries => entries),
      map(entry => entry.isIntersecting),
      distinctUntilChanged()
    )
  }

  loadImage() {
    this.lazySrc = this.src;
    this.imageRef.onload = () => {
      this.removeIntersectionObserver();
    }
  }

  removeIntersectionObserver() {
    if (!this.unsubscribe.isStopped) {
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }
  }

  render() {
    return (
      <img
        src={this.lazySrc}
        alt={this.alt}
        ref={imageRef => this.imageRef = imageRef}
      />
    );
  }

}
