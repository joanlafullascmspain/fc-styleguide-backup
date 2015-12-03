---
title: Buttons
---

<div class="library__header">
	<div>
		<h1 class="library__header_title">Buttons</h1>
	</div>
</div>

<div class="library__main">

<div class="library__example__group">
	<h3 class="library__example_title">Basic Button</h3>
	<p>Utilizamos la clase <code class="code-class">.re-Button</code> en un elemento <code class="code-html">&lt;a&gt;</code> o en un elemento <code class="code-html">&lt;button&gt;</code> siempre que estemos en el contexto de un formulario.</p>
	<div class="library__example">
		<a type="button" class="re-Button">Basic Button</a>
		<button type="button" class="re-Button">Form Basic Button</button>
	</div>

```html
<a href="#" class="re-Button">Basic Button</a>
<button type="button" class="re-Button">Form Basic Button</button>
```
</div>

<div class="library__example__group">
	<h3 class="library__example_title">Primary Button</h3>
	<p>Añadiremos la clase <code class="code-class">.re-Button--primary</code> a nuestro botón.<br />
	Se utiliza para destacar aquellas <strong>acciones que son principales</strong> dentro de la página.<br />
	En una misma página pueden coexistir varios Primary Buttons.</p>
	<div class="library__example">
		<a href="#" class="re-Button re-Button--primary">Button Primary</a>
		<button type="button" class="re-Button re-Button--primary">Form Button Primary</button>
	</div>

```html
<a href="#" class="re-Button re-Button--primary">Primary Button</a>
<button type="button" class="re-Button re-Button--primary">Form Primary Button</button>
```
</div>

<div class="library__example__group">
	<h3 class="library__example_title">Accent Button</h3>
	<p>Añadiremos la clase <code class="code-class">.re-Button--accent</code> a nuestro botón.<br />
	Se utiliza para <strong>destacar una única acción</strong> dentro de la página.</p>
	<div class="library__example">
		<a href="#" class="re-Button re-Button--accent">Button Accent</a>
	  	<button type="button" class="re-Button re-Button--accent">Form Button Accent</button>
	</div>

```html
<a href="#" class="re-Button re-Button--accent">Accent Button</a>
<button type="button" class="re-Button re-Button--accent">Form Accent Button</button>
```
</div>

<div class="library__example__group">
	<h3 class="library__example_title">Disabled Button</h3>
	<p>Añadiremos la clase <code class="code-class">.re-Button--disabled</code> a nuestro botón.<br />
	Se utiliza en <strong>botones de formulario desactivados.</strong></p>
	<div class="library__example">
	  	<button type="button" class="re-Button re-Button--disabled" disabled>Form Button Disabled</button>
	</div>

```html
<button type="button" class="re-Button re-Button--disabled">Form Button Disabled</button>
```
</div>

<div class="library__example__group">
	<h3 class="library__example_title">Full Button</h3>
	<p>Añadiremos la clase <code class="code-class">.re-Button--full</code> a nuestro botón.<br />
	Se utiliza para lograr que el ancho del botón <strong>sea el mismo ancho que el de su contenedor.</strong></p>
	<div class="library__example">
	  	<a href="#" class="re-Button re-Button--full">Basic Button Full</a>
	  	<a href="#" class="re-Button re-Button--primary re-Button--full">Primary Button Full</a>
	  	<button type="button" class="re-Button re-Button--accent re-Button--full">Form Accent Button Full</button>
	</div>

```html
<a href="#" class="re-Button re-Button--full">Basic Button Full</a>
<a href="#" class="re-Button re-Button--primary re-Button--full">Primary Button Full</a>
<button type="button" class="re-Button re-Button--accent re-Button--full">Form Accent Button Full</button>
```
</div>

