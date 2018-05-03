import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCCheckbox} from '@material/checkbox';
import {MDCIconToggle} from '@material/icon-toggle';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';
import {MDCSlider} from '@material/slider';
import {MDCTextField} from '@material/textfield';

const ThemeCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<ThemeHero />}
      title='Theme'
      description=''
      designLink='https://material.io/guidelines/components/buttons.html'
      docsLink='https://material.io/components/web/catalog/buttons/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-button'
      demos={<ThemeDemos />}
    />
  );
}

class ThemeHero extends Component {
  componentInstances = [];
  initRipple = ele => ele && this.componentInstances.push(new MDCRipple(ele));

  componentWillUnmount() {
    this.componentInstances.forEach(ripple => ripple.destroy());
  }

  render() {
    return (
      <div className='theme-demo'>
        <button className='hero-button mdc-button' ref={this.initRipple}>
          Text
        </button>
        <button className='hero-button mdc-button mdc-button--raised' ref={this.initRipple}>
          Raised
        </button>
        <button className='hero-button mdc-button mdc-button--unelevated' ref={this.initRipple}>
          Unelevated
        </button>
        <button className='hero-button mdc-button mdc-button--stroked' ref={this.initRipple}>
          Stroked
        </button>
      </div>
    );
  }
}

class ThemeDemos extends Component {
  componentInstances = [];
  initCheckbox = ele => ele && this.componentInstances.push(new MDCCheckbox(ele));
  initIconToggle = ele => ele;// && this.componentInstances.push(new MDCIconToggle(ele));
  initRipple = buttonEl => buttonEl && this.componentInstances.push(new MDCRipple(buttonEl));
  initSelect = ele => ele && this.componentInstances.push(new MDCSelect(ele));
  initSlider = ele => ele && this.componentInstances.push(new MDCSlider(ele));
  initTextField = ele => ele && this.componentInstances.push(new MDCTextField(ele));

  componentWillUnmount() {
    this.componentInstances.forEach(component => component.destroy());
  }

