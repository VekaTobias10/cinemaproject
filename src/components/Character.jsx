import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

export const Character = ({ character }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm container>
        <Card className='card_character'>
          <CardContent>
            <Grid item xs={12}>
              {character.gender === 'Female' ? <FemaleIcon /> : <MaleIcon />}
              <Typography className='c_name' component='p'>
                <span className='subtitle_character'>Name: </span>
                {character.name}
              </Typography>
            </Grid>
            {character.spouse && (
              <Typography className='c_spouse' component='p'>
                <span className='subtitle_character'>Spouse: </span>
                {character.spouse}
              </Typography>
            )}
            <Typography className='c_gender' component='p'>
              <span className='subtitle_character'>Gender: </span>
              {character.gender}
            </Typography>
            {character.hair && (
              <Typography className='c_hair' component='p'>
                <span className='subtitle_character'>Hair: </span>
                {character.hair}
              </Typography>
            )}
            <Typography className='c_race' component='p'>
              <span className='subtitle_character'>Race: </span>
              {character.race}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
