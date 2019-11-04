/* eslint-disable camelcase */
import request from 'superagent';

import { API_CALL } from 'middleware/API';

import data from 'samples/data';
import forwards from 'samples/forwards';
import implementation from 'samples/implementation';
import include from 'samples/include';
import parameters from 'samples/parameters';
import types from 'samples/types';

export function compile () {
  const p_data = new File([data], 'Problem-Data.h', {
    type: 'text/plain',
  });

  return {
    [API_CALL]: {
      root: 'http://localhost:80',
      endpoint: '/compile/grav_mr',
      method: 'POST',
      types: [
        'COMPILE_REQUEST',
        'COMPILE_SUCCESS',
        'COMPILE_FAILURE'
      ],
      attachment: { key: 'Problem-Data.h', file: p_data },
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

  request
    .post('http://localhost:80/compile/grav_mr')
    .attach('src', p_data)
    .attach('src', p_forwards)
    .attach('src', p_include)
    .attach('src', p_parameters)
    .attach('src', p_types)
    .attach('src', p_implementation)
    .end(() => {});
}
