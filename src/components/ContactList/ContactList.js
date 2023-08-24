import { ListContact, ContactButton } from "./ContactList.styled";

export const ContactList = ({ contact, deleteContact }) => {
  return (
    <ListContact>
      {contact.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.contacts}
          <ContactButton onClick={() => deleteContact(contact.id)}>Delete</ContactButton>
        </li>
      ))}
    </ListContact>
  );
};

