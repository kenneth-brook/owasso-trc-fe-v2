import footLogo from '../../images/365dtm-logo.png'

function Footer() {
    return (
      <div className="Footer">
        <p>© 2023 Owasso Chamber of Commerce, All Rights Reserved.</p>
        <div className='powerWrap'>
          <a href="https://365degreetotalmarketing.com/" target="_blank">
            <p>Powered By:</p>
            <img src={`${footLogo}`} alt="" />
          </a>
        </div>
      </div>
    );
  }
  
  export default Footer;