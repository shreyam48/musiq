import React from 'react'

export default function Support() {
    return (
        <div class="support" id="support">
            <h2 className="py-5">Got questions?</h2>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 class="panel-title">
                        <button className="collapsed question text-uppercase style-head" data-toggle="collapse" data-parent="#accordion" href="#collapseFirstQuestion" aria-expanded="false" aria-controls="collapseFirstQuestion">
                            How do I create a playlist?
                <span></span>
                        </button>
                    </h3>
                </div>
                <div id="collapseFirstQuestion" className="collapse collapse-panel in">
                    <div className="panel-body">
                        <p>Playlists are a great way to save collections of music, either for your own listening or to share.</p>
                        <p>To create one:</p>
                        <ol>
                            <li>Tap Your Library.</li>
                            <li>Tap CREATE</li>
                            <li>Give your playlist a name.</li>
                            <li>Start adding songs (and we’ll help you along).</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <button className="collapsed question text-uppercase style-head" data-toggle="collapse" data-parent="#accordion" href="#collapseSecondQuestion" aria-expanded="false" aria-controls="collapseSecondQuestion">
                            How do I activate Data Saver mode?
                <span></span>
                        </button>
                    </h3>
                </div>
                <div id="collapseSecondQuestion" className="collapse collapse-panel in">
                    <div class="panel-body">
                        <ol>
                            <li>Tap Home</li>
                            <li>Tap Settings</li>
                            <li>Tap Data Saver</li>
                            <li>Switch on Data Saver.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <button className="collapsed question text-uppercase style-head" data-toggle="collapse" data-parent="#accordion" href="#collapseThirdQuestion" aria-expanded="false" aria-controls="collapseThirdQuestion">
                            Is it only possible to shuffle play music?
                <span></span>
                        </button>
                    </h3>
                </div>
                <div id="collapseThirdQuestion" className="collapse collapse-panel in">
                    <div class="panel-body">
                        <p>Any playlist with the shuffle icon will play on shuffle. <br />

                    Some playlists won't have the shuffle icon, so you can tap any song to play it</p>
                    </div>
                </div>
            </div>

        </div>

    )
}



