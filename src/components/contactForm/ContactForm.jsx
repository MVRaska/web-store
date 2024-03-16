
const ContactForm = () => {

    return <section>
        <h3>Contact form</h3>
        <p>Please contact us and discover how we can help you!</p>
        <form>
            <div className="infoType"><label>Name:</label></div>
            <input type="text" placeholder="Name" />
            <div className="infoType"><label>Surname:</label></div>
            <input type="text" placeholder="Surname" />
            <div className="infoType"><label>Email:</label></div>
            <input type="email" name="" id="" placeholder="Email" />
            <div className="infoType"><label>Write your message:</label></div>
            <div><textarea placeholder="Message..." rows={10} /></div>
            <button type="submit">submit</button>
        </form>
    </section>
}

export default ContactForm;