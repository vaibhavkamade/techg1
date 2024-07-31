import React from 'react';
// import './FacetOption.css';

const FacetOption = ({ option, isChecked, onChange }) => {
  // Inline styles
  const facetOptionStyle = {
    listStyle: 'none',
    margin: '10px 0',
  };

  const checkboxLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  };

  const hiddenCheckboxStyle = {
    display: 'none',
  };

  const styledCheckboxStyle = {
    width: '20px',
    height: '20px',
    border: '1px solid #ccc',
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const checkmarkStyle = {
    width: '16px',
    height: '16px',
  };

  const checkboxTextStyle = {
    fontSize: '1em',
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 30px)',
    wordBreak: 'break-word',
  };

  // Responsive handling
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
    <li
      className="facet-option"
      style={facetOptionStyle}
    >
      <label
        className="checkbox-label"
        style={checkboxLabelStyle}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onChange(option)}
          className="hidden-checkbox"
          style={hiddenCheckboxStyle}
        />
        <div
          className="styled-checkbox"
          style={{
            ...styledCheckboxStyle,
            width: isMobile576 ? '16px' : isMobile768 ? '18px' : '20px',
            height: isMobile576 ? '16px' : isMobile768 ? '18px' : '20px',
          }}
        >
          {isChecked && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -25 100 100" className="checkmark" style={{
              ...checkmarkStyle,
              width: isMobile576 ? '12px' : isMobile768 ? '14px' : '16px',
              height: isMobile576 ? '12px' : isMobile768 ? '14px' : '16px',
            }}>
              <polygon fill="currentColor" points="0.4,23.9 36,59.6 99.6,-4 88.5,-4 77.4,-4 36,37.3 22.6,24 11.5,24 "></polygon>
            </svg>
          )}
        </div>
        <span
          className="checkbox-text"
          style={{
            ...checkboxTextStyle,
            fontSize: isMobile576 ? '0.8em' : isMobile768 ? '0.9em' : '1em',
            width: isMobile576 ? 'calc(100% - 25px)' : 'calc(100% - 30px)',
          }}
        >
          {option}
        </span>
      </label>
    </li>
  );
};

export default FacetOption;
