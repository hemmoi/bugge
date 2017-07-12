import moment from 'moment';

export var addError = (error) => {
  return {
    type: 'ADD_ERROR',
    error
  };
};

  export var updateError = (id, updates) => {
  return {
    type: 'UPDATE_ERROR',
    id,
    updates
  };
};

