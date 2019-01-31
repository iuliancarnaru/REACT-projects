import React, { Component } from 'react'

class CourseSales extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         total: 0
      }

    }

    sumPrice = (price) => {
        this.setState({
            total: this.state.total + price
        })
    }
    
    render() {
        const { courses } = this.props;
        const allCourses = courses.map((item, i) => {
            return <Course 
                        key={i} 
                        name={item.name} 
                        price={item.price} 
                        sumPrice={this.sumPrice} 
                        active={item.active}
                    />
        });

        return (
        <div>
            <h2>You can buy courses:</h2>
            <div id="courses">
                {allCourses}
                <p id="total">Total: <b>{this.state.total}</b></p>
            </div>
        </div>
        )
    }
}


export class Course extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active: false
      }
    }

    handleBuy = () => {
        const active = !this.state.active
        this.setState({
            active
        })
        this.props.sumPrice(active ? this.props.price : -this.props.price)
    }
    
    render() {
        return (
        <div>
            <p className={this.state.active ? 'active' : ''} onClick={this.handleBuy}>{this.props.name} <b>{this.props.price}</b></p>
        </div>
        )
    }
}




export default CourseSales;
