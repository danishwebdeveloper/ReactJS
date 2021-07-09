import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

function RenderCard({ item }) {

    return ( <
        Card >
        <
        CardImg src = { item.image }
        alt = { item.name }
        /> <
        CardBody >
        <
        CardTitle > { item.name } < /CardTitle> {
            item.designation ? < CardSubtitle > { item.designation } < /CardSubtitle> : null } <
                CardText > { item.description } < /CardText> <
                /CardBody> <
                /Card>
        );

    }

    export function Home(props) {
        return ( <
            div className = "container" >
            <
            div className = "row align-items-start" >
            <
            div className = "col-12 col-md m-1" > { /* If item designation is consist in any component then display otherwise return null */ } <
            RenderCard item = { props.dish }
            /> <
            /div> <
            div className = "col-12 col-md m-1" >
            <
            RenderCard item = { props.promotion }
            /> <
            /div> <
            div className = "col-12 col-md m-1" >
            <
            RenderCard item = { props.leader }
            /> <
            /div> <
            /div> <
            /div>
        );
    }


    // import React from 'react';
    // import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';

    // function RenderCard(item){
    //       return(
    //         <Card>
    //           <CardImg src={item.image} alt={item.name} />
    //           <CardBody>
    //             <CardTitle>{item.name}</CardTitle>
    //             {/* If item designation is consist in any component then display otherwise return null */}
    //             {item.designation ? <CardSubtitle> {item.designation} </CardSubtitle> : null}
    //             <CardText>{item.description}</CardText>
    //           </CardBody>
    //         </Card>
    //       )
    // }

    // export function Home(props) {
    //     return(
    //       <div className="container">
    //         <div className="row align-item-start">
    //             <div className="col-12 col-md m-1">
    //               {/* Get item as an props and pas it to item, then pass this item to as RenderCard function to display complete sheet */}
    //                 <RenderCard item={props.dish} /> 
    //             </div>
    //             <div className="col-12 col-md m-1">
    //                 <RenderCard item={props.promotion} />
    //             </div>
    //             <div className="col-12 col-md m-1">
    //                 <RenderCard item={props.leader} />
    //             </div>
    //         </div>
    //       </div>
    //     );
    // }