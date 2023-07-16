import { Component } from "react";
import { getNews } from "../../servises/getNews/getNews";
import ErrorCard from "../ErrorCard/ErrorCard";

class ContentInfo extends Component {
  state = {
    news: null,
    isLoading: false,
    error: "",
    request: null,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ news: null });
      this.setState({ error: "" });
      this.setState({ isLoading: true });
      const request = getNews(this.props.searchText)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "ok") {
            this.setState({ news: data.articles });
          } else return Promise.reject(data.message);
        })
        .catch((error) => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
          this.setState({ request: null });
        });

      this.setState({ request });
    }
  }

  componentWillUnmount() {
    // Відміняємо запит, якщо він виконується
    const { request } = this.state;
    if (request) {
      request.cancel();
    }
  }

  render() {
    const { news, isLoading, error } = this.state;
    return (
      <>
        {error && <ErrorCard>{this.state.error}</ErrorCard>}
        {isLoading && (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {news &&
            news.map((el) => {
              return <li key={el.url}>{el.title}</li>;
            })}
        </ul>
      </>
    );
  }
}

export default ContentInfo;
