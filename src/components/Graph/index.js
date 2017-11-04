import m from 'mithril';

module.exports = {
  view: (instance) => {
    return (
      <main role="main" className="graph">
        <ul>
          {
            instance.attrs.data.genres.map(genre => {
              return (
                <li {...genre}>
                  <h1>{genre.name}</h1>
                  <h2>{genre.description}</h2>
                </li>
              );
            })
          }
        </ul>
      </main>
    );
  }
};
