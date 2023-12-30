import React from 'react';

class Test extends React.Component {
  handleCallClick = () => {
    window.location.href = 'tel:+9660555301707'; // Replace with your phone number
  };

  render() {
    return (
      <div className='bg-green-100 absolute top-0 left-0 w-10 h-10 z-[9999]'>
        <a href={window.location.href} target="_blank" onClick={this.handleCallClick}>Call Us</a>
      </div>
    );
  }
}

export default Test;