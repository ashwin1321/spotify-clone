import { BsFillPlayFill } from "react-icons/bs";
import { Button, Card, CardBody, CardText } from "reactstrap";
import "./songcard.css"

// eslint-disable-next-line react/prop-types
const SongCard = ({ imgSrc, title, subtitle }) => {
    return (
        <div className="col-md-2 p-0 w-100">
            <Card className="cardComp border-0 rounded-3 p-3">
                <div className="position-relative">
                    <img src={imgSrc} alt="..." className="w-100 rounded-3 shadow" />
                    <Button className="playButton rounded-circle border-0 d-flex justify-content-center align-items-center p-2  shadow">
                        <BsFillPlayFill fill="black" size={30} />
                    </Button>
                </div>
                <CardBody className="m-0 p-0 mt-4">
                    <CardText className="m-0 fw-bold fs-5 cardtitle text-white">{title}</CardText>
                    <CardText className="cardSubtitle m-0">{subtitle}</CardText>
                </CardBody>
            </Card>
        </div>

    );
};

export default SongCard;