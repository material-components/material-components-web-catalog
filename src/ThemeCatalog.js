import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCCheckbox} from '@material/checkbox';
import {MDCIconButtonToggle} from '@material/icon-button';
import {MDCLinearProgress} from '@material/linear-progress';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';
import {MDCSlider} from '@material/slider';
import {MDCTextField} from '@material/textfield';
import {imagePath} from './constants';

import './styles/ThemeCatalog.scss';

const ThemeCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<ThemeHero />}
      title='Theme'
      description='Color in Material Design is inspired by bold hues juxtaposed with muted environments, deep shadows, and bright highlights.'
      designLink='https://material.io/go/design-color-theming'
      docsLink='https://material.io/components/web/catalog/theme/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme'
      demos={<ThemeDemos />}
    />
  );
}

class ThemeHero extends Component {
  componentInstances = [];
  themeStylesheetFilename = null;
  initRipple = ele => ele && this.componentInstances.push(new MDCRipple(ele));

  componentWillMount() {
    if(!this.themeStylesheetFilename) {
      // Retrieve the location of the compiled theme.css file
      fetch('asset-manifest.json')
          .then(result => result.json())
          .then(data => this.themeStylesheetFilename = data['theme.css'])
          .then(() => {
            if (document.getElementById(this.themeStylesheetFilename)
                === null) {
              this.appendThemeStyle();
            }
          });
    } else {
      this.appendThemeStyle();
    }
  }

  /**
   * Adds the theme stylesheet to the document head to override the
   * catalog theme.
   */
  appendThemeStyle() {
    if(this.themeStylesheetFilename) {
      const styles = document.createElement('link');
      styles.setAttribute('rel', 'stylesheet');
      styles.setAttribute('type', 'text/css');
      styles.setAttribute('id', 'themeStylesheet');
      styles.setAttribute('href', this.themeStylesheetFilename);
      document.getElementsByTagName('head')[0].appendChild(styles);
    }
  }

  componentWillUnmount() {
    this.componentInstances.forEach(ripple => ripple.destroy());

    // Remove the theme stylesheet if present
    const themeStylesheetElement = document.getElementById('themeStyleSheet');
    if (themeStylesheetElement) {
      document.head.removeChild(themeStylesheetElement);
    }
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
        <button className='hero-button mdc-button mdc-button--outlined' ref={this.initRipple}>
          Outlined
        </button>
      </div>
    );
  }
}

class ThemeDemos extends Component {
  componentInstances = [];

  // Component specific initialization functions
  initCheckbox = ele => ele && this.componentInstances.push(
      new MDCCheckbox(ele));
  initIconToggle = ele => ele && this.componentInstances.push(
      new MDCIconButtonToggle(ele));
  initLinearProgress = ele => {
    if (!ele) return;
    const indicator = new MDCLinearProgress(ele);
    indicator.progress = 0.5;
    indicator.buffer = 0.75;
    this.componentInstances.push(indicator);
  };
  initRipple = buttonEl => buttonEl && this.componentInstances.push(
      new MDCRipple(buttonEl));
  initSelect = ele => ele && this.componentInstances.push(new MDCSelect(ele));
  initSlider = ele => ele && this.componentInstances.push(new MDCSlider(ele));
  initTextField = ele => ele && this.componentInstances.push(
      new MDCTextField(ele));

  componentWillUnmount() {
    this.componentInstances.forEach(component => component.destroy());
  }

  render() {
    return (
        <div className='theme-demo mdc-typography'>
          <main className='mdc-toolbar-fixed-adjust demo-main'>
            <h2 className='mdc-typography--headline4'>
              Baseline Colors
            </h2>

            {this.demoThemeColors()}

            <h2 className='mdc-typography--headline4'>
              Baseline Component Stickersheet
            </h2>

            {this.demoButton()}
            {this.demoCard()}
            {this.demoCheckbox()}
            {this.demoDialog()}
            {this.demoDrawer()}
            {this.demoFab()}
            {this.demoIconToggle()}
            {this.demoLinearProgress()}
            {this.demoRadioButton()}
            {this.demoSelect()}
            {this.demoSlider()}
            {this.demoSwitch()}
            {this.demoTextFields()}
          </main>

        </div>
    );
  }

