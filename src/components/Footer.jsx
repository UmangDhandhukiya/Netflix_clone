import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'black', color: '#b3b3b3', padding: '40px 0' }}>
      <div className="container">

        <div className="row">

          <div className="col-12 col-md-3">
            <h5 style={{ color: '#fff' }}>Questions? Call 92650 81552</h5>
          </div>

          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: '#b3b3b3' }}>FAQ</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Help Centre</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Account</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Media Centre</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: '#b3b3b3' }}>Investor Relations</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Jobs</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Ways to Watch</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Terms of Use</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: '#b3b3b3' }}>Privacy</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Cookie Preferences</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Corporate Information</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Contact Us</a></li>
              <li><a href="#" style={{ color: '#b3b3b3' }}>Speed Test</a></li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <p style={{ color: '#b3b3b3' }}>Only on Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
