import TeamLogos from '../Model/TeamLogos';

function Teams() {
  return (
    <div>
      <h1>Teams</h1>
      <img src='./images/NHLLogo.png' alt='Ducks Logo' />
      {TeamLogos.map(logo => {
        return <img src={logo.teamLogo} alt='Team Logo' key={logo.id} />;
      })}
    </div>
  );
}

export default Teams;