  demoButton() {
    return (
        <ThemeDemoSection title='Button'>
          <fieldset className='demo-fieldset--button'>
            <legend className='mdc-typography--subtitle1'>Enabled</legend>

            <div>
              <button className='mdc-button' ref={this.initRipple}>
                Text
              </button>
              <button className='mdc-button mdc-button--raised'
                      ref={this.initRipple}>
                Raised
              </button>
              <button className='mdc-button mdc-button--outlined'
                      ref={this.initRipple}>
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
              <button className='mdc-button mdc-button--raised'
                      ref={this.initRipple}>
                Raised
              </button>
              <button className='mdc-button mdc-button--outlined'
                      ref={this.initRipple}>
                Outlined
              </button>
            </div>
          </fieldset>
        </ThemeDemoSection>
    )
  }

  demoCard() {
    return (
        <ThemeDemoSection title='Card'>
          <div className='demo-card-wrapper'>
            <div className='mdc-card'>
              <div className='mdc-card__media mdc-card__media--16-9 demo-card__media'
                   style={{backgroundImage: `url('${imagePath}/photos/3x2/2.jpg')`}} />
              <div className='mdc-card__actions'>
                <div className='mdc-card__action-buttons'>
                  <button
                      className='mdc-button mdc-card__action mdc-card__action--button'
                      ref={this.initRipple}>Read
                  </button>
                  <button
                      className='mdc-button mdc-card__action mdc-card__action--button'
                      ref={this.initRipple}>Bookmark
                  </button>
                </div>
                <div className='mdc-card__action-icons'>
                  <button className='mdc-icon-button mdc-card__action mdc-card__action--icon'
                     ref={this.initIconToggle}
                     aria-pressed='false'
                     aria-label='Add to favorites'
                     title='Add to favorites'>
                    <i className='material-icons mdc-icon-button__icon mdc-icon-button__icon--on'>favorite</i>
                    <i className='material-icons mdc-icon-button__icon'>favorite_border</i>
                  </button>
                  <button className='mdc-icon-button material-icons mdc-card__action mdc-card__action--icon'
                     data-mdc-ripple-is-unbounded
                     title='Share'
                     ref={this.initRipple}>share</button>
                  <button className='mdc-icon-button material-icons mdc-card__action mdc-card__action--icon'
                     data-mdc-ripple-is-unbounded
                     title='More options'
                     ref={this.initRipple}>more_vert</button>
                </div>
              </div>
            </div>
          </div>
        </ThemeDemoSection>
    );
  }

  demoCheckbox() {
    return (
        <ThemeDemoSection title='Checkbox'>
          <div className='demo-checkbox-row'>
            <div
                className='mdc-form-field demo-checkbox-wrapper'>
              <div className='mdc-checkbox demo-checkbox'
                   ref={this.initCheckbox}>
                <input type='checkbox'
                       id='enabled-checkbox'
                       className='mdc-checkbox__native-control'/>
                <div className='mdc-checkbox__background'>
                  <svg className='mdc-checkbox__checkmark'
                       viewBox='0 0 24 24'>
                    <path className='mdc-checkbox__checkmark-path'
                          fill='none'
                          d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
                  </svg>
                  <div className='mdc-checkbox__mixedmark'/>
                </div>
              </div>
              <label htmlFor='enabled-checkbox'
                     id='enabled-checkbox-label'>Enabled</label>
            </div>

            <div
                className='mdc-form-field demo-checkbox-wrapper'>
              <div className='mdc-checkbox demo-checkbox'
                   ref={this.initCheckbox}>
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
              <label htmlFor='indeterminate-checkbox'
                     id='indeterminate-checkbox-label'>Indeterminate</label>
            </div>

            <div
                className='mdc-form-field demo-checkbox-wrapper'>
              <div
                  className='mdc-checkbox mdc-checkbox--disabled demo-checkbox'
                  ref={this.initCheckbox}>
                <input type='checkbox'
                       id='disabled-checkbox'
                       className='mdc-checkbox__native-control'
                       disabled/>
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
              <label htmlFor='disabled-checkbox'
                     id='disabled-checkbox-label'>Disabled</label>
            </div>

          </div>
        </ThemeDemoSection>
    )
  }

