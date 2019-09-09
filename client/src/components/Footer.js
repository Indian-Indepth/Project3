import React from "react";

function Footer() {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          <small>
            &copy;
            <script type='text/javascript'>
              document.write(new Date().getFullYear());
            </script>
            UofT SCS Coding Bootcamp (BootCampCoder)
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
