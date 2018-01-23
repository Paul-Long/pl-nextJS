import Header from 'components/Header';

const Post = (props) => (
  <div>
    <Header />
    <h1>{props.url.query.title}</h1>
    <p>this is content!</p>
  </div>
);
export default Post