  demoDialog() {
    return (
        <ThemeDemoSection title='Dialog'>

          <aside className='mdc-dialog mdc-dialog--open demo-dialog' style={{'position': 'relative'}}>
            <div className='mdc-dialog__surface'>
              <header className='mdc-dialog__header'>
                <h3 id='mdc-dialog-default-label'
                    className='mdc-dialog__header__title'>
                  Fire photon torpedoes?
                </h3>
              </header>
              <section id='mdc-dialog-default-description'
                       className='mdc-dialog__body'>
                Shields at 60% and falling, captain.
              </section>
              <footer className='mdc-dialog__footer'>
                <button type='button'
                        className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel'
                        ref={this.initRipple}>Belay that order
                </button>
                <button type='button'
                        className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept'
                        ref={this.initRipple}>Make it so!
                </button>
              </footer>
            </div>
          </aside>
        </ThemeDemoSection>
    )
  }

  demoDrawer() {
    return (
        <ThemeDemoSection title='Drawer'>
          <p className='mdc-typography--body1'>Tap the menu icon (<i
              className='material-icons demo-drawer-toggle'>menu</i>) in the
            toolbar at the top of the page to open the drawer.</p>
        </ThemeDemoSection>
    )
  }

  demoFab() {
    return (
        <ThemeDemoSection title='Floating Action Button (FAB)'>

          <fieldset>
            <div className='demo-fab-row'>
              <figure className='demo-fab-tile'>
                <figcaption>
                  <div className='demo-fab-tile__title'>Default</div>
                  <div
                      className='demo-fab-tile__snippet mdc-typography--body1'>Secondary
                    theme color
                  </div>
                </figcaption>
                <button className='mdc-fab material-icons demo-fab'
                        aria-label='Favorite' ref={this.initRipple}>
                <span className='mdc-fab__icon'>
                  favorite_border
                </span>
                </button>
              </figure>
              <figure className='demo-fab-tile'>
                <figcaption>
                  <div className='demo-fab-tile__title'>Mini</div>
                  <div
                      className='demo-fab-tile__snippet mdc-typography--body1'>
                    <code>mdc-fab--mini</code></div>
                </figcaption>
                <button
                    className='mdc-fab mdc-fab--mini material-icons demo-fab'
                    aria-label='Favorite' ref={this.initRipple}>
                <span className='mdc-fab__icon'>
                  favorite_border
                </span>
                </button>
              </figure>
            </div>
          </fieldset>
        </ThemeDemoSection>
    )
  }

  demoIconToggle() {
    return (
        <ThemeDemoSection title='Icon Button Toggle'>

          <div className='demo-icon-button-row'>
            <div className='mdc-elevation--z2 demo-icon-button-tile'>
              <h4 className='mdc-typography--subtitle1'>Enabled</h4>

              <button className='mdc-icon-button demo-icon-button-toggle'
                 ref={this.initIconToggle}
                 aria-label='Add to favorites'
                 aria-pressed='false'>
                <i className='material-icons mdc-icon-button__icon mdc-icon-button__icon--on'>favorite</i>
                <i className='material-icons mdc-icon-button__icon'>favorite_border</i>
              </button>
            </div>

            <div className='mdc-elevation--z2 demo-icon-button-tile'>
              <h4 className='mdc-typography--subtitle1'>Disabled</h4>

              <button className='mdc-icon-button'
                 ref={this.initIconToggle}
                 disabled
                 aria-label='Add to favorites'
                 aria-pressed='false'>
                <i className='material-icons mdc-icon-button__icon mdc-icon-button__icon--on'>favorite</i>
                <i className='material-icons mdc-icon-button__icon'>favorite_border</i>
              </button>
            </div>
          </div>
        </ThemeDemoSection>
    )
  }

