class Follower extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<div>
            <div className="card small blue darken-3">
              <div className="card-content white-text">
                <h5>Followed by: {this.props.screen_name}</h5>
              </div>
            </div>
          </div>);
  }
}
