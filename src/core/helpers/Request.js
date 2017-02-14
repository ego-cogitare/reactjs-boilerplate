import cfg from '../../config';

export function request(url, params, type, onSuccess, onFail) {
  let result = jQuery.ajax({
      url: url.match(/^http:\/\//) ? url : cfg.backUrl + url,
      data: params,
      dataType: 'json',
      type: type,
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      }
  });

  /**
   * If onSuccess callback not set promise will be returned
   */
  if (typeof onSuccess === 'undefined') {
    return result;
  }

  /**
   * If onFail callback not set error notification on request error will be shown
   */
  if (typeof onFail === 'undefined') {
    onFail = (e) => {
      app.ui.notification.show({
        type: 'danger',
        title: 'Error',
        message: e.responseJSON.message
      });
    }
  }

  return result.done(onSuccess).fail(onFail);
};
