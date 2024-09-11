import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function CompetitionCard({title,body,imgSrc,buttonText, onClick}) {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={imgSrc}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {body}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={onClick}>{buttonText}</Button>
        </CardFooter>
      </Card>
    );
  }