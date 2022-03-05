import React from 'react';
import { ADD_BOTTLE, REMOVE_BOTTLE } from '../utils/actions';

export default function reducer(state, action) {
  switch (action.type) {
    case REMOVE_BOTTLE:
      return {
        ...state,
        bottles: [...state.bottles].filter(
          (bottle) => bottle.id !== action.payload
        ),
      };
  }
}
