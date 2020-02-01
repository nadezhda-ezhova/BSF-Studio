/* eslint-disable camelcase */
import { API_CALL } from 'middleware/API';

import * as actionTypes from 'constants/actionTypes';

const generateAttachments = ({
  bsfCode, bsfParameters, bsfTypes, data, forwards, include, parameters, types
}) => {
  const p_bsfCode = new File([bsfCode], 'Problem-bsfCode.cpp', {
    type: 'text/plain',
  });
  const p_bsfParameters = new File([bsfParameters], 'Problem-bsfParameters.h', {
    type: 'text/plain',
  });
  const p_bsfTypes = new File([bsfTypes], 'Problem-bsfTypes.h', {
    type: 'text/plain',
  });
  const p_data = new File([data], 'Problem-Data.h', {
    type: 'text/plain',
  });
  const p_forwards = new File([forwards], 'Problem-Forwards.h', {
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

  return [
    { key: 'src', file: p_bsfCode },
    { key: 'src', file: p_bsfParameters },
    { key: 'src', file: p_bsfTypes },
    { key: 'src', file: p_data },
    { key: 'src', file: p_forwards },
    { key: 'src', file: p_include },
    { key: 'src', file: p_parameters },
    { key: 'src', file: p_types },
  ];
};

export function compile (files) {
  return {
    [API_CALL]: {
      root: 'http://localhost:80',
      endpoint: '/compile',
      method: 'POST',
      types: [
        actionTypes.COMPILE_REQUEST,
        actionTypes.COMPILE_SUCCESS,
        actionTypes.COMPILE_FAILURE
      ],
      attachments: generateAttachments(files)
    }
  };
}

export function run (files) {
  return {
    [API_CALL]: {
      root: 'http://localhost:80',
      endpoint: '/run',
      method: 'POST',
      types: [
        actionTypes.RUN_REQUEST,
        actionTypes.RUN_SUCCESS,
        actionTypes.RUN_FAILURE
      ],
      attachments: generateAttachments(files)
    }
  };
}
