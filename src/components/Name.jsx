import React, {useState, useEffect} from 'react';

const Name = () => {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    
    useEffect(() => {
        localStorage.setItem('username', username);
    }, [username]);
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
  return (
    <section className="name-container">
                <h2 className="title">What's up,
                    <input
                        type="text"
                        placeholder="Name here"
                        id="user-name"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </h2>
    </section>
  )
}

export default Name
