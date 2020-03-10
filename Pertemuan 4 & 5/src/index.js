import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import BlogPost from "./container/BlogPost/BlogPost";
import BlogPostMhs from "./container/TugasPrak/BlogPostMhs";

ReactDOM.render(<BlogPostMhs />, document.getElementById("content"));
serviceWorker.unregister();
