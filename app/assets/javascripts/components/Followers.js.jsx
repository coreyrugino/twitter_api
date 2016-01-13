class Followers extends React.Component{
  constructor(props){
    super(props);
    this.state = {followers: []};
  }

  componentDidMount(){
    $.ajax({
      url: '/followers',
      type: 'GET',
    }).success(data => {
      this.setState({followers: data});
    });
  }

  render(){
    let followers = this.state.followers.map( follower => {
      return(<Follower key={`key-${follower.id}`} {...follower} />);
    });
    return(<div>
            <h3>Followers</h3>
            <hr />
            {followers}
          </div>);
  }
}
