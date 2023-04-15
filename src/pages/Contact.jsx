import React from 'react';

function Contact() {
    return (
        <>
         <h1 class="heading">contact us</h1>
        <section class="contact">
        <div class="image">
            <img src="images/contact-img.svg" alt=""/>
        </div>
            <form action="">
                <div class="inputBox">
                    <input type="text" placeholder="name"/>
                    <input type="email" placeholder="email"/>
                </div>

                <input type="text" placeholder="subject" class="box"/>

                <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>

                <input type="submit" class="btn" value="send"/>

            </form>
        </section>
        </>
    );
}

export default Contact;