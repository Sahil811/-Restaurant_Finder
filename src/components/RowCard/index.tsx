import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { propType } from "./types";

const RowCard = ({ data }: propType): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Card
      key={data.id}
      sx={{ maxWidth: 345 }}
      onClick={() => navigate(`/restaurant/${String(data.id)}`)}
      data-testId="rowCardContent"
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {data?.location?.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Distance: {(data?.location?.distance / 1000).toFixed(2)}km
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RowCard;
