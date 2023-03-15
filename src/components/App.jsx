import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ChildrenBox, Container, Notification } from './App.styled';
import { useSelector } from 'react-redux';

export function App() {
  const { contacts } = useSelector(state => state.contacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <ChildrenBox>
            <Filter />
            <ContactList />
          </ChildrenBox>
        ) : (
          <Notification>There are no contacts in the phone book</Notification>
        )}
      </Section>
    </Container>
  );
}
