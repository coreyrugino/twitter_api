class Tweet extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(<div>
            <div className='card small blue darken-3 col s6'>
              <div className='card-content white-text'>
                <h5>Tweet: {this.props.text}</h5>

              </div>
            </div>
          </div>);
  }
}
