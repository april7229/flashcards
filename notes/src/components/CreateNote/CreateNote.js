import React, { Component } from 'react';
import { createNote } from '../../actions';
import { connect } from 'react-redux';
import './index.css';


class CreateNote extends Component
{
    
    constructor()
    {
        super();
        this.state = {
            note: {
                title: '',
                body: '',
            }
        }
    }    
        
        handleSave = () =>
        {
            console.log( 'My note is: ', this.state.note );
            let craftedNote = { ...this.state.note };
            craftedNoted[ '_id' ] = Date.now() + craftedNote.title
            craftedNote.createdAt = Data.now();
            console.log( 'My Crafted Note is:', craftedNote );
            this.props.createNote( craftedNote );
            this.props.history.push( '/' );//to return back to tje note list view after editing note

        }     
        handleChange = ( e ) =>
        {
            let temp = { ...this.state.note };
            temp[ e.target.name ] = e.target.value;
            this.setState( { note: temp } );
        }   
    render()
    {
            return(
            <div className='noteView_container'>
                <div className='noteView_topConent'>
                    <h3 className='content_header'>
                        Create New Note:
                    </h3>
                </div>
                <div className='createNote_form'>
                    <input type='text'
                        className='createNote_title'
                        placeholder='Note Tiltle'
                        name='title'
                        value={this.state.note.title}
                        onChange={this.handleChange}
                    />
                    <textarea
                        className='createNote_body'
                        placeholder='Note Content'
                        name='body'
                        value={this.state.note.body}
                        onChange={this.handleChange}
                        rows='20'
                        />
                        
                    <div
                        className='nav_button createNote_button'
                        onClick={this.handleSave}
                    >
                        Save
                    </div>
                    
                </div>
            </div>
        );
    }        
}    

export default connect( null, { createNote } )( CreateNote )
