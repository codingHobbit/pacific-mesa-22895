import React, { Component } from "react";
import axios, { post, get } from "axios";
import ReactSvgPieChart from "react-svg-piechart";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import "./history.css";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      data: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.getList = this.getList.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
      this.setState({
        data: [
          {
            title: "Unfilled",
            value: response.data.total_volume - response.data.filled_volume,
            color: "#282c34"
          },
          {
            title: "Filled",
            value: response.data.filled_volume,
            color: "#4c8cbd"
          }
        ]
      });
    });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  fileUpload(file) {
    const url = "https://secret-river-30602.herokuapp.com/get_volume_ratio";
    const formData = new FormData();
    formData.append("document", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  onClickHandler() {
    this.setState({ data: [] });
  }

  getList() {
    const url = "https://secret-river-30602.herokuapp.com/get_past_scenarios";
    return get(url);
  }

  render() {
    this.getList().then(response => {
      console.log(response.data);
    });
    return <div style={{ textAlign: "center" }}>Hey</div>;
  }
}

export default History;
