const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

const style = {
  textDecoration: 'none',
  lineHeight: '30px',
  fontWeight: 'bold',
};

class Index extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 style={myStyle}> See All The Pokemon! </h1>
        <ul>
          {this.props.pokemon.map((pokemon, i) => {
            return (
              <li>
                <a style={style} href={`/pokemon/${pokemon.id}`}>
                  {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
        <nav>
          <a style={style} href='/pokemon/new'>
            Create A New Pokemon
          </a>
        </nav>
      </div>
    );
  }
}
module.exports = Index;
