import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { reviewCardpropType } from "./type";

const ReviewCard = ({ data }: reviewCardpropType): JSX.Element => {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {`${String(data?.user?.firstName)} ${String(data?.user?.lastName)}`}
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div">
            {data?.text}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {moment(Number(data?.createdAt) * 1000).format("MMM Do YYYY")}
          </Typography>
        </CardContent>
      </Box>
      {data?.photourl !== null &&
        data?.photourl !== undefined &&
        data?.photourl !== "" && (
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={`${data?.photourl}`}
            alt="Menu Image"
          />
        )}
    </Card>
  );
};

export default ReviewCard;
