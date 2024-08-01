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
    <li className="facet-option" style={facetOptionStyle}>
      <label className="checkbox-label" style={checkboxLabelStyle}>
        <input
          type="checkbox"
          className="hidden-checkbox"
          style={hiddenCheckboxStyle}
          checked={isChecked}
          onChange={() => onChange(option)}
        />
        <span className="styled-checkbox" style={styledCheckboxStyle}>
          {isChecked && (
            <svg className="checkmark" viewBox="0 0 24 24" style={checkmarkStyle}>
              <path fill="currentColor" d="M20.285 6.708l-11.57 11.57L3.716 13.28 2.3 14.695l6.415 6.415L21.7 8.122z" />
            </svg>
          )}
        </span>
        <span
          className="checkbox-text"
          style={{
            ...checkboxTextStyle,
            fontSize: isMobile576 ? '0.8em' : isMobile768 ? '0.9em' : '1em',
          }}
        >
          {option}
        </span>
      </label>
    </li>
  );
};

export default FacetOption;
