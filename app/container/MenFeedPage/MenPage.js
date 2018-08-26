import React from 'react';

class MenPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stylesheet1 = require('./style.css');
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
        Men Page
      </div>
    );
  }
}

export default MenPage;
