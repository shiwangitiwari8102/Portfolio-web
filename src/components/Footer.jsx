import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <span style={styles.link}>
                Created By <a href="#" target='blank' style={styles.link}>Shiwangi Kumari</a>|
                <span style={styles.link} > 2024 @All rights reserved</span>
                </span>
        </footer>
    );
}

const styles = {
    footer: {
        width: '100%',
        textAlign: 'center',
        padding: '2rem 0',
        borderTop: '2px solid #e8e1e1',
       marginTop:'15px',
        color: '#fff',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
   
};

export default Footer;
