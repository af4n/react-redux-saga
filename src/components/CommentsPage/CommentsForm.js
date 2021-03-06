import React from "react"
import {connect} from "react-redux";
import {createComment, showAlert} from "../../redux/actions";
import {Alert} from "../Alert";

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    }
  }

  submitHandler = event => {
    event.preventDefault()

    const {body} = this.state

    if (!body.trim()) {
      return this.props.showAlert("Комментарий не может быть пустым")
    }

    const newComment = {
      body, id: Date.now().toString()
    }

    this.props.createComment(newComment)
    this.setState({body: ""})
  }

  changeInputHandler = event => {
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
      }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert}/>}
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Комментарий</span>
          </div>
          <input type="text"
                 className="form-control"
                 id="title"
                 value={this.state.body}
                 name="body"
                 onChange={this.changeInputHandler}/>
          <div className="input-group-append">
            <button className="btn btn-dark">Создать</button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

const mapDispatchToProps = {
  createComment, showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm)