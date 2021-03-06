import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Bana ulasın</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form  method="post" id="contactForm" name="contactForm" >
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Adınız: </label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email: <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Konu: <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage"> Mesaj: <span className="required">*</span></label>
                     <textarea cols="40" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div style={{flexDirection:"row"}}>
                     <button className="submit">Gönder</button>
                     <span id="image-loader">
                        <img alt="" src="images/accept.png" width='50px' height='50px' />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Mesaj gönderilemiyor</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Mesajınız iletildi, Tesekkürler<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>İletisim</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span><br />
               <span><a href="mailto:hakanyilmazzz93@gmail.com">{email}</a></span>
					   </p>
				   </div>

               
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
