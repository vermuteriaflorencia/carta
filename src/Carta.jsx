import React, { useState,useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import Button from '@mui/material/Button';




var data = {};

export default class Carta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
          };
    }
    render() {
     
        const { ...otherAttributes } = this.props;
      
        return (
            <React.Fragment>
                
                <button className='title'  onClick={() => this.setState({ open: this.state.open==false?true:false })}>{otherAttributes.title}</button>
                {this.state.open && 
                <div className='ediblesSection' >
                    {Array.from({ length: otherAttributes.edibles.length }, (_, i) =>

                        <div className='edibleRow' key={i} >
                            <div className='itemName'>{otherAttributes.edibles[i].itemName}</div>
                            <div className='description'>{otherAttributes.edibles[i].description}</div>
                            <div className='price'>{otherAttributes.edibles[i].price}</div>
                        </div>

                    )}
                </div>
               }
            </React.Fragment>
        );
    };
}


