import React from 'react'

function Header() {
    return (
        <div>
            <section class="fold fold-4 bg-dark">
                <div class="container">
                    <h2 class="text-center">One Tag, Many Possibilities.</h2>
                    <div class="d-flex align-center justify-content-even comp-1 comp-7">
                        <div class="img-wrap animate-left">
                            <img src="https://s31073.pcdn.co/wp-content/themes/media.net/images/searchads.png" class="img-responsive" alt="Search Ads" />
                        </div>
                        <div class="content-wrap info-wrapper animate-right">
                            <h3 class="title">Contextual Ads</h3>
                            <h4 class="subtitle">Revolutionize your ad strategy.</h4>
                            <p class="caption">Based on our proprietary ad format, contextual ads open up advertising search budgets worth billions of dollars. This format filters the user’s intent via relevant search keywords, resulting in finely targeted ads and much higher revenues as advertisers are willing to pay more for visitors with qualified intent.</p>
                        </div>
                    </div>
                    <div class="d-flex align-center justify-content-even comp-1 comp-7">
                        <div class="content-wrap info-wrapper animate-left">
                            <h3 class="title">Display Ads</h3>
                            <h4 class="subtitle">Get global demand for your inventory.</h4>
                            <p class="caption">We provide you easy access to high-quality display ads by connecting with all the major buyer networks and managing operational overheads so that you don’t have to. You also benefit from our strong relationships with DSPs, Agency Trading Desks, Horizontal Networks, Vertical Networks, Performance Networks, AMPs, DMPs, etc.</p>
                        </div>
                        <div class="img-wrap img-wrap-small animate-right">
                            <img src="https://s31073.pcdn.co/wp-content/themes/media.net/images/display_img.png" class="img-responsive" alt="Display Ad" />
                        </div>
                    </div>
                    <div class="d-flex align-center justify-content-even comp-1 comp-7">
                        <div class="img-wrap animate-left">
                            <img src="https://s31073.pcdn.co/wp-content/themes/media.net/images/native.png" class="img-responsive" alt="Native Ads" />
                        </div>
                        <div class="content-wrap info-wrapper animate-right">
                            <h3 class="title">Native Ads</h3>
                            <h4 class="subtitle">Prioritize your user experience.</h4>
                            <p class="caption">Tap into ever-increasing native budgets with Media.net’s native ads. They are completely customized to the look and feel of your pages for higher user engagement. You also have the option to drive your audience to contextually relevant articles on your site through the native unit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
