import React from "react";
import { render } from "react-dom";
import "./index.css";

render(
  <div className="container">
    <div className="wrapper">
      <header>
        <h2>{`<button/>`}</h2>
      </header>
      <div className="content">
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </div>
    </div>
    <div className="wrapper">
      <header>
        <h2>{`<code/>`}</h2>
      </header>
      <div className="content">
        <code className="cod">Background-color: #252525;</code>
        <code className="cod cod-highlight">{`<input type="password" placeholder="Password" />`}</code>
        <code className="cod cod-bg">{`<div className="container"></div>`}</code>
      </div>
    </div>
    <div className="wrapper">
      <header>
        <h2>{`<input />`}</h2>
      </header>
      <div className="content">
        <input className="inpt" placeholder="Default" type="text" />
        <input className="inpt inpt-focus" placeholder="Focus" type="text" />
        <input className="inpt inpt-error" placeholder="Error" type="text" />
        <input
          className="inpt inpt-success"
          placeholder="Success"
          type="text"
        />
      </div>
    </div>
    <div className="wrapper">
      <header>
        <h2>{`<label />`}</h2>
      </header>
      <div className="content labels">
        <label className="lbl lbl-header">Custom Header</label>
        <label className="lbl lbl-subheader">Subheader</label>
        <label className="lbl">Text</label>
        <label className="lbl lbl-bold">Highlight</label>
        <label className="lbl lbl-highlight-2">Highlight - 2</label>
      </div>
    </div>
    <div className="wrapper">
      <header>
        <h2>{`<p />`}</h2>
      </header>
      <div className="content">
        <p>Text</p>
        <p className="bold">Bold</p>
        <p className="italic">Italic</p>
        <p className="underline">Underline</p>
      </div>
    </div>
    <div className="wrapper">
      <header>
        <h2>{`<pre />`}</h2>
      </header>
      <div className="content">
        <pre>
          Text in a pre element is displayed in a fixed-width font, and it
          preserves both spaces and line breaks
        </pre>
      </div>
    </div>
    <div className="wrapper">
      <header>
        <h2>{`<select />`}</h2>
      </header>
      <div className="content">
        <select name="default" id="default" className="slct">
          <option value="default">Default</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="focus" id="focus" className="slct slct-focus">
          <option value="focus">Focus</option>
          <option value="Pizza">Pizza</option>
          <option value="Lasagna">Lasagna</option>
          <option value="Risotto">Risotto</option>
        </select>
        <select name="error" id="error" className="slct slct-error">
          <option value="error">Error</option>
          <option value="saab">Sofa</option>
          <option value="mercedes">Bed</option>
          <option value="audi">TV</option>
        </select>
        <select name="success" id="success" className="slct slct-success">
          <option value="success">Success</option>
          <option value="succulent">Succulent</option>
          <option value="cactus">Cactus</option>
          <option value="bonsai">Bonsai</option>
        </select>
      </div>
    </div>
    <div className="wrapper">
      <header>
        <h2>{`<table />`}</h2>
      </header>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Maggie</td>
              <td>Smith</td>
              <td>m_smith@email.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jack</td>
              <td>James</td>
              <td>j_james@email.com</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Peter</td>
              <td>Flex</td>
              <td>p_flex@email.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="wrapper">
      <header>
        <h2>{`<ul />`}</h2>
      </header>
      <div className="content">
        <ul className="list-group">
          <li>Default</li>
          <li>Item I</li>
          <li>Item II</li>
          <li>Item III</li>
          <li>Item IV</li>
        </ul>
        <ul className="list-group">
          <li className="active">Active</li>
          <li>Item I</li>
          <li>Item II</li>
          <li>Item III</li>
          <li>Item IV</li>
        </ul>
        <ul className="list-group">
          <li className="disabled">Disabled</li>
          <li>Item I</li>
          <li>Item II</li>
          <li>Item III</li>
          <li>Item IV</li>
        </ul>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
