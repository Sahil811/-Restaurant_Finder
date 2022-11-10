import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { propType } from "./types";

const RowCard = ({ data }: propType): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.venue?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {data?.venue?.location?.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Distance: {(data?.venue?.location?.distance / 1000).toFixed(2)}km
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RowCard;
