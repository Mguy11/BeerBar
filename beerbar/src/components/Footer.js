import React, { Component } from 'react'
import Footer from "react-footer-comp"

export default class FooterBlock extends Component{
    render() {
        return(
            <div>
               <Footer
                bgColor={"#168B81"}
                copyrightTextStyle={{alignSelf:"center"}}
                copyrightIcon="true"
                copyrightText="true"
                text={"All rights reserved."}
               />
            </div>
        );
    }
}