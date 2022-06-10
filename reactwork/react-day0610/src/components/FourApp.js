import * as React from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import AppsIcon from '@mui/icons-material/Apps';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FourApp() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [food, setFood] = React.useState('갈비립');
  const [message, setMessage] = React.useState("오늘은 즐거운 금요일입니다... 비가 올거 같네요. 다를 오늘 하루 잘 보냈나요???");

  return (
    <div>
      <Alert severity="success">FourApp<AppsIcon/></Alert>
      <Card sx={{ maxWidth: 345, marginLeft:'30px', marginTop:'30px'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={`/image/foods/${food}.jpg`}
          alt={`${food}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary"
            style={{fontSize:'20px',fontFamily:'Single Day'}}>
            {message}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"><ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph style={{fontSize:'15px'}}>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph style={{fontSize:'15px'}}>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph style={{fontSize:'15px'}}>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>            
          </CardContent>
        </Collapse>
      </Card>
      <div style={{position:'absolute', left:'400px', top:'250px'}}>
        <h3>좋아하는 음식을 선택하세요</h3>
        <select className="form-control" style={{width:'150px'}} 
          onChange={(e)=>{
            setFood(e.target.value);
          }}>
            <option>갈비립</option>
            <option>새우볶음밥</option>
            <option>초밥</option>
            <option>치즈샌드위치</option>
            <option>치킨</option>
        </select>
        <h3>메시지를 입력하세요</h3>
        <textarea style={{width:'300px', height:'140px'}}
          defaultValue={message} 
          onKeyUp={(e)=>{
            if(e.key==='Enter'){
              setMessage(e.target.value);
            }
          }}/>
      </div>
    </div>
  );
}


