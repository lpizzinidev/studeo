export const formatDuration = (duration) => {
  if (duration === 0) return '0m';

  const hours = Math.round(duration / 60);
  const minutes = Math.round(duration % 60);

  return (hours > 0 ? hours + 'h ' : '') + (minutes > 0 ? minutes + 'm' : '');
};

/**
 * Handle an error object received from the server
 * and return an array of strings containing error messages
 */
export const handleErrorObj = (err) => {
  const { status } = err.response;
  const { data } = err.response;

  if (status === 400) {
    // Client error
    const { errors } = data;

    let errMsg = [];
    for (let error of errors) {
      errMsg.push(error.msg);
    }
    return errMsg;
  }

  // Server error
  return [data.message];
};
