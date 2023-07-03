import React from "react";

const Links = () => {

    const links = ['Service', 'Projects', 'About'];

    return (

        <ul className="links">
            {links.map((link,index) => (
                <li key={index}>{link}</li>
            ))}
        </ul>
    );
};

export default Links;