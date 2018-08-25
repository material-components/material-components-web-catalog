import React, {Component} from 'react';
import ComponentCatalogPanel from './ComponentCatalogPanel.js';
import {MDCDialog} from '@material/dialog/dist/mdc.dialog';

import './styles/DialogCatalog.scss';

const DialogCatalog = (props) => {
  return (
    <ComponentCatalogPanel
      hero={<DialogHero />}
      title='Dialog'
      description='Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.'
      designLink='https://material.io/go/design-dialogs'
      docsLink='https://material.io/components/web/catalog/dialogs/'
      sourceLink='https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog'
      demos={<DialogDemos />}
      {...props}
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
        <aside id='my-mdc-dialog'
              className='mdc-dialog mdc-dialog--open hero-demo'
              role='alertdialog'
              aria-labelledby='my-mdc-dialog-label'
              aria-describedby='my-mdc-dialog-description'
              ref={this.initDialog}
              >
          <div className='mdc-dialog__surface'>
            <header className='mdc-dialog__header'>
              <h2 id='my-mdc-dialog-label' className='mdc-dialog__header__title'>
                Get this party started?
              </h2>
            </header>
            <section id='my-mdc-dialog-description' className='mdc-dialog__body'>
              Turn up the jams and have a good time.
            </section>
            <footer className='mdc-dialog__footer'>
              <button type='button' className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel'>Decline</button>
              <button type='button' className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept'>Accept</button>
            </footer>
          </div>
        </aside>
      </div>
    )
  }
}

class DialogDemos extends Component {
  state = {open: false, hasBeenOpened: false, accepted: false};

  handleAccept_ = () => this.handleAccept();
  handleCancel_ = () => this.handleCancel();
  handleOpenClick_ = () => this.handleOpenClick();

  handleOpenClick() {
    this.setState({open: true});
  }

  handleAccept() {
    this.setState({open: false, accepted: true, hasBeenOpened: true});
  }

  handleCancel() {
    this.setState({open: false, accepted: false, hasBeenOpened: true});
  }

  renderMessage() {
    if (this.state.hasBeenOpened) {
      return <p className='mdc-typography--body1'>
        {this.state.accepted
          ? 'Accepted reading my novel, thanks!'
          : 'Declined to read my novel... Maybe next time?'
        }
      </p>
    }
  }

  render() {
    return (
      <div>
        <h3 className='mdc-typography--subtitle1'>Scrollable Dialog</h3>
        <Dialog open={this.state.open} handleAccept={this.handleAccept_} handleCancel={this.handleCancel_}/>
        <button className='mdc-button' onClick={this.handleOpenClick_}>Open dialog</button>
        {this.renderMessage()}
      </div>
    )
  }
}

class Dialog extends Component {
  handleAccept_ = () => this.handleAccept();
  handleCancel_ = () => this.handleCancel();
  initDialog = (dialogEl) => {
    if (!dialogEl) return;
    this.dialogEl = dialogEl;
    this.dialog = new MDCDialog(dialogEl);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      !!this.props.open
        ? this.dialog.show()
        : this.dialog.close();
    }
  }

  componentDidMount() {
    this.dialogEl.addEventListener('MDCDialog:accept', this.handleAccept_);
    this.dialogEl.addEventListener('MDCDialog:cancel', this.handleCancel_);
  }

  componentWillUnmount() {
    this.dialogEl.removeEventListener('MDCDialog:accept', this.handleAccept_);
    this.dialogEl.removeEventListener('MDCDialog:cancel', this.handleCancel_);
    this.dialog.destroy();
  }

  handleAccept() {
    this.props.handleAccept();
  }

  handleCancel() {
    this.props.handleCancel();
  }

  render() {
    return (
      <div>
        <aside id='mdc-dialog-with-list'
              className='mdc-dialog'
              role='alertdialog'
              aria-labelledby='mdc-dialog-with-list-label'
              aria-describedby='mdc-dialog-with-list-description'
              ref={this.initDialog}>
          <div className='mdc-dialog__surface'>
            <header className='mdc-dialog__header'>
              <h2 id='mdc-dialog-with-list-label' className='mdc-dialog__header__title'>
                Read my novel?
              </h2>
            </header>
            <section id='mdc-dialog-with-list-description' className='mdc-dialog__body mdc-dialog__body--scrollable'>
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
            <footer className='mdc-dialog__footer'>
              <button type='button' className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel'>Decline</button>
              <button type='button' className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept'>Accept</button>
            </footer>
          </div>
          <div className='mdc-dialog__backdrop'></div>
        </aside>
      </div>
    );
  }
}

export default DialogCatalog;
