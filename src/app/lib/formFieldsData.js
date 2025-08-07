// formFields.js
export const formFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
    validation: { required: 'Name is required' }
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email address'
      }
    }
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Enter your message',
    validation: { required: 'Message is required' }
  }
];
