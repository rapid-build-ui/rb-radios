## [0.0.13](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.12...v0.0.13) (2019-07-12)


### Dependencies

* **bump:** dep base v0.0.11



## [0.0.12](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.11...v0.0.12) (2019-07-05)


### Features

* **version:** add to component properties accessible via this.version ([c602ffb](https://github.com/rapid-build-ui/rb-radios/commit/c602ffb))


### Dependencies

* **bump deps:** ([6f82219](https://github.com/rapid-build-ui/rb-radios/commit/6f82219))
	* **form-control** to v0.0.9
	* **rb-base** to v0.0.10
	* **rb-popover** to v0.0.17



## [0.0.11](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.10...v0.0.11) (2019-05-09)


### Bug Fixes

* **value changed:** from not returning the right result when value is preselected ([59993f2](https://github.com/rapid-build-ui/rb-radios/commit/59993f2))


### Dependencies

* **bump deps:** ([671d94e](https://github.com/rapid-build-ui/rb-radios/commit/671d94e))
	* **form-control** to v0.0.8
	* **rb-base** to v0.0.9
	* **rb-popover** to v0.0.16



## [0.0.10](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.9...v0.0.10) (2019-03-05)


### Dependencies

* **bump deps:** ([9c5b6ca](https://github.com/rapid-build-ui/rb-radios/commit/9c5b6ca))
	* **form-control** to v0.0.7
	* **rb-base** to v0.0.8
	* **rb-popover** to v0.0.15



## [0.0.9](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.8...v0.0.9) (2019-02-25)


### Features

* **popover slot:** provide ability to conveniently add a rb-popover beside the label ([1df6ded](https://github.com/rapid-build-ui/rb-radios/commit/1df6ded))


### Dependencies

* **bump deps:** ([b45e720](https://github.com/rapid-build-ui/rb-radios/commit/b45e720))
	* **form-control** to v0.0.6
	* **rb-base** to v0.0.7
	* **rb-popover** to v0.0.14



## [0.0.8](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.7...v0.0.8) (2018-12-05)


### Features

* **bump:** deps rb-base v0.0.6 and form-control v0.0.5 ([bf897ba](https://github.com/rapid-build-ui/rb-radios/commit/bf897ba))
* **hidden attribute:** display style that respects the hidden attribute ([44dea22](https://github.com/rapid-build-ui/rb-radios/commit/44dea22))
* **styling:** enhancement ([3349312](https://github.com/rapid-build-ui/rb-radios/commit/3349312))


### Performance Improvements

* **css:** improve browser performance by adding css contain property ([1056b53](https://github.com/rapid-build-ui/rb-radios/commit/1056b53))



## [0.0.7](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.6...v0.0.7) (2018-11-13)


### Dependencies

* **bump:** deps rb-base v0.0.5 and form-control v0.0.4 ([f4fad7a](https://github.com/rapid-build-ui/rb-radios/commit/f4fad7a))



## [0.0.6](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.5...v0.0.6) (2018-09-26)


### Features

* **validation:**
	* add validation ([e95dcdb](https://github.com/rapid-build-ui/rb-radios/commit/e95dcdb))
	* set form control and focus element for validation to be generic ([961fea9](https://github.com/rapid-build-ui/rb-radios/commit/961fea9))


### Dependencies

* **bump:** deps form-control v0.0.3 and rb-base v0.0.4 ([e6d1aa5](https://github.com/rapid-build-ui/rb-radios/commit/e6d1aa5))


### BREAKING CHANGES

* **api option:** change label-prop to label-key ([b464657](https://github.com/rapid-build-ui/rb-radios/commit/b464657))

To migrate the code follow the example below:

**Before:**  
label-prop="name"

**Now:**  
label-key="name"



## [0.0.5](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.4...v0.0.5) (2018-09-14)


* **bump deps:** ([1150066](https://github.com/rapid-build-ui/rb-radios/commit/1150066))
	* **rb-base** to v0.0.3
	* **form-control** to v0.0.2



## [0.0.4](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.3...v0.0.4) (2018-09-05)


### Dependencies

* **rb-base:** bump to v0.0.2 ([d9155cc](https://github.com/rapid-build-ui/rb-radios/commit/d9155cc))



## [0.0.3](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.2...v0.0.3) (2018-08-30)


### Bug Fixes

* **dimensions:** ensure radio is always perfectly round ([77b4994](https://github.com/rapid-build-ui/rb-radios/commit/77b4994))
* **disabled:** prevent keyboard navigation when disabled ([4f94a8f](https://github.com/rapid-build-ui/rb-radios/commit/4f94a8f))
* **radios:** from being unselectable and add keyboard navigation ([1b8094f](https://github.com/rapid-build-ui/rb-radios/commit/1b8094f))


### Features

* **api:** add support for data to be array of objects ([6a5ab18](https://github.com/rapid-build-ui/rb-radios/commit/6a5ab18))
* **new api:** add toggle option for deselecting the value ([7390cff](https://github.com/rapid-build-ui/rb-radios/commit/7390cff))


### Dependencies

* **rb-base:** replace deps lit-html and skatejs with @rapid-build-ui/rb-base and make corresponding updates ([e57b4c4](https://github.com/rapid-build-ui/rb-radios/commit/e57b4c4))



## [0.0.2](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.1...v0.0.2) (2018-07-11)


### Features

* **new api option "horizontal":** for displaying the radios horizontally ([5b1eb97](https://github.com/rapid-build-ui/rb-radios/commit/5b1eb97))



## [0.0.1](https://github.com/rapid-build-ui/rb-radios/compare/v0.0.0...v0.0.1) (2018-07-08)


Release switches web components library Polymer 3 to [SkateJS](http://skatejs.netlify.com/) and view renderer [lit-html](https://polymer.github.io/lit-html/).


