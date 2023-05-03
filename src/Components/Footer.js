import React from 'react';
import { Instagram} from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import "../Styles/Footer.css"


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href ="https://www.instagram.com/k_pavan_15/">
            <Instagram /></a>
            <a href = "https://www.linkedin.com/in/pavan-kusampalli/">
            <LinkedIn /></a>
        </div>
        <p>&copy; pk </p> 
    </div>
  );
}

export default Footer;