  demoLinearProgress() {
    return (
        <ThemeDemoSection title='Linear Progress'>

          <figure className='demo-linear-progress-row'>
            <figcaption
                className='mdc-typography--subtitle1'>Indeterminate
            </figcaption>
            <div role='progressbar'
                 className='mdc-linear-progress mdc-linear-progress--indeterminate'
                 ref={this.initLinearProgress}>
              <div className='mdc-linear-progress__buffering-dots'/>
              <div className='mdc-linear-progress__buffer'/>
              <div
                  className='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
                <span className='mdc-linear-progress__bar-inner'/>
              </div>
              <div
                  className='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
                <span className='mdc-linear-progress__bar-inner'/>
              </div>
            </div>
          </figure>

          <figure className='demo-linear-progress-row'>
            <figcaption className='mdc-typography--subtitle1'>Buffer
            </figcaption>
            <div role='progressbar' className='mdc-linear-progress'
                 ref={this.initLinearProgress}>
              <div className='mdc-linear-progress__buffering-dots'/>
              <div className='mdc-linear-progress__buffer'/>
              <div
                  className='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
                <span className='mdc-linear-progress__bar-inner'/>
              </div>
              <div
                  className='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
                <span className='mdc-linear-progress__bar-inner'/>
              </div>
            </div>
          </figure>
        </ThemeDemoSection>
    )
  }

  demoRadioButton() {
    return (
        <ThemeDemoSection title='Radio Buttons'>

          <figure className='demo-radio-group'>
            <div className='mdc-form-field demo-radio-form-field'>
              <div className='mdc-radio demo-radio'>
                <input className='mdc-radio__native-control' type='radio'
                       id='demo-radio-1' defaultChecked
                       name='demo-radio-group-1'/>
                <div className='mdc-radio__background'>
                  <div className='mdc-radio__outer-circle'/>
                  <div className='mdc-radio__inner-circle'/>
                </div>
              </div>
              <label id='demo-radio-1-label' htmlFor='demo-radio-1'>Enabled
                1</label>
            </div>
            <div className='mdc-form-field demo-radio-form-field'>
              <div className='mdc-radio demo-radio'>
                <input className='mdc-radio__native-control' type='radio'
                       id='demo-radio-2' name='demo-radio-group-1'/>
                <div className='mdc-radio__background'>
                  <div className='mdc-radio__outer-circle'/>
                  <div className='mdc-radio__inner-circle'/>
                </div>
              </div>
              <label id='demo-radio-2-label' htmlFor='demo-radio-2'>Enabled
                2</label>
            </div>
          </figure>

          <figure className='demo-radio-group'>
            <div className='mdc-form-field demo-radio-form-field'>
              <div className='mdc-radio mdc-radio--disabled demo-radio'>
                <input className='mdc-radio__native-control' type='radio'
                       id='demo-radio-7' disabled defaultChecked
                       name='demo-radio-group-4'/>
                <div className='mdc-radio__background'>
                  <div className='mdc-radio__outer-circle'/>
                  <div className='mdc-radio__inner-circle'/>
                </div>
              </div>
              <label id='demo-radio-7-label' htmlFor='demo-radio-7'>Disabled
                1</label>
            </div>
            <div className='mdc-form-field demo-radio-form-field'>
              <div className='mdc-radio mdc-radio--disabled demo-radio'>
                <input className='mdc-radio__native-control' type='radio'
                       id='demo-radio-8' disabled
                       name='demo-radio-group-4'/>
                <div className='mdc-radio__background'>
                  <div className='mdc-radio__outer-circle'/>
                  <div className='mdc-radio__inner-circle'/>
                </div>
              </div>
              <label id='demo-radio-8-label' htmlFor='demo-radio-8'>Disabled
                2</label>
            </div>
          </figure>
        </ThemeDemoSection>

    )
  }

  demoSelect() {
    return (
        <ThemeDemoSection title='Select'>
          <div className='mdc-select' ref={this.initSelect}>
            <select className='mdc-select__native-control'
                    id='basic-select'>
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
            <label
                className='mdc-floating-label mdc-floating-label--float-above'
                htmlFor='basic-select'>Pick a Food Group</label>
            <div className='mdc-line-ripple'/>
          </div>
        </ThemeDemoSection>
    )
  }

  demoSlider() {
    return (
        <ThemeDemoSection title='Slider'>
          <div
              className='mdc-slider mdc-slider--discrete mdc-slider--display-markers'
              ref={this.initSlider}
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
        </ThemeDemoSection>
    )
  }

