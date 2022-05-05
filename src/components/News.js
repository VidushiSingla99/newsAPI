import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ec0b8600f294bcc94e50038421d3c39&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedata=await data.json();
    console.log(parsedata);
    this.setState({articles:parsedata.articles, totalArtciles:parsedata.totalResults, loading:false});
  }

  handleNext= async()=>{

    if(!(this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ec0b8600f294bcc94e50038421d3c39&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
this.setState({loading:true});
    let data=await fetch(url);
    let parsedata=await data.json();
    this.setState({
      page:this.state.page+1,
      articles:parsedata.articles,
      loading:false
    })}
  }
  handlePrev= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ec0b8600f294bcc94e50038421d3c39&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedata=await data.json();
    console.log(parsedata);

    this.setState({
      page:this.state.page-1,
      articles:parsedata.articles,
      loading:false
    })
  }
  render() {
    return (
      <div>
        {this.state.loading && <Spinner/>}
       <div className="row offset-lg-1 mt-5" >

          {!this.state.loading&& this.state.articles.map((element)=>{
             return   <div className="col-md-3" key={element.url}>
            <NewsItem
              title={element.title?element.title.slice(0,45):""}
              description={element.description?element.description.slice(0,88):""}
              imageURL= {element.urlToImage?element.urlToImage:"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"}
               newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>

        })}
</div>
<div className="container d-flex justify-content-between">
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr;PREV</button>
<button type="button" className="btn btn-dark" onClick={this.handleNext}>NEXT &rarr;</button>
</div>
      </div>
    );
  }
}

export default News;
