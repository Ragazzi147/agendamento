import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li {
      margin-right: 20px;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }

  input[type='text'],
  input[type='date'],
  input[type='time'] {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
