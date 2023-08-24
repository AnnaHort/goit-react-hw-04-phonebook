import { Formik } from 'formik';
import {
  StyledForm,
  Container,
  AddContactBtn,
  InputEl,
  StyledError,
} from './QuizForm.styled';
import * as Yup from 'yup';

const { nanoid } = require('nanoid');

const Schema = Yup.object().shape({
  contacts: Yup.string()
    .min(9, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .trim()
    .lowercase()
    .required('Required'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        contacts: '',
        name: '',
      }}
      validationSchema={Schema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Container>
          <label>Name</label>
          <InputEl
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="add new name"
          />
          <StyledError name="name" component="span" />
        </Container>

        <Container>
          <label>Number</label>
          <InputEl
            name="contacts"
            type="tel"
            placeholder="Enter a phone number"
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <StyledError name="contacts" />
        </Container>

        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </StyledForm>
    </Formik>
  );
};
