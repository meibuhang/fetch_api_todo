import React , { Component } from "react";
import { Typography, TextField,CardMedia,CardContent, Button, Card, Grid} from "@material-ui/core";
import Footer from "../component/Footer";
import "./Home.css";
import "../App.css"
import Nav from "../component/Nav";
import "typeface-nunito-sans";
import { Link } from "react-router-dom";
import { getTodo } from "../_actions/todo";

import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import "../App.css";
class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isloading: false
    };
  }
  componentDidMount() {
    this.props.getTodo();
  }
  renderTodo = data => {
    return(
      <Grid
      item
      xs={12}
      sm={3}
      lg={4}
      md={4}
      style={{ width: "30%"}}
    ><Link to='/' style={{textDecoration:'none', color:'#616161'}}>
      <Card style={{background:'#e0e0e0'}}>
        <Grid container spacing={3}>
        <Grid
      item
      xs={12}
      sm={12}
      lg={6}
      md={6}
      style={{ width: "30%"}}
    >
      <CardMedia component="img" height="150" image={data.avatar}/>

    </Grid>
    <Grid
      item
      xs={12}
      sm={12}
      lg={6}
      md={6}
      style={{ width: "30%"}}
    >
      <CardContent>
      <Typography variant="body1">Name : {data.name}</Typography>
     <Typography variant="h6" >Do : {data.Do}</Typography>
   
      </CardContent>
     
    </Grid>
        </Grid>
      </Card>
    </Link>
    </Grid>
    )
  }

  onchange = e => {
    this.setState({search: e.target.value });
  };


  render() {
    const { data, isLoading, error } = this.props.todo;
    const { search } = this.state;
    const filteredTodo = data.filter(item => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    
    if (error) {
      return (
        <div style={{ margin: "0 auto" }}>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Nunito Sans",
              fontWeight: "700",
              color: "#616161",
              textAlign: "center"
            }}
          >
            Oopps... Something Error :(
          </Typography>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="loading">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      );
    }

    
    return (
    <div style={{ margin: "0 auto" }}>
      <Nav />
      <div className="header">
        <div  style={{ margin: '10px 80px'}}>
        <div className="search" style={{margin:'40px 0', display:'flex'}}>
            <TextField
              style={{width:'50%', order:'1px solid #212121' }}
              onChange={this.onchange}
              placeholder="Search Name "
             
           />
            <Button>
            <SearchIcon />
              </Button>
          </div>
          <div style={{margin:"40px 0"}}>

        <Grid
              container
              spacing={3}
             
            >
      {data.length === 0 && (
                <Grid
                item
                xs={12}
                sm={12}
                lg={12}
                md={12}
              ><Card ><Typography variant="h6" style={{textAlign:'center'}}>
           ups No Data
             </Typography></Card>
              </Grid>
              )}
              
               {filteredTodo.map((data) => {
              return this.renderTodo(data);
            })}
             
        </Grid>
          </div>       
      </div>
      </div>
      <Footer />
    </div>
  );
}
}
const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTodo: () => {
      dispatch(getTodo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);