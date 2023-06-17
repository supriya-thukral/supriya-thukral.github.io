import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Please fill out the form below to get in touch with us.</p>

            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={4} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;
