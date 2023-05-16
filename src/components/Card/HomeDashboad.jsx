import { BsFillPlayFill } from "react-icons/bs";
import { Button, Card, CardBody, CardText, } from "reactstrap";
import "./Homecard.css"

// eslint-disable-next-line react/prop-types
const HomeDashboardCard = ({ imgSrc, title }) => {
    return (
        <div className="col-md-2 p-0 border-5 w-100">
            <Card className="cardComp  d-flex flex-row justify-content-center align-items-center cardsss border-0 rounded-3 gap-3  ">
                <div className="position-relative imgCard ">
                    <img src={imgSrc} alt="..." className=" w-100 imgg shadow" />
                </div>
                <CardBody className="m-0 p-0 ">
                    <CardText className="m-0 fw-bold fs-5 cardtitle text-white">{title}</CardText>
                </CardBody>
                <Button className="playButton rounded-circle border-0 d-flex justify-content-center align-items-center p-2  mb-3 me-2 shadow">
                    <BsFillPlayFill fill="black" size={30} />
                </Button>
            </Card>
        </div>

    );
};

export default HomeDashboardCard;