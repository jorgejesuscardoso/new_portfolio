import styled from 'styled-components';

export const MainContainerContact = styled.main`
  text-align: center;
  margin-top: 10vh;
  font-size: 0.85rem;

  h1 {
    margin-top: 20vh;
    margin-bottom: 1vh;
  }

  a {
    color: var(--link-color);
    text-decoration: none;

    &:hover {
      color: var(--link-color-hover);
    }
  }

  &.claro {
    a {
      color: var(--link-color-claro);
      &:hover {
        color: var(--link-color-hover-claro);
      }
    }

    form {
      background-color: var(--bg-form-color-claro);    
    }
  }
`; 

export const ContactContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 1vh;
  }
`;

export const SocialContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5vh;
    margin: 1vh;
    img {
      width: 30px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
  width: 100%;
  gap: 1vh;
`;

export const FormContent = styled.form`
  background-color: var(--bg-form-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3vh;
  border-radius: 10px;
  width: 20%;
  gap: 1vh;

  label {
    text-align: left;
    font-size: 1rem;
  }

  input {
    width: 100%;
    padding: 1vh;
    border-radius: 5px;
    outline: none;
  }

  textarea {
    width: 100%;
    height: 15vh;
    padding: 1vh;
    border-radius: 5px;
    resize: none;
    outline: none;
  }
`;