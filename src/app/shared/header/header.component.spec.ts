import { TestBed, inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { EventEmitter } from '@angular/core';

describe('a header component', () => {
  let component: HeaderComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeaderComponent
      ]
    });
  });

  // instantiation through framework injection
  // tslint:disable-next-line:no-shadowed-variable
  beforeEach(inject([HeaderComponent], (HeaderComponent) => {
    component = HeaderComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
  it('should emit input value when search clicked', () => {
    const comp = new HeaderComponent();
    comp.event.subscribe(userName => expect(userName).toBe('tomas'));
    comp.emitUsername('tomas');
  });
});