<div class="library__example__group">
	<h3 class="library__example_title">Small Buttons</h3>
	<p>Podemos utilizar la <strong>versión reducida</strong> de los botones <em>Basic</em>, <em>Primary</em> y <em>Disabled</em> añadiendo la clase <code class="code-class">.re-Button--small</code><br />
	El botón <em>Accent</em> no tiene versión reducida.</p>
	<div class="library__example">
		<a href="#" class="re-Button re-Button--small">Basic Button Small</a>
	  	<a href="#" class="re-Button re-Button--primary re-Button--small">Primary Button Small</a>
	  	<button href="#" class="re-Button re-Button--disabled re-Button--small" disabled>Form Button Disabled Small</button>
	</div>

```html
<a href="#" class="re-Button re-Button--small">Basic Button Small</a>
<a href="#" class="re-Button re-Button--primary re-Button--small">Primary Button Small</a>
<button class="re-Button re-Button--disabled re-Button--small" disabled>Form Button Disabled Small</button>
```
</div>

<div class="library__example__group">
	<h3 class="library__example_title">Icon Button</h3>
	<p>Podemos utilizar la <strong>versión reducida</strong> de los botones <em>Basic</em>, <em>Primary</em> y <em>Disabled</em> añadiendo la clase <code class="code-class">.re-Button--small</code><br />
	El botón <em>Accent</em> no tiene versión reducida.</p>
	<div class="library__example">
		<a href="#" class="re-Button ">
		<svg class="re-Icon re-Icon--small"><use xlink:href="../assets/images/fotocasa.sprite.svg#search"/></svg>
		Basic Icon Button</a>
	  	<a href="#" class="re-Button re-Button--primary">
	  	<svg class="re-Icon re-Icon--small"><use xlink:href="../assets/images/fotocasa.sprite.svg#search"/></svg>
	  	Primary Icon Button</a>
	  	<a href="#" class="re-Button re-Button--accent">
		<svg class="re-Icon"><use xlink:href="../assets/images/fotocasa.sprite.svg#search"/></svg>
	  	Accent Icon Button</a>
	</div>

```html
<a href="#" class="re-Button ">
<svg class="re-Icon re-Icon--small"><use xlink:href="../assets/images/fotocasa.sprite.svg#search"/></svg>
Basic Icon Button</a>
<a href="#" class="re-Button re-Button--primary">
<svg class="re-Icon re-Icon--small"><use xlink:href="../assets/images/fotocasa.sprite.svg#search"/></svg>
Primary Icon Button</a>
<a href="#" class="re-Button re-Button--accent">
<svg class="re-Icon"><use xlink:href="../assets/images/fotocasa.sprite.svg#search"/></svg>
Accent Icon Button</a>
```
</div>

<div class="library__example__group">
	<h3 class="library__example_title">Button List</h3>
	<p>Podemos construir un listado de botones que podemos utilizar como barra de navegación. Para ello debemos aplicar la clase <code class="code-class">.re-Button-list</code> a la etiqueta <code class="code-html">ul</code>.</p>
	<div class="library__example">
		<ul class="re-Button-list">
			<li><button class="re-Button">Opción 1</button></li>
			<li><button class="re-Button">Opción 2</button></li>
			<li><button class="re-Button">Opción 3</button></li>
		</ul>
	</div>

```html
<ul class="re-Button-list">
	<li><button class="re-Button">Opción 1</button></li>
	<li><button class="re-Button">Opción 2</button></li>
	<li><button class="re-Button">Opción 3</button></li>
</ul>
```
</div>

<div class="library__example__group">
	<h3 class="library__example_title">Full Button List</h3>
	<p>Podemos construir un listado de botones que <strong>se ajuste al ancho de su contenedor</strong> y que podemos utilizar como barra de navegación. Para ello debemos aplicar la clase <code class="code-class">.re-Button-list--full</code> a la etiqueta <code class="code-html">ul</code>.</p>
	<div class="library__example">
		<ul class="re-Button-list--full">
			<li><button class="re-Button">Opción 1</button></li>
			<li><button class="re-Button">Opción 2</button></li>
			<li><button class="re-Button">Opción 3</button></li>
		</ul>
	</div>

```html
<ul class="re-Button-list--full">
	<li><button class="re-Button">Opción 1</button></li>
	<li><button class="re-Button">Opción 2</button></li>
	<li><button class="re-Button">Opción 3</button></li>
</ul>
```
</div>

</div>
