import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

export interface FormFields {
  Title: string;
  Slug: string;
}

interface FormProps {
  onSave: (data: FormFields) => void;
  onClose: () => void;
  defaultData?: FormFields;
}

const FormContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  width: 100%;
  max-width: 480px;
`;

const FormFooter = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;

  button:first-child {
    margin-right: 8px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 16px;

  input {
    margin-top: 4px;
    height: 40px;
    width: 100%;
    border: 1px solid #b7b7b7;
  }
`;

const Form = (props: FormProps) => {
  const { onClose, onSave, defaultData } = props;
  const [state, setState] = useState(
    defaultData || {
      Title: '',
      Slug: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(state);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormHeader>
          <h2>Edit video</h2>
          <Button onClick={onClose}>×</Button>
        </FormHeader>
        <FormContent>
          <StyledLabel>
            Title
            <input name="Title" value={state.Title} onChange={handleChange} />
          </StyledLabel>
          <StyledLabel>
            Slug
            <input name="Slug" value={state.Slug} onChange={handleChange} />
          </StyledLabel>
        </FormContent>
        <FormFooter>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" primary>Save</Button>
        </FormFooter>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
