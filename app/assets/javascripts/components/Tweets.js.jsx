class Tweets extends React.Component{
  constructor(props){
    super(props);
    this.submitTweet = this.submitTweet.bind(this)
    this.getTweets = this.getTweets.bind(this)
    this.search = this.search.bind(this)
    this.state = {tweets: []};
  }

  componentDidMount(){
    this.getTweets()
  }

  getTweets(){
    $.ajax({
      url: '/tweets',
      type: 'GET',
    }).success( data => {
      this.setState({tweets: data})
    })
  }

  submitTweet(){
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: { body: this.refs.tweetText.value }
    }).success( data => {
      let tweets = this.state.tweets;
      tweets.unshift(data);
      this.refs.tweetText;
      this.setState({tweets});
      this.refs.tweetText.value = null;
    });
  }
  search(){
    $.ajax({
      url: '/tweets_search',
      type: 'GET',
      data: { user: this.refs.user.value, text: this.refs.text.value }
    }).success( data => {


      this.setState({tweets: data})
    })
  }

  render(){
    let tweets = this.state.tweets.map( tweet => {
      let key = `tweet-${tweet.id}`;
      return(<Tweet key={key} {...tweet} />);
    });
    return(<div>
            <h1 className="yellow">Twitter</h1>
            <input type='text' ref='tweetText' placeholder="whats on your mind."/>
            <button onClick={this.submitTweet}>Tweet</button>
            <hr />
            <input className='col s5 ' type='text' ref='user' placeholder="User"/>
            <input className='col s5 offset-s2' type='text' ref='text' placeholder="Text"/>

            <button onClick={this.search}>Search</button>
            <button onClick={this.getTweets}>myTweets</button>
            <hr />
            <h3 className='center-align'>Tweets:</h3>
            {tweets}
          </div>);
  }
}
