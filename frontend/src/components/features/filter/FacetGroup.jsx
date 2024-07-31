import React from 'react';
import FacetOption from './FacetOption';
import './FacetGroup.css';

const FacetGroup = ({ title, options, isExpanded, onToggle, onChange }) => {
  // Inline styles for the facet group
  const facetGroupStyle = {
    width: '170px',
    margin: '0',
  };

  const facetGroupStyleMobile768 = {
    width: '150px',
  };

  const facetGroupStyleMobile576 = {
    width: '100%',
  };

  const facetGroupHeadingStyle = {
    fontSize: '1.2em',
  };

  const facetGroupHeadingStyleMobile768 = {
    fontSize: '1.1em',
  };

  const facetGroupHeadingStyleMobile576 = {
    fontSize: '1em',
  };

  const toggleButtonStyle = {
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    justifyContent: 'space-between',
  };

  const chevronIconStyle = {
    transition: 'transform 0.3s',
  };

  const chevronIconStyleExpanded = {
    transform: 'rotate(90deg)',
  };

  // Determine the current style based on screen width
  const [isMobile576, setIsMobile576] = React.useState(window.innerWidth <= 576);
  const [isMobile768, setIsMobile768] = React.useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile576(window.innerWidth <= 576);
    setIsMobile768(window.innerWidth <= 768);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="facet-group"
      style={{
        ...facetGroupStyle,
        ...(isMobile576 ? facetGroupStyleMobile576 : isMobile768 ? facetGroupStyleMobile768 : {}),
      }}
    >
      <h3
        style={{
          ...facetGroupHeadingStyle,
          ...(isMobile576 ? facetGroupHeadingStyleMobile576 : isMobile768 ? facetGroupHeadingStyleMobile768 : {}),
        }}
      >
        <button onClick={onToggle} className="toggle-button" style={toggleButtonStyle}>
          <span>{title}</span>
          <svg
            width="10"
            height="20"
            viewBox="0 0 18 28"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className={`chevron-icon ${isExpanded ? 'expanded' : ''}`}
            style={{
              ...chevronIconStyle,
              ...(isExpanded ? chevronIconStyleExpanded : {}),
            }}
          >
            <path
              d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </h3>
      {isExpanded && (
        <ul>
          {Object.keys(options).map(option => (
            <FacetOption
              key={option}
              option={option}
              isChecked={options[option]}
              onChange={onChange}
            />
          ))}
        </ul>
      )}
      <hr style={{ margin: '0px' }} />
    </div>
  );
};

export default FacetGroup;