  demoSwitch() {
    return (
        <ThemeDemoSection title='Switch'>

          <fieldset className='demo-switch-wrapper'>
            <div className='mdc-switch'>
              <input type='checkbox' id='basic-switch'
                     className='mdc-switch__native-control' role='switch'
                     defaultChecked aria-checked='true'/>
              <div className='mdc-switch__background'>
                <div className='mdc-switch__knob'/>
              </div>
            </div>
            <label htmlFor='basic-switch'
                   className='mdc-switch-label'>off/on</label>
          </fieldset>
          <fieldset className='demo-switch-wrapper' disabled>
            <div className='mdc-switch'>
              <input type='checkbox' id='disabled-switch'
                     className='mdc-switch__native-control' role='switch'
                     defaultChecked aria-checked='true'/>
              <div className='mdc-switch__background'>
                <div className='mdc-switch__knob'/>
              </div>
            </div>
            <label htmlFor='disabled-switch'
                   className='mdc-switch-label'>disabled</label>
          </fieldset>
        </ThemeDemoSection>
    );
  }

  demoTextFields() {
    return (
        <ThemeDemoSection title='Text Field'>
          <figure className='demo-text-field-wrapper'>
            <div className='mdc-text-field demo-text-field'
                 ref={this.initTextField}>
              <input type='text' className='mdc-text-field__input'
                     id='demo-text-field-default'
                     aria-controls='demo-text-field-default-helper-text'
                     aria-describedby='demo-text-field-default-helper-text'
                     autoComplete='email'/>
              <label htmlFor='demo-text-field-default'
                     className='mdc-floating-label'>Name (optional)</label>
              <div className='mdc-line-ripple'/>
            </div>
            <p className='mdc-text-field-helper-text'
               id='demo-text-field-default-helper-text'
               aria-hidden='true'>
              Helper text
            </p>
          </figure>
          <figure className='demo-text-field-wrapper'>
            <div className='mdc-text-field demo-text-field'
                 ref={this.initTextField}>
              <input type='email' className='mdc-text-field__input'
                     id='demo-text-field-required'
                     aria-controls='demo-text-field-required-helper-text'
                     aria-describedby='demo-text-field-required-helper-text'
                     autoComplete='email'
                     required/>
              <label htmlFor='demo-text-field-required'
                     className='mdc-floating-label'>Email (required)</label>
              <div className='mdc-line-ripple'/>
            </div>
            <p className='mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg'
               id='demo-text-field-required-helper-text'>
              A valid email address is required
            </p>
          </figure>
          <figure className='demo-text-field-wrapper'>
            <div className='mdc-text-field mdc-text-field--outlined demo-text-field'
                 ref={this.initTextField}>
              <input type='text' className='mdc-text-field__input'
                     id='demo-text-field-outlined'
                     aria-controls='demo-text-field-outlined-helper-text'
                     aria-describedby='demo-text-field-outlined-helper-text'/>
              <label htmlFor='demo-text-field-outlined'
                     className='mdc-floating-label'>With <code>--outlined</code> modifier</label>
              <div className='mdc-notched-outline'>
                <svg>
                  <path className='mdc-notched-outline__path'></path>
                </svg>
              </div>
              <div className='mdc-notched-outline__idle'></div>
            </div>
            <p className='mdc-text-field-helper-text'
               id='demo-text-field-outlined-helper-text'
               aria-hidden='true'>
              Helper text
            </p>
          </figure>
        </ThemeDemoSection>
    );
  }

