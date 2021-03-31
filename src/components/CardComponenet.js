import React, { useState } from 'react';
import Modal from 'react-modal';
import './CardComponenet.css';
import { FaRegWindowClose } from "react-icons/fa";


const CardComponenet = ({id, name, email, city, company, website, phone}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <>
            <div onClick={()=> setModalIsOpen(true)} className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card pointer">
                <img alt="profile_photo" src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={()=> setModalIsOpen(false)} 
                ariaHideApp={false} 
                style={
                    {
                        content : {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            border: 'solid 2px #9b6109',
                            borderRadius: '.5rem',
                            background: '#d87e43'
                        },
                        overlay : {
                            background: 'rgba(0,0,0,0.65)',
                            opacity: '0.97',
                            cursor: 'pointer'
                        }
                    }
                }
            >
                <div className='fr'>
                <FaRegWindowClose onClick={()=> setModalIsOpen(false)}></FaRegWindowClose>
                </div>
                <div className='tc'>
                    <img alt="profile_photo" src={`https://robohash.org/${id}?200x200`}/>
                    <h2>Name: {name}</h2>
                    <h2>E-mail: {email}</h2>
                    <h2>City: {city}</h2>
                    <h2>Company: {company}</h2>
                    <h2>Website: {website}</h2>
                    <h2>Phone: {phone}</h2>
                </div>
            </Modal>
        </>
    );
}

export default CardComponenet;