import { Component, h, Prop, Element, State } from '@stencil/core';
import { Subject, Observable, of } from 'rxjs';
import { flatMap, distinctUntilChanged, takeUntil, map, delay } from 'rxjs/operators';

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

  legacyTimeout = 300;
  unsubscribe = new Subject<boolean>();

  componentWillLoad() {
    this.createObserver().pipe(
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

  createObserver() {
    if ('IntersectionObserver' in window) {
      return this.addIntersectionObserver();
    }
    return this.addLegacyTimeout();
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

  addLegacyTimeout() {
    return of(false).pipe(
      delay(this.legacyTimeout),
      map(() => true)
    )
  }

  loadImage() {
    this.lazySrc = this.src;
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
        onLoad={ () => this.removeIntersectionObserver() }
      />
    );
  }

}
