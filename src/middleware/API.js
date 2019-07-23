import Rx from 'rx';

import { camelizeKeys, decamelizeKeys } from 'humps';

import { assign } from 'lodash/object';
import { stringify } from 'qs';
import request from 'superagent';

function APICall(
  endpoint,
  method = 'GET',
  query = false,
  payload = false,
  attachment = false,
  token = false,
  root
) {
  const subject = new Rx.Subject();

  let r = request[method.toLowerCase()](`${root}${endpoint}`);

  // GET query
  if (query)
    r = r.query(stringify(decamelizeKeys(query), {arrayFormat: 'brackets'}));

  // JWT token
  if (token)
    r = r.set('Authorization', `Bearer ${token}`);

  // Attach file
  if ((method == 'POST' ||  method == 'PUT') && attachment) {
    const formData = new FormData();
    formData.append(attachment.key, attachment.file);
    r = r.send(formData);
  }

  // POST payload
  if (payload)
    r = r.send(decamelizeKeys(payload));

  r.end(function (error, data) {
    if (error)
      subject.onError({
        error,
        response: camelizeKeys((data || {}).body)
      });
    else {
      subject.onNext(camelizeKeys((data || {}).body));
      subject.onCompleted();
    }
  });

  return subject;
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, {[API_CALL]: undefined})
);

export default (store) => (next) => (action) => {
  if (!action[API_CALL]) return next(action);
  //if (initialLoad() && action[API_CALL]) return undefined;

  const {
    endpoint, method, query, payload, attachment, types, root
  } = action[API_CALL];

  const [requestType, successType, failureType] = types;
  const signature = (new Date()).getTime();

  next(nextAction(action, { signature, type: requestType }));

  const authToken = null;//store.getState().currentUser.token;

  const observable = APICall(
    endpoint,
    method,
    query,
    payload,
    attachment,
    authToken,
    root
  );

  const onError = error => (
    next(nextAction(action, { signature, error, type: failureType }))
  );

  const onSuccess = response => (
    next(nextAction(action, { signature, response, type: successType }))
  );

  observable.subscribe (onSuccess, onError);

  return observable;
};
