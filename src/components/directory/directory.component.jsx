import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import DirectoryContext from "../../contexts/directory/directory.context"

import './directory.styles.scss';

const Directory = () => {
  const sections = useContext(DirectoryContext)

  return(
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)};

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySections
// });

export default Directory;
