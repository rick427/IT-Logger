import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import {updateLog} from '../../actions/logActions';
import TechSelect from '../techs/TechSelect';

const EditLogModal = ({updateLog, current}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]);

    const onsubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter a message and tech'});
        }
        else{
            const updatedLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }

            updateLog(updatedLog);
            M.toast({html: `Log updated by ${tech}`});
            
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id='edit-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                           type="text" 
                           name="message" 
                           value={message} 
                           onChange={e => setMessage(e.target.value)} 
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select 
                           name="tech" 
                           value={tech} 
                           className="browser-default" 
                           onChange={e => setTech(e.target.value)}
                        >
                           <option value="" disabled>
                              Select technician
                           </option>
                           <TechSelect/>
                        </select>
                    </div>

                    <div className="row">
                        <div className="input-field">
                            <p>
                                <label>
                                    <input 
                                       type="checkbox" 
                                       className="filled-in" 
                                       checked={attention} 
                                       value={attention} 
                                       onChange={e => setAttention(!attention)} 
                                    />
                                    <span>Need Attention</span>
                                </label>
                            </p>
                        </div>
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
const modalStyle = {
    width: '60%',
    height: "60%"
};

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, {updateLog})(EditLogModal);
