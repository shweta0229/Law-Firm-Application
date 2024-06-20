import React from 'react'

const Abot = () => {
    return (
        <>
            <div className='about-section'>
                <div className='cotainer'>
                    <div className='row'>
                        <div className='col col-lg-4 col-12'>
                            <div class="left-col">
                                <div class="section-title">
                                    <div class="icon">
                                        
                                    </div>
                                    <span>About juristic</span>
                                    <h2>We are the most populer law firm with various law services!</h2>
                                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                                    <a class="more-about" href="/about">Read More About us
                                        <i class="fi flaticon-next-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col col-lg-4 col-12'>
                        <div class="mid-col" >
                            <img src="../assets/img/ceo.jpg" alt=""/>
                        </div>
                        </div>
                        <div className='col col-lg-4 col-12'>
                                <div class="right-col">
                                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
                                    sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, 
                                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero
                                </p><div class="quoter"><h4>Michel Jhon</h4>
                                <span>- CEO of the company</span></div>
                                <div class="signature">   
                                <img src='../assets/img/ceosign.png'></img>                             
                                </div></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Abot 