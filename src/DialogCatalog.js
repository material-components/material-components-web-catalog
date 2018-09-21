import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCDialog} from '@material/dialog/dist/mdc.dialog';
import {MDCList} from '@material/list/dist/mdc.list';

import './styles/DialogCatalog.scss';

const DialogCatalog = () => {
  return (
    <ComponentCatalogPanel
      hero={<DialogHero />}
      title='Dialog'
      description='Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.'
      designLink='https://material.io/go/design-dialogs'
      docsLink='https://material.io/components/web/catalog/dialogs/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog'
      demos={<DialogDemos />}
    />
  );
};

class DialogHero extends Component {
  initDialog = (dialogEl) => {
    if (!dialogEl) return;
    this.dialogEl = dialogEl;
    this.dialog = new MDCDialog(dialogEl);
  };

  componentWillUnmount() {
    this.dialog.destroy();
  }

  render() {
    return (
      <div>
        <div id='my-mdc-dialog'
          className='mdc-dialog mdc-dialog--open hero-demo'
          role='alertdialog'
          aria-labelledby='my-mdc-dialog-label'
          aria-describedby='my-mdc-dialog-description'
          ref={this.initDialog}
          >
          <div className='mdc-dialog__container'>
            <div className='mdc-dialog__surface'>
              <h2 id='my-mdc-dialog-label' className='mdc-dialog__title'>Get this party started?</h2>
              <section id='my-mdc-dialog-description' className='mdc-dialog__content'>
                Turn up the jams and have a good time.
              </section>
              <footer className='mdc-dialog__actions'>
                <button type='button' className='mdc-button mdc-dialog__button'>Decline</button>
                <button type='button' className='mdc-button mdc-dialog__button'>Accept</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class DialogDemos extends Component {
  state = {
    isAlertOpen: false,
    isSimpleOpen: false,
    isConfirmationOpen: false,
    isScrollableOpen: false,
    hasBeenOpened: false,
    accepted: false,
  };

  handleAlertClick_ = this.handleAlertClick.bind(this);
  handleSimpleClick_ = this.handleSimpleClick.bind(this);
  handleConfirmationClick_ = this.handleConfirmationClick.bind(this);
  handleScrollableClick_ = this.handleScrollableClick.bind(this);
  handleClosing_ = this.handleClosing.bind(this);

  handleAlertClick() {
    this.setState({isAlertOpen: true});
  }

  handleSimpleClick() {
    this.setState({isSimpleOpen: true});
  }

  handleConfirmationClick() {
    this.setState({isConfirmationOpen: true});
  }

  handleScrollableClick() {
    this.setState({isScrollableOpen: true});
  }

  handleClosing(event) {
    this.setState({
      isAlertOpen: false,
      isSimpleOpen: false,
      isConfirmationOpen: false,
      isScrollableOpen: false,
      accepted: event.detail.action !== 'close',
      hasBeenOpened: true,
    });
  }

  renderMessage() {
    if (this.state.hasBeenOpened) {
      return <p className='mdc-typography--body1'>
        {this.state.accepted
          ? 'Accepted, thanks!'
          : 'Declined... Maybe next time?'
        }
      </p>
    }
  }

  render() {
    return (
      <div>
        <AlertDialog open={this.state.isAlertOpen} handleClosing={this.handleClosing_}/>
        <SimpleDialog open={this.state.isSimpleOpen} handleClosing={this.handleClosing_}/>
        <ConfirmationDialog open={this.state.isConfirmationOpen} handleClosing={this.handleClosing_}/>
        <ScrollableDialog open={this.state.isScrollableOpen} handleClosing={this.handleClosing_}/>
        <button className='mdc-button' onClick={this.handleAlertClick_}>Alert</button>
        <button className='mdc-button' onClick={this.handleSimpleClick_}>Simple</button>
        <button className='mdc-button' onClick={this.handleConfirmationClick_}>Confirmation</button>
        <button className='mdc-button' onClick={this.handleScrollableClick_}>Scrollable</button>
        {this.renderMessage()}
      </div>
    )
  }
}

class AlertDialog extends Component {
  handleClosing_ = this.handleClosing.bind(this);
  initDialog = (dialogEl) => {
    if (!dialogEl) return;
    this.dialogEl = dialogEl;
    this.dialog = new MDCDialog(dialogEl);
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      // Handle transitioning from closed to open; dialog will handle closing itself
      this.dialog.open();
    }
  }

  componentDidMount() {
    this.dialogEl.addEventListener('MDCDialog:closing', this.handleClosing_);
  }

  componentWillUnmount() {
    this.dialogEl.removeEventListener('MDCDialog:closing', this.handleClosing_);
    this.dialog.destroy();
  }

  handleClosing(event) {
    this.props.handleClosing(event);
  }

  render() {
    return (
      <div>
        <div id='alert-dialog'
          className='mdc-dialog'
          role='alertdialog'
          aria-modal='true'
          aria-describedby='alert-dialog-description'
          ref={this.initDialog}>
          <div className='mdc-dialog__scrim'></div>
          <div className='mdc-dialog__container'>
            <div className='mdc-dialog__surface'>
              <section id='alert-dialog-description' className='mdc-dialog__content'>
                <p>Discard draft?</p>
              </section>
              <footer className='mdc-dialog__actions'>
                <button type='button' className='mdc-button mdc-dialog__button' data-mdc-dialog-action='close'>Cancel</button>
                <button type='button' className='mdc-button mdc-dialog__button' data-mdc-dialog-action='accept'>Discard</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SimpleDialog extends Component {
  handleClosing_ = this.handleClosing.bind(this);
  initDialog = (dialogEl) => {
    if (!dialogEl) return;
    this.dialogEl = dialogEl;
    this.dialog = new MDCDialog(dialogEl);
  };

  initList = (listEl) => {
    if (!listEl) return;
    this.listEl = listEl;
    this.list = new MDCList(listEl);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      // Handle transitioning from closed to open; dialog will handle closing itself
      this.dialog.open();
    }
  }

  componentDidMount() {
    this.dialogEl.addEventListener('MDCDialog:closing', this.handleClosing_);
  }

  componentWillUnmount() {
    this.dialogEl.removeEventListener('MDCDialog:closing', this.handleClosing_);
    this.dialog.destroy();
  }

  handleClosing(event) {
    this.props.handleClosing(event);
  }

  render() {
    return (
      <div>
        <div id='simple-dialog'
          className='mdc-dialog'
          role='alertdialog'
          aria-modal='true'
          aria-labelledby='simple-dialog-label'
          aria-describedby='simple-dialog-description'
          ref={this.initDialog}>
          <div className='mdc-dialog__scrim'></div>
          <div className='mdc-dialog__container'>
            <div className='mdc-dialog__surface'>
              <h2 id='simple-dialog-label' className='mdc-dialog__title'>Select an account</h2>
              <section id='simple-dialog-description' className='mdc-dialog__content'>
                {
                  // Inline `style='list-style-type: none'` needed to prevent rendering bug in Edge and IE 11.
                  // See https://stackoverflow.com/a/23717689/467582
                }
                <ul ref={this.initList} className='mdc-list mdc-list--avatar-list' style={{listStyleType: 'none'}}>
                  <li className='mdc-list-item' tabIndex='0' data-mdc-dialog-action='user1@example.com'>
                    <i className='material-icons mdc-list-item__graphic'>person</i>
                    <span className='test-list-item__label'>user1@example.com</span>
                  </li>
                  <li className='mdc-list-item' tabIndex='0' data-mdc-dialog-action='user2@example.com'>
                    <i className='material-icons mdc-list-item__graphic'>person</i>
                    <span className='test-list-item__label'>user2@example.com</span>
                  </li>
                  <li className='mdc-list-item' tabIndex='0' data-mdc-dialog-action='add'>
                    <i className='material-icons mdc-list-item__graphic'>add</i>
                    <span className='test-list-item__label'>Add account</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ConfirmationDialog extends Component {
  handleClosing_ = this.handleClosing.bind(this);
  initDialog = (dialogEl) => {
    if (!dialogEl) return;
    this.dialogEl = dialogEl;
    this.dialog = new MDCDialog(dialogEl);
  };

  initList = (listEl) => {
    if (!listEl) return;
    this.listEl = listEl;
    this.list = new MDCList(listEl);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      // Handle transitioning from closed to open; dialog will handle closing itself
      this.dialog.open();
    }
  }

  componentDidMount() {
    this.dialogEl.addEventListener('MDCDialog:closing', this.handleClosing_);
  }

  componentWillUnmount() {
    this.dialogEl.removeEventListener('MDCDialog:closing', this.handleClosing_);
    this.dialog.destroy();
  }

  handleClosing(event) {
    this.props.handleClosing(event);
  }

  render() {
    return (
      <div>
        <div id='confirmation-dialog'
          className='mdc-dialog'
          role='alertdialog'
          aria-modal='true'
          aria-labelledby='confirmation-dialog-label'
          aria-describedby='confirmation-dialog-description'
          ref={this.initDialog}>
          <div className='mdc-dialog__scrim'></div>
          <div className='mdc-dialog__container'>
            <div className='mdc-dialog__surface'>
              <h2 id='confirmation-dialog-label' className='mdc-dialog__title'>Phone ringtone</h2>
              <section id='confirmation-dialog-description' className='mdc-dialog__content'>
                {
                  // Inline `style='list-style-type: none'` needed to prevent rendering bug in Edge and IE 11.
                  // See https://stackoverflow.com/a/23717689/467582
                }
                <ul ref={this.initList} className='mdc-list' style={{listStyleType: 'none'}}>
                  <li className='mdc-list-item' tabIndex='0'>
                    <span className='mdc-list-item__graphic'>
                      <div className='mdc-radio'>
                        <input className='mdc-radio__native-control'
                               type='radio'
                               id='test-dialog-baseline-confirmation-radio-1'
                               name='test-dialog-baseline-confirmation-radio-group'
                               value='1'
                               defaultChecked/>
                        <div className='mdc-radio__background'>
                          <div className='mdc-radio__outer-circle'></div>
                          <div className='mdc-radio__inner-circle'></div>
                        </div>
                      </div>
                    </span>
                    <label className='test-list-item__label' htmlFor='test-dialog-baseline-confirmation-radio-1'>Never Gonna Give You Up</label>
                  </li>
                  <li className='mdc-list-item' tabIndex='0'>
                    <span className='mdc-list-item__graphic'>
                      <div className='mdc-radio'>
                        <input className='mdc-radio__native-control'
                               type='radio'
                               id='test-dialog-baseline-confirmation-radio-2'
                               name='test-dialog-baseline-confirmation-radio-group'
                               value='2'/>
                        <div className='mdc-radio__background'>
                          <div className='mdc-radio__outer-circle'></div>
                          <div className='mdc-radio__inner-circle'></div>
                        </div>
                      </div>
                    </span>
                    <label className='test-list-item__label' htmlFor='test-dialog-baseline-confirmation-radio-2'>Hot Cross Buns</label>
                  </li>
                  <li className='mdc-list-item' tabIndex='0'>
                    <span className='mdc-list-item__graphic'>
                      <div className='mdc-radio'>
                        <input className='mdc-radio__native-control'
                               type='radio'
                               id='test-dialog-baseline-confirmation-radio-3'
                               name='test-dialog-baseline-confirmation-radio-group'
                               value='3'/>
                        <div className='mdc-radio__background'>
                          <div className='mdc-radio__outer-circle'></div>
                          <div className='mdc-radio__inner-circle'></div>
                        </div>
                      </div>
                    </span>
                    <label className='test-list-item__label' htmlFor='test-dialog-baseline-confirmation-radio-3'>None</label>
                  </li>
                </ul>
              </section>
              <footer className='mdc-dialog__actions'>
                <button type='button' className='mdc-button mdc-dialog__button' data-mdc-dialog-action='close'>Cancel</button>
                <button type='button' className='mdc-button mdc-dialog__button' data-mdc-dialog-action='accept'>OK</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ScrollableDialog extends Component {
  handleClosing_ = this.handleClosing.bind(this);
  initDialog = (dialogEl) => {
    if (!dialogEl) return;
    this.dialogEl = dialogEl;
    this.dialog = new MDCDialog(dialogEl);
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      // Handle transitioning from closed to open; dialog will handle closing itself
      this.dialog.open();
    }
  }

  componentDidMount() {
    this.dialogEl.addEventListener('MDCDialog:closing', this.handleClosing_);
  }

  componentWillUnmount() {
    this.dialogEl.removeEventListener('MDCDialog:closing', this.handleClosing_);
    this.dialog.destroy();
  }

  handleClosing(event) {
    this.props.handleClosing(event);
  }

  render() {
    return (
      <div>
        <div id='mdc-dialog-with-list'
          className='mdc-dialog'
          role='alertdialog'
          aria-modal='true'
          aria-labelledby='mdc-dialog-with-list-label'
          aria-describedby='mdc-dialog-with-list-description'
          ref={this.initDialog}>
          <div className='mdc-dialog__scrim'></div>
          <div className='mdc-dialog__container'>
            <div className='mdc-dialog__surface'>
              <h2 id='mdc-dialog-with-list-label' className='mdc-dialog__title'>Read my novel?</h2>
              <section id='mdc-dialog-with-list-description' className='mdc-dialog__content'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis, repudiandae dignissimos et quam velit autem mollitia tenetur, eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.</p>
                <p>Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel, consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium, excepturi!</p>
                <p>Suscipit quam laboriosam animi quasi similique voluptatem molestiae voluptas sint itaque, labore eos, maiores harum qui totam libero amet nisi? Similique nihil veritatis aspernatur molestias accusantium, eius dolorum autem optio?</p>
                <p>Cum eligendi consequuntur voluptas. Repellat nisi commodi numquam aliquam quasi tenetur obcaecati, animi cum eum. Facilis esse cupiditate fugiat, quod eveniet, inventore impedit nam ex tempore harum laudantium provident assumenda.</p>
                <p>Ut iste aperiam excepturi rerum consectetur illo officiis quo sed sunt labore earum soluta tempore omnis a, enim maiores non? Facilis qui alias sunt veniam esse hic. Aut, ducimus aliquid!</p>
                <p>Qui quaerat saepe sunt earum nihil porro, sint quibusdam, id eos vero asperiores dolorem iusto dolore illo, architecto fuga? Voluptates distinctio eligendi nihil provident accusantium. Maxime ullam ratione officia non.</p>
                <p>Molestiae sapiente quae nulla. Voluptates quibusdam numquam earum vero deserunt in, cum tenetur accusamus ipsum minus veniam libero quasi fuga dolorem laudantium error quo et accusantium neque vitae aliquam tempore.</p>
                <p>Optio asperiores quisquam odit eaque incidunt laboriosam repudiandae ex eum iure quia, id vero atque perspiciatis, officiis quaerat aut ut dolorem libero eos perferendis ducimus! Veritatis nam libero tempora maxime?</p>
                <p>Sapiente reiciendis quis eveniet iure dicta perferendis quos consectetur, soluta sunt, labore ipsam inventore maiores laudantium recusandae deleniti autem animi consequatur, voluptatem sint. Dignissimos minima labore earum vitae ad non!</p>
                <p>Cum ex totam dolore officiis maiores quidem necessitatibus consequatur molestias culpa, quas, aperiam tempora et! Dolorem, voluptates dignissimos? Voluptatem voluptatibus expedita, error ducimus distinctio necessitatibus laudantium officiis dolorum nam vitae?</p>
              </section>
              <footer className='mdc-dialog__actions'>
                <button type='button' className='mdc-button mdc-dialog__button' data-mdc-dialog-action='close'>Decline</button>
                <button type='button' className='mdc-button mdc-dialog__button' data-mdc-dialog-action='accept'>Accept</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogCatalog;
