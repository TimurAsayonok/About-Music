import React, { Component } from 'react'
import { Link } from 'react-router'

class NotFound extends Component {
  render() {
    return (
      <div className='container'>
        <div className='col-md-12'>
            Страница не найдена. Вернуться на <Link to='/'>главную</Link>?
          </div>
        </div>
    )
  }
}

export default NotFound;
