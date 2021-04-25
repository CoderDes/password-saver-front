<h1>How to launch the app</h1>
<ul>
  <li>run <code>npm i</code></li>
  <li>
     create <code>.env</code> file in the root directory of the project
    <ul>
      In that file:
      <li>set <code>REACT_APP_API_HOST</code> environment variable and pass it a url of the <a href='https://github.com/EugZ/password-saver-api'>api</a></li>
      <li>set <code>REACT_APP_ENCRPT_KEY</code> environment variable and pass it a secret key for password encryption</li>
    </ul>
  <li>run <code>npm start</code></li>
</ul>
