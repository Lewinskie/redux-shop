import { Grid } from "@mui/material";
function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="header">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="main">
        <main>product list</main>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='footer'>
        <footer>footer</footer>
      </Grid>
    </Grid>
  );
}

export default App;
