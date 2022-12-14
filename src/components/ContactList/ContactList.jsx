import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, isLoading } from '../../redux/contactSlice';
import { fetchContacts } from '../../redux/contactSlice';

import { Loader } from 'components/Loader/Loader';

import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //  let ignore = false;
    // console.log('useEffect');
    dispatch(fetchContacts());
  }, [dispatch]);

  const isPending = useSelector(isLoading);
  const contacts = useSelector(getContacts);

  const reduxFilter = useSelector(getFilter);
  const normalizedFilter = reduxFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {isPending && <Loader />}
      {filteredContacts.length > 0 &&
        filteredContacts.map(({ id, name, phone }) => {
          return <ContactItem key={id} id={id} name={name} number={phone} />;
        })}
    </List>
  );
};
export default ContactList;