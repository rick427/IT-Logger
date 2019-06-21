import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const onsubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please enter the first and last name'});
        }
        else{
            console.log(firstName, lastName);
            //clear fields
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

export default AddTechModal;