  demoThemeColors() {
    return (
        <ThemeDemoSection title='CSS Classes'>
          <div className='demo-theme-color-section'>
            <div className='demo-theme-color-section__row'>
              <ColorDemoWrapper title='Theme colors as text'>

                <div className='demo-theme-color-group'>
                  <div className='demo-theme-color-swatches'>
                    <div
                        className='demo-theme-color-swatch demo-theme-color-swatch--elevated mdc-theme--primary mdc-typography--body2'>Primary
                    </div>
                  </div>
                  <div className='demo-theme-color-swatches'>
                    <div
                        className='demo-theme-color-swatch demo-theme-color-swatch--elevated mdc-theme--secondary mdc-typography--body2'>Secondary
                    </div>
                  </div>
                </div>
              </ColorDemoWrapper>

              <ColorDemoWrapper title='Theme colors as background'>

                <div className='demo-theme-color-group'>
                  <div className='demo-theme-color-swatches'>
                    <div
                        className='demo-theme-color-swatch mdc-theme--primary-bg mdc-theme--on-primary'>Primary
                    </div>
                  </div>
                  <div className='demo-theme-color-swatches'>
                    <div
                        className='demo-theme-color-swatch mdc-theme--secondary-bg mdc-theme--on-secondary'>Secondary
                    </div>
                  </div>
                  <div className='demo-theme-color-swatches'>
                    <div
                        className='demo-theme-color-swatch demo-theme-color-swatch--elevated mdc-theme--background mdc-theme--text-primary-on-background'>Background
                    </div>
                  </div>
                </div>
              </ColorDemoWrapper>
            </div>
          </div>
          <div className='demo-theme-color-section'>
            <div className='demo-theme-color-section_row'>
              <ColorDemoWrapper title='Text on background'>
                <ThemeTextColors type='background' className='mdc-theme--background'/>
              </ColorDemoWrapper>
            </div>

            <div className='demo-theme-color-section__row'>
              <ColorDemoWrapper title='Text on primary'>
                <div className='demo-theme-color-group'>
                  <div
                      className='demo-theme-text-row mdc-theme--primary-bg mdc-typography--body2'>
                    <span
                        className='demo-theme-text-style mdc-theme--on-primary'>Text</span>
                    <span
                        className='demo-theme-text-style mdc-theme--on-primary material-icons'>favorite</span>
                  </div>
                </div>
              </ColorDemoWrapper>

              <ColorDemoWrapper title='Text on secondary'>
                <div className='demo-theme-color-group'>
                  <div
                      className='demo-theme-text-row mdc-theme--secondary-bg mdc-typography--body2'>
                    <span
                        className='demo-theme-text-style mdc-theme--on-secondary'>Text</span>
                    <span
                        className='demo-theme-text-style mdc-theme--on-secondary material-icons'>favorite</span>
                  </div>
                </div>
              </ColorDemoWrapper>
            </div>

            <div className='demo-theme-color-section__row'>
              <ColorDemoWrapper title='Text on user-defined light background'>
                <ThemeTextColors type='light' className='demo-theme-bg--custom-light'/>
              </ColorDemoWrapper>

              <ColorDemoWrapper title='Text on user-defined dark background'>
                  <ThemeTextColors type='dark' className='demo-theme-bg--custom-dark'/>
              </ColorDemoWrapper>
            </div>
          </div>
        </ThemeDemoSection>
    )
  }

}

class ThemeDemoSection extends Component {
  render()
  {
    return (
        <section className='demo-component-section'>
          <h3 className='mdc-typography--headline5 demo-component-section__heading'>
            {this.props.title}
          </h3>

          {this.props.children}
        </section>
    )
  }
};

class ThemeTextColors extends Component {
  render() {
    return (
        <div className='demo-theme-color-group'>
          <div
              className={`demo-theme-text-row mdc-typography--body2 ${this.props.className}`}>
          <span
              className={`demo-theme-text-style mdc-theme--text-primary-on-${this.props.type}`}>Primary</span>
            <span
                className={`demo-theme-text-style mdc-theme--text-secondary-on-${this.props.type}`}>Secondary</span>
            <span
                className={`demo-theme-text-style mdc-theme--text-hint-on-${this.props.type}`}>Hint</span>
            <span
                className={`demo-theme-text-style mdc-theme--text-disabled-on-${this.props.type}`}>Disabled</span>
            <span
                className={`demo-theme-text-style material-icons mdc-theme--text-icon-on-${this.props.type}`}>favorite</span>
          </div>
        </div>
    )
  }
}

class ColorDemoWrapper extends Component {
  render() {
    return (
        <fieldset className='demo-fieldset--color'>
          <legend className='mdc-typography--subtitle1'>
            {this.props.title}
          </legend>
          {this.props.children}
        </fieldset>
    )

  }
}

export default ThemeCatalog;
