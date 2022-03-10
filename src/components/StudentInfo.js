import React from 'react';
import '../styles/Studentview.css';
import graduate from '../images/graduation.gif';

class StudentInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isButtonClicked: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClickRemove = this.handleClickRemove.bind(this)
  }

  handleClick() {
    this.setState({ isButtonClicked: true })
  }

  handleClickRemove() {
    this.setState({ isButtonClicked: false })
  }

  render() {
    const { isButtonClicked } = this.state
    if (isButtonClicked) {
      return (
        <li className='wrap-student'>
          <p>
            Name:
            <br /> {this.props.firstName} {this.props.lastName}
          </p>
          <p>
            Email:
            <br /> {this.props.email}
          </p>
          <p>
            Phone: <br /> {this.props.phone}
          </p>
          <p>
            Age: <br /> {this.props.age}
          </p>
          <button onClick={() => this.handleClickRemove()}>
            Show photo
          </button>
        </li>
      )
    } else {
      return (
        <div className='wrap-student'>
          <img src={this.props.photo} alt='Student' className='photo-student' />
          <br />
          <p>
            {this.props.firstName}
          </p>
          <br />
          <img src={graduate} alt="Graduated" className="graduate_logo"/>
          <br />
          <p>@ Winc Academy</p>
          <button onClick={() => this.handleClick()}>Contact student</button>
          <br />
        </div>
      )
    }
  }
};

export default StudentInfo;
