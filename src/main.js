import 'css/main.styl';
import m from 'mithril';
import App from 'components/App';

function isNonemptyString(str) {
  return str && typeof str === 'string';
}

function filterInvalidGenres(data) {
  data.genres = data.genres.filter(genre => {
    return genre && isNonemptyString(genre.id) && isNonemptyString(genre.name);
  });

  return data;
}

function sortByDate(data) {
  data.genres.sort((prev, next) => {
    // NOTE: `new Date(year)` uses 1900 if year is 0, so defaultYear should be a greater positive number.
    const defaultYear = 1000;
    const prevBirth = prev.birth || {};
    const prevYear = prevBirth.year || defaultYear;
    const prevMonth = prevBirth.month || 0;
    const prevDay = prevBirth.day || 0;
    const nextBirth = next.birth || {};
    const nextYear = nextBirth.year || defaultYear;
    const nextMonth = nextBirth.month || 0;
    const nextDay = nextBirth.day || 0;

    if (prevYear > nextYear) {
      return 1;
    }

    if (prevYear === nextYear) {
      if (prevMonth > nextMonth) {
        return 1;
      }
      if (prevMonth === nextMonth) {
        if (prevDay > nextDay) {
          return 1;
        }
      }
    }

    return -1;
  });

  return data;
}

function done(data) {
  m.mount(document.body, {
    view: () => {
      return m(App, {
        data
      });
    }
  });
}

m.request({
  url: '/data.json'
}).then(filterInvalidGenres)
  .then(sortByDate)
  .then(done);
