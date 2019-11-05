/* eslint-disable camelcase */
import { API_CALL } from 'middleware/API';

import * as actionTypes from 'constants/actionTypes';

import data from 'samples/gravitation/data';
import forwards from 'samples/gravitation/forwards';
import implementation from 'samples/gravitation/implementation';
import include from 'samples/gravitation/include';
import parameters from 'samples/gravitation/parameters';
import types from 'samples/gravitation/types';

export function compile () {
  const p_data = new File([data], 'Problem-Data.h', {
    type: 'text/plain',
  });
  const p_forwards = new File([forwards], 'Problem-Forwards.h', {
    type: 'text/plain',
  });
  const p_implementation = new File([implementation], 'Problem-Implementation.cpp', {
    type: 'text/plain',
  });
  const p_include = new File([include], 'Problem-Include.h', {
    type: 'text/plain',
  });
  const p_parameters = new File([parameters], 'Problem-Parameters.h', {
    type: 'text/plain',
  });
  const p_types = new File([types], 'Problem-Types.h', {
    type: 'text/plain',
  });

  return {
    [API_CALL]: {
      root: 'http://localhost:80',
      endpoint: '/compile/grav_mr',
      method: 'POST',
      types: [
        actionTypes.COMPILE_REQUEST,
        actionTypes.COMPILE_SUCCESS,
        actionTypes.COMPILE_FAILURE
      ],
      attachments: [
        { key: 'src', file: p_data },
        { key: 'src', file: p_forwards },
        { key: 'src', file: p_implementation },
        { key: 'src', file: p_include },
        { key: 'src', file: p_parameters },
        { key: 'src', file: p_types },
      ]
    }
  };
}

export function run () {
  const p_data = new File([data], 'Problem-Data.h', {
    type: 'text/plain',
  });
  const p_forwards = new File([forwards], 'Problem-Forwards.h', {
    type: 'text/plain',
  });
  const p_implementation = new File([implementation], 'Problem-Implementation.cpp', {
    type: 'text/plain',
  });
  const p_include = new File([include], 'Problem-Include.h', {
    type: 'text/plain',
  });
  const p_parameters = new File([parameters], 'Problem-Parameters.h', {
    type: 'text/plain',
  });
  const p_types = new File([types], 'Problem-Types.h', {
    type: 'text/plain',
  });

  return {
    [API_CALL]: {
      root: 'http://localhost:80',
      endpoint: '/run/grav_mr',
      method: 'POST',
      types: [
        actionTypes.RUN_REQUEST,
        actionTypes.RUN_SUCCESS,
        actionTypes.RUN_FAILURE
      ],
      attachments: [
        { key: 'src', file: p_data },
        { key: 'src', file: p_forwards },
        { key: 'src', file: p_implementation },
        { key: 'src', file: p_include },
        { key: 'src', file: p_parameters },
        { key: 'src', file: p_types },
      ]
    }
  };
}
