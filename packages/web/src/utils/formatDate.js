/* eslint-disable radix */
import { differenceInMilliseconds, parseISO } from 'date-fns';

function msToTime(duration) {
  let time = {
    milliseconds: parseInt((duration % 1000) / 100),
    seconds: Math.floor((duration / 1000) % 60),
    minutes: Math.floor((duration / (1000 * 60)) % 60),
    hours: Math.floor((duration / (1000 * 60 * 60)) % 24),
    days: Math.floor(duration / (1000 * 60 * 60) / 24)
  };
  time.hours = time.hours < 10 ? `0${time.hours}` : time.hours;
  time.minutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
  time.seconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;

  function formatDays() {
    if (time.days > 0) {
      return time.days === 1 ? `${time.days} dia` : `${time.days} dias`;
    }
    return '';
  }

  function formatHours() {
    if (time.hours > 0) {
      return time.hours === `01` ? `${time.hours} hora` : `${time.hours} horas`;
    }
    return time.days > 0 ? `${time.hours} horas` : '';
  }

  function formatMinutes() {
    if (time.minutes > 0) {
      return time.minutes === `01`
        ? `${time.minutes} minuto`
        : `${time.minutes} minutos`;
    }
    return time.hours > 0 ? `${time.minutes} minutos` : '';
  }

  function formatSeconds() {
    return `${time.seconds}.${time.milliseconds} segundos`;
  }

  return `${formatDays()} ${formatHours()} ${formatMinutes()} ${formatSeconds()}`;
}

const formatDate = (value1, value2) => {
  if (value1 && value2) {
    const dateInMilliseconds = differenceInMilliseconds(
      parseISO(value1),
      parseISO(value2),
      {
        unit: 'minute'
      }
    );
    return msToTime(dateInMilliseconds);
  }
  return null;
};

export default formatDate;
