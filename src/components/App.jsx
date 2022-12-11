import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle, ErrorMessage } from './App.styled';

import { useSelector } from 'react-redux';
import { errorMessage } from '../redux/contactSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const error = useSelector(errorMessage);

  return (
    <Container>
      <ToastContainer autoClose={1250} />
      {error !== null && <ErrorMessage>{error}</ErrorMessage>}
      <Title>Phonebook</Title>
      <Form />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
}