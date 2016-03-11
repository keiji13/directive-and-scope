Angular Directive Definition Object DDO
====

Learn what each property represents and how it works with the directive.

restrict
----
`restrict` : 'E' *Restrict directive to be used as `element` only*

`restrict` : 'A' *Restrict directive to be used as `attribute` only*

`restrict` : 'C' *Restrict directive to be used as `class` name only*

`restrict` : 'EAC' *Directive can be use as `element`, `attribute` or `class` name*
scope
----
`scope` : **False** *Directive uses its parent scope*

`scope` : **True** *Directive gets a new scope*

`scope` : **{}** *Directive gets a new isolated scope*

```
/*=========================
* isolated scope prefixes
==========================*/
1. "@"   (  Text binding / one-way binding )
2. "="   ( Direct model binding / two-way binding )
3. "&"   ( Behaviour binding / Method binding  )
```
require
----
`require` : **^someDirective** *if set, directive link function will have access to common controller with the required directive*
transclude
----
`transclude` : **true** *transfer all content inside the directive and include to whatever element `ng-transclude` attribute attach to.*
replace
----
`replace` : **true** *replace directive root element with the directive template. Make sure template atleast has a replacement root element*
template
----
`template` : `String` *string of DOM elements*

`templateUrl` : `String` *string path of html file*
link
----
`link` : `Function` *post linking function of a directive, accepts `scope`, `element`, `attributes` as arguments*
controller
----

`controller` : `Function` *controller of a directive, trigger first before link function*