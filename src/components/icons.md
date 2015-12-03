---
title: Icons
---

<div class="library__header">
	<div>
		<h1 class="library__header_title">Icons</h1>
	</div>
</div>
<div class="library__main">
<div class="library__example__group">
	<h3 class="library__example_title">Icons</h3>
	<p>Utilizamos un sprite inline de iconos SVG.<br />
	La clase <code class="code-class">.re-Icon</code> añade el estilo básico al icono. Los modificadores <code class="code-class">.re-Icon--small</code> y <code class="code-class">.re-Icon--big</code> modifican el tamaño.</p>
	<div class="library__example">
		<svg class="re-Icon re-Icon--small"><use xlink:href="../assets/images/fotocasa.sprite.svg#fav-off"/></use></svg>
	<svg class="re-Icon"><use xlink:href="../assets/images/fotocasa.sprite.svg#fav-off"/></svg>
	<svg class="re-Icon re-Icon--big"><use xlink:href="../assets/images/fotocasa.sprite.svg#fav-off"/></use></svg>
	</div>

```html
<svg class="re-Icon re-Icon--small"><use xlink:href="../assets/images/fotocasa.sprite.svg#fav-off"/></use></svg>
<svg class="re-Icon"><use xlink:href="../assets/images/fotocasa.sprite.svg#fav-off"/></use></svg>
<svg class="re-Icon re-Icon--big"><use xlink:href="../assets/images/fotocasa.sprite.svg#fav-off"/></use></svg>
```

<div class="library__hint">
Consulta el repositorio para crear un sprite svg, <a href="https://github.com/scm-spain/fc-svg-sprite" target="_blank">aquí.</a>
</div>
</div>
<div class="library__example__group">
	<h3 class="library__example_title">Fotocasa Sprite Icons</h3>
	<div class="library__example">
		<ul id="iconList" class="library__iconlist"></ul>
	</div>
</div>
</div>
