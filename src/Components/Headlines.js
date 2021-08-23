import React from 'react';

function Headlines() {
  return (
    <div className='headlines'>
      <div className='headlines--heading-container'>
        <h4 className='headlines--heading'>Headlines</h4>
      </div>
      <div className='headlines--articles-container'>
        <ul className='headlines--articles-list'>
          <li className='headlines--article'>
            <a href='https://www.nhl.com/news/nhl-community-mourns-junior-hockey-players/c-326007574'>
              {' '}
              NHL, teams mourn junior hockey players
            </a>
          </li>
          <li className='headlines---article'>
            <a href='https://www.nhl.com/news/matthews-believes-toronto-will-win-stanley-cup/c-326006492'>
              Matthews: Maple Leafs will 'get it done'
            </a>
          </li>
          <li className='headlines--article'>
            <a href='https://www.nhl.com/news/buffalo-owen-power-no-1-pick-returning-to-michigan/c-326006252'>
              No. 1 pick Power will return to Michigan
            </a>
          </li>
          <li className='headlines--article'>
            <a href='https://www.nhl.com/news/henrik-lundqvist-retires/c-326000932'>
              Lundqvist retires from NHL after 15 seasons
            </a>
          </li>
          <li className='headlines--article'>
            <a href='https://www.nhl.com/news/philadelphia-travis-sanheim-two-year-contract/c-326006968?tid=281072352'>
              Sanheim signs with Flyers, avoids hearing
            </a>
          </li>
          <li className='headlines--article'>
            <a href='https://www.nhl.com/news/nhl-commissioner-gary-bettman-says-coyotes-future-is-in-arizona/c-325998880'>
              Coyotes future in Arizona, Bettman says
            </a>
          </li>
          <li className='headlines--article'>
            <a href='https://www.nhl.com/news/nhl-best-unrestricted-free-agents-available/c-325861596?tid=281072352'>
              Top remaining unrestricted free agents
            </a>
          </li>
          <li className='headlines--article'>
            <a href='https://www.nhl.com/news/nhl-power-rankings-fantasy-hockey-team-2021-22/c-299081864?tid=277729150'>
              NHL fantasy team power rankings; podcast
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headlines;
