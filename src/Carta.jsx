import React from 'react';
//import $ from 'jquery'; // Import jQuery





export default class Carta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            cupView: this.props.cupView
        };
    }
    render() {

        const { ...otherAttributes } = this.props;

        return (
            <React.Fragment>
                <div className='ediblesSection'>
                    <div className="box-3">
                        <div className="btn btn-three" onClick={() => this.setState({ open: this.state.open === false ? true : false })}>
                            <span >{otherAttributes.title}</span>
                        </div>
                    </div>

                    {this.state.open &&
                        <div className='ediblesBox' >
                            {Array.from({ length: otherAttributes.edibles.length }, (_, i) =>

                                <div className='edibleRow' key={i} >
                                    <div className='itemName'>{otherAttributes.edibles[i].itemName}</div>
                                    {this.state.cupView == false && <>
                                        {otherAttributes.edibles[i].description != "" &&
                                            <div className='description'>{otherAttributes.edibles[i].description}</div>
                                        }
                                        <div className='price'>{otherAttributes.edibles[i].price}</div>
                                    </>
                                    }
                                    {this.state.cupView === true && <>
                                        <div className='price'>{otherAttributes.edibles[i].cupPrice}</div>
                                        <div className='price'>{otherAttributes.edibles[i].bottlePrice}</div>
                                    </>
                                    }
                                </div>

                            )}
                        </div>

                    }
                </div>
            </React.Fragment>
        );
    };
}


