class Tweets extends React.Component{
  constructor(props){
    super(props);
    this.submitTweet = this.submitTweet.bind(this)
    this.getTweets = this.getTweets.bind(this)
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
      tweets.push(data);
      this.refs.tweetText;
      this.setState({tweets});
      this.refs.tweetText.value = null;
    });
  }

  render(){
    let tweets = this.state.tweets.map( tweet => {
      let key = `tweet-${tweet.id}`;
      return(<Tweet key={key} {...tweet} />);
    });
    return(<div>
            <h1 className="yellow">Twitter</h1>
            <input type='text' ref='tweetText' placeholder="whats on your mind."/>
            <button onClick={this.submitTweet}>Submit</button>
            <hr />
            <h3 className='center-align'>Tweets:</h3>
            {tweets}
          </div>);
  }
}
