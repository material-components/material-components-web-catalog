import React from 'react';
import Highlight from 'react-highlight';
import ReactMarkdown from 'react-markdown';
import './styles/SassDoc.scss';

const renderEntry = (entry, index) => {
  return (
    <tr key={index} className='sassdoc__table-row'>
      <td>
        <Highlight className='sass sassdoc__mixin-name'>
          ${entry.context.name}
        </Highlight>
      </td>
      <td>
        {entry.parameter ? entry.parameter.map((parameter, parameterIndex) => (
          <div key={parameterIndex}>
            <Highlight className='sass'>
              ${parameter.name} {`<${parameter.type}>`}
            </Highlight>
          </div>
        )) : null}
      </td>
      <td>
        <ReactMarkdown source={entry.description} />
      </td>
    </tr>
  );
}

const SassDoc = ({location, sassDocData}) => {
  const {pathname} = location;
  const component = pathname.split('/')[2];
  const sassDocumentation = sassDocData[component];

  if (!sassDocumentation || !sassDocumentation.length) return null;

  // fetch('http://35.202.31.250/api/compile/scss', {
  //   method: 'post',
  //   body: JSON.stringify({
  //     data : { code: '.mdc-whatever { color:blue; }' }
  //   }),
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  // }).then((res) => {
  //   console.log(res)
  // }).catch((err) => {
  //   console.log(err);
  // })
  return (
    <div className='sassdoc mdc-top-app-bar--fixed-adjust'>
      <h3 className='mdc-typography--headline4'>
        Sass Documentation
      </h3>
      <h4 className='mdc-typography--headline5'>
        Mixins
      </h4>
      <div className='sassdoc__card mdc-card'>
        <table className='sassdoc__table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Parameters</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {sassDocumentation.map(renderEntry)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SassDoc;