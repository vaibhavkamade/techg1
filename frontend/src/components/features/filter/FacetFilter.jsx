import React, { useState, useEffect } from 'react';
import FacetGroup from './FacetGroup';
// import './FacetFilter.css';

const FacetFilter = ({ filters, onFilterChange }) => {
  const [expandedGroups, setExpandedGroups] = useState({
    productType: true,
    Theme: true,
    Interest: true,
    Age: true,
    PieceCount: true,
    Featured: true,
  });

  const handleCheckboxChange = (group, option) => {
    const updatedFilters = {
      ...filters,
      [group]: {
        ...filters[group],
        [option]: !filters[group][option],
      },
    };
    onFilterChange(updatedFilters);
  };

  const toggleGroup = (group) => {
    setExpandedGroups(prevExpandedGroups => ({
      ...prevExpandedGroups,
      [group]: !prevExpandedGroups[group],
    }));
  };

  // Inline styles
  const facetFilterStyle = {
    padding: '20px',
    paddingLeft: '40px',
    width: '220px',
    borderRight: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginLeft: '40px',
  };

  const facetFilterStyleMobile768 = {
    width: '180px',
    paddingLeft: '20px',
    marginLeft: '20px',
  };

  const facetFilterStyleMobile576 = {
    width: '100%',
    padding: '15px',
    marginLeft: '0',
    borderRight: 'none',
  };

  // Determine the current style based on screen width
  const [isMobile576, setIsMobile576] = useState(window.innerWidth <= 576);
  const [isMobile768, setIsMobile768] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile576(window.innerWidth <= 576);
    setIsMobile768(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="facet-filter"
      style={{
        ...facetFilterStyle,
        ...(isMobile576 ? facetFilterStyleMobile576 : isMobile768 ? facetFilterStyleMobile768 : {}),
      }}
    >
      {Object.keys(filters).map(group => (
        <FacetGroup
          key={group}
          title={group}
          options={filters[group]}
          isExpanded={expandedGroups[group]}
          onToggle={() => toggleGroup(group)}
          onChange={(option) => handleCheckboxChange(group, option)}
        />
      ))}
    </div>
  );
};

export default FacetFilter;
