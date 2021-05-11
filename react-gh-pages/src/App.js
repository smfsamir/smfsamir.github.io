import React from 'react';
import './App.css';

function App() {
  return (
    <>
        <div className="App">
        <header>
            <hr/>
            <h1>S M Farhan Samir</h1>
                <h3>PhD Student</h3>
                <p>sm.farhan.samir@gmail.com</p>
            <hr/>
        </header>
        </div>
        <div id="papers">
                <h3>Peer-reviewed papers</h3>
                <ul>
                    {/* TODO: replace with links to S3*/}
                    <li><b>Samir, F.</b>, Beekhuizen, B., Stevenson, S. (2021). <a href="papers/samir_et_al_2021_extremeness.pdf">A formidable ability: Detecting adjectival extremeness with distributional semantic models</a>. In <em>Findings of the Association for Computational Linguistics (long paper)</em>.</li>
                    <li>Watson, J., <b>Samir, F.</b>, Beekhuizen, B., Stevenson, S. (2021). <a href="papers/watson_et_al_2021_generalization.pdf">Coin it up: Generalization of creative constructions in the wild</a>. <em>CogSci 43 (<b>oral</b>)</em>.</li>
                    <li><b>Samir, F.</b>, Beekhuizen, B., Stevenson, S. (2020). <a href="papers/watson_et_al_2020_untangling.pdf">Untangling semantic similarity: Modelling lexical experiments with distributional semantic models</a>. In <em>CogSci 42 (poster)</em>.</li>
                </ul>
        </div>
    </>
  );
    }

export default App;
