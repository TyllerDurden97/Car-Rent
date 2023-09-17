import React from "react";
// import PropTypes from 'prop-types';
import css from '../ButtonLoadMore/ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ onClick }) => (
   <button         
      className={css.buttonLm}      
      type="button"
      onClick={onClick}
   >
      Load more         
   </button>
)