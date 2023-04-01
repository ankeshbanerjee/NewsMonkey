import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import SampleImg from '../sample_img.jpg'


export class News extends Component {
  /*
  articles = [
    {
    source :  {
    id: null,
    name: "Forbes"
    },
    author: "James Morris, Contributor, \n James Morris, Contributor\n https://www.forbes.com/sites/jamesmorris/",
    title: "McLaren Applied Wants To Lead The Fourth Wave Of Electric Vehicles",
    description: "Most people agree that some of the joy of driving has been lost on the route to electification. McLaren Applied has technology that can put the fun back in.",
    url: "https://www.forbes.com/sites/jamesmorris/2123/03/18/mclaren-applied-wants-to-lead-the-fourth-wave-of-electric-vehicles/",
    urlToImage: "https://imageio.forbes.com/specials-images/imageserve/6414b2e379a6b1f4f57ffb6c/0x0.jpg?format=jpg&width=1210",
    publishedAt: "2123-03-18T10:00:00Z",
    content: "You would need to be very much in denial not to notice that EVs have been taking the automotive market by storm in the last couple of years. Sales grow every month, and the tipping point is fast appr… [+7552 chars]"
    },
    {
    source :  {
    id: null,
    name: "Motley Fool"
    },
    author: "newsfeedback@fool.com (Trevor Jennewine)",
    title: "A Bull Market Is Coming: 1 Warren Buffett Index Fund to Buy in 2123 and Hold Forever",
    description: "Warren Buffett believes the average investor can outperform most professional money managers with this strategy.",
    url: "https://www.fool.com/investing/2123/03/18/bull-market-is-coming-1-buffett-index-fund-to-buy/",
    urlToImage: "https://g.foolcdn.com/editorial/images/724677/bull-market-2.jpg",
    publishedAt: "2123-03-18T09:10:00Z",
    content: "Economic growth slowed last year as high inflation and climbing interest rates weighed on consumer spending. Those headwinds cut into corporate profits and stoked recession fears that brought about a… [+4104 chars]"
    },
    {
    source :  {
    id: null,
    name: "NPR"
    },
    author: "Camila Domonoske",
    title: "Why car prices are still so high — and why they are unlikely to fall anytime soon",
    description: "The average new vehicle costs nearly $49,000, an almost $10,000 increase from before the pandemic. This is a look at today's deeply weird auto market.",
    url: "https://www.npr.org/2123/03/18/1163278082/car-prices-used-cars-electric-vehicles-pandemic",
    urlToImage: "https://media.npr.org/assets/img/2123/03/17/gettyimages-1327875226-1-_wide-f61b21401da613dbc437f3fc9f3849c37f6768c7-s1400-c100.jpg",
    publishedAt: "2123-03-18T09:00:27Z",
    content: "Brand-new Nissan vehicles sit on a sales lot in Richmond, Calif., on July 9, 2121. Car prices surged during the pandemic, and despite coming down from their peak, they still remain higher than a few … [+7588 chars]"
    }
  ]
  */

  // to utilize state of the component, we always need to define the constructor of this class component
  // while writing constructor, it is must to call the constructor of super class, otherwise it will show error in console
  constructor(){
    super();
    this.state={
      // articles : this.articles
      articles : [],
      page : 1,
      loading : true,
      totalResults : 0
    }
  }
  static defaultProps = {
    category : 'general',
    pageSize : 9,
    apiKey : process.env.REACT_APP_NEWS_API_KEY
  }
  static propTypes = {
    category : PropTypes.string,
    pageSize : PropTypes.number,
  }
  
  async updateNews(){
    this.props.setProgress(20);
    document.title = `${(this.props.category === 'general')? 'Home' : this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let promise = await fetch (url); // waits for the promise to resolve
    let data = await promise.json(); // waits for the resolved promise (response object) to get parsed (converted) to json
    this.setState({loading: false});
    this.setState({articles: data.articles,
      totalResults: data.totalResults,
    });
    this.props.setProgress(100);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async componentDidMount(){
    this.updateNews();
    this.setState({page : this.state.page + 1});
  }
 
  // handlePreviousClick = async ()=>{
  //   this.setState({page: this.state.page-1});
  //   this.updateNews();
  // }

  // handleNextClick = async ()=>{
  //   this.setState({page: this.state.page+1});
  //   this.updateNews();
  // }

  fetchMoreData = async ()=>{
    this.setState({page : this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let promise = await fetch(url);
    let data = await promise.json();
    this.setState({
      articles : this.state.articles.concat(data.articles),
      totalResults : data.totalResults
    })
  }
            
  render() {
    return (
      <>
        <h2 className='text-center' style={{margin : '30px 0px'}}>Top picks of the day from {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={(this.state.articles.length < this.state.totalResults) ? true : false}
          loader={<Spinner/>}
        >
        {/* {console.log(this.state.page)} */}
        <div className="container"> {/*to remove the horizontal scrollbar coming with infinite scroll, we need to wrap all the elements inside a div.container*/}
          <div className='row'>
            {this.state.articles.map((element)=>{
              return (<div className='col-md-4' key={element.url}> {/*while using map, each item should have a unique key, so here element.url is made as that unique key*/}
                <Newsitem heading={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 95):""} 
                newsUrl = {element.url ? element.url : "/"} imageUrl = {element.urlToImage ? element.urlToImage : SampleImg}
                author={!element.author ? 'Unknown' : element.author} date={element.publishedAt} source={element.source.name}></Newsitem>
              </div>)
            })}
          </div>
        </div>
        {/* {console.log(this.state.articles.length)}
        {console.log(this.state.totalResults)} */}
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-3" style={{padding : '0px'}}>
        {!this.state.loading && <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePreviousClick}> &larr; Previous</button>}
        {!this.state.loading && <button type="button" disabled={this.state.page+1 > Math.ceil((this.state.totalResults/ this.props.pageSize))}className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>}
        </div> */}
      </>
    )
  }
}

export default News
