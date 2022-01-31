import React from 'react';
import {
   Card, CardImg, CardImgOverlay, CardTitle, CardText,
} from 'reactstrap';

export default function Overlay() {
  return (<div>
    <Card inverse>
      <CardImg
        alt="Ghost Coder"
        src="https://picsum.photos/318/270"
        width="100%"
      />
      <CardImgOverlay>
        <CardTitle tag="h5">
         Title Here
        </CardTitle>
        <CardText>
         Context Here
        </CardText>
      </CardImgOverlay>
    </Card>
  </div>);
}
