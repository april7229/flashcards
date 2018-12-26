import React, { Component } from 'react';
import './index.css';
import { deleteNote } from '../../actions';
import { connect } from 'react-redux';

class DeleteNote extends Component
{
    handleDelete = () =>
    {
        this.props.deleteNote( this.props.toDelete );
        this.props.history.push( '/' );
    }

    render()
    {
        console.log( 'Delete Note Props:', toDelete );
        let toggle = this.props.toggle;
        return (
            <div className={toggle ? 'delete_wrapper' : 'hidden'}></div>
        )

    }
