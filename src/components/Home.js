import React, { Component } from 'react';
import axios, { post } from 'axios';
import ReactSvgPieChart from "react-svg-piechart"
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      file:null,
      data: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
      this.setState({data:[
        {title: "Unfilled", value: (response.data.total_volume - response.data.filled_volume), color: "#282c34"},
        {title: "Filled", value: response.data.filled_volume, color: "#4c8cbd"}
      ]})
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'https://secret-river-30602.herokuapp.com/get_volume_ratio';
    const formData = new FormData();
    formData.append('document',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  onClickHandler(){
    this.setState({data: []});
  }

  render() {
    var paddingData = this.state.data.length>0 ? '0px' : '0px';
    return (
      <div style={{padding:paddingData}}>
      <form style={{padding:"0px"}} onSubmit={this.onFormSubmit}>
        <h1>Upload the numpy file representing the space platform</h1>
        <br />
        <br />
        <input type="file" name="name" onChange={this.onChange} className="InputFile"/>
        <Button variant="contained" color="primary" type="submit">Load chart</Button>
      </form>
      <div style={{height: '350px', width: '350px', display: 'inline-block', padding: '100px'}}>
      <ReactSvgPieChart
        data={this.state.data}
        // If you need expand on hover (or touch) effect
        expandOnHover={true}
        expandSize={1}
        shrinkOnTouchEnd={false}
        strokeColor="#fff"
        strokeLinejoin="round"
        strokeWidth={1}
        viewBoxSize={100}
      />
      </div>
      <div>
        <Button variant="contained" onClick={this.onClickHandler}>Reset</Button>
      </div>
      </div>
   )
  }
}

export default Home;
