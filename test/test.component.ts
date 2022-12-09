// SYNTAX TEST "inline-template.ng"
import { Component } from '@angular/core';

@Component({
  selector: 'vscode-angular-inline',
  styleUrls: ['./vscode-angular-inline.scss'],
  template: `

    DOCTYPE

    <!DOCTYPE html>
    <!DOCTYPE HTML
              PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

    COMMENTS

    <!-- COMMENTS -->

    INVALID ATTRIBUTES

    <a charset="dasdasda"
      coords=""
      rev=""
      shape=""></a>

    <area nohref="" />

    <body alink=""
          background=""
          bgcolor=""
          link=""
          vlink=""></body>

    <br clear="" />

    <col char=""
        charoff=""
        valign=""
        width="" />

    <colgroup align=""
              char=""
              charoff=""
              valign=""
              width=""></colgroup>

    <dl compact=""></dl>

    <menu compact=""></menu>

    <head profile="test">
      <title>Teste</title>
    </head>

    <hr align=""
        noshade=""
        size=""
        width="" />

    <html version="">

    </html>

    <iframe align=""
            frameborder=""
            longdesc=""
            marginheight=""
            marginwidth=""
            scrolling=""></iframe>


    <img align=""
        hspace=""
        longdesc=""
        name=""
        vspace="" />

    <li type=""></li>

    <link charset=""
          rev=""
          target="" />

    <caption align=""></caption>

    <div align=""></div>

    <h1 align=""></h1>

    <h2 align=""></h2>

    <h3 align=""></h3>

    <h4 align=""></h4>

    <h5 align=""></h5>

    <h6 align=""></h6>

    <input align="" />

    <legend align=""></legend>

    <p align=""></p>

    <ol compact=""
        type=""></ol>

    <ul compact="teste"
        type=""></ul>

    <object archive=""
            border=""
            classid=""
            codebase=""
            codetype=""
            declare=""
            hspace=""
            standby=""
            vspace=""
            align=""></object>

    <param type=""
          valuetype="" />


    <pre width=""></pre>

    <t abbr=""
      axis=""></t>

    <table bgcolor=""
          border=""
          cellpadding=""
          cellspacing=""
          frame=""
          rules=""
          scheme=""
          width=""></table>

    <tbody align=""
          char=""
          charoff=""
          valign=""></tbody>

    <td abbr=""
        align=""
        axis=""
        bgcolor=""
        char=""
        charoff=""
        nowrap=""
        scope=""
        valign=""
        width=""></td>

    <tfoot align=""
          char=""
          charoff=""
          valign=""></tfoot>

    <th align=""
        bgcolor=""
        char=""
        charoff=""
        nowrap=""
        valign=""
        width=""></th>

    <thead align=""
          char=""
          charoff=""
          valign=""></thead>

    <tr align=""
        bgcolor=""
        char=""
        charoff=""
        valign=""></tr>

    <div-test></div-test>
    <menu-test></menu-test>

    ANGULAR DIRECTIVES

    <div [binding]="to.element"
        [binding]="to.function('with-parameter')"
        @animationTrigger
        [element_binding]="to.function_with_underline('with-parameter')"
        (click)="to.function(with.parameter)"
        (click)="to.function(with!.parameter)"
        (click)="to.function(with?.parameter)"
        [(binding)]="to.element"
        [attr.href]="file?.link"
        [style.font-size.px]="10"
        [@$visi_bility]="module.$visibility"
        [@visibility]="getMenuState()"
        [@visibility.done]="doSomething()"
        [(binding)]="to.function('with-parameter')"
        (click)="callback(parameter.test)"
        mat-header-cell
        *ngFor="let obs of observable | async as test;"
        *matHeaderCellDef
        class="test"
        [ngClass]="{
            'test': test.isTruthy()
        }"
        *
        ref-variable
        ref-assingVariable="test"
        let-col$="test"
        let-col$
        let-i="index"
        *ngIf="condition.met()"
        *ngIf="condition?.met"
        [ngClass]="{ 'test': sdsdasda }"
        class="testing with non multiline {{test}}"
        test
        [test]="test.test();"
        *ngIf="selectedCustomer && selectedCustomer.id > 0; else block1; then block2"
        *ngFor="let a of b['a'][teste].asd; index as c"
        #templateVariable
        test></div>

    ANGULAR INTERPOLATIONS

    {{ test | pipe }}
    {{ test | pipe:'withParameters' }}
    {{ angular.interpolations || test }}
    {{ angular?.interpolations }}
    {{ angular!.interpolations }}

    <span>
      Hello {{ 1 + 1 === 3 ? 'me' : 'you' }}
    </span>
    {{ user?.preferences?.avatar }}
    {{ user?.name | uppercase }}
    {{ user!.preferences!.nickName | uppercase }}

    ANGULAR STRUCTURAL TAGS

    <ng-content>
      <span [class]="test()"></span>
    </ng-content>

    <ng-container *ngIf="condition?.met">
      <test-component></test-component>
    </ng-container>

    <ng-template #noPublishedDate>
      No published date
    </ng-template>

    <router-outlet></router-outlet>

    <div *
        test="">
    </div>

    <input type="text"
          #color
          placeholder="Hex color value">
    <button (click)="printValue(color.value)">
      Show color
    </button>
    <span>
      Published: {{ publishedDate | date:'fullDate' }}
    </span>

    <span *ngIf="publishedDate">
      Published: {{ publishedDate | date:'fullDate' }}
    </span>

    <span *ngIf="publishedDate; else noPublishedDate">
      Published: {{ publishedDate | date:'fullDate' }}
    </span>

    <ul>
      <li *ngFor="let user of users">
        name: {{ user.name }}, email: {{ user.email }}
      </li>
    </ul>

    <ul>
      <li *ngFor="let user of users | async as test; index as i;">
        {{ i + 1 }}- name: {{ user.name }}, email: {{ user.email }}
      </li>
    </ul>

    <div [ngSwitch]="user.gender">
      <span *ngSwitchCase="'m'">Male</span>
      <span *ngSwitchCase="'f'">Female</span>
      <span *ngSwitchDefault>Not provided</span>
    </div>

    ENTITIES

    &nbsp;
    &#0098;

    REGEX

    /[^@\/#(){31231231}]/

    DEPRECATED TAGS

    <acronym class=""></acronym>

    <applet class=""></applet>

    <basefont class="" />

    <big class=""></big>

    <center class=""></center>

    <dir class=""></dir>

    <font class=""></font>

    <frame class="" />

    <frameset class="">

    </frameset>

    <isindex class="dsadsdasd" />

    <noframes class="">

    </noframes>

    <strike class="ste">teste testestestestes </strike>

    <tt> </tt>

    <u>
      the single quote won't bother anymore
      neither will the double one "
    </u>


    DOM EVENTS

    <div DOMMenuItemActive="callback()"
        DOMMenuItemInactive="callback()"
        DOMMouseScroll="callback()"
        onabort="callback()"
        onafterprint="callback()"
        onafterupdate="callback()"
        onbeforecopy="callback()"
        onbeforecut="callback()"
        onbeforeeditfocus="callback()"
        onbeforepaste="callback()"
        onbeforeprint="callback()"
        onbeforeunload="callback()"
        onbeforeupdate="callback()"
        onblur="callback()"
        onbounce="callback()"
        onbroadcast="callback()"
        oncanplay="callback()"
        oncanplaythrough="callback()"
        oncellchange="callback()"
        onchange="callback()"
        onclick="callback()"
        onclose="callback()"
        oncommand="callback()"
        oncommandupdate="callback()"
        oncontextmenu="callback()"
        oncopy="callback()"
        oncut="callback()"
        ondataavailable="callback()"
        ondatasetchanged="callback()"
        ondatasetcomplete="callback()"
        ondblclick="callback()"
        ondrag="callback()"
        ondragdrop="callback()"
        ondragend="callback()"
        ondragenter="callback()"
        ondragexit="callback()"
        ondraggesture="callback()"
        ondragleave="callback()"
        ondragover="callback()"
        ondragstart="callback()"
        ondrop="callback()"
        ondurationchange="callback()"
        onemptied="callback()"
        onended="callback()"
        onerror="callback()"
        onerrorupdate="callback()"
        onfilterchange="callback()"
        onfinish="callback()"
        onfocus="callback()"
        onformchange="callback()"
        onforminput="callback()"
        ongotpointercapture="callback()"
        onhelp="callback()"
        oninput="callback()"
        oninvalid="callback()"
        onkeydown="callback()"
        onkeypress="callback()"
        onkeyup="callback()"
        onload="callback()"
        onloadeddata="callback()"
        onloadedmetadata="callback()"
        onloadstart="callback()"
        onlosecapture="callback()"
        onlostpointercapture="callback()"
        onmousedown="callback()"
        onmousemove="callback()"
        onmouseout="callback()"
        onmouseover="callback()"
        onmouseup="callback()"
        onmousewheel="callback()"
        onoverflow="callback()"
        onoverflowchanged="callback()"
        onpaste="callback()"
        onpause="callback()"
        onplay="callback()"
        onplaying="callback()"
        onpointercancel="callback()"
        onpointerdown="callback()"
        onpointerenter="callback()"
        onpointerleave="callback()"
        onpointermove="callback()"
        onpointerout="callback()"
        onpointerover="callback()"
        onpointerup="callback()"
        onpopuphidden="callback()"
        onpopuphiding="callback()"
        onpopupshowing="callback()"
        onpopupshown="callback()"
        onprogress="callback()"
        onpropertychange="callback()"
        onratechange="callback()"
        onreadystatechange="callback()"
        onreset="callback()"
        onresize="callback()"
        onrowenter="callback()"
        onrowexit="callback()"
        onrowinserted="callback()"
        onrowsdelete="callback()"
        onscroll="callback()"
        onseeked="callback()"
        onseeking="callback()"
        onselect="callback()"
        onselectstart="callback()"
        onshow="callback()"
        onstalled="callback()"
        onstart="callback()"
        onstop="callback()"
        onsubmit="callback()"
        onsuspend="callback()"
        ontimeupdate="callback()"
        onunderflow="callback()"
        onunload="callback()"
        onvolumechange="callback()"
        onwaiting="callback()"></div>

    STYLE INLINE

    <div style="display: block;
                background-color: rgb(255, 255, 255);
                color: rgba(33, 254, 12, 1);"></div>

    GENERIC ATTRIBUTES

    <div class="test"
        id="test"
        aria-label="test"
        no-value
        novalidate></div>

    <input type="text">

    <label class="test"></label>

    <button [attr.aria-label]="'test'"></button>

    <button [style.background-color]="canSave ? 'cyan': 'grey'">Save</button>

    <button [style.font-size.em]="isSpecial ? 3 : 1">Big</button>

    <style>
      // stylus
      .stylus .way &-of-doing-it[with-attr] color: red;

      // scss
      .class {
        .with {
          &-children[with-attr] {
            &:hover {
              &::before {
                display: inline-block;
              }
            }
          }
        }
      }

    </style>

    <script type="text/javascript">
      let a = '123';
      const b = 123;
      new Class();

      function test() {
        test.callback();
      }

    </script>

    <ng-container></ng-container>
    <ng-content></ng-content>
    <ng-template></ng-template>
    <router-outlet></router-outlet>
    <mat-accordion></mat-accordion>
    <mat-action-list></mat-action-list>
    <mat-action-row></mat-action-row>
    <mat-autocomplete></mat-autocomplete>
    <mat-card-actions></mat-card-actions>
    <mat-card-content></mat-card-content>
    <mat-card-header></mat-card-header>
    <mat-card-footer></mat-card-footer>
    <mat-card-subtitle></mat-card-subtitle>
    <mat-card-title></mat-card-title>
    <mat-card-title-group></mat-card-title-group>
    <mat-card></mat-card>
    <mat-checkbox></mat-checkbox>
    <mat-chip-list></mat-chip-list>
    <mat-datepicker-toggle></mat-datepicker-toggle>
    <mat-datepicker></mat-datepicker>
    <mat-drawer-content></mat-drawer-content>
    <mat-drawer></mat-drawer>
    <mat-divider></mat-divider>
    <mat-error></mat-error>
    <mat-expansion-panel-header></mat-expansion-panel-header>
    <mat-expansion-panel></mat-expansion-panel>
    <mat-form-field></mat-form-field>
    <mat-grid-list></mat-grid-list>
    <mat-grid-tile-footer></mat-grid-tile-footer>
    <mat-grid-tile-header></mat-grid-tile-header>
    <mat-grid-title></mat-grid-title>
    <mat-hint></mat-hint>
    <mat-icon></mat-icon>
    <mat-label></mat-label>
    <mat-list-item></mat-list-item>
    <mat-list-option></mat-list-option>
    <mat-list></mat-list>
    <mat-menu></mat-menu>
    <mat-nav-list></mat-nav-list>
    <mat-optgroup></mat-optgroup>
    <mat-option></mat-option>
    <mat-panel-description></mat-panel-description>
    <mat-panel-title></mat-panel-title>
    <mat-radio-button></mat-radio-button>
    <mat-radio-group></mat-radio-group>
    <mat-selection-list></mat-selection-list>
    <mat-select-trigger></mat-select-trigger>
    <mat-select></mat-select>
    <mat-sidenav-content></mat-sidenav-content>
    <mat-sidenav-container></mat-sidenav-container>
    <mat-sidenav></mat-sidenav>
    <mat-slide-toggle></mat-slide-toggle>
    <mat-slider></mat-slider>
    <mat-toolbar-row></mat-toolbar-row>
    <mat-toolbar></mat-toolbar>
    <mat-horizontal-stepper></mat-horizontal-stepper>
    <mat-pseudo-checkbox></mat-pseudo-checkbox>
    <mat-step></mat-step>
    <mat-vertical-stepper></mat-vertical-stepper>
    <mat-tab-group></mat-tab-group>
    <mat-tab></mat-tab>
    <mat-nav-tab-bar></mat-nav-tab-bar>
    <mat-tree-node></mat-tree-node>
    <mat-tree></mat-tree>
    <mat-nested-tree-node></mat-nested-tree-node>
    <mat-button-toggle-group></mat-button-toggle-group>
    <mat-button-toggle></mat-button-toggle>
    <mat-chip-list></mat-chip-list>
    <mat-chip></mat-chip>
    <mat-basic-chip></mat-basic-chip>
    <mat-progress-spinner></mat-progress-spinner>
    <mat-spinner></mat-spinner>
    <mat-progress-bar></mat-progress-bar>
    <mat-dialog-content></mat-dialog-content>
    <mat-dialog-actions></mat-dialog-actions>
    <mat-paginator></mat-paginator>
    <mat-text-column></mat-text-column>
    <mat-header-row></mat-header-row>
    <mat-header-cell></mat-header-cell>
    <mat-table></mat-table>
    <mat-cell></mat-cell>
    <mat-row></mat-row>
    <cdk-step></cdk-step>
    <cdk-virtual-scroll-viewport></cdk-virtual-scroll-viewport>
    <cdk-header-cell></cdk-header-cell>
    <cdk-cell></cdk-cell>
    <cdk-table></cdk-table>
    <cdk-header-row></cdk-header-row>
    <cdk-row></cdk-row>
    <cdk-tree-node></cdk-tree-node>
    <cdk-tree></cdk-tree>
    <cdk-nested-tree-node></cdk-nested-tree-node>
    <mat-chip-list></mat-chip-list>

    <mat-chip-avatar let-item$="item$"></mat-chip-avatar>
    <mat-date-range-input></mat-date-range-input>
    <mat-date-range-picker></mat-date-range-picker>
    <mat-datepicker-actions></mat-datepicker-actions>
    <mat-calendar></mat-calendar>
    <mat-grid-tile></mat-grid-tile>
    <mat-drawer-container></mat-drawer-container>
    <mat-stepper></mat-stepper>
    <mat-tab-nav-panel></mat-tab-nav-panel>
    <cdk-accordion></cdk-accordion>
    <cdk-accordion-item></cdk-accordion-item>
    <cdk-footer-cell></cdk-footer-cell>
    <cdk-footer-row></cdk-footer-row>
  `,
})
export class VscodeAngularInline {}