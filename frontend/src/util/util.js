export const formatDuration = (duration) => {
  if (duration === 0) return '0m';

  const hours = Math.round(duration / 60);
  const minutes = Math.round(duration % 60);

  return (hours > 0 ? hours + 'h ' : '') + (minutes > 0 ? minutes + 'm' : '');
};
