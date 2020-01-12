import { Component, h, Prop, Element } from '@stencil/core';
import { Subject, Observable } from 'rxjs';
import { flatMap, distinctUntilChanged, takeUntil, map } from 'rxjs/operators';

@Component({
  tag: 'rx-lazy-image',
  shadow: true
})
export class LazyImage {
  unsubscribe = new Subject<boolean>();

  @Prop()
  src!: string;

  @Prop()
  alt: string;

  @Element()
  el: HTMLElement;

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
    this.imageRef.setAttribute('src', this.src);
    this.imageRef.onload = () => {
      this.imageRef.removeAttribute('lazy-src');
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
        lazy-src={this.src}
        alt={this.alt}
        ref={imageRef => this.imageRef = imageRef}
      />
    );
  }

}
