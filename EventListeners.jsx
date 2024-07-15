//Click Event
import React from 'react';

function MouseEvents() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default MouseEvents;

//Mouse Over Event
import React from 'react';

function MouseOverEvent() {
  const handleMouseOver = () => {
    alert('Mouse is over the text!');
  };

  return (
    <p onMouseOver={handleMouseOver}>Hover over me!</p>
  );
}

export default MouseOverEvent;


//Key Press Event
import React from 'react';

function KeyPressEvent() {
  const handleKeyPress = (event) => {
    alert(`Key pressed: ${event.key}`);
  };

  return (
    <input type="text" onKeyPress={handleKeyPress} />
  );
}

export default KeyPressEvent;


//Form Submit Event
import React, { useState } from 'react';

function FormSubmitEvent() {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with value: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmitEvent;


//Focus and Blur Events
import React from 'react';

function FocusEvents() {
  const handleFocus = () => {
    console.log('Input focused');
  };

  const handleBlur = () => {
    console.log('Input blurred');
  };

  return (
    <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
  );
}

export default FocusEvents;


//Copy Event
import React from 'react';

function ClipboardEvent() {
  const handleCopy = () => {
    alert('Content copied to clipboard!');
  };

  return (
    <div onCopy={handleCopy}>
      Copy this text
    </div>
  );
}

export default ClipboardEvent;


//Composition Start and End Events
import React from 'react';

function CompositionEvents() {
  const handleCompositionStart = () => {
    console.log('Composition started');
  };

  const handleCompositionEnd = () => {
    console.log('Composition ended');
  };

  return (
    <input type="text" onCompositionStart={handleCompositionStart} onCompositionEnd={handleCompositionEnd} />
  );
}

export default CompositionEvents;


//Touch Start Event
import React from 'react';

function TouchEvents() {
  const handleTouchStart = () => {
    alert('Touch started');
  };

  return (
    <div onTouchStart={handleTouchStart}>
      Touch me
    </div>
  );
}

export default TouchEvents;


//Scroll Event
import React from 'react';

function ScrollEvent() {
  const handleScroll = () => {
    console.log('Scrolled');
  };

  return (
    <div onScroll={handleScroll} style={{ overflow: 'auto', height: '100px' }}>
      <div style={{ height: '200px' }}>
        Scrollable content
      </div>
    </div>
  );
}

export default ScrollEvent;


//Wheel Event
import React from 'react';

function WheelEvent() {
  const handleWheel = () => {
    console.log('Mouse wheel used');
  };

  return (
    <div onWheel={handleWheel} style={{ overflow: 'auto', height: '100px' }}>
      <div style={{ height: '200px' }}>
        Scrollable content
      </div>
    </div>
  );
}

export default WheelEvent;


//Media Play Event
import React from 'react';

function MediaEvent() {
  const handlePlay = () => {
    console.log('Media playing');
  };

  return (
    <video onPlay={handlePlay} controls>
      <source src="your-video-url.mp4" type="video/mp4" />
    </video>
  );
}

export default MediaEvent;


//Image Load Event
import React from 'react';

function ImageEvent() {
  const handleLoad = () => {
    console.log('Image loaded');
  };

  return (
    <img src="your-image-url.jpg" onLoad={handleLoad} alt="example" />
  );
}

export default ImageEvent;