  render() {
    return (
        <div className='theme-demo'>
          <main className='mdc-toolbar-fixed-adjust demo-main'>
            <h2 className='mdc-typography--headline4'>
              Baseline Colors
            </h2>

            <section className='demo-component-section'>
              <i id='classes' className='demo-anchor-with-toolbar-offset' />
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                CSS Classes
              </h3>

              <div className='demo-theme-color-section'>
                <div className='demo-theme-color-section__row'>
                  <fieldset className='demo-fieldset--color'>
                    <legend className='mdc-typography--subtitle1'>Theme colors as text</legend>

                    <div className='demo-theme-color-group'>
                      <div className='demo-theme-color-swatches'>
                        <div className='demo-theme-color-swatch demo-theme-color-swatch--elevated mdc-theme--primary mdc-typography--body2'>Primary</div>
                      </div>
                      <div className='demo-theme-color-swatches'>
                        <div className='demo-theme-color-swatch demo-theme-color-swatch--elevated mdc-theme--secondary mdc-typography--body2'>Secondary</div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className='demo-fieldset--color'>
                    <legend className='mdc-typography--subtitle1'>Theme colors as background</legend>

                    <div className='demo-theme-color-group'>
                      <div className='demo-theme-color-swatches'>
                        <div className='demo-theme-color-swatch mdc-theme--primary-bg mdc-theme--on-primary'>Primary</div>
                      </div>
                      <div className='demo-theme-color-swatches'>
                        <div className='demo-theme-color-swatch mdc-theme--secondary-bg mdc-theme--on-secondary'>Secondary</div>
                      </div>
                      <div className='demo-theme-color-swatches'>
                        <div className='demo-theme-color-swatch demo-theme-color-swatch--elevated mdc-theme--background mdc-theme--text-primary-on-background'>Background</div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className='demo-theme-color-section'>
                <div className='demo-theme-color-section_row'>
                  <fieldset className='demo-fieldset--color'>
                    <legend className='mdc-typography--subtitle1'>Text on background</legend>

                    <div className='demo-theme-color-group'>
                      <div className='demo-theme-text-row mdc-theme--background mdc-typography--body2'>
                        <span className='demo-theme-text-style mdc-theme--text-primary-on-background'>Primary</span>
                        <span className='demo-theme-text-style mdc-theme--text-secondary-on-background'>Secondary</span>
                        <span className='demo-theme-text-style mdc-theme--text-hint-on-background'>Hint</span>
                        <span className='demo-theme-text-style mdc-theme--text-disabled-on-background'>Disabled</span>
                        <span className='demo-theme-text-style mdc-theme--text-icon-on-background material-icons'>favorite</span>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className='demo-theme-color-section__row'>
                  <fieldset className='demo-fieldset--color'>
                    <legend className='mdc-typography--subtitle1'>Text on primary</legend>

                    <div className='demo-theme-color-group'>
                      <div className='demo-theme-text-row mdc-theme--primary-bg mdc-typography--body2'>
                        <span className='demo-theme-text-style mdc-theme--on-primary'>Text</span>
                        <span className='demo-theme-text-style mdc-theme--on-primary material-icons'>favorite</span>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className='demo-fieldset--color'>
                    <legend className='mdc-typography--subtitle1'>Text on secondary</legend>

                    <div className='demo-theme-color-group'>
                      <div className='demo-theme-text-row mdc-theme--secondary-bg mdc-typography--body2'>
                        <span className='demo-theme-text-style mdc-theme--on-secondary'>Text</span>
                        <span className='demo-theme-text-style mdc-theme--on-secondary material-icons'>favorite</span>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className='demo-theme-color-section__row'>
                  <fieldset className='demo-fieldset--color'>
                    <legend className='mdc-typography--subtitle1'>Text on user-defined light background</legend>

                    <div className='demo-theme-color-group'>
                      <div className='demo-theme-text-row demo-theme-bg--custom-light mdc-typography--body2'>
                        <span className='demo-theme-text-style mdc-theme--text-primary-on-light'>Primary</span>
                        <span className='demo-theme-text-style mdc-theme--text-secondary-on-light'>Secondary</span>
                        <span className='demo-theme-text-style mdc-theme--text-hint-on-light'>Hint</span>
                        <span className='demo-theme-text-style mdc-theme--text-disabled-on-light'>Disabled</span>
                        <span className='demo-theme-text-style mdc-theme--text-icon-on-light material-icons'>favorite</span>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className='demo-fieldset--color'>
                    <legend className='mdc-typography--subtitle1'>Text on user-defined dark background</legend>

                    <div className='demo-theme-color-group'>
                      <div className='demo-theme-text-row demo-theme-bg--custom-dark mdc-typography--body2'>
                        <span className='demo-theme-text-style mdc-theme--text-primary-on-dark'>Primary</span>
                        <span className='demo-theme-text-style mdc-theme--text-secondary-on-dark'>Secondary</span>
                        <span className='demo-theme-text-style mdc-theme--text-hint-on-dark'>Hint</span>
                        <span className='demo-theme-text-style mdc-theme--text-disabled-on-dark'>Disabled</span>
                        <span className='demo-theme-text-style mdc-theme--text-icon-on-dark material-icons'>favorite</span>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </section>

            <h2 className='mdc-typography--headline4'>
              Baseline Component Stickersheet
            </h2>

            <section className='demo-component-section'>
              <i id='button' className='demo-anchor-with-toolbar-offset' />
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Button
              </h3>

              <fieldset className='demo-fieldset--button'>
                <legend className='mdc-typography--subtitle1'>Enabled</legend>

                <div>
                  <button className='mdc-button' ref={this.initRipple}>
                    Text
                  </button>
                  <button className='mdc-button mdc-button--raised' ref={this.initRipple}>
                    Raised
                  </button>
                  <button className='mdc-button mdc-button--unelevated' ref={this.initRipple}>
                    Unelevated
                  </button>
                  <button className='mdc-button mdc-button--outlined' ref={this.initRipple}>
                    Outlined
                  </button>
                </div>
              </fieldset>

              <fieldset className='demo-fieldset--button' disabled>
                <legend className='mdc-typography--subtitle1'>Disabled</legend>

                <div>
                  <button className='mdc-button' ref={this.initRipple}>
                    Text
                  </button>
                  <button className='mdc-button mdc-button--raised' ref={this.initRipple}>
                    Raised
                  </button>
                  <button className='mdc-button mdc-button--unelevated' ref={this.initRipple}>
                    Unelevated
                  </button>
                  <button className='mdc-button mdc-button--outlined' ref={this.initRipple}>
                    Outlined
                  </button>
                </div>
              </fieldset>
            </section>

            <section className='demo-component-section'>
              <i id='card' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Card
              </h3>

              <div className='demo-card-wrapper'>
                <div className='mdc-card'>
                  <div className='mdc-card__media mdc-card__media--16-9 demo-card__media'/>
                  <div className='mdc-card__actions'>
                    <div className='mdc-card__action-buttons'>
                      <button className='mdc-button mdc-card__action mdc-card__action--button' ref={this.initRipple}>Read</button>
                      <button className='mdc-button mdc-card__action mdc-card__action--button' ref={this.initRipple}>Bookmark</button>
                    </div>
                    <div className='mdc-card__action-icons'>
                      <i className='mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon'
                         ref={this.initIconToggle}
                         tabIndex='0'
                         role='button'
                         aria-pressed='false'
                         aria-label='Add to favorites'
                         title='Add to favorites'
                         data-toggle-on={{'content': 'favorite', 'label': 'Remove from favorites'}}
                         data-toggle-off={{'content': 'favorite_border', 'label': 'Add to favorites'}}>
                        favorite_border
                      </i>
                      <i className='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                         tabIndex='0'
                         role='button'
                         data-mdc-ripple-is-unbounded
                         title='Share'>share</i>
                      <i className='material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface'
                         tabIndex='0'
                         role='button'
                         data-mdc-ripple-is-unbounded
                         title='More options'>more_vert</i>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='demo-component-section'>
              <i id='checkbox' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Checkbox
                <a href='#' className='demo-component-section__permalink' title='Permalink to the theme demo for the checkbox component'>#</a>
              </h3>

              <div className='demo-checkbox-row'>
                <div className='mdc-form-field demo-checkbox-wrapper'>
                  <div className='mdc-checkbox demo-checkbox' data->
                    <input type='checkbox'
                           id='enabled-checkbox'
                           className='mdc-checkbox__native-control'/>
                    <div className='mdc-checkbox__background'>
                      <svg className='mdc-checkbox__checkmark'
                           viewBox='0 0 24 24'>
                        <path className='mdc-checkbox__checkmark-path'
                              fill='none'
                              stroke='white'
                              d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
                      </svg>
                      <div className='mdc-checkbox__mixedmark'/>
                    </div>
                  </div>
                  <label htmlFor='enabled-checkbox' id='enabled-checkbox-label'>Enabled</label>
                </div>

                <div className='mdc-form-field demo-checkbox-wrapper'>
                  <div className='mdc-checkbox demo-checkbox'>
                    <input type='checkbox'
                           id='indeterminate-checkbox'
                           className='mdc-checkbox__native-control'/>
                    <div className='mdc-checkbox__background'>
                      <svg className='mdc-checkbox__checkmark'
                           viewBox='0 0 24 24'>
                        <path className='mdc-checkbox__checkmark-path'
                              fill='none'
                              stroke='white'
                              d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
                      </svg>
                      <div className='mdc-checkbox__mixedmark'/>
                    </div>
                  </div>
                  <label htmlFor='indeterminate-checkbox' id='indeterminate-checkbox-label'>Indeterminate</label>
                </div>

                <div className='mdc-form-field demo-checkbox-wrapper'>
                  <div className='mdc-checkbox mdc-checkbox--disabled demo-checkbox'>
                    <input type='checkbox'
                           id='disabled-checkbox'
                           className='mdc-checkbox__native-control'
                           disabled />
                    <div className='mdc-checkbox__background'>
                      <svg className='mdc-checkbox__checkmark'
                           viewBox='0 0 24 24'>
                        <path className='mdc-checkbox__checkmark-path'
                              fill='none'
                              stroke='white'
                              d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
                      </svg>
                      <div className='mdc-checkbox__mixedmark'/>
                    </div>
                  </div>
                  <label htmlFor='disabled-checkbox' id='disabled-checkbox-label'>Disabled</label>
                </div>

                <button type='button' className='mdc-button mdc-button--outlined demo-checkbox-toggle-button' id='checkbox-toggle--indeterminate' ref={this.initRipple}>
                  <span>Toggle <code className='demo-button__code'>indeterminate</code></span>
                </button>
                <button type='button' className='mdc-button mdc-button--outlined demo-checkbox-toggle-button' id='checkbox-toggle--align-end' ref={this.initRipple}>
                  <span>Toggle <code className='demo-button__code'>--align-end</code></span>
                </button>
              </div>
            </section>

            <section className='demo-component-section'>
              <i id='dialog' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Dialog
              </h3>

              <aside className='mdc-dialog demo-dialog'>
                <div className='mdc-dialog__surface'>
                  <header className='mdc-dialog__header'>
                    <h3 id='mdc-dialog-default-label' className='mdc-dialog__header__title'>
                      Fire photon torpedoes?
                    </h3>
                  </header>
                  <section id='mdc-dialog-default-description' className='mdc-dialog__body'>
                    Shields at 60% and falling, captain.
                  </section>
                  <footer className='mdc-dialog__footer'>
                    <button type='button' className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel' ref={this.initRipple}>Belay that order</button>
                    <button type='button' className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept' ref={this.initRipple}>Make it so!</button>
                  </footer>
                </div>
              </aside>
            </section>

            <section className='demo-component-section'>
              <i id='drawer' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Drawer
              </h3>

              <p className='mdc-typography--body1'>Tap the menu icon (<i className='material-icons demo-drawer-toggle'>menu</i>) in the toolbar at the top of the page to open the drawer.</p>
            </section>

            <section className='demo-component-section'>
              <i id='fab' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Floating Action Button (FAB)
              </h3>

              <fieldset>
                <div className='demo-fab-row'>
                  <figure className='demo-fab-tile'>
                    <figcaption>
                      <div className='demo-fab-tile__title'>Default</div>
                      <div className='demo-fab-tile__snippet mdc-typography--body1'>Secondary theme color</div>
                    </figcaption>
                    <button className='mdc-fab material-icons demo-fab' aria-label='Favorite'>
                <span className='mdc-fab__icon'>
                  favorite_border
                </span>
                    </button>
                  </figure>
                  <figure className='demo-fab-tile'>
                    <figcaption>
                      <div className='demo-fab-tile__title'>Mini</div>
                      <div className='demo-fab-tile__snippet mdc-typography--body1'><code>mdc-fab--mini</code></div>
                    </figcaption>
                    <button className='mdc-fab mdc-fab--mini material-icons demo-fab' aria-label='Favorite'>
                <span className='mdc-fab__icon'>
                  favorite_border
                </span>
                    </button>
                  </figure>
                </div>
              </fieldset>
            </section>

            <section className='demo-component-section'>
              <i id='icon-toggle' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Icon Toggle
                <a href='#' className='demo-component-section__permalink' title='Permalink to the theme demo for the icon toggle component'>#</a>
              </h3>

              <div className='demo-icon-toggle-row'>
                <div className='mdc-elevation--z2 demo-icon-toggle-tile'>
                  <h4 className='mdc-typography--subtitle1'>Enabled</h4>

                  <i className='mdc-icon-toggle mdc-icon-toggle--primary material-icons'
                     ref={this.initIconToggle}
                     role='button'
                     aria-label='Add to favorites'
                     aria-pressed='false'
                     tabIndex='0'
                     data-toggle-on={{'content': 'favorite', 'label': 'Remove From Favorites'}}
                     data-toggle-off={{'content': 'favorite_border', 'label': 'Add to Favorites'}}>
                    favorite_border
                  </i>
                </div>

                <div className='mdc-elevation--z2 demo-icon-toggle-tile'>
                  <h4 className='mdc-typography--subtitle1'>Disabled</h4>

                  <i className='mdc-icon-toggle mdc-icon-toggle--disabled material-icons'
                     ref={this.initIconToggle}
                     role='button'
                     aria-label='Add to favorites'
                     aria-pressed='false'
                     aria-disabled='true'
                     tabIndex='-1'
                     data-toggle-on={{'content': 'favorite', 'label': 'Remove From Favorites'}}
                     data-toggle-off={{'content': 'favorite_border', 'label': 'Add to Favorites'}}>
                    favorite_border
                  </i>
                </div>
              </div>
            </section>

            <section className='demo-component-section'>
              <i id='linear-progress' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Linear Progress
                <a href='#' className='demo-component-section__permalink' title='Permalink to the theme demo for the linear progress component'>#</a>
              </h3>

              <figure className='demo-linear-progress-row'>
                <figcaption className='mdc-typography--subtitle1'>Indeterminate</figcaption>
                <div role='progressbar' className='mdc-linear-progress mdc-linear-progress--indeterminate'>
                  <div className='mdc-linear-progress__buffering-dots'/>
                  <div className='mdc-linear-progress__buffer'/>
                  <div className='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
                    <span className='mdc-linear-progress__bar-inner'/>
                  </div>
                  <div className='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
                    <span className='mdc-linear-progress__bar-inner'/>
                  </div>
                </div>
              </figure>

              <figure className='demo-linear-progress-row'>
                <figcaption className='mdc-typography--subtitle1'>Buffer</figcaption>
                <div role='progressbar' className='mdc-linear-progress' data-buffer='true'>
                  <div className='mdc-linear-progress__buffering-dots'/>
                  <div className='mdc-linear-progress__buffer'/>
                  <div className='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
                    <span className='mdc-linear-progress__bar-inner'/>
                  </div>
                  <div className='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
                    <span className='mdc-linear-progress__bar-inner'/>
                  </div>
                </div>
              </figure>
            </section>

            <section className='demo-component-section'>
              <i id='radio' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Radio Button
              </h3>

              <figure className='demo-radio-group'>
                <div className='mdc-form-field demo-radio-form-field'>
                  <div className='mdc-radio demo-radio'>
                    <input className='mdc-radio__native-control' type='radio' id='demo-radio-1' defaultChecked name='demo-radio-group-1' />
                    <div className='mdc-radio__background'>
                      <div className='mdc-radio__outer-circle'/>
                      <div className='mdc-radio__inner-circle'/>
                    </div>
                  </div>
                  <label id='demo-radio-1-label' htmlFor='demo-radio-1'>Enabled 1</label>
                </div>
                <div className='mdc-form-field demo-radio-form-field'>
                  <div className='mdc-radio demo-radio'>
                    <input className='mdc-radio__native-control' type='radio' id='demo-radio-2' name='demo-radio-group-1' />
                    <div className='mdc-radio__background'>
                      <div className='mdc-radio__outer-circle'/>
                      <div className='mdc-radio__inner-circle'/>
                    </div>
                  </div>
                  <label id='demo-radio-2-label' htmlFor='demo-radio-2'>Enabled 2</label>
                </div>
              </figure>

              <figure className='demo-radio-group'>
                <div className='mdc-form-field demo-radio-form-field'>
                  <div className='mdc-radio mdc-radio--disabled demo-radio'>
                    <input className='mdc-radio__native-control' type='radio' id='demo-radio-7' disabled defaultChecked name='demo-radio-group-4'/>
                    <div className='mdc-radio__background'>
                      <div className='mdc-radio__outer-circle'/>
                      <div className='mdc-radio__inner-circle'/>
                    </div>
                  </div>
                  <label id='demo-radio-7-label' htmlFor='demo-radio-7'>Disabled 1</label>
                </div>
                <div className='mdc-form-field demo-radio-form-field'>
                  <div className='mdc-radio mdc-radio--disabled demo-radio'>
                    <input className='mdc-radio__native-control' type='radio' id='demo-radio-8' disabled name='demo-radio-group-4' />
                    <div className='mdc-radio__background'>
                      <div className='mdc-radio__outer-circle'/>
                      <div className='mdc-radio__inner-circle'/>
                    </div>
                  </div>
                  <label id='demo-radio-8-label' htmlFor='demo-radio-8'>Disabled 2</label>
                </div>
              </figure>
            </section>

            <section className='demo-component-section'>
              <i id='select' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Select
              </h3>

              <div className='mdc-select' ref={this.initSelect}>
                <select className='mdc-select__native-control' id='basic-select'>
                  <option value='grains' defaultValue aria-selected='true'>
                    Bread, Cereal, Rice, and Pasta
                  </option>
                  <option value='vegetables' disabled>
                    Vegetables
                  </option>
                  <option value='fruit'>
                    Fruit
                  </option>
                  <option value='dairy'>
                    Milk, Yogurt, and Cheese
                  </option>
                  <option value='meat'>
                    Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                  </option>
                  <option value='fats'>
                    Fats, Oils, and Sweets
                  </option>
                </select>
                <label className='mdc-floating-label mdc-floating-label--float-above' htmlFor='basic-select'>Pick a Food Group</label>
                <div className='mdc-line-ripple'/>
              </div>
            </section>

            <section className='demo-component-section'>
              <i id='slider' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Slider
              </h3>

              <div className='mdc-slider mdc-slider--discrete mdc-slider--display-markers' ref={this.initSlider}
                   tabIndex='0' role='slider'
                   aria-valuemin='0' aria-valuemax='100' aria-valuenow='30'
                   aria-labelledby='example-ds-marker-label'>
                <div className='mdc-slider__track-container'>
                  <div className='mdc-slider__track'/>
                  <div className='mdc-slider__track-marker-container'/>
                </div>
                <div className='mdc-slider__thumb-container'>
                  <div className='mdc-slider__pin'>
                    <span className='mdc-slider__pin-value-marker'>30</span>
                  </div>
                  <svg className='mdc-slider__thumb' width='21' height='21'>
                    <circle cx='10.5' cy='10.5' r='7.875'/>
                  </svg>
                  <div className='mdc-slider__focus-ring'/>
                </div>
              </div>
            </section>

            <section className='demo-component-section'>
              <i id='switch' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Switch
              </h3>

              <fieldset className='demo-switch-wrapper'>
                <div className='mdc-switch'>
                  <input type='checkbox' id='basic-switch' className='mdc-switch__native-control' role='switch' defaultChecked aria-checked='true'/>
                  <div className='mdc-switch__background'>
                    <div className='mdc-switch__knob'/>
                  </div>
                </div>
                <label htmlFor='basic-switch' className='mdc-switch-label'>off/on</label>
              </fieldset>
              <fieldset className='demo-switch-wrapper' disabled>
                <div className='mdc-switch'>
                  <input type='checkbox' id='disabled-switch' className='mdc-switch__native-control' role='switch' defaultChecked aria-checked='true'/>
                  <div className='mdc-switch__background'>
                    <div className='mdc-switch__knob'/>
                  </div>
                </div>
                <label htmlFor='disabled-switch' className='mdc-switch-label'>disabled</label>
              </fieldset>
            </section>

            <section className='demo-component-section'>
              <i id='text-field' className='demo-anchor-with-toolbar-offset'/>
              <h3 className='mdc-typography--headline5 demo-component-section__heading'>
                Text Field
              </h3>

              <figure className='demo-text-field-wrapper'>
                <div className='mdc-text-field demo-text-field' ref={this.initTextField}>
                  <input type='text' className='mdc-text-field__input'
                         id='demo-text-field-default'
                         aria-controls='demo-text-field-default-helper-text'
                         aria-describedby='demo-text-field-default-helper-text'
                         autoComplete='email'/>
                  <label htmlFor='demo-text-field-default' className='mdc-floating-label'>Name (optional)</label>
                  <div className='mdc-line-ripple' />
                </div>
                <p className='mdc-text-field-helper-text' id='demo-text-field-default-helper-text'
                   aria-hidden='true'>
                  Helper text
                </p>
              </figure>
              <figure className='demo-text-field-wrapper'>
                <div className='mdc-text-field demo-text-field' ref={this.initTextField}>
                  <input type='email' className='mdc-text-field__input'
                         id='demo-text-field-required'
                         aria-controls='demo-text-field-required-helper-text'
                         aria-describedby='demo-text-field-required-helper-text'
                         autoComplete='email'
                         required />
                  <label htmlFor='demo-text-field-required' className='mdc-floating-label'>Email (required)</label>
                  <div className='mdc-line-ripple'/>
                </div>
                <p className='mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg' id='demo-text-field-required-helper-text'>
                  A valid email address is required
                </p>
              </figure>
              <figure className='demo-text-field-wrapper'>
                <div className='mdc-text-field mdc-text-field--box demo-text-field' ref={this.initTextField}>
                  <input type='text' className='mdc-text-field__input'
                         id='demo-text-field-box'
                         aria-controls='demo-text-field-box-helper-text'
                         aria-describedby='demo-text-field-box-helper-text' />
                  <label htmlFor='demo-text-field-box' className='mdc-floating-label'>With <code>--box</code> modifier</label>
                  <div className='mdc-line-ripple'/>
                </div>
                <p className='mdc-text-field-helper-text' id='demo-text-field-box-helper-text'
                   aria-hidden='true'>
                  Helper text
                </p>
              </figure>
            </section>
          </main>

        </div>
  );
  }
  }

  export default ThemeCatalog;
