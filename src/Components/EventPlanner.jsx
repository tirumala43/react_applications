import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling


const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to <i>Radhe Events</i></h1>
            </header>
            <section className="description">
                <p>
                Plan and organize your events effortlessly with Event Planner. From
                birthdays to corporate meetings, we've got you covered.
                </p>
            </section>
            <section className="events_categories">
                
            <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby showers</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                <ul>
                    <h2> Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>

            </section>
            <section className="features">
            <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>

            </section>
            <section className="testimonials">
                <h2>Our Happy Clients say about us</h2>
                 <div className = "testimonial">
                        <p>"Hiring <strong><em>Radhe Events</em></strong> was the best decision we made for our wedding!<br></br>
                            From the moment we connected,they handled every detail with precision and creativity.<br></br>
                            The day was more magical than we could have ever imagined, and we didn’t have to worry about a single thing. Highly recommend!"</p>
                        <p className = "author"> <strong> --- Emily & James, Wedding </strong></p>
                 </div>
                 <div className = "testimonial">
                       <p>"I never thought my daughter’s birthday party could be so perfect. <strong><i>Radhe Events </i></strong>took our theme and ran with it, creating a day full of laughter and joy. The decorations, activities, and even the little surprises were spot-on. Thank you for making her day unforgettable!"
                       — Sarah L., Birthday Event

                       </p>
                       <p className="author">
                             <strong> --- Ms.Kalyani </strong>   
                       </p>
                 </div>

            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <form className="form">
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <textarea placeholder="Enter your comments here"></textarea>
                    <button type="submit" className="submit-button">Submit</button>
                </form>

            </section>
            <footer>
                <p>@radhe events</p>
                <p>@Copy rights</p>
                <address>
                    IPD Colony 2nd Lane,
                    Near Karthikeyan Hospital ,
                    Guntur.
                </address>
            </footer>
        </div>
    );
};

export default EventPlanner;