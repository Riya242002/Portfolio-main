import React, { Component } from 'react';
import classes from './Contact.module.css';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';
import {motion} from 'framer-motion';

class Contact extends Component{

    render(){
        return(
            <div className={classes.Contact}>
                <motion.div
                initial={{opacity:0, transform:'translateY(100%)'}}
                animate={{opacity:1,transform:'translateY(0%)'}}
                exit={{opacity:0}}
                transition={{duration:0.55}}
                >
                    <div className={classes.Content}>
                        <a href='mailto:riyagirdhar2002@gmail.com'><h1>Let's Connect</h1></a>
                    </div>
                    <div className={classes.Content} style={{cursor:'pointer'}}>
                        <h1 onClick={() => this.props.showPdf('')}>Resume</h1>
                    </div>
                    <Footer />
                </motion.div>
            </div>
        );
    }
}

const mapDispatchToprops = dispatch => {
    return {
        showPdf: (pdf) => dispatch({
            type:"PDF_VISIBLE",
            pdf:pdf,
        }),
    }
}

export default connect(null, mapDispatchToprops)(Contact);