import React from 'react';
import './styles/SurveyBanner.scss';

const SurveyBanner = () => {
  return (
    <div className='survey-banner'>
      <div className='mdc-typography--subtitle2'>
        <div className='survey-banner__content'>
          <i className='material-icons survey-icon'>info_outline</i>
          <p className='survey-text'>
            Are you a part of the Material Design web community? Help us improve by filling out this &nbsp;
            <a href='https://bit.ly/materialwebsurvey' target='_blank' rel='noopener noreferrer' className='survey-link'>
              10 minute survey
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SurveyBanner;
