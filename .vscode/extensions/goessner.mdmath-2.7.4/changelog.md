## CHANGELOG

### [2.7.4]() on June 06, 2021
* Table of Content links bug removed.
* macros settings bug removed.

### [2.7.0]() on June 04, 2021
* Different themes for HTML export are supported now. User can choose
  * default
  * minimal
  * publication (LaTeX style)

  theme in user settings.
* Commutative diagrams are working now.
* Insert *Table Of Content* command available. Inject ToC at cursor location via `Insert Table of Content` from Command Palette (<kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>T</kbd>).
* User notification on HTML export can be suppressed via boolean user setting `Silent` (default: `false`).
* Enforce inline math `$` pair being enclosed by space characters as a guard against misinterpretation of single `$`'s in normal markdown via user setting `Outerspace` (default: `false` for backward compatibility).
* Update to KaTex version 0.13.11.
* Update to `markdown-it` version 12.0.6.
* Update to `markdown-it-texmath` version 0.9.0.

### [2.5.0]() on June 14, 2020
* Update with respect to update of [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath) to version 0.7.0 due to support of Pandoc math syntax with `dollars` namespace.
* Multiline math expressions in blockquote blocks are supported. Bug resolved.
* Code size is reduced.
* Regular expressions were simplified.
* Runtime performance is improved.

### [2.4.1]() on June 11, 2020
* Update with respect to update of [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath) to version 0.6.9 due to support for multiline display math inside of blockquote blocks.
* Update to `markdown-it` 11.0.0
### [2.4.0]() on October 06, 2019
* Update with respect to update of [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath) to version 0.6.0 due to support for [Julia Markdown](https://docs.julialang.org/en/v1/stdlib/Markdown/).
* Update to KaTeX 0.11.1
* Removing dependency on node module `clipboardy` in favor of vscode native clipboard support.
* code clean up and minimizing dependency on external node modules.
* Finally support user defined CSS file for HTML export.
* Allow macro definition in an external file.

### [2.3.9]() on February 07, 2019
* Update with respect to update of [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath) to version 0.5.5 due to resolved  [rendering bug with brackets delimiters](https://github.com/goessner/markdown-it-texmath/issues/9).

### [2.3.8]() on January 20, 2019
* Update with respect to update of [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath) to version 0.5.4 due to resolved [blockquote bug](https://github.com/goessner/mdmath/issues/50).

### [2.3.5]() on October 25, 2018
* Implemented macros supported by KaTeX.
* Command to save HTML to file.
* Autosave option for saving HTML when Markdown file is changed.
* Ability to configure where HTML files are saved.
* `katex` dependency upgrade to `0.10.0`.

###  [2.3.3]() on September 07, 2018
* Add support for [Kramdown](https://kramdown.gettalong.org/) . Simply write `"mdmath.delimiters": "kramdown"` into your user settings for activating it. Please note, that syntax highlighting is only properly supported with `dollars`.

###  [2.3.0]() on August 15, 2018
* fatal `blockquote` behavior gone with VSCode 1.26.0. Obsolete bug fix removed.
* fatal `blockquote` bug fixed.
* `markdown-it` dependency upgrade to `8.5.0`.
* `katex` dependency upgrade to `0.10.0-beta`.

###  [2.2.0]() on March 19, 2018
* `clip-to-html` bug with Ubuntu fixed.
* `markdown-it` dependency upgrade to `8.4.1`.
* `katex` dependency upgrade to `0.9.0`.
* `clipboardy` dependency upgrade to `1.2.3`.

###  [2.1.0]() on January 05, 2018
* Fixing escaped underscore bug with `markdown-it-texmath`.
* Experimentally implementing syntax highlighting in markdown source code.

###  [2.0.7]() on October 02, 2017
* Fixing a css bug in the `clip-to-html` template.

###  [2.0.6]() on September 27, 2017
* Fixing the `newline` bug with `gitlab` delimiters.

###  [2.0.4]() on September 08, 2017
* Using extension local 'css' files instead of 'cdn'-served files for enabling offline usage of mdmath. 
* Update to KaTex version 0.8.3.

###  [2.0.0]() on August 20, 2017
* Fundamental rewrite using vscode markdown extension api. 

###  [1.2.8]() on May 15, 2017
* Setting of `process.env["LC_CTYPE"]` removed, which is done by `clipboardy` itself. 

###  [1.2.7]() on May 14, 2017
* Height increase in `mdmath.css` with block equations and formula numbers removed.
* Chinese language bug with `mdmath.clipToHtml` removed ([issue](https://github.com/goessner/mdmath/issues/13#ref-commit-0e32c99)).
* KaTeX version upgrade to 0.7.1.
* `highlight.js` version upgrade to 9.11.0.

###  [1.2.6]() on March 01, 2017
* Bug in `mdmath.css` removed.

###  [1.2.5]() on March 01, 2017
* `mdmath.css` modified in order to align KaTeX font-size with surrounding text.

###  [1.2.4]() on February 24, 2017
* *debounce/throttle* update events to prevent misbehaving scrolling of preview window with large math documents.

###  [1.2.0]() on February 20, 2017
* *blockquote* bug removed.
* Support of user settings.
* Allow *yaml* and *JSON* front matter in markdown.
* Copy HTML source to clipboard.
* Command `Markdown+Math to Html` is now deprecated.
* Generation of *Table of Contents* is now supported.
* Support of custom CSS styles for preview window.
* Documentation changes
  * moved CHANGELOG to its own file
  * moved CONTRIBUTING guide
  * added ISSUE_TEMPLATE
  * updated links in README
* Updated CSS links for generated HTML code.
* Updated dependencies and added bugs section to `package.json`.

### [1.1.0](https://github.com/goessner/mdmath/compare/5329d04...fcfcbdf) on December 27, 2016

* Single character inline formula bug fixed.
* Formula in lists bug fixed.
* Handling of KaTeX errors improved.
* Micro-improvement of regular expressions.

### [1.0.1](https://github.com/goessner/mdmath/compare/d7b2f55...5329d04) on December 21, 2016

* `code block` bug removed.

### [1.0.0](https://github.com/goessner/mdmath/compare/f0eaf9b...d7b2f55) on December 20, 2016

* Dependency on `markdown-it-katex` removed in favour of some lightweight regular expressions.
* Very simple (manual) equation numbering implemented.
* KaTeX error highlighting activated.
* Footnotes by `markdown-it-footnote` added.
* Standalone [tests](http://goessner.github.io/mdmath/test/) for math rendering added.
* Markdown+Math CSS file added to [CDN](https://gitcdn.xyz/repo/goessner/mdmath/master/css/mdmath.css)
* Some minor bugs removed.

### [0.9.0](https://github.com/goessner/mdmath/compare/20e9002...f0eaf9b) on December 3, 2016

* Installation bug resolved

### [0.8.0](https://github.com/goessner/mdmath/tree/20e9002) on November 25, 2016

* First Release
