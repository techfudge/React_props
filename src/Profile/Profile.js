import React from 'react';
import PropTypes from 'prop-types';

function Profile({ fullName, bio, profession, children, handleName }) {
  const profileStyle = {
    border: '1px solid black',
    padding: '10px',
    backgroundColor: '#eee',
    margin: '10px',
    borderRadius: '5px',
    textAlign: 'center'
  };

  const imgStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px'
  };

  return (
    <div style={profileStyle}>
      <img src={children} alt="Profile" style={imgStyle} />
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      {children}
      <button onClick={() => handleName(Abubakar)}>Show Name</button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Abubakar",
  bio: "Open-minded",
  profession: "Full-stack Developer",
  handleName: () => alert("Abubakar")
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default Profile
