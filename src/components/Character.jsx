import "./Character.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import FavoriteIcon from "@mui/icons-material/Favorite";


const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: '400px',
          backgroundColor: '#FEE7DD',
          borderRadius: '100px',
          textAlign: 'center',
          padding: '20px',
          minHeight: '200px',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#6D475B',
        }
      }
    }
  },
});

export const CharacterCard = ({ character }) => {
  return (
    <ThemeProvider theme={theme}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm container>
        <Card className="root">
          <CardContent>
            <Grid container direction="row" alignItems="center">
              <Grid item alignItems="center">
                <Typography className="c_name" component="p">
                  {character.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <FavoriteIcon />
              </Grid>
              <Grid item>
                {character.spouse && (
                  <Typography className="c_spouse" component="p">
                    <span className="subtitle_character">Spouse: </span>
                    {character.spouse}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                {character.gender === "Female" ? <FemaleIcon /> : <MaleIcon />}
              </Grid>
              <Grid>
                {character.gender && (
                  <Typography className="c_gender" component="p">
                    <span className="subtitle_character">Gender: </span>
                    {character.gender}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center">
              {character.hair && (
                <Typography className="c_hair" component="p">
                  <span className="subtitle_character">Hair: </span>
                  {character.hair}
                </Typography>
              )}
            </Grid>
            <Grid container direction="row" alignItems="center">
              {character.race && (
                <Typography className="c_race" component="p">
                  <span className="subtitle_character">Race: </span>
                  {character.race}
                </Typography>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};
