# Template

Content :

1. General
2. Fix
3. Header
4. Content
5. Hero image
6. Footer

Formatting:

* Use tabs (4 spaces) for indentation
* Prefer dashes over camelCasing in class names.
* Underscores and PascalCasing are okay if you are using BEM (see OOCSS and BEM below).
* Do not use ID selectors
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put a space before the opening brace { in rule declarations
* In properties, put a space after, but not before, the : character.
* Put closing braces } of rule declarations on a new line
* Put blank lines between rule declarations

Comments:

* Prefer line comments (// in Sass-land) to block comments.
* Prefer comments on their own line. Avoid end-of-line comments.
* Write detailed comments for code that isn't self-documenting:
    * Uses of z-index
    * Compatibility or browser-specific hacks


BEM:
Block component
.btn {}

Element that depends upon the block
.btn__price {}

Modifier that changes the style of the block
.btn--orange {}
.btn--big {}
