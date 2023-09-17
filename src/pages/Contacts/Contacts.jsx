import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContactsThunk } from 'redux/contacts/thunks';
import { selectLoading } from 'redux/contacts/selectors';
import {Loader} from '../../components/Loader/Loader'
import css from './Contacts.module.css'

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
        {isLoading && <Loader/>}
        <div
           className={css.pageWrap}
        >
           <h1
              className={css.pageTitle}
           >Phonebook</h1>
         <ContactForm
         />
           <h2
              className={css.title}
           >Contacts</h2>
           <div
              className={css.contactsArea}
           >
            <Filter
            />
            <ContactList
            />
            </div>
      </div>
    </>
  );
}