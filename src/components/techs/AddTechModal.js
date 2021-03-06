import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addTech} from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({addTech}) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const onsubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please enter the first and last name'});
        }
        else{
            const newUser = {firstName, lastName};
            addTech(newUser);
            M.toast({html: `${firstName} ${lastName} was added as a Tech`});

            setfirstName('');
            setlastName('');
        }
    }

    return (
        <div id='tech-modal' className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input 
                           type="text" 
                           name="firstName" 
                           value={firstName} 
                           onChange={e => setfirstName(e.target.value)} 
                        />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input 
                           type="text" 
                           name="lastName" 
                           value={lastName} 
                           onChange={e => setlastName(e.target.value)} 
                        />
                        <label htmlFor="lastName" className="active">
                            Last Name
                        </label>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
               <a href="#!" 
                  onClick={onsubmit} 
                  className="modal-close waves-effect waves-green btn blue">
                   Enter
               </a>
            </div>
        </div>
    )
}
// const modalStyle = {
//     width: '75%',
//     height: "75%"
// };

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, {addTech})(AddTechModal);
