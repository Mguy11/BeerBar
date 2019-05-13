import React, { Component } from 'react'
import Footer from "react-footer-comp"

export default class FooterBlock extends Component{
    render() {
        return(
            <div>
                <Footer 
                    copyrightIcon="true" 
                    copyrightText="true" 
                    text={"All rights reserved."} 
                    copyrightTextStyle={{alignSelf:"center"}} 
                    bgColor={"#168B81S"} 
                />
            </div>
        );
    }
}