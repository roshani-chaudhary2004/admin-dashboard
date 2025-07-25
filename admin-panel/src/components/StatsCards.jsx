import React from 'react';

function StatsCards() {
  return (
    <section className="stats">
      <div className="card pink">Total Students<br /><strong>500</strong></div>
      <div className="card green">Total Batches<br /><strong>10</strong></div>
      <div className="card yellow">Active Trainings<br /><strong>4</strong></div>
      <div className="card orange">Reports Generated<br /><strong>25</strong></div>
    </section>
  );
}

export default StatsCards;
