# Scrollable Tabs for Bootstrap 5

A simple plugin to create scrollable tabs with Bootstrap 5.

[![preview][1]][1]

## Support me:

[![coffee][2]][2]

## Usage:

### Install:

- [Download the latest release](https://github.com/SupernovaIC/scrollable-tabs-bootstrap-5/archive/refs/tags/v1.0.0.1.zip)

- Install with [npm](https://www.npmjs.com/): `npm i scrolling-tabs-bootstrap-5`

[![npm version](https://img.shields.io/npm/v/scrolling-tabs-bootstrap-5)](https://www.npmjs.com/package/scrolling-tabs-bootstrap-5)

### Required libraries:

```html
<!--Bootstrap icons-->
<link rel="stylesheet" href="node_modules/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css">

<!--External library-->
<script src="node_modules/scrollable-tabs-bootstrap-5/dist/move.min.js"></script>
<!--https://visionmedia.github.io/move.js/-->

<!--Scrollable libs-->
<link href="node_modules/scrollable-tabs-bootstrap-5/dist/scrollable-tabs.css" rel="stylesheet">
<script src="node_modules/scrollable-tabs-bootstrap-5/dist/scrollable-tabs.js"></script>
```

### HTML example:

```html
<div class="w-100">
    <div class="scroller scroller-left float-start mt-2"><i class="bi bi-caret-left-fill"></i></div>
    <div class="scroller scroller-right float-end mt-2"><i class="bi bi-caret-right-fill"></i></div>
    <div class="wrapper-nav">
        <nav class="nav nav-tabs list mt-2" id="myTab" role="tablist">
            <a class="nav-item nav-link pointer active" data-bs-toggle="tab" data-bs-target="#tab1" role="tab" aria-controls="public" aria-selected="true">Tab1</a>
            <a class="nav-item nav-link pointer" data-bs-target="#tab2" role="tab" data-bs-toggle="tab">Tab 2</a>
            <a class="nav-item nav-link pointer" data-bs-target="#tab3" role="tab" data-bs-toggle="tab">Tab 3</a>
            <a class="nav-item nav-link pointer" data-bs-target="#tab4" role="tab" data-bs-toggle="tab">Tab 4</a>
            <a class="nav-item nav-link pointer" data-bs-target="#tab5" role="tab" data-bs-toggle="tab">Tab 5</a>
            <a class="nav-item nav-link pointer" data-bs-target="#tab6" role="tab" data-bs-toggle="tab">Tab 6</a>
        </nav>
    </div>
    <div class="tab-content p-3" id="myTabContent">
        <div role="tabpanel" class="tab-pane fade active show mt-2" id="tab1" aria-labelledby="public-tab" >
            This is the content of Tab 1...
        </div>
        <div class="tab-pane fade mt-2" id="tab2" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
            This is the content of Tab 2...
        </div>
        <div class="tab-pane fade mt-2" id="tab3" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
            This is the content of Tab 3...
        </div>
        <div class="tab-pane fade mt-2" id="tab4" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
            This is the content of Tab 4...
        </div>
        <div class="tab-pane fade mt-2" id="tab5" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
            This is the content of Tab 5...
        </div>
        <div class="tab-pane fade mt-2" id="tab6" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
            This is the content of Tab 6...
        </div>
    </div>
</div>
```

**Based on:**

https://www.codeply.com/go/Loo3CqsA7T

  [1]: preview.gif
  [2]: https://raw.githubusercontent.com/FANMixco/Xamarin-SearchBar/master/bmc-rezr5vpd.gif
