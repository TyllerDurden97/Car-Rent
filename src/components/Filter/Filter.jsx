import React from "react";
import css from 'components/Filter/Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { phonebookFilter } from "redux/contacts/selectors";
import { filterContacts } from "redux/contacts/phonebookSlice";

export const Filter = () => {
   const filter = useSelector(phonebookFilter);
   const dispatch = useDispatch();
   const handleFilterChange = (e) => {
      dispatch(filterContacts(e.currentTarget.value))
      };    

   return <label className={css.filterLabel}>Find contacts by name:
         <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            className={css.filterInpt}
         />
   </label>
};


