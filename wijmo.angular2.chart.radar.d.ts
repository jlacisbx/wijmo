/*
    *
    * Wijmo Library 5.20162.207
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
/**
* Contains Angular 2 components for the <b>wijmo.chart.radar</b> module.
*
* <b>wijmo.angular2.chart.radar</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjRadar from 'wijmo/wijmo.angular2.chart.radar';
* &nbsp;
* &#64;Component({
*     directives: [wjRadar.WjFlexRadar, wjRadar.WjFlexRadarSeries],
*     template: `
*       &lt;wj-flex-radar [itemsSource]="data" [bindingX]="'x'"&gt;
*           &lt;wj-flex-radar-series [binding]="'y'"&gt;&lt;/wj-flex-radar-series&gt;
*       &lt;/wj-flex-radar&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { Injector, ElementRef } from '@angular/core';
/**
* Angular 2 component for the @see:FlexRadar control.
*
* Use the <b>wj-flex-radar</b> component to add <b>FlexRadar</b> controls to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexRadar</b> component is derived from the <b>FlexRadar</b> control and
* inherits all its properties, events and methods.
*
* The <b>wj-flex-radar</b> component may contain @see:wijmo/wijmo.angular2.chart.WjFlexChartAxis,
* @see:wijmo/wijmo.angular2.chart.WjFlexChartLegend, @see:wijmo/wijmo.angular2.chart.radar.WjFlexRadarSeries
* child components.
*/
export declare class WjFlexRadar extends wijmo.chart.radar.FlexRadar {
    constructor(elRef: ElementRef, injector: Injector);
    tooltipContent: any;
    labelContent: any;
}
/**
* Angular 2 component for the @see:WjFlexRadar @see:FlexRadarAxis object.
*
* The <b>wj-flex-radar-axis</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.radar.WjFlexRadar component.
*
* Use the <b>wj-flex-radar-axis</b> component to add <b>FlexRadarAxis</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexRadarAxis</b> component is derived from the <b>FlexRadarAxis</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexRadarAxis extends wijmo.chart.radar.FlexRadarAxis {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexRadar @see:FlexRadarSeries object.
*
* The <b>wj-flex-radar-series</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.radar.WjFlexRadar component.
*
* Use the <b>wj-flex-radar-series</b> component to add <b>FlexRadarSeries</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexRadarSeries</b> component is derived from the <b>FlexRadarSeries</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexRadarSeries extends wijmo.chart.radar.FlexRadarSeries {
    constructor(elRef: ElementRef, injector: Injector);
}
export declare class WjChartRadarModule {
}
