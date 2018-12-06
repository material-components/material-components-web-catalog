import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCDialog} from '@material/dialog/index';
import {MDCList} from '@material/list/index';

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

export class DialogHero extends Component {
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
                  <li className='mdc-list-item' data-mdc-dialog-action='user2@example.com'>
                    <i className='material-icons mdc-list-item__graphic'>person</i>
                    <span className='test-list-item__label'>user2@example.com</span>
                  </li>
                  <li className='mdc-list-item' data-mdc-dialog-action='add'>
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
                  <li className='mdc-list-item'>
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
                  <li className='mdc-list-item'>
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
                <button type='button' className='mdc-button mdc-dialog__button mdc-dialog__button--default' data-mdc-dialog-action='accept'>OK</button>
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
              <h2 id='mdc-dialog-with-list-label' className='mdc-dialog__title'>The Wonderful Wizard of Oz</h2>
              <section id='mdc-dialog-with-list-description' className='mdc-dialog__content'>
                <p><a href='https://www.gutenberg.org/ebooks/55' target='_blank' rel='noopener noreferrer'>Read the full book</a></p>
                <p>Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.</p>
                <p>When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.</p>
                <p>When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.</p>
                <p>Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.</p>
                <p>It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and Dorothy played with him, and loved him dearly.</p>
                <p>Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at the sky, which was even grayer than usual. Dorothy stood in the door with Toto in her arms, and looked at the sky too. Aunt Em was washing the dishes.</p>
                <p>From the far north they heard a low wail of the wind, and Uncle Henry and Dorothy could see where the long grass bowed in waves before the coming storm. There now came a sharp whistling in the air from the south, and as they turned their eyes that way they saw ripples in the grass coming from that direction also.</p>
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
