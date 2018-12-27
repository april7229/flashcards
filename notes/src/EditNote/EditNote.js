import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../../actions';
import './index.css';

const mapStateToProps = ( state ) =>
{
    return {
        notesArray: state
    }
}

class EditNote extends Component
{
    constructor()
    {
        super();
        this.state = {
            matched: [],
        }
    }
    componentWillMount()
    {
        let routeId = this.props.match.parm.id;
        let matched = this.props.notesArray.filter( ( item._id === routeId ) );
        this.setState({matched})
    }

    handleUpdate = () =>
    {
        this.props.editNote( this.state.matched[ 0 ] )
        this.props.history.push
    }
}
