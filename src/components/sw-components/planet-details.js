import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import {withSwapiService} from '../hoc-helpers';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label='Name: ' field='name'/>
            <Record label='Population: ' field='population'/>
            <Record label='Diameter: ' field='diameter'/>
            <Record label='Rotation period: ' field='rotationPeriod'/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage,
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
