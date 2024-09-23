import "./bottom.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";



const Bottom = () => {
    return (
        <div className="integration_div">

            <div className="media_icons_div">
                <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="logo" title="logo" />

                <div className="icons">
                    <span><FaFacebookF className="icon" /></span>
                    <span><FaInstagram className="icon" /></span>
                    <span><TiSocialLinkedin className="icon" /></span>
                    <span><BsTwitterX className="icon" /></span>
                    <span><IoLogoYoutube className="icon" /></span>
                    <span><FaTiktok className="icon" /></span>
                    <span><FaRedditAlien className="icon" /></span>
                </div>

            </div>



            <div className="features">
                <div className="feature">
                    <h2>Integrations</h2>
                    <ul>
                        <li>Shopify</li>
                        <li>Etsy</li>
                        <li>eBay</li>
                        <li>Amazon</li>
                        <li>TikTok Shop</li>
                        <li>PrestaShop</li>
                        <li>BigCommerce</li>
                        <li>Wix</li>
                        <li>WooCommerce</li>
                        <li>Squarespace</li>
                        <li>Printify API</li>
                        <li>Printify Pop-Up Store</li>
                        <li>Shutterstock</li>
                    </ul>
                </div>
                <div className="feature">
                    <h2>Discover</h2>
                    <ul>
                        <li>Blog</li>
                        <li>Guides</li>
                        <li>Products</li>
                        <li>Etsy print-on-demand</li>
                        <li>Shopify print-on-demand</li>
                        <li>WooCommerce print-on-demand</li>
                        <li>Wix print-on-demand</li>
                        <li>Squarespace print-on-demand</li>
                        <li>Make Your Own Shirt</li>
                        <li>Brands</li>
                        <li>Pricing</li>
                        <li>Shipping Rates</li>
                        <li>Mockup Generator</li>
                    </ul>
                </div>
                <div className="feature">
                    <h2>Printify</h2>
                    <ul>
                        <li>Print on Demand</li>
                        <li>Print Providers</li>
                        <li>Experts Program</li>
                        <li>Printify Express Delivery</li>
                        <li>Become a Partner</li>
                        <li>About</li>
                        <li>Printify Quality Promise</li>
                        <li>Webinars</li>
                        <li>Printing Profits Podcast</li>
                        <li>Contact Us</li>
                        <li>Merchant Protection</li>
                        <li>Security</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="feature">
                    <h2>Start Selling</h2>
                    <ul>
                        <li>Custom T-shirts</li>
                        <li>Custom Hoodies</li>
                        <li>Custom Mugs</li>
                        <li>Custom Socks</li>
                        <li>Custom Backpacks</li>
                        <li>Sell on Etsy</li>
                        <li>Sell on Social Media</li>
                        <li>Free T-shirt Designs</li>
                        <li>Custom Products</li>
                        <li>Custom All-Over-Print Hoodies</li>
                        <li>Start a Clothing Line</li>
                        <li>Start POD Business</li>
                        <li>Transferring To Printify</li>
                    </ul>
                </div>
            </div>


        </div>
    )

}

export default Bottom;