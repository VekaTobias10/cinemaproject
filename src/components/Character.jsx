import "./Character.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RedditIcon from '@mui/icons-material/Reddit';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: '460px',
          backgroundColor: '#FEE7DD',
          borderRadius: '50px',
          padding: '15px',
          margin: '20px 10px',
          maxHeight: '250px',
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
      <Grid item xs={12} sm={12} container>
        <Card className="root">
          <CardContent>
            <Grid container xs={12} direction="row" alignItems="center">
              <Grid item alignItems="center">
                <Typography className="c_name" component="p">
                  {character.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={12} direction="row" alignItems="center">
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
            <Grid container xs={12} direction="row" alignItems="center">
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
            <Grid container xs={12} direction="row" alignItems="center">
            <Grid>
              <FormatColorFillIcon />
              </Grid>
              <Grid>
              {character.hair && (
                <Typography className="c_hair" component="p">
                  <span className="subtitle_character">Hair: </span>
                  {character.hair}
                </Typography>
              )}
            </Grid>
            </Grid>
            <Grid container xs={12} direction="row" alignItems="center">
            <Grid item>
              <RedditIcon />
              </Grid>
              <Grid>
              {character.race && (
                <Typography className="c_race" component="p">
                  <span className="subtitle_character">Race: </span>
                  {character.race}
                </Typography>
              )}
            </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};
