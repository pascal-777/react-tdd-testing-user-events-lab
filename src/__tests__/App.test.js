import { getRoles, logRoles, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
 
  render(<App />);
  const nameTextInput = screen.getByPlaceholderText('name');

  expect(nameTextInput).toBeInTheDocument();

  const emailTextInput = screen.getByPlaceholderText('email');

  expect(emailTextInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  
  render(<App />);
  const checkboxes = screen.getAllByRole('checkbox', {
    checked: false,
  })

  expect(checkboxes[0]).toHaveAttribute('placeholder', 'apple');
  expect(checkboxes[1]).toHaveAttribute('placeholder', 'pineapple');
  expect(checkboxes[2]).toHaveAttribute('placeholder', 'pen');
});

test("the checkboxes are initially unchecked", () => {
  
  render(<App />);
  const checkbox = screen.getAllByRole('checkbox', {
    checked: false,
  })
  expect(checkbox).toHaveLength(3);
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {

  render(<App />);

  const nameTextInput = screen.getByPlaceholderText('name');
  const emailTextInput = screen.getByPlaceholderText('email');

  expect(nameTextInput).toHaveDisplayValue('');
  expect(emailTextInput).toHaveDisplayValue('');

  userEvent.type(nameTextInput, 'my name');
  userEvent.type(emailTextInput, 'my email');

  expect(nameTextInput).toHaveDisplayValue('my name');
  expect(emailTextInput).toHaveDisplayValue('my email');

});

test("checked status of checkboxes changes when user clicks them", () => {
 
  render(<App />);
  let checkboxes = screen.getAllByRole('checkbox', {
    checked: false,
  })

  expect(checkboxes[0]).toHaveAttribute('placeholder', 'apple');
  expect(checkboxes[1]).toHaveAttribute('placeholder', 'pineapple');
  expect(checkboxes[2]).toHaveAttribute('placeholder', 'pen');

  userEvent.click(checkboxes[0]);
  userEvent.click(checkboxes[1]);
  userEvent.click(checkboxes[2]);

  expect(checkboxes[0]).toBeChecked(true);
  expect(checkboxes[1]).toBeChecked(true);
  expect(checkboxes[2]).toBeChecked(true);

});

test("a message is displayed when the user clicks the Submit button", () => {
  
  render(<App />);
  const formed = screen.getByTitle('submital-button');
  const formMessage = screen.getByTitle('form_message');
  
  expect(formMessage.textContent).toEqual('this form has been submitted: false');
  userEvent.click(formed);
  expect(formMessage.textContent).toEqual('this form has been submitted: true');


});