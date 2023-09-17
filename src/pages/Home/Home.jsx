import { Box} from '@mui/material';
import css from './Home.module.css'
import 'animate.css';
import bgImage from '../../images/rent1.jpg'


export default function Home() {
  return (
     <Box
        className={css.wrapper}
      sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
           }}>        
    </Box>
  );
}