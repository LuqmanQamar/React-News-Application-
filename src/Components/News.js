import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 2,
        category: 'business'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = this.capitalizeFirstLetter(this.props.category);
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let responceData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: responceData.articles,
            totalResults: responceData.totalResults,
            loading: false

        })
        this.props.setProgress(100)
    }
    async componentDidMount() {

        // ##############  REFACTORING (Short) THE CODE ##################
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98ee6bcb9ee345c7847050abaf2ab9ee&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let responceData = await data.json();
        // this.setState({
        //     articles: responceData.articles,
        //     totalResults: responceData.totalResults,
        //     loading: false
        // })

        this.updateNews()

    }

    nextPageClick = async () => {
        // console.log("Next button clicked")
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98ee6bcb9ee345c7847050abaf2ab9ee&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true })
        //     let data = await fetch(url);
        //     let responceData = await data.json();

        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: responceData.articles,
        //         loading: false
        //     })
        // }
        this.state(this.state.page + 1)
        this.updateNews()


    }
    previousPageClick = async () => {
        // console.log("previous button clicked")

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98ee6bcb9ee345c7847050abaf2ab9ee&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let responceData = await data.json();

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: responceData.articles,
        //     loading: false
        // })

        this.state(this.state.page - 1)
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let responceData = await data.json();
        this.setState({
            articles: this.state.articles.concat(responceData.articles),
            totalResults: responceData.totalResults,


        })
    };

    render() {
        return (
            <div className='container my-4'>
                <h2 className='my-4 text-center'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}

                {/* Buttons for NEXT and PREVIOUS */}
                {/* <div className="container my-4 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-auto" onClick={this.previousPageClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark mx-auto" onClick={this.nextPageClick}>Next &raquo;</button>
                </div> */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {/* {!this.state.loading && this.state.articles.map((element) => { */}
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 25) : "Title is Not Set"} description={element.description ? element.description.slice(0, 88) : "Description is not Set"} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}


                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container my-4 d-flex justify-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-auto" onClick={this.previousPageClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark mx-auto" onClick={this.nextPageClick}>Next &raquo;</button>
                </div> */}
            </div>
        )
    }
}

export default News
