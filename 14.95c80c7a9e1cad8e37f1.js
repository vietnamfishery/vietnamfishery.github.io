(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4tE/":function(t,e,o){"use strict";o.d(e,"a",function(){return j}),o.d(e,"d",function(){return E}),o.d(e,"e",function(){return R}),o.d(e,"b",function(){return P}),o.d(e,"c",function(){return C}),o.d(e,"f",function(){return F});var n=o("mrSG"),i=o("CcnG"),a=o("Wf4p"),s=o("lLAP"),r=o("n6gG"),l=o("YSh2"),c=o("eDkP"),p=o("4c35"),u=o("t9fZ"),h=o("15JJ"),_=o("VnD/"),f=o("67Y/"),d=o("xMyE"),m=o("vubp"),y=(o("gIcY"),o("pugT")),v=o("K9Ia"),g=o("lYZG"),b=o("p0ib"),O=o("F/XL"),w=o("bne5"),S=0,A=Object(a.G)(function(){}),j=new i.InjectionToken("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}}),E=function(t){function e(e,o,n){var a=t.call(this)||this;return a._changeDetectorRef=e,a._elementRef=o,a.showPanel=!1,a._isOpen=!1,a.displayWith=null,a.optionSelected=new i.EventEmitter,a.opened=new i.EventEmitter,a.closed=new i.EventEmitter,a._classList={},a.id="mat-autocomplete-"+S++,a._autoActiveFirstOption=!!n.autoActiveFirstOption,a}return Object(n.__extends)(e,t),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this._isOpen&&this.showPanel},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoActiveFirstOption",{get:function(){return this._autoActiveFirstOption},set:function(t){this._autoActiveFirstOption=Object(r.c)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classList",{set:function(t){var e=this;t&&t.length&&(t.split(" ").forEach(function(t){return e._classList[t.trim()]=!0}),this._elementRef.nativeElement.className="")},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this._keyManager=new s.b(this.options).withWrap(),this._setVisibility()},e.prototype._setScrollTop=function(t){this.panel&&(this.panel.nativeElement.scrollTop=t)},e.prototype._getScrollTop=function(){return this.panel?this.panel.nativeElement.scrollTop:0},e.prototype._setVisibility=function(){this.showPanel=!!this.options.length,this._classList["mat-autocomplete-visible"]=this.showPanel,this._classList["mat-autocomplete-hidden"]=!this.showPanel,this._changeDetectorRef.markForCheck()},e.prototype._emitSelectEvent=function(t){var e=new function(t,e){this.source=t,this.option=e}(this,t);this.optionSelected.emit(e)},e}(A),P=new i.InjectionToken("mat-autocomplete-scroll-strategy");function C(t){return function(){return t.scrollStrategies.reposition()}}var F=function(){function t(t,e,o,n,i,a,s,r,l,c){var p=this;this._element=t,this._overlay=e,this._viewContainerRef=o,this._zone=n,this._changeDetectorRef=i,this._scrollStrategy=a,this._dir=s,this._formField=r,this._document=l,this._viewportRuler=c,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=y.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new v.a,this._windowBlurHandler=function(){p._canOpenOnNextFocus=document.activeElement!==p._element.nativeElement||p.panelOpen},this._onChange=function(){},this._onTouched=function(){},this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=Object(g.a)(function(){return p.autocomplete&&p.autocomplete.options?b.a.apply(void 0,p.autocomplete.options.map(function(t){return t.onSelectionChange})):p._zone.onStable.asObservable().pipe(Object(u.a)(1),Object(h.a)(function(){return p.optionSelections}))}),"undefined"!=typeof window&&n.runOutsideAngular(function(){window.addEventListener("blur",p._windowBlurHandler)})}return Object.defineProperty(t.prototype,"autocompleteDisabled",{get:function(){return this._autocompleteDisabled},set:function(t){this._autocompleteDisabled=Object(r.c)(t)},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){"undefined"!=typeof window&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()},Object.defineProperty(t.prototype,"panelOpen",{get:function(){return this._overlayAttached&&this.autocomplete.showPanel},enumerable:!0,configurable:!0}),t.prototype.openPanel=function(){this._attachOverlay(),this._floatLabel()},t.prototype.closePanel=function(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())},Object.defineProperty(t.prototype,"panelClosingActions",{get:function(){var t=this;return Object(b.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(_.a)(function(){return t._overlayAttached})),this._closeKeyEventStream,this._outsideClickStream,this._overlayRef?this._overlayRef.detachments().pipe(Object(_.a)(function(){return t._overlayAttached})):Object(O.a)()).pipe(Object(f.a)(function(t){return t instanceof a.v?t:null}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeOption",{get:function(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_outsideClickStream",{get:function(){var t=this;return this._document?Object(b.a)(Object(w.a)(this._document,"click"),Object(w.a)(this._document,"touchend")).pipe(Object(_.a)(function(e){var o=e.target,n=t._formField?t._formField._elementRef.nativeElement:null;return t._overlayAttached&&o!==t._element.nativeElement&&(!n||!n.contains(o))&&!!t._overlayRef&&!t._overlayRef.overlayElement.contains(o)})):Object(O.a)(null)},enumerable:!0,configurable:!0}),t.prototype.writeValue=function(t){var e=this;Promise.resolve(null).then(function(){return e._setTriggerValue(t)})},t.prototype.registerOnChange=function(t){this._onChange=t},t.prototype.registerOnTouched=function(t){this._onTouched=t},t.prototype.setDisabledState=function(t){this._element.nativeElement.disabled=t},t.prototype._handleKeydown=function(t){var e=t.keyCode;if(e===l.g&&t.preventDefault(),this.panelOpen&&(e===l.g||e===l.p&&t.altKey))this._resetActiveItem(),this._closeKeyEventStream.next(),t.stopPropagation();else if(this.activeOption&&e===l.f&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){var o=this.autocomplete._keyManager.activeItem,n=e===l.p||e===l.d;this.panelOpen||e===l.o?this.autocomplete._keyManager.onKeydown(t):n&&this._canOpen()&&this.openPanel(),(n||this.autocomplete._keyManager.activeItem!==o)&&this._scrollToOption()}},t.prototype._handleInput=function(t){var e=t.target,o=e.value;"number"===e.type&&(o=""==o?null:parseFloat(o)),this._previousValue!==o&&document.activeElement===t.target&&(this._previousValue=o,this._onChange(o),this._canOpen()&&this.openPanel())},t.prototype._handleFocus=function(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0},t.prototype._floatLabel=function(t){void 0===t&&(t=!1),this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)},t.prototype._resetLabel=function(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)},t.prototype._scrollToOption=function(){var t=this.autocomplete._keyManager.activeItemIndex||0,e=Object(a.D)(t,this.autocomplete.options,this.autocomplete.optionGroups),o=Object(a.E)(t+e,48,this.autocomplete._getScrollTop(),256);this.autocomplete._setScrollTop(o)},t.prototype._subscribeToClosingActions=function(){var t=this,e=this._zone.onStable.asObservable().pipe(Object(u.a)(1)),o=this.autocomplete.options.changes.pipe(Object(d.a)(function(){return t._positionStrategy.reapplyLastPosition()}),Object(m.a)(0));return Object(b.a)(e,o).pipe(Object(h.a)(function(){return t._resetActiveItem(),t.autocomplete._setVisibility(),t.panelOpen&&t._overlayRef.updatePosition(),t.panelClosingActions}),Object(u.a)(1)).subscribe(function(e){return t._setValueAndClose(e)})},t.prototype._destroyPanel=function(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)},t.prototype._setTriggerValue=function(t){var e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t,o=null!=e?e:"";this._formField?this._formField._control.value=o:this._element.nativeElement.value=o},t.prototype._setValueAndClose=function(t){t&&t.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()},t.prototype._clearPreviousSelectedOption=function(t){this.autocomplete.options.forEach(function(e){e!=t&&e.selected&&e.deselect()})},t.prototype._attachOverlay=function(){var t=this;if(!this.autocomplete)throw Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");this._overlayRef?this._overlayRef.updateSize({width:this._getPanelWidth()}):(this._portal=new p.h(this.autocomplete.template,this._viewContainerRef),this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(function(){t.panelOpen&&t._overlayRef&&t._overlayRef.updateSize({width:t._getPanelWidth()})}))),this._overlayRef&&!this._overlayRef.hasAttached()&&(this._overlayRef.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());var e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()},t.prototype._getOverlayConfig=function(){return new c.d({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir})},t.prototype._getOverlayPosition=function(){return this._positionStrategy=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}]),this._positionStrategy},t.prototype._getConnectedElement=function(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element},t.prototype._getPanelWidth=function(){return this.autocomplete.panelWidth||this._getHostWidth()},t.prototype._getHostWidth=function(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width},t.prototype._resetActiveItem=function(){this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption?0:-1)},t.prototype._canOpen=function(){var t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled},t}(),R=function(){}},rgJo:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var n=o("t/Na"),i=o("F5nt"),a=o("6p9a"),s=o("CcnG"),r=function(){function t(t,e){this.http=t,this.appService=e}return t.prototype.getStorageWithUser=function(t,e){return this.http.get(a.a+"/storages/gets",this.setHeader(t,e))},t.prototype.getBreedWithUser=function(t){return this.http.get(a.a+"/breeds/gets",this.appService.setHeader(t))},t.prototype.addStorage=function(t,e){return this.http.post(a.a+"/storages/add",e,this.appService.setHeader(t))},t.prototype.addBreed=function(t,e){return this.http.post(a.a+"/breeds/add",e,this.appService.setHeader(t))},t.prototype.setHeader=function(t,e){return{headers:new n.g({"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"vietnamfishery "+t,type:e+""})}},t.prototype.updateFood=function(t,e){return this.http.put(a.a+"/storages/food/update",t,this.appService.setHeader(e))},t.prototype.getCoupons=function(t,e){return this.http.get(a.a+"/storages/coupons/gets/"+e.seasonId,this.appService.setHeader(t))},t.ngInjectableDef=s.defineInjectable({factory:function(){return new t(s.inject(n.c),s.inject(i.a))},token:t,providedIn:"root"}),t}()}}]);