import React from 'react'

export default class Availabilities extends React.Component {
  
  render() {
    return (
      <div id="TTE-UUID" />
        
      
    )
  }


componentDidMount() {
  window.TTE.init({
    targetDivId: "TTE-UUID",
    uuid: 'f9b692f6-c108-4607-ba4f-1f4d15d89546'
      });
  }
}