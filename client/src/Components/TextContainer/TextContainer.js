import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => {
    console.log('users',users);
    return(
      <>
    {
      users
        ? (
          <div  className="textContainer">
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img alt="Online Icon" src={onlineIcon}/>
                    {name}
                  </div>
                ))}
          </div>
            </div>
        )
        : null
    }
    </>
    )};

export default TextContainer;