import './Statistique.css';

function Statistique() {
  return (
    <div className="statistique">
      <div className="statistique-chiffre">10</div>
      <div className="statistique-libelle">lignes</div>
    </div>
  );
}

function StatistiqueArrets() {
  return (
    <div className="statistique">
      <div className="statistique-chiffre">150</div>
      <div className="statistique-libelle">arrêts</div>
    </div>
  );
}

function StatistiqueBus() {
  return (
    <div className="statistique">
      <div className="statistique-chiffre">25</div>
      <div className="statistique-libelle">bus</div>
    </div>
  );
}

export default Statistique;
export { StatistiqueArrets, StatistiqueBus };
