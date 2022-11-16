import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useSelector, useDispatch } from "react-redux";
import TextRating from "../../components/Rating/Rating";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { restaurantDetailsActionCreator } from "../../redux/slices/restaurants";
import "./RestaurantDetails.scss";

const RestaurantDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    details: venueDetails,
    loading,
    error,
    // @ts-expect-error
  } = useSelector((state) => state.restaurantsData);
  const pathnameArray = location.pathname.split("/");
  const venueId = pathnameArray[pathnameArray.length - 1];

  const getVenueDeatilsHandler = useCallback(
    () =>
      dispatch(
        // @ts-expect-error
        restaurantDetailsActionCreator({
          venueId,
        }),
      ),
    [venueId, dispatch],
  );

  useEffect(() => {
    getVenueDeatilsHandler();
  }, [getVenueDeatilsHandler]);

  return (
    <div className="restaurantDetails" data-testid="restaurantDetailsContent">
      {error !== null ? (
        <h1>Oops something went wrong. Please try again.</h1>
      ) : loading === true ? (
        <div>Loading...</div>
      ) : (
        <div className="restaurantDetails__content">
          <div>
            <ArrowBackOutlinedIcon
              onClick={() => navigate("/")}
              style={{ fontSize: "40px", cursor: "pointer" }}
            />
          </div>
          <Card sx={{ maxWidth: 500, margin: "auto" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image={`${String(
                  venueDetails?.bestPhoto?.prefix,
                )}original${String(venueDetails?.bestPhoto?.suffix)}`}
                alt="Restaurant Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {venueDetails?.name}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                  {venueDetails?.rating !== null &&
                    venueDetails?.rating !== undefined && (
                      <TextRating value={venueDetails?.rating} />
                    )}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  <LocationOnOutlinedIcon fontSize="large" />{" "}
                  {`${
                    venueDetails?.location?.address !== null &&
                    venueDetails?.location?.address !== undefined &&
                    venueDetails?.location?.address !== ""
                      ? String(venueDetails?.location?.address)
                      : ""
                  }, ${
                    venueDetails?.location?.crossStreet !== null &&
                    venueDetails?.location?.crossStreet !== undefined &&
                    venueDetails?.location?.crossStreet !== ""
                      ? String(venueDetails?.location?.crossStreet)
                      : ""
                  }, ${
                    venueDetails?.location?.city !== null &&
                    venueDetails?.location?.city !== undefined &&
                    venueDetails?.location?.city !== ""
                      ? String(venueDetails?.location?.city)
                      : ""
                  }, ${
                    venueDetails?.location?.country !== null &&
                    venueDetails?.location?.country !== undefined &&
                    venueDetails?.location?.country !== ""
                      ? String(venueDetails?.location?.country)
                      : ""
                  }`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <div>
            <Typography gutterBottom variant="h4" component="div">
              Reviews
            </Typography>
          </div>

          <div className="restaurantDetails__menuList">
            {venueDetails?.tips?.groups?.[0]?.items?.map(
              (review: {
                id: any;
                photourl: string;
                createdAt: number | Date;
                map: Function;
                length: number;
                text: string;
                user: { firstName: string; lastName: string };
              }): JSX.Element => (
                <ReviewCard key={String(review?.id)} data={review} />
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
