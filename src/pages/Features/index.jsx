import React from 'react';
import './Features.css'

let Features = () => {
    return (
        <div id="features">
            <h3>FEATURES</h3>
            <div className="wrapper">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src="/images/featuresIcons/1.png" />
                                <p>India's Fastest Growing<br/>Food Start-up</p>
                            </td>
                            <td>
                                <img src="/images/featuresIcons/2.png" />
                                <p>Food For Every Kind<br/>Of Hunger</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/images/featuresIcons/3.png" />
                                <p>Late Night Delivery <br/>Till 1:00 AM</p>
                            </td>
                            <td>
                                <img src="/images/featuresIcons/4.png" />
                                <p>Free 38 min Delivery across <br/>Mumbai, Pune, Bangalore & Gurgaon</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/images/featuresIcons/5.png" />
                                <p>Order on App/Web or <br />Call - (STD)-XXXXXX</p>
                            </td>
                            <td>
                                <img src="/images/featuresIcons/6.png" />
                                <p>Party/Bulk Order Experts, Call <br/>(STD)-33552698 To Customise</p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Features;