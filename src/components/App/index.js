import m from 'mithril';
import Header from 'components/Header';
import Graph from 'components/Graph';

module.exports = {
  view: (instance) => {
    return (
      <div className="app">
        <Header />
        <Graph data={instance.attrs.data} />
      </div>
    );
  }
};

