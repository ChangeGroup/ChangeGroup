import React from "react";
import './counter.css';
import $ from 'jquery';

const Counter = () => {
    $(document).ready(function() {

        $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
}); 
 
});  
    return (
        <div>
            <section class="wow fadeIn animated" style={{visibility: "visible", Animation: 'fadeIn'}}>
            <div class="container p-4">
                <div class="row">

                    <div class="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="300ms" style={{visibility: "visible", Animation: 'fadeInUp', AnimationTimeline: "1200ms"}}>
                        <i class="fa fa-tasks medium-icon" aria-hidden="true"></i>
                        <span id="anim-number-pizza" class="counter-number"></span>
                        <span class="timer counter alt-font appear" data-to="1" data-speed="7000" style={{color:'#F7F7F7'}}>1</span>
                        <p class="counter-title text-white">Ongoing projects</p>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="600ms" style={{visibility: "visible", Animation: 'fadeInUp', AnimationTimeline: "1200ms"}}>
                        <i class="fa fa-heart medium-icon"></i>
                         <span class="timer counter alt-font appear" data-to="3" data-speed="7000" style={{color:'#F7F7F7'}}>3</span>
                        <span class="counter-title text-white">Happy Clients</span>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated" data-wow-duration="900ms" style={{visibility: "visible", Animation: 'fadeInUp', AnimationTimeline: "1200ms"}}>
                        <i class="fa fa-anchor medium-icon"></i>
                         <span class="timer counter alt-font appear" data-to="3" data-speed="7000" style={{color:'#F7F7F7'}}>3</span>
                        <span class="counter-title text-white">Projects Completed</span>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 text-center counter-section wow fadeInUp animated" data-wow-duration="300ms" style={{visibility: "visible", Animation: 'fadeInUp', AnimationTimeline: "1200ms"}}>
                        <i class="fa fa-user medium-icon"></i>
                         <span class="timer counter alt-font appear" data-to="120" data-speed="1000" style={{color:'#F7F7F7'}}>120</span>
                        <span class="counter-title text-white">Client's Reached</span>
                    </div>
 
                </div>
            </div>
        </section>

        </div>
    )
}

export default Counter