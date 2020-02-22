import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Nutrition = props => (
  <tr>
    <td>{props.nutrition.username}</td>
    <td>{props.nutrition.description}</td>
    <td>{props.nutrition.calories}</td>
    <td>{props.nutrition.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/" + props.nutrition._id}>edit</Link> | <a href="#" onClick={() => { props.deleteNutrition(props.nutrition._id) }}>delete</a>
    </td>
  </tr>
)

export default class NutritionsList extends Component {
  constructor(props) {
    super(props);
    this.deleteNutrition = this.deleteNutrition.bind(this)
    this.state = {nutritions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/nutrition/')
      .then(response => {
        this.setState({ nutritions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteNutrition(id) {
    axios.delete('http://localhost:5000/nutrition/' + id)
      .then(response => { console.log(response.data)});

    this.setState({
      nutritions: this.state.nutritions.filter(el => el._id !== id)
    })
  }

  nutritionList() {
    return this.state.nutritions.map(current_nutrition => {
      return <Nutrition nutrition={current_nutrition} deleteNutrition={this.deleteNutrition} key={current_nutrition._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Nutrition</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Calories</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.nutritionList() }
          </tbody>
        </table>
      </div>
    )
  }
}