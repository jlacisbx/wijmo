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
import * as ng2 from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation, Injector } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { wjMetaBase } from "wijmo/wijmo.metaFactory";
export declare var WjComponent: (options: {
    wjIsDirective?: boolean;
    wjMetadataId?: any;
    wjParentDirectives?: any[];
    wjSiblingDirectiveId?: string;
    wjOverride?: any;
    selector?: string;
    inputs?: string[];
    outputs?: string[];
    properties?: string[];
    events?: string[];
    host?: {
        [key: string]: string;
    };
    bindings?: any[];
    providers?: any[];
    exportAs?: string;
    moduleId?: string;
    queries?: {
        [key: string]: any;
    };
    viewBindings?: any[];
    viewProviders?: any[];
    changeDetection?: ChangeDetectionStrategy;
    templateUrl?: string;
    template?: string;
    styleUrls?: string[];
    styles?: string[];
    directives?: any[];
    pipes?: any[];
    encapsulation?: ViewEncapsulation;
}) => any;
export declare type ChangePropertyEvents = {
    prop: string;
    evExposed: string;
    evImpl: string;
};
export declare type EventPropertiesItem = {
    event: string;
    eventImpl: string;
    props?: ChangePropertyEvents[];
};
export declare type EventProperties = EventPropertiesItem[];
export declare class DirectiveTypeData {
    private _fwdResolved;
    private static _siblingIdCounter;
    metaData: wjMetaBase.interop.MetaDataBase;
    changeEventMap: EventProperties;
    private _parentDirectives;
    siblingId: string;
    constructor(metaData: wjMetaBase.interop.MetaDataBase, changeEventMap: EventProperties, parentDirectives: any[], siblingId: string);
    parentDirectives: any[];
    private _resolveForwardDeclarations();
}
export declare class WjDirectiveBehavior {
    static BehaviourRefProp: string;
    static parPropAttr: string;
    static wjModelPropAttr: string;
    static initializedEventAttr: string;
    static isInitializedPropAttr: string;
    static siblingDirIdAttr: string;
    private static _pathBinding;
    private _parentPropDesc;
    private _siblingInsertedEH;
    directive: Object;
    typeData: DirectiveTypeData;
    elementRef: ng2.ElementRef;
    injector: ng2.Injector;
    parentBehavior: WjDirectiveBehavior;
    isInitialized: boolean;
    isDestroyed: boolean;
    static getHostElement(ngHostElRef: ng2.ElementRef): HTMLElement;
    static attach(directive: Object, elementRef: ng2.ElementRef, injector: ng2.Injector): WjDirectiveBehavior;
    constructor(directive: Object, elementRef: ng2.ElementRef, injector: ng2.Injector);
    dirOnInit(originalMethod: Function): void;
    dirAfterViewInit(): void;
    dirOnDestroy(originalMethod: Function): void;
    dirOnChanges(originalMethod: Function, changes: any): void;
    static instantiateTemplate(parent: HTMLElement, viewContainerRef: ng2.ViewContainerRef, templateRef: ng2.TemplateRef<any>, domRenderer: ng2.Renderer): {
        viewRef: ng2.EmbeddedViewRef<any>;
        rootElement: Element;
    };
    private createEvents();
    private subscribeToEvents(afterInit);
    private addHandlers(eventMap);
    private triggerPropChangeEvents(eventMap);
    private _setupAsChild();
    private _isChild();
    private _isParentInitializer();
    private _isParentReferencer();
    private _getParentProp();
    private _getParentReferenceProperty();
    private _useParentObj();
    private _isParentArray();
    private _parentInCtor();
    private _initParent();
    _getSiblingIndex(): number;
    private _siblingInserted(e);
    private _isHostElement();
    private static evaluatePath(obj, path);
    static getBehavior(directive: any): WjDirectiveBehavior;
    static resolveForwardDecl(array: any[]): void;
    static findParentBehavior(injector: ng2.Injector, directiveTypes: any[], upToBehavior?: WjDirectiveBehavior): WjDirectiveBehavior;
    static findTypeParentBehavior(injector: ng2.Injector, type: any, upToBehavior?: WjDirectiveBehavior): WjDirectiveBehavior;
    static getInjectorBehavior(injector: ng2.Injector): WjDirectiveBehavior;
}
export declare class Ng2Utils {
    static directiveTypeDataProp: string;
    static initEvents(directiveType: any, changeEvents: EventProperties): string[];
    private static getChangeEventNameImplemented(propertyName);
    private static getChangeEventNameExposed(propertyName);
    private static getWjEventNameImplemented(eventName);
    static getChangeEventMap(metaData: wjMetaBase.interop.MetaDataBase): {
        event: string;
        eventImpl: string;
        props?: {
            prop: string;
            evExposed: string;
            evImpl: string;
        }[];
    }[];
    static getBaseType(type: any): any;
    static getAnnotations(type: any): any[];
    static getAnnotation(annotations: any[], annotationType: any): any;
    static getTypeAnnotation(type: any, annotationType: any, own?: boolean): any;
    static _copy(dst: any, src: any, override?: boolean, includePrivate?: boolean, filter?: (name: string, value: any) => boolean): void;
}
export declare class WjValueAccessor implements ControlValueAccessor {
    private _isFirstChange;
    private _injector;
    private _directive;
    private _behavior;
    private _ngModelProp;
    private _modelValue;
    private _isSubscribed;
    private _dirInitEh;
    private _onChange;
    private _onTouched;
    constructor(injector: Injector);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    private _updateDirective();
    private _ensureDirective();
    private _ensureSubscribed();
    private _ensureNgModelProp();
    private _ensureInitEhUnsubscribed();
    private _dirValChgEh(s, e);
    private _dirLostFocusEh(s, e);
}
export declare function WjValueAccessorFactory(injector: Injector): WjValueAccessor;
export declare class WjDirectiveBaseModule {
}
