import imageAllBeers from "../assets/beers.png";
import imageRandom from "../assets/random-beer.png";
import imageNewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>

      <Link to="/beers" style={{ textDecoration: 'none' }}>
        <Card style={{ maxWidth: 345 }}>
          <CardActionArea>

            <CardMedia
              component="img"
              height="140"
              image={imageAllBeers}
              alt="All Beers"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                All Beers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Typography>
            </CardContent>

          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card>
      </Link>


      <Link to="/random-beer" style={{ textDecoration: 'none' }}>
        <Card style={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imageRandom}
              alt="New Beer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Random Beer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card>
      </Link>

      <Link to="/new-beer" style={{ textDecoration: 'none' }}>
      <Card style={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageNewBeer}
            alt="New Beer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              New Beer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      </Link>










    </div >
  );
}

export default HomePage;