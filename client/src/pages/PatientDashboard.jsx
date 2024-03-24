import {useState} from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

function PatientDashboard() {
    const [open, setOpen] = useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <>
    <div className="w-2/3 ml-8 mt-14">
     <Button className="w-48 h-28" onClick={toggleOpen}>View Appointments</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-2/5">
          <CardBody>
            <Typography>
              You have upcoming appointment with Doctor X at 2/3/24 at 5:00pm
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      <Button className="w-48 h-28" onClick={toggleOpen}>Open Collapse</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      <Button className="w-48 h-28" onClick={toggleOpen}>Open Collapse</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </div>
    </>
  );
}

export default PatientDashboard;
