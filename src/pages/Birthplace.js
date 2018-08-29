import React from 'react';
import Grid from '@material-ui/core/Grid';
import AdvanceCard from '../components/AdvanceCard';

const Birthplace = () => (
  <main>
    <Grid container spacing={8} direction="column" alignItems="stretch" justify="center">
      <AdvanceCard
        title='Altissia'
        subtitle='Birthplace of resilient people. They are granted bonuses to vitality, spirit and max HP.'
        content={[
          '504 HP',
          '55 MP',
          '22 STR',
          '24 VIT',
          '47 MAG',
          '44 SPI'
        ]}/>
      <AdvanceCard
        title='Galahd'
        subtitle='Birthplace of offensive specialists. They are blessed with a higher level of power and magic. They are both adept at melee combat and with offensive spells.'
        content={[
          '480 HP',
          '55 MP',
          '24 STR',
          '22 VIT',
          '53 MAG',
          '40 SPI'
        ]}/>
      <AdvanceCard
        title='Insomnia'
        subtitle='Birthplace of the magical specialists. They are given high magic and high max MP.'
        content={[
          '432 HP',
          '60 MP',
          '19 STR',
          '22 VIT',
          '57 MAG',
          '40 SPI'
        ]}/>
      <AdvanceCard
        title='Lestallum'
        subtitle='Birthplace of the most aggressive. They are all-out attackers blessed with high power and max HP.'
        content={[
          '528 HP',
          '49 MP',
          '26 STR',
          '22 VIT',
          '38 MAG',
          '40 SPI'
        ]}/>
      <AdvanceCard
        title='Tenebrae'
        subtitle='Birthplace of many blessed with high magic, spirit, and max MP, but deficient in other areas.'
        requirement='Rematch: The Pyreburner`s Trial'
        content={[
          '336 HP',
          '63 MP',
          '15 STR',
          '15 VIT',
          '55 MAG',
          '52 SPI'
        ]}/>
      <AdvanceCard
        title='Gralea'
        subtitle='Birthplace of many blessed with high Power, Vitality, and max HP, but deficient in other areas.'
        requirement='Final Round: The Bladekeeper`s Trial'
        content={[
          '600 HP',
          '38 MP',
          '30 STR',
          '30 VIT',
          '28 MAG',
          '30 SPI'
        ]}/>
    </Grid>
  </main>
)

export default Birthplace;
