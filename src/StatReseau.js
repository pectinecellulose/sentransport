import './StatReseau.css';

function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, ligne) => sum + (ligne.arrets || 0), 0);
  const lignePlusArrets = lignes.reduce((max, ligne) => {
    if (!max || ligne.arrets > max.arrets) {
      return ligne;
    }
    return max;
  }, null);

  return (
    <section className="stat-reseau">
      <div className="stat-reseau-card">
        <div className="stat-reseau-valeur">{totalLignes}</div>
        <div className="stat-reseau-label">lignes</div>
      </div>
      <div className="stat-reseau-card">
        <div className="stat-reseau-valeur">{totalArrets}</div>
        <div className="stat-reseau-label">arrêts</div>
      </div>
      <div className="stat-reseau-card">
        <div className="stat-reseau-valeur">
          {lignePlusArrets ? `Ligne ${lignePlusArrets.numero}` : 'Aucune'}
        </div>
        <div className="stat-reseau-label">plus d'arrêts</div>
      </div>
    </section>
  );
}

export default StatReseau;
